<template>
  <ui-chat-window>
    <template #header>
      <ui-chat-header :title="member_name" :text="position" :info="online">
        <template v-if="!archive" #append>
          <!-- <dialogues-video-button
            :application-id="applicationId"
            :chat-id="chat_id"
          /> -->
        </template>
      </ui-chat-header>
      <ui-chat-header :title="member_name" :info="online">
        <template v-if="!archive" #append>
          <h5>testing...</h5>
        </template>
      </ui-chat-header>
    </template>

    <template #prepend-body>
      <div class="fs-14 lh-16 text-grey text-center">
        {{ $t('common.dialog_chat_prepend', { number: applicationId }) }}
      </div>
    </template>

    <template #body>
      <ui-chat-messages reverse>
        <chat-message
          v-for="message in messages"
          :key="message.id"
          mode="dialog"
          :message="message"
        />
      </ui-chat-messages>
    </template>

    <template v-if="!archive" #footer>
      <chat-form />
    </template>
  </ui-chat-window>
</template>

<script>
import ChatMessage from '@/components/app/ChatMessage'
import ChatForm from '@/components/app/ChatForm'
// import DialoguesVideoButton from '@/components/app/DialoguesVideoButton'
// import { getRole } from '@/services/user'

export default {
  components: {
    ChatMessage,
    ChatForm,
    // DialoguesVideoButton,
  },
  layout: 'profile',
  async fetch() {
    // * временно позже поменять
    const user_id = this.$auth.user.user.id
    // this.$store.getters['user/role'] === 'rhcp'
    //   ? this.member.profile.user_id
    //   : this.$auth.user.user.id

    await this.$store.dispatch('schedule/getAll', user_id)
  },
  computed: {
    chat_id() {
      return +this.$route.params.id
    },
    chat() {
      return this.$store.getters['chat/by_id'](this.chat_id)
    },
    applicationId() {
      return this.chat.applicationId
    },
    archive() {
      return this.$store.getters['chat/is_archive'](this.chat_id)
    },
    member() {
      const getter = 'chat-dialog-members/interlocutors_by_chat_id'
      const members = this.$store.getters[getter](this.chat_id)

      return members[0]
    },
    messages() {
      const getter = 'chat-dialog-messages/messages_by_chat_id'

      return this.$store.getters[getter](this.chat_id)
    },
    member_name() {
      const { surname, name, patronymic } = this.member.profile

      return patronymic
        ? `${surname} ${name} ${patronymic}`
        : `${surname} ${name}`
    },
    // position() {
    //   const positions = {
    //     fhcp: this.$t('common.expert_doctor'),
    //     rhcp: this.$t('common.regional_physician'),
    //   }

    //   return positions[getRole(this.member.profile)]
    // },
    online() {
      const date = this.$date.fromSeconds(this.member.profile.lastVisitAt)
      const online = this.$chat.online(date)

      return online
        ? this.$t('common.online')
        : `${this.$t('common.was_online')} ${this.$date.toFullSimple(date)}`
    },
  },
}
</script>

<router>
  {
    path: '/dialogues/:id?',
    name: 'dialogues',
  }
</router>
