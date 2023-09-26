<template>
  <layout-with-sticky-footer>
    <template #header>
      <the-header />
    </template>

    <template #body>
      <main>
        <nuxt />
      </main>

      <v-modal-target />
    </template>

    <template #footer>
      <the-footer />
    </template>
  </layout-with-sticky-footer>
</template>

<script>
import TheHeader from '@/components/app/TheHeader.vue'
import TheFooter from '@/components/app/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
