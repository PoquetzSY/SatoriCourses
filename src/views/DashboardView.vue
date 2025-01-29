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
  <div class="container mx-auto max-w-screen-2lg px-4 py-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <CardInfo title="Card title" description="Card description" link="https://www.youtube.com/watch?v=XYZ" platform="youtube"/>
      <CardInfo title="Card title" description="Card description" />
      <CardInfo title="Card title" description="Card description" />
      <CardInfo title="Card title" description="Card description" />
    </div>
  </div>
</template>

<style scoped></style>