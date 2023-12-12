export default function ({ store }, { data }) {
  store.commit('chat-dialog-messages/PUSH_MESSAGE', data)
}
