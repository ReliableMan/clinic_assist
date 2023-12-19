// import { getRole } from '@/services/user'
import types from '@/consts/consultation-list-types'
// import statuses from '@/consts/consultation-statuses'
// import chat_types from '@/consts/chat-types'

// const fhcp_statuses = [
//   statuses.REQUESTED_INFORMATION,
//   statuses.RESPONDED_INFORMATION,
//   statuses.CONSIDERATION,
//   statuses.CONSIDERATION_COUNCIL,
//   statuses.CONCLUSION_MADE,
//   statuses.CONCLUSION_MADE_COUNCIL,
// ]

// function hasFhcpId(item, user_id) {
//   return +item.federalId === +user_id
// }

// function hasFhcpStatus(item) {
//   return fhcp_statuses.includes(item.statusId)
// }

// function hasFhcpCouncil(item, user_id) {
//   const chats = item.chats.filter(({ typeId }) => typeId === chat_types.COUNCIL)
//   const members = chats.map(({ chatUsers }) => chatUsers).flat()

//   return members.some(({ userId, isDelete }) => userId === user_id && !isDelete)
// }

// function fhcpItems(items, user_id) {
//   return items.filter(
//     (item) =>
//       item.statusId === statuses.NEW ||
//       hasFhcpCouncil(item, user_id) ||
//       (hasFhcpStatus(item) && hasFhcpId(item, user_id))
//   )
// }

// function rhcpItems(items, user_id) {
//   return items.filter(({ userId }) => +userId === +user_id)
// }

// export function roleItems(items, auth) {
//   const role = getRole(auth.user)
//   const map = {
//     rhcp: rhcpItems,
//     fhcp: fhcpItems,
//   }

//   return map[role](items, auth.user.user.id)
// }

export function newItems(items, auth) {
  return items.filter(({ statusId, rejectedBy }) => {
    return types.NEW.includes(statusId) && rejectedBy !== auth.user.user.id
  })
}

export function progressItems(items) {
  return items.filter(({ statusId }) => types.PROGRESS.includes(statusId))
}

export function completedItems(items) {
  return items.filter(({ statusId }) => types.COMPLETED.includes(statusId))
}

export function rejectedItems(items, auth) {
  return items.filter(({ statusId, rejectedBy }) => {
    return types.NEW.includes(statusId) && rejectedBy === auth.user.user.id
  })
}

export function createCouncilItems(items) {
  return items.filter((item) => types.CREATE_COUNCIL.includes(item.statusId))
}
