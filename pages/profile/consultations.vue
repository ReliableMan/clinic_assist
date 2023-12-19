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
      currentChatId: null,
      messageFromPatient: '',
      messageFromDoctor: '',
      searchField: '',
      message: '',
      file: null,
      item: [],
      idUser: null,
      typeUser: null,
      isPatient: '',
    }
  },
  wamp: {
    initialize: true,
    subscribe: [
      {
        type: 'message',
        subscriber: 'push-message',
      },
      // {
      //   type: 'read',
      //   subscriber: 'chat-dialog-read-message',
      // },
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
  watch: {
    currentChatId() {
      this.checkMessages()
    },
  },
  mounted() {
    if (this.currentChatId) {
      // console.log('я здесь')
      this.checkMessages()
    }
    this.userSettings()
    // this.getCurrentChat()
  },
  methods: {
    checkMessages() {
      this.$store.dispatch('messages/saveMessage', this.currentChatId)
    },
    send() {
      this.$store.dispatch('chat/sendMessage', {
        chatId: this.currentChatId,
        message: this.message,
      })
      setTimeout(() => {
        this.$store.dispatch('messages/saveMessage', this.currentChatId)
      }, 500)
    },
    sendFile(file) {
      this.$store.dispatch('chat/sendFile', {
        chatId: this.currentChatId,
        file,
      })
      this.file = null
      this.$refs.file.$refs.input.value = null
    },
    async userSettings() {
      const user = await this.$axios.get('/me')
      const { id, type } = user.data.user
      this.idUser = id
      // console.log('userId', id)
      this.typeUser = type
      const response2 = await this.$axios.get('/chat/chats')
      // console.log('response2', response2.data)
      const { length } = response2.data
      // проверяем является ли юзер пациентом
      if (type === 2) {
        this.isPatient = true
        if (length) {
          // console.log('чат есть')
          this.currentChatId = response2.data[0].id
          // const payload = {
          //   get: {
          //     chat: {
          //       filter: { id: this.currentChatId },
          //     },
          //   },
          // }
          // const response = await this.$axios.post('/any', payload)
          // console.log(
          //   'инфа о чате - response на получение чата по айдишнику',
          //   response
          // )
        } else {
          // console.log('чата нету ща сделаем')
          // получаем айдишник
          const payload = {
            put: {
              chat: {
                return: ['id'],
              },
            },
          }
          const response3 = await this.$axios.post('/any', payload)
          const { id } = response3.data.put.chat
          // записываем его в переменную currentChatId
          this.currentChatId = id
          // делаем первый запрос в базу на запись (ID чата и ID врача)
          const payloadForDoctor = {
            put: {
              chatUser: {
                values: { chatId: this.currentChatId, userId: 24 },
              },
            },
          }
          await this.$axios.post('/any', payloadForDoctor)
          // делаем второй запрос в базу на запись (ID чата и ID пациента)
          const payloadForPatient = {
            put: {
              chatUser: {
                values: { chatId: this.currentChatId, userId: this.idUser },
              },
            },
          }
          await this.$axios.post('/any', payloadForPatient)
        }
      }
      // проверяем является ли юзер доктором
      if (type === 4) {
        // console.log('i am a doctor')
        // const payload = {
        //   get: {
        //     chat: {
        //       fields: [
        //         'chatMessages',
        //         'chatUsers',
        //         'id',
        //         'createdAt',
        //         'status',
        //       ],
        //     },
        //   },
        // }
        // const response = await this.$axios.post('/any', payload)
        // const { chat } = response.data.get
        // const filteredElements = Object.keys(response2.data)
        // console.log('resp.data', chat)
        // console.log('filteredElememts', filteredElements)
        // console.log('response2.data', response2.data)
      }
    },
    // async getCurrentChat() {
    //   const payload = {
    //     get: {
    //       chat: {
    //         filter: { id: 9 },
    //         fields: ['chatMessages', 'chatUsers'],
    //       },
    //     },
    //   }
    //   const response = await this.$axios.post('/any', payload)
    //   console.log('response3', response.data.get.chat.length)
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
