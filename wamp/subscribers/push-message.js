export default function ({ store }, { data }) {
  console.log('store', store)
  console.log('data', data)
  store.commit('messages/PUSH_MESSAGE', data)
}
