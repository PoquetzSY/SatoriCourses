<script>
import router from '@/router';
import FooterUser from '../components/FooterUser.vue'
import TextFieldInput from '../components/TextFieldInput.vue'

export default {
  name: 'LoginView',
  components: {
    FooterUser,
    TextFieldInput,
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      router.push({ name: 'home' })
    },
  },
}
</script>

<template>
  <div class="w-full flex font-nunito login-container">
    <section class="w-1/2 flex items-center">
      <form class="w-[400px] mx-auto flex flex-col gap-y-12" @submit="handleSubmit">
        <div>
          <h1 class="text-3xl font-bold text-blue-satori">Iniciar sesión</h1>
          <p class="text-gray-secondary text-sm font-bold">Plataforma de capacitación</p>
        </div>
        <TextFieldInput label="Correo electrónico" value="" type="email" />
        <TextFieldInput label="Contraseña" value="" type="password" />
        <button class="bg-blue-satori text-white rounded-md p-2 mt-4 w-full cursor-pointer" type="submit">
          Iniciar sesión
        </button>
      </form>
    </section>
    <section class="w-1/2">
      <img class="object-cover w-full h-full" src="./../assets/login-user-image.svg" alt="" />
    </section>
  </div>
  <FooterUser />
</template>

<style scoped>
.login-container {
  height: calc(100vh - 57px);
}
</style>
