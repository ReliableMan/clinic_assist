export default function ({ store }, { data }) {
  store.commit('chat-dialog-messages/MARK_READ_MESSAGE', data.id)
}
