<template>
  <div class="flex flex-col font-nunito">
    <label class="text-black text-sm pb-2">{{ label }}</label>
    <div class="relative">
      <input
        class="border border-divider-color rounded-2xl py-2 px-4 w-full pr-10"
        :type="inputType"
        :value="value"
        @input="updateValue"
        :placeholder="placeholder"
        :required="required"
      />
      <div
        v-if="type === 'password'"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        @click="togglePasswordVisibility"
      >
        <img
          v-if="isPasswordVisible"
          src="/src/assets/icons/password-hide.svg"
          alt="Ocultar contraseña"
        />
        <img v-else src="/src/assets/icons/password-show.svg" alt="Mostrar contraseña" />
      </div>
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
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isPasswordVisible: false,
    }
  },
  computed: {
    inputType() {
      return this.type === 'password' && this.isPasswordVisible ? 'text' : this.type
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible
    },
    updateValue(event) {
      this.$emit('input', event.target.value)
      console.log('CustomInput emitted value:', event.target.value) // Log dentro del hijo
    },
  },
}
</script>
