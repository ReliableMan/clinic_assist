<template>
  <div>
    <dialogues-sidebar-member
      v-for="(member, index) in members"
      :key="index"
      :member="member"
      :active="mode === 'dialog' && member.chatId === +$route.params.id"
      :message="member.message"
      @click="redirect(member)"
    />
  </div>
</template>

<script>
import DialoguesSidebarMember from '@/components/app/DialoguesSidebarMember'

export default {
  components: {
    DialoguesSidebarMember,
  },
  props: {
    mode: {
      type: String,
      default: 'dialog',
      validator(value) {
        return ['dialog', 'message'].includes(value)
      },
    },
    members: {
      type: Array,
      required: true,
    },
  },
  methods: {
    redirect(member) {
      const path = this.localePath({
        name: 'dialogues',
        params: { id: member.chatId },
      })

      this.$router.push(path)

      if (this.mode === 'message') {
        // @todo Возможно стоит переделать с помощью событий роутера.
        setTimeout(() => {
          this.$scrollTo(
            `.ui-chat-message[data-id="${member.message.id}"]`,
            0,
            {
              container: '.ui-chat-window__body',
            }
          )
        }, 0)
      }
    },
  },
}
</script>
