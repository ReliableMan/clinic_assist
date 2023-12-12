<template>
  <ui-input-label :label="label">
    <ui-validator
      v-slot="{ error }"
      :custom-messages="{ required: message }"
      rules="required"
    >
      <ui-input
        v-model="model"
        :error="error"
        :placeholder="label"
        @change="$emit('change', model)"
      />
    </ui-validator>
  </ui-input-label>
</template>

<script>
export default {
  name: 'SettingsTextField',
  props: {
    label: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      model: this.value || '',
    }
  },
}
</script>
