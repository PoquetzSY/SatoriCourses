<template>
  <div class="flex flex-col font-nunito">
    <label class="text-black text-sm pb-2">{{ label }}</label>
    <div class="relative">
      <input
        class="border border-divider-color rounded-2xl py-2 px-4 w-full pr-10"
        :type="inputType"
        v-model="internalValue"
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
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
    },
    type: {
      type: String,
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
      internalValue: this.value,
    }
  },
  computed: {
    inputType() {
      return this.type === 'password' && this.isPasswordVisible ? 'text' : this.type
    },
  },
  watch: {
    value(newValue) {
      this.internalValue = newValue
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible
    },
    updateValue(event) {
      this.$emit('input', event)
    },
  },
}
</script>

<style scoped></style>
