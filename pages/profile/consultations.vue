<template>
  <layout-with-sidebar>
    <template #sidebar>
      <div class="pv-40 ph-36 mb-20">
        <h2>{{ $t('common.consultations') }}</h2>
      </div>
      <div class="ph-24">
        <!-- <ui-input-search
          v-model="searchField"
          :button="false"
          placeholder="Поиск"
        /> -->
      </div>
      <!-- если дежурный доктор -->
      <div v-if="$auth.user.user.type === 4" class="mt-30">
        <ui-chat-member
          v-for="(item, index) in patience"
          :key="index"
          class="custom-chat-member"
          :active="index === 2"
          :avatar="item.avatar"
          :name="item.name"
          :date="item.date"
          :message="item.message"
          :unread-count="item.unreadCount"
          :online="item.online"
          :sent="item.sent"
          :delivered="item.delivered"
        >
          <template #prepend-message>
            <span v-if="item.you" class="text-primary text-bold">Вы:</span>
            <span v-else-if="item.draft" class="text-warning text-bold"
              >Черновик:</span
            >
          </template>
        </ui-chat-member>
      </div>
      <!-- если пациент -->
      <div v-if="$auth.user.user.type === 2" class="mt-30">
        <ui-chat-member
          v-for="(item, index) in doctors"
          :key="index"
          class="custom-chat-member"
          :active="index === 2"
          :avatar="item.avatar"
          :name="item.name"
          :date="item.date"
          :message="item.message"
          :unread-count="item.unreadCount"
          :online="item.online"
          :sent="item.sent"
          :delivered="item.delivered"
        >
          <template #prepend-message>
            <span v-if="item.you" class="text-primary text-bold">Вы:</span>
            <span v-else-if="item.draft" class="text-warning text-bold"
              >Черновик:</span
            >
          </template>
        </ui-chat-member>
      </div>
    </template>

    <template #main>
      <div style="height: 100vh">
        <ui-chat-window class="custom-chat-window">
          <template #header>
            <!-- если дежурный доктор -->
            <div v-if="$auth.user.user.type === 4">
              <ui-chat-header title="Пациент" text=""></ui-chat-header>
            </div>
            <!-- если пациент -->
            <div v-if="$auth.user.user.type === 2">
              <ui-chat-header
                title="Дежурный терапевт"
                text="Ответ в течении ХХ минут"
              ></ui-chat-header>
            </div>
          </template>
          <template #body>
            <ui-chat-messages>
              <ui-chat-message
                v-for="msg in allMessages"
                :key="msg.id"
                :text="msg.body"
                :time="$date.toTime($date.fromSeconds(msg.createdAt))"
                :self="msg.userId === idUser"
              />
            </ui-chat-messages>
          </template>
          <template #footer>
            <ui-chat-form
              v-model="message"
              class="custom-chat-form"
              placeholder="Введите сообщение"
              @submit="send"
            >
              <template #prepend>
                <ui-chat-attach>
                  <ui-input-hidden-file
                    ref="file"
                    v-model="file"
                    @change="sendFile"
                  >
                    <ui-menu-link
                      class="custom-link-hover"
                      icon="file-picture"
                      label="Изображение"
                      hovered
                    />
                    <ui-menu-link
                      class="custom-link-hover"
                      icon="file-video"
                      label="Видео"
                      hovered
                    />
                    <ui-menu-link
                      class="custom-link-hover"
                      icon="file"
                      label="Документ"
                      hovered
                    />
                  </ui-input-hidden-file>
                </ui-chat-attach>
              </template>
            </ui-chat-form>
            <!-- <div class="d-flex">
              <button @click="doChat">doChat</button>
              <button @click="doChatForDoctor">doChatForDoctor</button>
              <button @click="doChatForPatient">doChatForPatient</button>
              <button @click="getDoctor">getDoctor</button>
              <button @click="getPatient">getPatient</button>
            </div> -->
          </template>
        </ui-chat-window>
      </div>
    </template>
  </layout-with-sidebar>
</template>

