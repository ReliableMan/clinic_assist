<template>
  <ui-chat-form
    v-model="message"
    v-bind="$attrs"
    :placeholder="$t('common.enter_your_message')"
    @submit="send"
  >
    <template #prepend>
      <ui-input-hidden-file ref="file" v-model="file" @change="sendFile">
        <ui-button
          tag="div"
          static="md"
          light-hover-shadow
          text-color="primary"
        >
          <ui-icon name="clip" :size="[12, 20]" />
        </ui-button>
      </ui-input-hidden-file>
    </template>
  </ui-chat-form>
</template>

<script>
export default {
  data() {
    return {
      file: null,
    }
  },
  computed: {
    chat_id() {
      return this.$route.params.id
    },
    message: {
      get() {
        const getter = 'chat-draft-messages/message_by_chat_id'

        return this.$store.getters[getter](this.chat_id)
      },
      set(value) {
        this.$store.commit('chat-draft-messages/SET_MESSAGE', {
          chatId: this.chat_id,
          message: value,
        })
      },
    },
  },
  methods: {
    send() {
      this.$store.dispatch('chat/sendMessage', {
        chatId: this.chat_id,
        message: this.message,
      })
    },
    sendFile(file) {
      this.$store.dispatch('chat/sendFile', {
        chatId: this.chat_id,
        file,
      })

      this.file = null
      this.$refs.file.$refs.input.value = null
    },
  },
}
</script>
