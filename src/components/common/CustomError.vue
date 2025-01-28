<template>
  <div class="relative">
      <p class="text-xs text-red-600 absolute top-1">
          <slot>{{ text }}</slot>
      </p>
  </div>
</template>

<script>
export default {
  name: "CustomError",
  props: {
      text: {
          type: String,
          default: ''
      },
      forLabel: {
          type: String,
          default: ''
      },
  }
};
</script>
