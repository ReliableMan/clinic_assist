<template>
  <layout-with-drawer>
    <template #drawer-md="{ collapse, expanded }">
      <the-sidebar :expanded="expanded" @collapse="collapse" />
    </template>

    <template #drawer-xl>
      <the-sidebar expanded />
    </template>

    <template #main>
      <nuxt />

      <v-modal-target />
    </template>
  </layout-with-drawer>
</template>

<script>
import TheSidebar from '@/components/app/TheSidebar.vue'

export default {
  components: {
    TheSidebar,
  },
  middleware: ['admin', 'auth'],
  wamp: {
    initialize: true,
    subscribe: [
      {
        type: 'message',
        subscriber: 'chat-unread-messages',
      },
      {
        type: 'notification',
        subscriber: 'notification',
      },
      {
        type: 'call',
        subscriber: 'call',
      },
    ],
  },
}
</script>
