export const state = () => ({
  items: [],
})

export const getters = {
  message_by_chat_id: (state) => (chat_id) => {
    return state.items[chat_id]
  },
}

export const mutations = {
  SET(state, chat_ids) {
    const entries = chat_ids.map((chat_id) => [chat_id, ''])

    state.items = { ...Object.fromEntries(entries), ...state.items }
  },

  SET_MESSAGE(state, { chatId, message }) {
    state.items[chatId] = message
  },
}
