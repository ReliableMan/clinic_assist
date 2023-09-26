<template>
  <ui-consultation-card v-if="add" :add="true" :to="to" :title="title" />

  <ui-consultation-card
    v-else
    :to="to"
    :title="title"
    :status-color="status_color"
    :status-label="status_label"
    :button-label="$t('common.open')"
    :notify-count="notification_count"
  >
    <template #body>
      <div v-if="createdAt" class="mb-4 last-mb-0">
        {{ $t('common.created_at') }}
        <strong>{{ $date.toFull($date.fromSeconds(createdAt)) }}</strong>
      </div>
      <div v-if="submittedAt" class="mb-4 last-mb-0">
        {{ $t('common.sended_at') }}
        <strong>{{ $date.toFull($date.fromSeconds(submittedAt)) }}</strong>
      </div>
      <div v-if="completed && updatedAt" class="mb-4 last-mb-0">
        {{ $t('common.completed_at') }}
        <strong>{{ $date.toFull($date.fromSeconds(updatedAt)) }}</strong>
      </div>
      <div v-if="rejected && updatedAt" class="mb-4 last-mb-0">
        {{ $t('common.rejected_at') }}
        <strong>{{ $date.toFull($date.fromSeconds(updatedAt)) }}</strong>
      </div>
    </template>
  </ui-consultation-card>
</template>

<script>
// import statuses from '@/consts/consultation-statuses'

export default {
  props: {
    add: {
      type: Boolean,
      default: false,
    },
    id: {
      type: [String, Number],
      default: '',
    },
    number: {
      type: [String, Number],
      default: '',
    },
    notifyCount: {
      type: [String, Number],
      default: '',
    },
    createdAt: {
      type: [String, Number],
      default: '',
    },
    submittedAt: {
      type: [String, Number],
      default: '',
    },
    updatedAt: {
      type: [String, Number],
      default: '',
    },
    statusId: {
      type: [String, Number],
      default: '',
    },
    rejectedBy: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    to() {
      const { id } = this

      return this.add
        ? this.localePath('consultation-create')
        : this.localePath({ name: 'consultation', params: { id } })
    },
    title() {
      const { number } = this

      return this.add
        ? this.$t('common.get_consultation')
        : this.$t('common.consultation_number', { number })
    },
    // statuses() {
    //   const role = this.$store.getters['user/role']

    //   return this.$store.getters[`consultation-statuses/${role}`]
    // },
    // status_id() {
    //   const is_rejected =
    //     this.statusId === statuses.QUEUE &&
    //     this.rejectedBy === this.$auth.user.user.id

    //   return is_rejected ? statuses.REJECTED : this.statusId
    // },
    // status_color() {
    //   return this.statuses[this.status_id].color
    // },
    // status_label() {
    //   return this.$t(this.statuses[this.status_id].locale)
    // },
    // rejected() {
    //   return this.status_id === statuses.REJECTED
    // },
    // completed() {
    //   return (
    //     this.status_id === statuses.CONCLUSION_MADE ||
    //     this.status_id === statuses.CONCLUSION_MADE_COUNCIL
    //   )
    // },
    notification_count() {
      return this.$store.getters['notifications/by_application_id'](+this.id)
        ? 1
        : false
    },
  },
}
</script>
