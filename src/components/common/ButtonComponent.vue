<script>
export default {
  name: 'ButtonComponent',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline'].includes(value),
    },
  },
  computed: {
    buttonClass() {
      return {
        'bg-blue-satori text-white hover:bg-yellow-satori hover:text-black':
          this.variant === 'primary',
        'bg-yellow-satori text-black hover:bg-blue-satori hover:text-white':
          this.variant === 'secondary',
        'border border-divider-color text-black hover:border-gray hover:bg-gray hover:text-white':
          this.variant === 'outline',
      }
    },
  },
  methods: {
    handleClick() {
      this.$emit('buttonClick')
    },
  },
}
</script>

<template>
  <button class="px-4 py-2 rounded-md text-center font-roboto transition" :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<style scoped></style>
