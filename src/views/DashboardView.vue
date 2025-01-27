<script>
import CardInfo from '@/components/CardInfo.vue';
import HeaderUser from '@/components/HeaderUser.vue';

export default {
  name: 'DashboardView',
  components: {
    HeaderUser,
    CardInfo,
  },
}
</script>

<template>
  <HeaderUser />
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-semibold mb-4">Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <CardInfo />
      <CardInfo />
      <CardInfo />
      <CardInfo />
      <CardInfo />
    </div>
  </div>
</template>

<style scoped></style>