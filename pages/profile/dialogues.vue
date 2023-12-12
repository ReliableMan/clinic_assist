<template>
  <layout-with-sidebar>
    <template #sidebar>
      <dialogues-sidebar />
    </template>

    <template #main>
      <nuxt-child v-if="$route.params.id" :key="$route.fullPath" />

      <page-archive-message
        v-else-if="$store.getters['chat/dialog_archive_chats_ids'].length"
        :title="$t('common.empty_here_now')"
        :description="$t('common.dialogue_archive_message')"
      />

      <page-empty-message
        v-else
        :title="$t('common.empty_here_now')"
        :description="$t('common.dialogue_empty_message')"
      />
    </template>
  </layout-with-sidebar>
</template>

<script>
import DialoguesSidebar from '@/components/app/DialoguesSidebar.vue'
import PageEmptyMessage from '@/components/app/PageEmptyMessage'
import PageArchiveMessage from '@/components/app/PageArchiveMessage'

export default {
  components: {
    DialoguesSidebar,
    PageEmptyMessage,
    PageArchiveMessage,
  },
  layout: 'profile',
  middleware: 'dialog-index-chat',
  async asyncData({ store }) {
    await store.dispatch('chat/setupDialogues')
  },
  wamp: {
    subscribe: [
      {
        type: 'message',
        subscriber: 'chat-dialog-push-message',
      },
      {
        type: 'read',
        subscriber: 'chat-dialog-read-message',
      },
    ],
  },
}
</script>

<router>
  {
    path: '/dialogues',
  }
</router>
