export const state = () => ({
  medCard: {
    key: 'medCard',
    route: { name: 'med-card' },
    locale: 'common.med_card_item',
  },
  scheduledConsultations: {
    key: 'scheduledConsultations',
    route: { name: 'scheduled-consultations' },
    locale: 'common.scheduled_consultation_item',
  },
  medDocuments: {
    key: 'medDocuments',
    route: { name: 'med-documents' },
    locale: 'common.med_documents',
  },
  balanceSubscriptions: {
    key: 'balanceSubscriptions',
    route: { name: 'balance-subscriptions' },
    locale: 'common.balance_subscriptions_item',
  },
  promoCode: {
    key: 'promoCode',
    route: { name: 'promo-code' },
    locale: 'common.promo_code_item',
  },
  yourProduct: {
    key: 'yourProduct',
    route: { name: 'your-product' },
    locale: 'common.your_product_item',
  },
  account: {
    key: 'account',
    route: { name: 'account' },
    locale: 'common.account',
  },
  system: {
    key: 'system',
    route: { name: 'system' },
    locale: 'common.system',
  },
})

export const getters = {
  menu(state) {
    return [
      state.medCard,
      state.scheduledConsultations,
      state.medDocuments,
      state.balanceSubscriptions,
      state.promoCode,
      state.yourProduct,
    ]
  },
  submenuSettings(state) {
    return [state.account, state.system]
  },
}
