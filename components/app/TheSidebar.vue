<template>
  <div class="flex-1 d-flex flex-column">
    <div class="flex-1">
      <div class="d-flex content-center">
        <logo-stamp
          :large="expanded"
          :label="expanded ? $t('system.stamp_logo_large') : ''"
        />
      </div>

      <ui-divider class="text-blue-light-1 mv-36" horizontal />

      <div class="d-flex content-center mb-36">
        <ui-doctor-avatar :avatar="$store.getters['user/avatar']" />
        <div
          v-if="expanded"
          class="pt-4 ml-12 fs-14 lh-20"
          style="min-width: 1px"
        >
          <div class="text-ellipsis">{{ $auth.user.profile.name }}</div>
          <div class="text-ellipsis">{{ $auth.user.profile.surname }}</div>
        </div>
      </div>

      <the-sidebar-menu :expanded="expanded" @collapse="$emit('collapse')">
        <template v-if="dialogues_notify_count" #dialogues>
          <ui-circle-notify bg="primary">
            {{ $auth.user.profile.name }}
          </ui-circle-notify>
        </template>
        <template v-if="councils_notify_count" #councils>
          <ui-circle-notify bg="primary">
            {{ $auth.user.profile.name }}
          </ui-circle-notify>
        </template>
        <template v-if="consultations_notify_count" #consultations>
          <ui-circle-notify bg="primary">
            {{ $auth.user.profile.name }}
          </ui-circle-notify>
        </template>
      </the-sidebar-menu>
    </div>

    <div v-if="expanded" class="mt-12">
      <div class="d-flex content-center">
        <nuxt-link :to="localePath('terms-of-use')" class="d-flex items-center">
          <ui-icon name="file" class="mr-6" :size="[10, 12]" />
          <span class="fs-10 lh-12 text-bold">{{
            $t('common.legal_information')
          }}</span>
        </nuxt-link>
      </div>

      <ui-divider class="text-blue-light-1 mv-36" horizontal />

      <div class="text-center">
        <div class="d-flex content-center">
          <div>
            <div class="mb-6 d-flex content-center">
              <logo-qapsula />
            </div>
            <div class="fs-10 lh-13">
              Реализация проекта при поддержке <br />
              ООО "Новартис Фарма"
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoStamp from '@/components/app/LogoStamp.vue'
// import LogoBase from '@/components/app/LogoBase.vue'
import LogoQapsula from '@/components/app/LogoQapsula.vue'
import TheSidebarMenu from '@/components/app/TheSidebarMenu'

export default {
  components: {
    LogoStamp,
    // LogoBase,
    LogoQapsula,
    TheSidebarMenu,
  },
  props: {
    expanded: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    consultations_notify_count() {
      return this.$store.getters['notifications/count']
    },
    dialogues_notify_count() {
      return this.$store.getters['chat-unread-messages/dialogues_count']
    },
    councils_notify_count() {
      return this.$store.getters['chat-unread-messages/councils_count']
    },
  },
}
</script>
