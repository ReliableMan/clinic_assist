<template>
  <ui-chat-member
    :active="active"
    :name="name"
    :date="date"
    :avatar="avatar"
    :message="message"
    :online="online"
    :sent="self"
    :delivered="delivered"
    :unread-count="unread_count"
    @click="redirect"
  >
    <template v-if="draft || self" #prepend-message>
      <span v-if="draft" class="text-warning text-bold">
        {{ $t('common.draft') }}:
      </span>
      <span v-else-if="self" class="text-primary text-bold">
        {{ $t('common.you') }}:
      </span>
    </template>
  </ui-chat-member>
</template>

<script>
export default {
  props: {
    chat: {
      type: Object,
      required: true,
    },
  },
  computed: {
    member() {
      const getter = 'chat-dialog-members/interlocutors_by_chat_id'
      const members = this.$store.getters[getter](this.chat.id)

      return members[0]
    },
    last_message() {
      const getter = 'chat-dialog-messages/messages_by_chat_id'
      const messages = this.$store.getters[getter](this.chat.id)

      return messages[0]
    },
    active() {
      return +this.chat.id === +this.$route.params.id
    },
    name() {
      const { surname, name } = this.member.profile

      return `${surname} ${name}`
    },
    date() {
      const message = this.last_message

      return message && message.createdAt
        ? this.$date.toRelative(this.$date.fromSeconds(message.createdAt))
        : ''
    },
    avatar() {
      return this.member.profile.avaUrl || null
    },
    draft() {
      const getter = 'chat-draft-messages/message_by_chat_id'

      return this.$store.getters[getter](this.chat.id)
    },
    message() {
      const message = this.last_message || {}

      return this.draft || message.body || message.nameFile || ''
    },
    online() {
      const visit = this.member.profile.lastVisitAt

      return this.$chat.online(this.$date.fromSeconds(visit))
    },
    self() {
      return this.last_message?.userId === this.$auth.user.user.id
    },
    delivered() {
      const message = this.last_message || {}

      return this.self && message.read
    },
    unread_count() {
      const getter = 'chat-unread-messages/dialogues_count_by_chat_id'

      return this.$store.getters[getter](this.chat.id)
    },
  },
  methods: {
    redirect() {
      this.$router.push(
        this.localePath({
          name: 'dialogues',
          params: { id: this.chat.id },
        })
      )
    },
  },
}
</script>
