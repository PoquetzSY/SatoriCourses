<template>
  <div class="flex flex-col font-nunito">
    <label class="text-black text-sm pb-2">{{ label }}</label>
    <div>
      <input
        class="border border-divider-color rounded-2xl py-2 px-4 w-full"
        :type="inputType"
        :value="internalValue"
        @input="updateValue($event.target.value)"
        :placeholder="placeholder"
        :required="required"
      />
      <button
        v-if="type === 'password'"
        class="absolute right-4 top-1/2 transform -translate-y-1/2"
        @click="togglePasswordVisibility"
      >
        <img
          v-if="isPasswordVisible"
          src="/assets/icon/password_show.svg"
          alt="Ocultar contraseña"
        />
        <img v-else src="/assets/icon/password_hide.svg" alt="Mostrar contraseña" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'custom-input',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      required: '',
    },
    type: {
      default: 'text',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isPasswordVisible: false,
    }
  },
  computed: {
    internalValue() {
      return this.value
    },
    inputType() {
      return this.type === 'password' && this.isPasswordVisible ? 'text' : this.type
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible
    },
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style scoped></style>
