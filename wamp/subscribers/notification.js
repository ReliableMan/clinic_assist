export default function ({ store }) {
  store.dispatch('consultation-list/get')
  store.dispatch('notifications/get')
}
