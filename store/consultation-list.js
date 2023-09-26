import {
  roleItems,
  newItems,
  progressItems,
  completedItems,
  rejectedItems,
  createCouncilItems,
} from '@/services/consultation-list'

export const state = () => ({
  items: [],
})

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
}

export const getters = {
  all_items({ items }, getters, { auth }) {
    return roleItems(items, auth)
  },

  new_items({ items }, getters, { auth }) {
    return newItems(roleItems(items, auth), auth)
  },
  progress_items({ items }, getters, { auth }) {
    return progressItems(roleItems(items, auth))
  },
  completed_items({ items }, getters, { auth }) {
    return completedItems(roleItems(items, auth))
  },
  rejected_items({ items }, getters, { auth }) {
    return rejectedItems(roleItems(items, auth), auth)
  },

  create_council_items({ items }, getters, { auth }) {
    return createCouncilItems(roleItems(items, auth))
  },
}

export const actions = {
  async get({ commit }) {
    const { application } = await this.$any.get('consultation-list/get')

    commit('SET_ITEMS', application)
  },
}
