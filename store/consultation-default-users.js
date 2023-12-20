export const state = () => ({
  doctors: [
    /**
     *
     */
    {
      avatar: require('@/assets/images/defaultAvatars/doctors/default-doctor-1.png'),
      name: 'Дежурный терапевт',
      date: '',
      message: 'Ответ в течение X минут',
      unreadCount: 0,
      online: true,
      sent: false,
      you: true,
      draft: false,
      delivered: false,
    },
    // {
    //   avatar: require('@/assets/images/defaultAvatars/doctors/default-doctor-2.png'),
    //   name: 'Дежурный педиатор',
    //   date: '',
    //   message: 'Ответ в течение X минут',
    //   unreadCount: 0,
    //   online: true,
    //   sent: false,
    //   you: false,
    //   draft: false,
    //   delivered: false,
    // },
    // {
    //   avatar: require('@/assets/images/defaultAvatars/doctors/default-doctor-6.png'),
    //   name: 'Саркисов К. Р.',
    //   date: '13:05',
    //   message: 'Если есть другие проявления, т...',
    //   unreadCount: 0,
    //   online: false,
    //   sent: true,
    //   you: true,
    //   draft: false,
    //   delivered: false,
    // },
    // {
    //   avatar: require('@/assets/images/defaultAvatars/doctors/default-doctor-5.png'),
    //   name: 'Андропова О. Д.',
    //   date: 'вчера',
    //   message: 'В окологлазной области у...',
    //   unreadCount: 2,
    //   online: true,
    //   sent: false,
    //   you: false,
    //   draft: false,
    //   delivered: false,
    // },
    // {
    //   avatar: require('@/assets/images/defaultAvatars/doctors/default-doctor-4.png'),
    //   name: 'Котов И. А.',
    //   date: '11.06.20',
    //   message: 'Большое спасибо!',
    //   unreadCount: 0,
    //   online: false,
    //   sent: true,
    //   you: true,
    //   draft: true,
    //   delivered: false,
    // },
    // {
    //   avatar: require('@/assets/images/defaultAvatars/doctors/default-doctor-3.png'),
    //   name: 'Кравченко Л. О.',
    //   date: '8.06.20',
    //   message: 'Фотография',
    //   unreadCount: 0,
    //   online: true,
    //   sent: true,
    //   you: true,
    //   draft: true,
    //   delivered: true,
    // },
    // {
    //   avatar: require('@/assets/images/defaultAvatars/doctors/default-doctor-7.png'),
    //   name: 'Тропова О. Ю.',
    //   date: '29.04.20',
    //   message: 'Большое спасибо!',
    //   unreadCount: 0,
    //   online: true,
    //   sent: false,
    //   you: true,
    //   draft: true,
    //   delivered: false,
    // },
  ],
  patience: [
    {
      avatar: require('@/assets/images/defaultAvatars/patient/avatar-3.png'),
      name: 'Пациент',
      date: '',
      message: '',
      unreadCount: 0,
      online: true,
      sent: false,
      you: true,
      draft: false,
      delivered: false,
    },
  ],
  patiences: [],
})

export const getters = {
  doctors(state) {
    return state.doctors
  },
  patience(state) {
    return state.patiences
  },
}

export const mutations = {
  SET(state, items) {
    state.patiences = [...state.patiences, items]
    // state.patiences = []
  },
}

export const actions = {
  async fetchUser(ctx, data) {
    const payload = {
      get: {
        user: {
          filter: { id: data.userId },
          fields: ['id', 'name', 'surname', 'patronymic'],
        },
      },
    }
    const response = await this.$axios.post('/any', payload)
    const info = response.data.get.user[0]
    const allInfo = Object.assign(data, info)
    ctx.commit('SET', allInfo)
  },
}
