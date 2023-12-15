import { filterByChatId, markAsReadMessage } from '@/services/chat'

export const state = () => ({
  items: [],
})

export const getters = {
  messages_by_chat_id: (state) => (chat_id) => {
    return filterByChatId(state.items, chat_id)
  },
}

export const mutations = {
  SET(state, items) {
    state.items = items
  },
  PUSH_MESSAGE(state, item) {
    state.items = [item, ...state.items]
  },
  MARK_READ_MESSAGE(state, id) {
    state.items = markAsReadMessage(state.items, id)
  },
}

export const actions = {
  async get({ commit }, chatIds) {
    const { messages } = await this.$any.get('chat-message/get', chatIds)
    commit('SET', messages || [])
  },
}
