export const state = () => ({
  items: [],
  patient: [],
  doctor: [],
})

export const getters = {
  getDoctor(state) {
    return state.doctor
  },
  getPatient(state) {
    return state.patient
  },
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
}

export const actions = {
  // async fetchDoctor(ctx) {
  //   const response = await fetch()
  // }
  // async fetchPatient(ctx) {
  //   const response = await fetch
  // }
  // async getCurrentChat() {
  //   const payload = {
  //     get: {
  //       chat: {
  //         filter: { id: 2 },
  //       },
  //     },
  //   }
  //   const response = await this.$axios.post('/any', payload)
  //   console.log('getCurrentChat', response)
  // },
}
