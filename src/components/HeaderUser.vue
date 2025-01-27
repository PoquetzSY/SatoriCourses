<script>
export default {
  name: 'HeaderUser',
}
</script>

<template>
  <header class="bg-blue-variant">
    <nav class="container mx-auto max-w-screen-2lg px-4 py-2 flex items-center gap-x-4 justify-between">
      <img src="./../assets/logo.svg" alt="Logo-satori" class="w-10" />
      <div class="flex gap-x-2 w-full justify-end">
        <router-link to="/dashboard" class="text-black p-2 rounded-lg hover:bg-yellow-variant font-nunito transition">Mis cursos</router-link>
        <router-link to="/courses" class="text-black p-2 rounded-lg hover:bg-yellow-variant font-nunito transition">En proceso</router-link>
        <router-link to="/profile" class="text-black p-2 rounded-lg hover:bg-yellow-variant font-nunito transition">Cursos finalizados</router-link>
      </div>
      <div class="size-10 bg-white rounded-full"></div>
    </nav>
  </header>
</template>

<style scoped></style>