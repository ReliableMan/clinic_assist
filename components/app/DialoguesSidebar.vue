<template>
  <div class="pv-36">
    <h2 class="mb-24 ph-36">{{ $t('common.dialogues') }}</h2>

    <div v-if="!has_dialogues" class="fs-14 lh-20 ph-36 mb-36">
      {{ $t('common.no_active_dialogs') }}
      <button @click="sendGetQuery">sendGetQuery</button>
      <button @click="chatSettings">chatSettings</button>
      <!-- <button @click="changeAnyDoctor">changeDoctor</button> -->
      <button @click="doChat">doChat</button>
      <button @click="doChatForDoctor">doChatForDoctor</button>
      <button @click="doChatForPatient">doChatForPatient</button>
      <button @click="getCurrentChat">getCurrentChat</button>
      <button @click="sendMessage">sendMessage</button>
      <button @click="getChatListAuthorizedUser">
        getChatListAuthorizedUser
      </button>
    </div>

    <div v-if="has_dialogues || has_archive" class="mb-24">
      <chat-search v-model="search" mode="dialog" />
    </div>

    <template v-if="!search">
      <div v-if="has_archive" class="mb-24">
        <chat-archive
          v-model="archive"
          mode="dialog"
          :chats="dialog_archive_chats"
        />
      </div>

      <template v-if="has_dialogues || has_archive">
        <chat-member-dialog v-for="chat in chats" :key="chat.id" :chat="chat" />
      </template>
    </template>
  </div>
</template>

<script>
import ChatMemberDialog from '@/components/app/ChatMemberDialog'
import ChatSearch from '@/components/app/ChatSearch'
import ChatArchive from '@/components/app/ChatArchive'

export default {
  components: {
    ChatMemberDialog,
    ChatArchive,
    ChatSearch,
  },
  data() {
    return {
      archive: this.$store.getters['chat/is_archive'](this.$route.params.id),
      search: '',
    }
  },
  computed: {
    dialog_actual_chats() {
      return this.$store.getters['chat/dialog_actual_chats']
    },
    dialog_archive_chats() {
      return this.$store.getters['chat/dialog_archive_chats']
    },
    has_dialogues() {
      return !!this.dialog_actual_chats.length
    },
    has_archive() {
      return !!this.dialog_archive_chats.length
    },
    chats() {
      return this.archive ? this.dialog_archive_chats : this.dialog_actual_chats
    },
  },
  methods: {
    async sendGetQuery() {
      const response = await this.$axios.get('/any/doc?object=chatMessage')
      console.log(response)
    },

    async chatSettings() {
      const payload = {
        get: {
          chat: {
            fields: ['chatMessages', 'chatUsers', 'id', 'createdAt', 'status'],
          },
        },
      }
      const response = await this.$axios.post('/any', payload)
      console.log(response)
    },

    async sendGet() {
      const payload = {
        get: {
          doctor: {
            fields: [
              'user',
              'userId',
              'specialization',
              'specializationAdditional',
              'aboutMe',
              'qualificationCategory',
              'academicDegree',
            ],
          },
        },
      }
      const response = await this.$axios.post('/any', payload)
      console.log(response)
    },
    async doChat() {
      const payload = {
        put: {
          chat: {
            return: ['id'],
          },
        },
      }
      const response = await this.$axios.post('/any', payload)
      console.log(response)
    },
    async doChatForDoctor() {
      const payload = {
        put: {
          chatUser: {
            values: { chatId: 2, userId: 4 },
          },
        },
      }
      const response = await this.$axios.post('/any', payload)
      console.log(response)
    },
    async doChatForPatient() {
      const payload = {
        put: {
          chatUser: {
            values: { chatId: 2, userId: 17 },
          },
        },
      }
      const response = await this.$axios.post('/any', payload)
      console.log(response)
    },
    async getCurrentChat() {
      const payload = {
        get: {
          chat: {
            filter: { id: 2 },
          },
        },
      }
      const response = await this.$axios.post('/any', payload)
      console.log(response)
    },
    async sendMessage() {
      const payload = {
        chatId: 2,
        message: 'wooww',
      }
      const response = await this.$axios.post('/chat/send-message', payload)
      console.log(response)
    },
    async getChatListAuthorizedUser() {
      const response = await this.$axios.get('/chat/chats')
      console.log(response)
    },
  },
}
</script>
