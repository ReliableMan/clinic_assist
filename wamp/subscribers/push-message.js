export default function ({ store }, { data }) {
  store.dispatch('messages/saveMessage', data.chatId)
  // console.log('store', store)
}
