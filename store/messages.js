export const state = () => ({
  messagesFromPatient: [],
  messagesFromDoctor: [],
  items: [],
})

export const getters = {
  getMessagesFromPatient(state) {
    return state.messagesFromPatient
  },
  getMessagesFromDoctor(state) {
    return state.messagesFromDoctor
  },
  getAllMessages(state) {
    return state.items
  },
}

export const mutations = {
  setMessagePatient(state, items) {
    state.messagesFromPatient = items
  },
  setMessageDoctor(state, items) {
    state.messagesFromDoctor = items
  },
  SET(state, items) {
    state.items = items
  },
  // PUSH_MESSAGE(state, message) {
  //   state.items = [message, ...state.items]
  // },
  // MARK_READ_MESSAGE(state, id) {
  //   state.items = markAsReadMessage(state.items, id)
  // },
}

export const actions = {
  async saveMessage(ctx, chatId) {
    const payload = {
      get: {
        chat: {
          filter: { id: chatId },
          fields: ['chatMessages', 'chatUsers'],
        },
      },
    }
    const response = await this.$axios.post('/any', payload)
    const { chatMessages } = response.data.get.chat[0]
    ctx.commit('SET', chatMessages)
  },
}

// get: {
//   chat: {
//     filter: { id: chatId },
//     fields: ['chatMessages', 'chatUsers'],
//   },
// },
