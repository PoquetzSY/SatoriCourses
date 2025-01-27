<script>
import ButtonComponent from './common/ButtonComponent.vue';

export default {
  name: 'CardInfo',
  components: {
    ButtonComponent,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      default: 'placeholder',
      validator: (value) => ['platzi', 'udemy', 'youtube', 'placeholder'].includes(value),
    },
  },
  computed: {
    cardImage() {
      return `/public/platformImages/${this.platform}.webp`;
    },
  },
}
</script>

<template>
  <div class="w-full bg-white shadow-md rounded-lg overflow-hidden border border-divider-color">
    <img :src="cardImage" alt="Platform-image" class="w-full h-48 object-cover object-center" />
    <div class="flex flex-col p-4 gap-4">
      <p class="text-lg text-black font-roboto">{{ title }}</p>
      
      <p class="text-base text-gray-secondary truncate">{{ description }}</p>
      
      <div class="flex justify-end gap-4">
        <ButtonComponent variant="primary">
          Detalles
        </ButtonComponent>
        <ButtonComponent variant="outline">
          Avance
        </ButtonComponent>
      </div>
    </div>
  </div>
</template>

<style scoped></style>