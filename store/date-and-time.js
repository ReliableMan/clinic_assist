export const state = () => ({
  date: [
    { id: 1, name: 'ср', date: 12 },
    { id: 2, name: 'чт', date: 13 },
    { id: 3, name: 'пт', date: 14 },
    { id: 4, name: 'сб', date: 15 },
    { id: 5, name: 'вс', date: 16 },
    { id: 6, name: 'пн', date: 17 },
    { id: 7, name: 'вт', date: 18 },
    { id: 8, name: 'ср', date: 19 },
    { id: 9, name: 'чт', date: 20 },
    { id: 10, name: 'пт', date: 21 },
    { id: 11, name: 'сб', date: 22 },
    { id: 12, name: 'вс', date: 23 },
    { id: 13, name: 'пн', date: 24 },
    { id: 14, name: 'вт', date: 25 },
    { id: 15, name: 'ср', date: 26 },
  ],
  time1: [
    { id: 1, label: '9:00' },
    { id: 2, label: '9:30' },
    { id: 3, label: '10:00' },
    { id: 4, label: '10:30' },
    { id: 5, label: '11:00' },
    { id: 6, label: '11:30' },
    { id: 7, label: '12:00' },
    { id: 8, label: '12:30' },
    { id: 9, label: '13:00' },
    { id: 10, label: '13:30' },
    { id: 11, label: '14:00' },
  ],
  time2: [
    { id: 1, label: '9:00' },
    { id: 2, label: '9:30' },
    { id: 3, label: '10:00' },
    { id: 4, label: '10:30' },
    { id: 5, label: '11:00' },
    { id: 6, label: '11:30' },
    { id: 7, label: '12:00' },
    { id: 8, label: '12:30' },
    { id: 9, label: '13:00' },
    { id: 10, label: '13:30' },
    { id: 11, label: '14:00' },
    { id: 12, label: '14:30' },
    { id: 13, label: '15:00' },
    { id: 14, label: '15:30' },
    { id: 15, label: '16:00' },
    { id: 16, label: '16:30' },
    { id: 17, label: '17:00' },
    { id: 18, label: '17:30' },
    { id: 19, label: '18:00' },
  ],
})

export const getters = {
  date(state) {
    return state.date
  },
  time1(state) {
    return state.time1
  },
  time2(state) {
    return state.time2
  },
}
