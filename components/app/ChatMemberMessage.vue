<template>
  <ui-chat-member
    :name="name"
    :date="date"
    :avatar="avatar"
    :message="message_body"
    :online="online"
    :sent="self"
    :delivered="delivered"
    :unread-count="unread_count"
    @click="redirect"
  >
    <template v-if="self" #prepend-message>
      <span class="text-primary text-bold"> {{ $t('common.you') }}: </span>
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
    member: {
      type: Object,
      required: true,
    },
    message: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    name() {
      const { surname, name } = this.member.profile

      return `${surname} ${name}`
    },
    date() {
      const message = this.message

      return message && message.createdAt
        ? this.$date.toRelative(this.$date.fromSeconds(message.createdAt))
        : ''
    },
    avatar() {
      return this.member.profile.avaUrl || null
    },
    message_body() {
      return this.message.body || this.message.nameFile || ''
    },
    online() {
      const visit = this.member.profile.lastVisitAt

      return this.$chat.online(this.$date.fromSeconds(visit))
    },
    self() {
      return this.member.userId === this.$auth.user.user.id
    },
    delivered() {
      return this.self && this.message.read
    },
    unread_count() {
      const getter = 'chat-unread-messages/dialogues_count_by_chat_id'

      return this.$store.getters[getter](this.chat.id)
    },
  },
  methods: {
    redirect() {
      const path = this.localePath({
        name: 'dialogues',
        params: { id: this.chat.id },
      })

      this.$router.push(path)

      // @todo Возможно стоит переделать с помощью событий роутера.
      setTimeout(() => {
        this.$scrollTo(`.ui-chat-message[data-id="${this.message.id}"]`, 0, {
          container: '.ui-chat-window__body',
        })
      }, 0)
    },
  },
}
</script>
