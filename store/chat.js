import {
  isArchiveChat,
  actualChats,
  archiveChats,
  dialogChats,
  // councilChats,
  chatById,
  chatByApplicationId,
  itemsToIds,
} from '@/services/chat'

export const state = () => ({
  items: [],
})

export const getters = {
  is_archive: (state) => (id) => {
    return isArchiveChat(chatById(state.items, id))
  },

  by_id: (state) => (id) => {
    return state.items.find((item) => +item.id === +id)
  },

  dialog_actual_chats({ items }) {
    return actualChats(dialogChats(items))
  },
  dialog_archive_chats({ items }) {
    return archiveChats(dialogChats(items))
  },
  dialog_actual_chats_ids({ items }) {
    return itemsToIds(actualChats(dialogChats(items)))
  },
  dialog_archive_chats_ids({ items }) {
    return itemsToIds(archiveChats(dialogChats(items)))
  },

  // council_actual_chats({ items }) {
  //   return actualChats(councilChats(items))
  // },
  // council_archive_chats({ items }) {
  //   return archiveChats(councilChats(items))
  // },
  // council_actual_chats_ids({ items }) {
  //   return itemsToIds(actualChats(councilChats(items)))
  // },
  // council_archive_chats_ids({ items }) {
  //   return itemsToIds(archiveChats(councilChats(items)))
  // },
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
}

export const actions = {
  async get({ commit }) {
    const { data } = await this.$axios('/chat/chats')

    commit('SET_ITEMS', data)
  },

  async setupDialogues({ getters, commit, dispatch }) {
    const actual_ids = getters.dialog_actual_chats_ids
    const archive_ids = getters.dialog_archive_chats_ids
    const chat_ids = [...actual_ids, ...archive_ids]

    commit('chat-draft-messages/SET', actual_ids, { root: true })

    await Promise.all([
      dispatch('chat-dialog-messages/get', chat_ids, { root: true }),
      dispatch('chat-dialog-members/get', chat_ids, { root: true }),
    ])
  },

  // async setupCouncils({ getters, commit, dispatch }) {
  //   const actual_ids = getters.council_actual_chats_ids
  //   const archive_ids = getters.council_archive_chats_ids
  //   const chat_ids = [...actual_ids, ...archive_ids]

  //   commit('chat-draft-messages/SET', actual_ids, { root: true })

  //   await Promise.all([
  //     dispatch('chat-council-messages/get', chat_ids, { root: true }),
  //     dispatch('chat-council-members/get', chat_ids, { root: true }),
  //   ])
  // },

  async sendMessage(store, { chatId, message }) {
    await this.$axios.post('/chat/send-message', { chatId, message })
  },

  async sendFile(store, { chatId, file }) {
    await this.$axios.post('/chat/upload-chat-message-file', {
      chatId,
      'ChatMessage[nameFile]': file,
    })
  },

  async readMessage({ commit }, id) {
    await this.$axios.post('/chat/mark-read', { id })
    commit('chat-unread-messages/REMOVE_MESSAGE', id, { root: true })
  },

  async toArchive(store, { applicationId }) {
    const { data } = await this.$axios('/chat/chats')
    const chat = chatByApplicationId(data, applicationId)

    if (chat) {
      await this.$any.put('chat/toArchive', { chatId: chat.id })
    }
  },

  async createDialog(store, { applicationId, userIds }) {
    const { data } = await this.$axios('/chat/chats')
    const chat = chatByApplicationId(data, applicationId)

    if (chat) {
      await this.$any.put('chat/fromArchive', { chatId: chat.id })
    } else {
      const values = { applicationId }
      const chat = await this.$any.put('chat/create', values, 'dialog')

      await this.$any.put('chat-member/put', { userIds }, chat.id)
    }
  },

  // async createCouncil(store, { applicationId, userIds, message }) {
  //   const values = { applicationId }
  //   const chat = await this.$any.put('chat/create', values, 'council')

  //   await this.$any.multiple([
  //     this.$any.put('chat-member/put', { userIds }, chat.id),
  //     this.$any.put('chat-message/put', { message }, chat.id),
  //   ])

  //   return chat.id
  // },
}
