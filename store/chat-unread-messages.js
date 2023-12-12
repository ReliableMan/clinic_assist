import {
  dialogMessages,
  // councilMessages,
  incomingMessages,
  messagesByChatId,
} from '@/services/chat'

export const state = () => ({
  items: [],
})

export const getters = {
  dialogues_count(state) {
    return dialogMessages(state.items).length
  },

  dialogues_count_by_chat_id: (state) => (chatId) => {
    return messagesByChatId(dialogMessages(state.items), chatId).length
  },

  // councils_count(state) {
  //   return councilMessages(state.items).length
  // },

  // councils_count_by_chat_id: (state) => (chatId) => {
  //   return messagesByChatId(councilMessages(state.items), chatId).length
  // },
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },

  PUSH_MESSAGE(state, message) {
    state.items = [...state.items, message]
  },

  REMOVE_MESSAGE(state, id) {
    state.items = state.items.filter((item) => item.id !== id)
  },
}

export const actions = {
  async get({ commit }, chatIds) {
    const result = await this.$any.get('chat-message/getUnread', chatIds)

    commit('SET_ITEMS', incomingMessages(result?.chatMessage || [], this.$auth))
  },
}
