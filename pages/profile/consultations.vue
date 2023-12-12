<template>
  <layout-with-sidebar>
    <template #sidebar>
      <div class="pv-40 ph-36 mb-20">
        <h2>{{ $t('common.consultations') }}</h2>
      </div>
      <div class="ph-24">
        <ui-input-search
          v-model="searchField"
          :button="false"
          placeholder="Поиск"
        />
      </div>
      <!-- если доктор -->
      <div v-if="$auth.user.user.type === 1" class="mt-30">
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

    <!-- если доктор -->
    <template #main>
      <div style="height: 100vh">
        <ui-chat-window class="custom-chat-window">
          <template #header>
            <!-- если доктор -->
            <div v-if="$auth.user.user.type === 1">
              <ui-chat-header
                title="Евгения Савченко"
                text="был(а) онлайн 16 июня в 22:54"
              ></ui-chat-header>
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
            <!-- если доктор -->
            <ui-chat-messages v-if="$auth.user.user.type === 1">
              <ui-chat-message
                v-for="(msg, index) in messages"
                :key="index"
                :text="msg.message"
                :time="msg.time"
                :self="msg.self"
                :sent="msg.sent"
                :delivered="msg.delivered"
              />
            </ui-chat-messages>
            <!-- если пациент -->
            <ui-chat-messages v-if="$auth.user.user.type === 2">
              <ui-chat-message
                v-for="(msg, index) in messages"
                :key="index"
                :text="msg.message"
                :time="msg.time"
                :self="msg.self"
                :sent="msg.sent"
                :delivered="msg.delivered"
              />
            </ui-chat-messages>
          </template>
          <template #footer>
            <!-- если доктор -->
            <ui-chat-form
              v-if="$auth.user.user.type === 1"
              v-model.lazy="message"
              class="custom-chat-form"
              placeholder="Введите сообщение"
            >
              <template #prepend>
                <ui-chat-attach>
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
                </ui-chat-attach>
              </template>
            </ui-chat-form>
            <!-- если пациент -->
            <ui-chat-form
              v-if="$auth.user.user.type === 2"
              v-model.lazy="message"
              class="custom-chat-form"
              placeholder="Введите сообщение"
              @input="sendMessageFromPatient"
            >
              <template #prepend>
                <ui-chat-attach>
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
                </ui-chat-attach>
              </template>
            </ui-chat-form>
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
      currentChatId: 2,
      messageFromPatient: '',
      messageFromDoctor: '',
      searchField: '',
      message: '',
      messages: [
        {
          message: [
            'Добрый день! <br /> Если ребёнок беспокойный, у него температура и красные набухшие дёсны, то используйте нурофен на ночь. Также есть разные гели и капли. Кому что помогает (вибуркол беби, калгель, камистад, капли беби норм).',
          ],
          time: '11:59',
          self: false,
        },
        {
          message: ['Хорошо'],
          time: '',
          self: true,
        },
        {
          message: ['А что, если это не поможет?'],
          time: '12:05',
          self: true,
          delivered: true,
        },
        {
          message: [
            'Если есть другие проявления, то обратитесь к педиатру на осмотр, обследование и сдачу анализов. Возможно потребуется коррекция лечения. Чаще прикладывайте к груди. Дайте ему холодные грызунки.',
          ],
          time: '12:08',
          self: false,
        },
        {
          message: [
            'По поводу приёма - можно прямо с Вами или придётся обращаться в местную поликлинику?',
          ],
          time: '12:10',
          self: true,
          delivered: true,
        },
        {
          message: ['Тогда не знаю, что делать'],
          time: '12:11',
          self: false,
        },
        {
          message: ['Большое спасибо!'],
          time: '12:12',
          self: true,
          sent: true,
        },
      ],
    }
  },
  // в зависимости от роли переключение на разные layout
  computed: {
    doctors() {
      return this.$store.getters[`consultation-default-users/doctors`]
    },
    patience() {
      return this.$store.getters[`consultation-default-users/patience`]
    },
    //   layout() {
    //     const role = this.$store.getters['user/role']

    //     return `consultation-list-layout-${role}`
    //   },
  },
  // диспатчим в стор асинхронный запрос на получение доктора
  mounted() {
    // this.currentDoctor = this.getCurrentChat()
  },
  methods: {
    //   async getCurrentChat() {
    //     const payload = {
    //       get: {
    //         chat: {
    //           filter: { id: 2 },
    //         },
    //       },
    //     }
    //     const response = await this.$axios.post('/any', payload)
    //     console.log('getCurrentChat', response)
    //   },
    async getChatListAuthorizedUser() {
      const response = await this.$axios.get('/chat/chats')
      console.log(response)
    },
    async sendMessageFromPatient() {
      const payload = {
        chatId: 2,
        message: this.message,
      }
      const response = await this.$axios.post('/chat/send-message', payload)
      console.log(response)
    },
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
