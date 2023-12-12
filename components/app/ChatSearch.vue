<template>
  <div>
    <div class="ph-24">
      <chat-search-input v-model="search" />
    </div>

    <template v-if="search">
      <template v-if="found_chats.length">
        <div class="mv-12 ph-40 fs-12 lh-16 text-bold">
          {{ found_chats_message }}
        </div>

        <component
          :is="member_component"
          v-for="chat in found_chats"
          :key="chat.id"
          :chat="chat"
        />

        <div class="ph-36">
          <ui-divider class="text-blue-light-1 mt-12 mb-24" horizontal />
        </div>

        <div class="mv-12 ph-40 fs-12 lh-16 text-bold">
          {{ found_messages_message }}
        </div>

        <chat-member-message
          v-for="message in found_messages"
          :key="`${message.chat.id}${message.id}`"
          :chat="message.chat"
          :message="message"
          :member="getMember(message.userId)"
        />
      </template>

      <div v-else class="mv-12 ph-40 fs-12 lh-16 text-bold">
        {{ not_found_message }}
      </div>
    </template>
  </div>
</template>

<script>
import ChatSearchInput from '@/components/app/ChatSearchInput'
import ChatMemberDialog from '@/components/app/ChatMemberDialog'
// import ChatMemberCouncil from '@/components/app/ChatMemberCouncil'
import ChatMemberMessage from '@/components/app/ChatMemberMessage'

export default {
  components: {
    ChatSearchInput,
    ChatMemberDialog,
    // ChatMemberCouncil,
    ChatMemberMessage,
  },
  props: {
    value: {
      type: String,
      default: '',
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
    search: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    member_component() {
      const components = {
        dialog: ChatMemberDialog,
        // council: ChatMemberCouncil,
      }

      return components[this.mode]
    },
    found_messages() {
      const messages = this.$store.state[`chat-${this.mode}-messages`].items

      return messages.filter(({ body }) => {
        return body
          ? body.toLowerCase().includes(this.search.toLowerCase())
          : false
      })
    },
    found_chats() {
      const chatIds = this.found_messages.map(({ chat }) => chat.id)
      const uniqueIds = [...new Set(chatIds)]
      const chats = this.$store.state.chat.items

      return chats.filter((item) => uniqueIds.includes(item.id))
    },
    found_chats_message() {
      const locales = {
        dialog: 'common.found_dialogs',
        council: 'common.found_councils',
      }
      const count = this.found_chats.length

      return this.$tc(locales[this.mode], count, { count })
    },
    found_messages_message() {
      const count = this.found_messages.length

      return this.$tc('common.found_messages', count, { count })
    },
    not_found_message() {
      const locales = {
        dialog: 'common.dialogs_not_found',
        council: 'common.councils_not_found',
      }

      return this.$t(locales[this.mode])
    },
  },
  methods: {
    getMember(userId) {
      const members = this.$store.state[`chat-${this.mode}-members`].items

      return members.find((item) => +item.userId === +userId)
    },
  },
}
</script>
