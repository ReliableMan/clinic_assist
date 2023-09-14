<template>
  <!-- <layout-with-sticky-footer> -->
  <div>
    <template name="header">
      <the-header />
    </template>

    <template name="body">
      <main>
        <nuxt />
      </main>

      <!-- <v-modal-target /> -->
    </template>

    <template name="footer">
      <!-- <the-footer /> -->
    </template>
  </div>
  <!-- </layout-with-sticky-footer> -->
</template>

<script>
import TheHeader from '@/components/app/TheHeader.vue'
// import TheFooter from '@/components/app/TheFooter.vue'

export default {
  components: {
    TheHeader,
    // TheFooter,
  },
}
</script>
