export default function (ctx, { data }) {
  const { store, route, localeLocation, params, $auth } = ctx
  const { chatId, userId } = data

  const names = [
    localeLocation('dialogues').name,
    localeLocation('councils').name,
  ]

  const is_current_route = names.includes(route.name) && +params.id === +chatId
  const self = +userId === +$auth.user.user.id

  if (!is_current_route && !self) {
    ctx.$sounds.message().play()

    store.commit('chat-unread-messages/PUSH_MESSAGE', {
      ...data,
      chat: store.state.chat.items.find((item) => +item.id === +chatId),
    })
  }
}
