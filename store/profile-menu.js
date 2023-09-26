export const state = () => ({
  consultations: {
    key: 'consultations',
    route: { name: 'consultations' },
    children: ['consultation', 'consultation-create', 'consultation-council'],
    icon: 'list-outlined',
    locale: 'common.consultations',
  },
  profile: {
    key: 'profile',
    route: { name: 'profile' },
    children: ['profile'],
    icon: 'list-outlined',
    locale: 'common.profile',
  },
  searchDoctor: {
    key: 'searchDoctor',
    route: { name: 'searchDoctor' },
    children: ['searchDoctor'],
    icon: 'message-circle',
    locale: 'common.searchDoctor',
  },
  dialogues: {
    key: 'dialogues',
    route: { name: 'dialogues' },
    children: ['dialogues-schedule'],
    icon: 'message-circle',
    locale: 'common.dialogues',
  },
  settings: {
    key: 'settings',
    route: { name: 'settings' },
    children: ['settings-schedule'],
    icon: 'settings',
    locale: 'common.settings',
  },
  councils: {
    key: 'councils',
    route: { name: 'councils' },
    children: ['councils-create', 'councils-members'],
    icon: 'app',
    locale: 'common.councils',
  },
  video: {
    key: 'video',
    route: { name: 'video' },
    icon: 'youtube-outlined',
    locale: 'common.instructional_video',
  },
  exit: {
    key: 'exit',
    icon: 'exit',
    locale: 'common.exit',
    exit: true,
  },
})

export const getters = {
  // header_rhcp(state) {
  //   return [
  //     state.consultations,
  //     state.dialogues,
  //     state.settings,
  //     state.exit,
  //   ]
  // },
  // header_fhcp(state) {
  //   return [
  //     state.consultations,
  //     state.dialogues,
  //     state.councils,
  //     state.settings,
  //     state.exit,
  //   ]
  // },
  // rhcp(state) {
  //   return [state.consultations, state.dialogues, state.settings, state.video]
  // },
  // fhcp(state) {
  //   return [
  //     state.consultations,
  //     state.dialogues,
  //     state.councils,
  //     state.settings,
  //   ]
  // },
  patient(state) {
    return [
      state.profile,
      state.searchDoctor,
      state.consultations,
      state.settings,
      state.exit,
    ]
  },
}
