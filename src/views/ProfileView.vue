<template>
  <div>
    <HeaderUser />
    <div class="container mx-auto p-4">
      <div class="flex flex-col gap-4">
        <h1 class="text-2xl font-bold text-black">Perfil</h1>
        <p class="text-gray-secondary">Aquí puedes ver y editar tu perfil</p>
      </div>
    </div>
    <FooterUser />
  </div>
</template>

<script>
import FooterUser from '@/components/FooterUser.vue';
import HeaderUser from '@/components/HeaderUser.vue';

export default {
  name: 'ProfileView',
  components: {
    HeaderUser,
    FooterUser,
  },
}
</script>

<style scoped></style>