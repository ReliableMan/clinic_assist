<template>
  <ui-chat-message
    :uid="message.id"
    :text="message.body"
    :time="$date.toTime($date.fromSeconds(message.createdAt))"
    :self="self"
    :sent="self"
    :delivered="self && message.read"
    :avatar="avatar"
    :name="name"
    :show-avatar="show_avatar"
    @visible="visible"
  >
    <template v-if="message.nameFile" #file>
      <ui-file
        :file="{ name: message.nameFile, fileSize: message.fileSize }"
        hovered
        @click="$file.download(message.url, message.nameFile)"
      />
    </template>
  </ui-chat-message>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
    member: {
      type: Object,
      default: null,
    },
    mode: {
      type: String,
      required: true,
      validator(value) {
        return ['dialog', 'council'].includes(value)
      },
    },
  },
  computed: {
    self() {
      return this.message.userId === this.$auth.user.user.id
    },
    show_avatar() {
      return !this.self && !!this.member
    },
    avatar() {
      if (!this.self && this.member) {
        return this.member.profile.avaUrl
      }

      return ''
    },
    name() {
      if (!this.self && this.member) {
        const { name, surname } = this.member.profile

        return `${name} ${surname}`
      }

      return ''
    },
  },
  methods: {
    visible() {
      if (!this.self && !this.message.read) {
        const { id } = this.message
        const read_mutation = `chat-${this.mode}-messages/MARK_READ_MESSAGE`

        this.$store.dispatch('chat/readMessage', id)
        this.$store.commit(read_mutation, id)
      }
    },
  },
}
</script>
