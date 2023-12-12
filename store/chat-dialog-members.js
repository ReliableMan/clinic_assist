import { filterByChatId, interlocutors, activeMembers } from '@/services/chat'

export const state = () => ({
  items: [],
})

export const getters = {
  members_by_chat_id: (state) => (chat_id) => {
    return filterByChatId(state.items, chat_id)
  },
  interlocutors_by_chat_id: (state, getters, rootState) => (chat_id) => {
    const items = filterByChatId(state.items, chat_id)

    return interlocutors(items, rootState.auth)
  },
  active_interlocutors_by_chat_id: (state, getters, rootState) => (chat_id) => {
    const items = filterByChatId(state.items, chat_id)

    return interlocutors(activeMembers(items), rootState.auth)
  },
}

export const mutations = {
  SET(state, items) {
    state.items = items
  },
}

export const actions = {
  // async get({ commit }, chatIds) {
  //   const { members } = await this.$any.get('chat-member/get', chatIds)
  //   commit('SET', members || [])
  // },
}