<script>
export default {
  name: 'Consultations',
  layout: 'profile',
  data() {
    return {
      currentDoctor: null,
      currentChatId: 3,
      messageFromPatient: '',
      messageFromDoctor: '',
      searchField: '',
      message: '',
      file: null,
      item: [],
      idUser: null,
      typeUser: null,
    }
  },
  wamp: {
    subscribe: [
      {
        type: 'message',
        subscriber: 'push-message',
      },
      {
        type: 'read',
        subscriber: 'chat-dialog-read-message',
      },
    ],
  },
  // в зависимости от роли переключение на разные layout
  computed: {
    doctors() {
      return this.$store.getters[`consultation-default-users/doctors`]
    },
    patience() {
      return this.$store.getters[`consultation-default-users/patience`]
    },
    messagesDoctor() {
      return this.$store.getters[`messages/getMessagesFromDoctor`]
    },
    allMessages() {
      return this.$store.getters[`messages/getAllMessages`]
    },
    //   layout() {
    //     const role = this.$store.getters['user/role']

    //     return `consultation-list-layout-${role}`
    //   },
  },
  mounted() {
    this.checkMessages()
    this.userSettings()
  },
  methods: {
    checkMessages() {
      this.$store.dispatch('messages/saveMessage', this.currentChatId)
    },
    send() {
      this.$store.dispatch('chat/sendMessage', {
        chatId: 3,
        message: this.message,
      })
      setTimeout(() => {
        this.$store.dispatch('messages/saveMessage', this.currentChatId)
      }, 1000)
    },
    sendFile(file) {
      this.$store.dispatch('chat/sendFile', {
        chatId: this.chat_id,
        file,
      })
      this.file = null
      this.$refs.file.$refs.input.value = null
    },
    async userSettings() {
      const user = await this.$axios.get('/me')
      const { id, type } = user.data.user
      this.idUser = id
      console.log('id', id)
      this.typeUser = type
    },
    async getCurrentChat() {
      const payload = {
        get: {
          chat: {
            filter: { id: this.currentChatId },
            fields: ['chatMessages', 'chatUsers'],
          },
        },
      }
      const response = await this.$axios.post('/any', payload)
      console.log(response)
    },
    // async doChat() {
    //   const payload = {
    //     put: {
    //       chat: {
    //         return: ['id'],
    //       },
    //     },
    //   }
    //   const response = await this.$axios.post('/any', payload)
    //   console.log(response)
    // },
    // async doChatForDoctor() {
    //   const payload = {
    //     put: {
    //       chatUser: {
    //         values: { chatId: 3, userId: 24 },
    //       },
    //     },
    //   }
    //   const response = await this.$axios.post('/any', payload)
    //   console.log(response)
    // },
    // async doChatForPatient() {
    //   const payload = {
    //     put: {
    //       chatUser: {
    //         values: { chatId: 3, userId: 23 },
    //       },
    //     },
    //   }
    //   const response = await this.$axios.post('/any', payload)
    //   console.log(response)
    // },
    // async getDoctor() {
    //   const payload = {
    //     get: {
    //       doctor: {
    //         fields: [
    //           'user',
    //           'userId',
    //           'specialization',
    //           'specializationAdditional',
    //           'aboutMe',
    //           'qualificationCategory',
    //           'academicDegree',
    //         ],
    //       },
    //     },
    //   }
    //   const response = await this.$axios.post('/any', payload)
    //   console.log(response)
    // },
    // async getPatient() {
    //   const payload = {
    //     get: {
    //       patient: {
    //         fields: ['user', 'userId'],
    //       },
    //     },
    //   }
    //   const response = await this.$axios.post('/any', payload)
    //   console.log(response)
    // },
  },
}
</script>

<style lang="scss" scoped>
.custom-link-hover:hover {
  background-color: #469c79;
  color: #fff;
  cursor: pointer;
}
.custom-link-hover {
  & ::v-deep {
    .menu-link__icon {
      color: #469c79;
    }
  }
}
.custom-chat-form {
  & ::v-deep {
    .ui-button--primary {
      background-color: #469c79;
    }
    .ui-chat-form-input__field {
      background-color: #e7f4f1;
    }
    .ui-chat-form-input__field:focus {
      border-color: #469c79;
    }
  }
}
.custom-chat-window {
  & ::v-deep {
    .ui-chat-window__header-line,
    .ui-chat-window__footer-line {
      border-color: #b4e2c7;
    }
    .ui-chat-tick {
      color: #469c79;
    }
  }
}

.custom-chat-member {
  & ::v-deep {
    .ui-avatar__indicator::after {
      background-color: #469c79;
    }
  }
}
</style>

<router>
  {
    path: '/consultations',
    name: 'consultations',
  }
</router>
