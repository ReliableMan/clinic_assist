import types from '@/consts/chat-types'
import statuses from '@/consts/chat-statuses'

export function actualChats(items) {
  return items.filter((item) => item.statusId === statuses.ACTUAL)
}

export function archiveChats(items) {
  return items.filter((item) => item.statusId === statuses.ARCHIVE)
}

export function dialogChats(items) {
  return items.filter((item) => item.typeId === types.DIALOG)
}

// export function councilChats(items) {
//   return items.filter((item) => item.typeId === types.COUNCIL)
// }

// export function dialogMessages(items) {
//   return items.filter((item) => item.chat.typeId === types.DIALOG)
// }

// export function councilMessages(items) {
//   return items.filter((item) => item.chat.typeId === types.COUNCIL)
// }

// export function messagesByChatId(items, chat_id) {
//   return items.filter((item) => item.chat.id === chat_id)
// }

export function incomingMessages(items, auth) {
  return items.filter(({ userId }) => userId !== auth.user.user.id)
}

export function chatById(items, id) {
  return items.find((item) => +item.id === +id)
}

export function chatByApplicationId(items, applicationId) {
  return items.find((item) => +item.applicationId === +applicationId)
}

export function isArchiveChat(chat) {
  return chat?.statusId === statuses.ARCHIVE
}

export function itemsToIds(items) {
  return items.map(({ id }) => id)
}

export function filterByChatId(items, chat_id) {
  return items.filter(({ chatId }) => +chatId === +chat_id)
}

export function interlocutors(items, auth) {
  return items.filter(({ userId }) => userId !== auth.user.user.id)
}

export function activeMembers(items) {
  return items.filter(({ isDelete }) => !isDelete)
}

export function markAsReadMessage(items, id) {
  return items.map((item) => {
    return item.id === id ? { ...item, read: true } : item
  })
}
