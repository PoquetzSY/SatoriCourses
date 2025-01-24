<script>
export default {
  name: 'TextFieldInput',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      default: 'text',
    },
    error: {
      type: String,
      required: false,
    },
  },
}
</script>

<template>
  <div class="flex flex-col font-nunito">
    <label class="text-black text-sm pb-2" for="">{{ label }}</label>
    <input class="border border-divider-color rounded-2xl py-2 px-4" :type="type" :value="value" />
    <p class="text-red-500 text-sm">{{ error }}</p>
  </div>
</template>

<style scoped></style>
