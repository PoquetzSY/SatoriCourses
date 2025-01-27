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
        'bg-primary-color text-white-color hover:bg-secondary-color': this.variant === 'primary',
        'bg-white-color text-primary-color hover:bg-primary-color hover:text-white-color':
          this.variant === 'secondary',
        'border border-white text-white-color hover:border-secondary-color hover:text-white-color':
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
  <button class="px-4 py-2 rounded-md text-center" :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<style scoped></style>
