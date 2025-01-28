<template>
  <div class="flex flex-col font-nunito">
    <label :for="id" class="text-black text-sm pb-2">{{ label }}</label>
    <div class="relative">
      <input
        :id="id"
        :type="inputType"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="border border-divider-color rounded-2xl py-2 px-4 w-full pr-10"
      />
      <div
        v-if="type === 'password'"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        @click="togglePasswordVisibility"
      >
        <img
          v-if="isPasswordVisible"
          src="/src/assets/icons/password-show.svg"
          alt="Mostrar contraseña"
        />
        <img
          v-else
          src="/src/assets/icons/password-hide.svg"
          alt="Ocultar contraseña"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      isPasswordVisible: false,
    };
  },
  computed: {
    inputType() {
      return this.type === "password" && this.isPasswordVisible ? "text" : this.type;
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
  },
};
</script>
