<script>
import ButtonComponent from './common/ButtonComponent.vue';

export default {
  name: 'CardInfo',
  components: {
    ButtonComponent,
  },
}
</script>

<template>
  <div class="w-full bg-white shadow-md rounded-lg overflow-hidden">
    <img class="w-full h-[160px] object-cover" src="./../assets/placeholder.png" alt="Card image" />
    <div class="p-4">
      <h1 class="text-xl font-semibold">Card Title</h1>
      <p class="text-gray-500">Card descriptionsdfsdfatsdvfuyssefiadfiogdfiuhdsfigdfhgbdkhjgbdfjhkgbdfhjkgvfdshjghdjsfkgvdhjfkhg</p>
      
      <div class="flex justify-end gap-4 mt-4">
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