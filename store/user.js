// import { getRole } from '@/services/user'

export const state = () => ({
  avatar: '',
})

export const getters = {
  /**
   * @param {object} state
   * @param {object} getters
   * @param {object} rootState
   *
   * Возвращает роль пользователя - doctor или patient.
   * В массиве могут быть и другие роли(особенности сервера), но они в проекте не нужны.
   * Подразумеваетя, что у пользователя обязательно должна быть одна из ролей: doctor или patient.
   *
   * @returns {string|undefined}
   */
  // role(state, getters, rootState) {
  //   return getRole(rootState.auth?.user)
  // },

  /**
   * @param {*} state
   * @param {*} getter
   * @param {*} rootState
   *
   * Возвращает url аватара пользователя, либо из библиотеки nuxt-auth, либо локальное состояние.
   * Локальное состояние необходимо для быстрого отображения при измнении. Так же помогает избежать проблемы:
   * при смене аватара url который приходит с севера не меняется даже если сама картинка была изменена.
   *
   * @returns {string}
   */
  avatar(state, getter, rootState) {
    return state.avatar || rootState.auth.user.avatar
  },
}

export const mutations = {
  SET_AVATAR(state, avatar) {
    state.avatar = avatar
  },
}

export const actions = {
  async setAvatar({ commit }, file) {
    const formData = new FormData()

    formData.append('avatar', file)

    await this.$axios.post('/any/upload-ava', formData)

    commit('SET_AVATAR', URL.createObjectURL(file))
  },
  async changeField({ rootState }, values) {
    const payload = {
      put: {
        userProfile: {
          id: rootState.auth.user.user.id,
          values,
        },
      },
    }

    const { data } = await this.$axios.post('/any', payload)
    const errors = data?.put?.userProfile?.userProfile?.errors

    if (errors) {
      return Promise.reject(errors)
    }

    this.$auth.fetchUser()
  },
}
