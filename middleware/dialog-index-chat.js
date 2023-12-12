export default function ({ store, params, redirect, localePath }) {
  const actual_ids = store.getters['chat/dialog_actual_chats_ids']

  if (!params.id && actual_ids.length) {
    const id = actual_ids[0]

    redirect(localePath({ name: 'dialogues', params: { id } }))
  }
}
