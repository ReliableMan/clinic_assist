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
})

export const getters = {
  date(state) {
    return state.date
  },
}
