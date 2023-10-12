<template>
  <div>
    <!-- 1 card online -->
    <card-doctor-online />
    <!-- 2 card doctor not online -->
    <card-doctor-offline />
    <!-- 3 card new doctor online -->
    <card-new-doctor-online />
    <!-- 4 card new doctor offline -->
    <card-new-doctor-offline />
  </div>
</template>

<script>
import CardDoctorOnline from './CardDoctorOnline.vue'
import CardDoctorOffline from './CardDoctorOffline.vue'
import CardNewDoctorOnline from './CardNewDoctorOnline.vue'
import CardNewDoctorOffline from './CardNewDoctorOffline.vue'
export default {
  name: 'CardsDoctors',
  components: {
    CardDoctorOnline,
    CardDoctorOffline,
    CardNewDoctorOnline,
    CardNewDoctorOffline,
  },
  data() {
    return {
      default: false,
    }
  },
}
</script>
