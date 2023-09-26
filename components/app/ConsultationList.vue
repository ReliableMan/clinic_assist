<template>
  <div class="row gutter-12">
    <div class="col-4 pv-12">
      <consultation-card add />
    </div>

    <div v-for="item in items" :key="item.id" class="col-4 pv-12">
      <consultation-card
        :id="item.id"
        :created-at="item.createdAt"
        :submitted-at="item.submittedAt"
        :updated-at="item.updatedAt"
        :number="item.id"
        :status-id="item.statusId"
        :rejected-by="item.rejectedBy"
      />
    </div>
  </div>
</template>

<script>
import ConsultationCard from '@/components/app/ConsultationCard'

export default {
  components: {
    ConsultationCard,
  },
  props: {
    create: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
