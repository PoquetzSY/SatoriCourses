<script>
export default {
  name: 'HeaderUser',
    data() {
      return {
        showMenu: false,
      };
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      logout() {
        // Implement logout logic here
        console.log('Logging out...');
      },
    },
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
      <div class="relative">
          <div class="size-10 bg-white rounded-full cursor-pointer" @click="toggleMenu"></div>
          <div v-if="showMenu" class="absolute right-0 mt-4 w-48 bg-[#D9D9D9] rounded-md shadow-lg py-1 z-20">
            <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Perfil</router-link>
            <a href="#" @click.prevent="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cerrar sesión</a>
          </div>
        </div>
    </nav>
  </header>
</template>

<style scoped></style>