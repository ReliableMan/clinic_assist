<template>
  <!-- <layout-with-sticky-footer> -->
    <div>

      <template id="header">
        <the-header />
      </template>

    <template id="body">
      <main>
        <nuxt />
      </main>
      
      <!-- <v-modal-target /> -->
    </template>
    
    <template id="footer" >
      <the-footer />
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
