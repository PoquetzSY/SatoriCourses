<script>
export default {
  name: 'CardInfo',
}
</script>

<template>
  <div class="w-full bg-white shadow-md rounded-lg overflow-hidden">
    <img class="w-full h-[160px] object-cover" src="./../assets/placeholder.png" alt="Card image" />
    <div class="p-4">
      <h1 class="text-xl font-semibold">Card Title</h1>
      <p class="text-gray-500">Card description</p>
      
      <div class="flex justify-between items-center mt-4">
        <button class="bg-blue-satori text-white-color hover:bg-yellow-satori">Action</button>
        <button class="border border-white text-white-color hover:border-secondary-color hover:text-white-color">Action</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>