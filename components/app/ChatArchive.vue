<template>
  <ui-chat-member
    :name="$t('common.archive')"
    :message="archive_message"
    @click="toggle"
  >
    <template #icon>
      <ui-icon v-if="value" name="chevron-left" :size="[10, 16]" />
      <ui-icon v-else name="box" :size="[24, 22]" />
    </template>
  </ui-chat-member>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    chats: {
      type: Array,
      required: true,
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
    members() {
      const getter = `chat-${this.mode}-members/interlocutors_by_chat_id`

      return this.chats.reduce(
        (acc, chat) => [...acc, ...this.$store.getters[getter](chat.id)],
        []
      )
    },
    names() {
      const map = (member) => {
        const { name, surname } = member.profile

        return `${surname} ${name[0].toUpperCase()}.`
      }

      return this.members.map(map).join(', ')
    },
    consultations() {
      return this.chats
        .map(({ applicationId }) =>
          this.$t('common.consultation_number', { number: applicationId })
        )
        .join(', ')
    },
    archive_message() {
      const back_messages = {
        dialog: this.$t('common.back_to_dialogs'),
        council: this.$t('common.back_to_councils'),
      }
      const messages = {
        dialog: this.names,
        council: this.consultations,
      }

      return this.value ? back_messages[this.mode] : messages[this.mode]
    },
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value)
    },
  },
}
</script>
