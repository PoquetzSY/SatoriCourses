<script>
import router from '@/router'
import FooterUser from '../components/FooterUser.vue'
import CustomInput from '../components/CustomInput.vue'
import ButtonComponent from '@/components/common/ButtonComponent.vue'

export default {
  name: 'LoginView',
  components: {
    FooterUser,
    CustomInput,
    ButtonComponent,
  },
  computed: {
    isAdmin() {
      return this.$route.meta.role === 'admin';
    },
    color() {
      return this.isAdmin ? 'yellow' : 'blue';
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      if (this.isAdmin) {
        router.push({ name: 'admin-dashboard' });
      } else {
        router.push({ name: 'home' });
      }
    },
  },
}
</script>

<template>
  <div class="w-full flex font-nunito login-container">

    <section class="w-1/2" v-if="isAdmin">
      <img class="object-cover w-full h-full" src="./../assets/login-admin-image.svg" alt="Imagen Admin" />
    </section>

    <section class="w-1/2 flex items-center">
      <form class="w-[400px] mx-auto flex flex-col gap-y-12" @submit="handleSubmit">
        <div>
          <h1 :class="`text-${color}-satori text-3xl font-bold`">Iniciar sesión</h1>
          <p class="text-gray-secondary text-sm font-bold">
            {{ isAdmin ? 'Panel de administrador' : 'Plataforma de capacitación' }}
          </p>
        </div>
        <CustomInput label="Correo electrónico" type="email" :required="true" />
        <CustomInput label="Contraseña" value="" type="password" />
        <ButtonComponent variant="primary">Iniciar sesión</ButtonComponent>
      </form>
    </section>

    <section class="w-1/2" v-if="!isAdmin">
      <img class="object-cover w-full h-full" src="./../assets/login-user-image.svg" alt="Imagen Usuario" />
    </section>
  
  </div>
  <FooterUser />
</template>

<style scoped>
.login-container {
  height: calc(100vh - 57px);
}
</style>
