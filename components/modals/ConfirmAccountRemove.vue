<template>
  <ui-modal
    v-slot="{ close }"
    :loading="loading"
    :persistent="loading"
    no-padding
    width="560px"
  >
    <ui-modal-close absolute />

    <modal-notification class="pa-48">
      <template #title>
        <i18n
          path="modals.confirm_remove_account"
          tag="div"
          style="max-width: 404px"
        >
          <template #part0>
            <span class="text-bold text-error">
              {{ $t('modals.confirm_remove_account_parts.0') }}
            </span>
          </template>
        </i18n>
      </template>

      <template #text>
        <i18n
          path="modals.confirm_remove_account_text"
          tag="p"
          style="max-width: 429px"
        >
        </i18n>
      </template>

      <template #image>
        <img
          src="@/assets/images/modals/emergency-icon.png"
          alt="delete image emergency icon"
          class="emergency-icon"
        />
        <img
          src="@/assets/images/modals/man.png"
          alt="delete image man"
          class="man-img"
        />
      </template>

      <template #button>
        <ui-button color="success" width="192px" @click="close">
          {{ $t('modals.cancel') }}
        </ui-button>
      </template>

      <template #cancel>
        <ui-link-button class="text-bold" @click="$emit('confirm')">
          {{ $t('modals.delete') }}
        </ui-link-button>
      </template>
    </modal-notification>
  </ui-modal>
</template>

<script>
import ModalNotification from '@/components/app/ModalNotification'

export default {
  components: {
    ModalNotification,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.emergency-icon {
  position: absolute;
  top: 85px;
  left: 31%;
}
</style>
