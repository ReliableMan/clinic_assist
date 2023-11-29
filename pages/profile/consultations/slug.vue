<!-- <template>
  <consultation-list :items="items" />
  <consultation-list />

  <consultation-empty />
</template>

<script>
import ConsultationList from '@/components/app/ConsultationList'
import ConsultationEmpty from '@/components/app/ConsultationEmpty'

export default {
  components: {
    ConsultationList,
    ConsultationEmpty,
  },
  computed: {
    default_slug() {
      return this.$store.getters['consultation-list-tabs/default_status_slug']
    },
    slug() {
      return this.$route.params.slug || this.default_slug
    },
    items() {
      return this.$store.getters[`consultation-list/${this.slug}_items`]
    },
  },
}
</script>

<router>
  {
    path: '/consultations/:slug?',
    name: 'consultations',
  }
</router> -->
