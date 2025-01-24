<script>
export default {
  name: 'HeaderUser',
}
</script>

<template>
  <header class="bg-blue-variant">
    <nav class="container mx-auto max-w-screen-2lg px-4 flex items-center">
      <img src="./../assets/logo.svg" alt="Logo-satori" class="w-8" />
      <div>
        <router-link to="/dashboard" class="text-white font-bold ml-4">Mis cursos</router-link>
        <router-link to="/courses" class="text-white font-bold ml-4">En proceso</router-link>
        <router-link to="/profile" class="text-white font-bold ml-4">Cursos finalizados</router-link>
      </div>
      <div class="size-8 bg-white rounded-full"></div>
    </nav>
  </header>
</template>

<style scoped></style>