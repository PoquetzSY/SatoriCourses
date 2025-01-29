<template>
  <div class="w-full flex font-nunito login-container">
    <section class="w-1/2" v-if="isAdmin">
      <img
        class="object-cover w-full h-full"
        src="./../assets/login-admin-image.svg"
        alt="Imagen Admin"
      />
    </section>

    <section v-else class="w-1/2 order-last">
      <img class="object-cover w-full h-full" src="./../assets/login-user-image.svg" alt="" />
    </section>

    <section class="w-1/2 flex items-center">
      <form class="w-[400px] mx-auto flex flex-col gap-y-12" @submit.prevent="submitForm">
        <div>
          <h1 :class="`text-${color}-satori text-3xl font-bold`">Iniciar sesión</h1>
          <p class="text-gray-secondary text-sm font-bold">
            {{ isAdmin ? 'Panel de administrador' : 'Plataforma de capacitación' }}
          </p>
        </div>
        <div>
          <CustomInput
            id="email"
            label="Correo electrónico"
            type="email"
            placeholder="correo electrónico"
            v-model="formData.email"
            required
            @input="clearError('email')"
          />
          <CustomError v-if="errorMessages.email">{{ errorMessages.email }}</CustomError>
        </div>
        <div>
          <CustomInput
            id="password"
            label="Contraseña"
            type="password"
            placeholder="contraseña"
            v-model="formData.password"
            required
            @input="clearError('password')"
          />
          <CustomError v-if="errorMessages.password">{{ errorMessages.password }}</CustomError>
        </div>
        <ButtonComponent :variant="variant">Iniciar sesión</ButtonComponent>
      </form>
    </section>
  </div>
  <FooterUser />
</template>

<script>
import CustomError from '@/components/common/CustomError.vue'
import FooterUser from '../components/FooterUser.vue'
import CustomInput from '../components/common/CustomInput.vue'
import ButtonComponent from '@/components/common/ButtonComponent.vue'

export default {
  name: 'LoginView',
  components: {
    FooterUser,
    CustomInput,
    ButtonComponent,
    CustomError,
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
      errorMessages: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    isAdmin() {
      return this.$route.meta.role === 'admin'
    },
    color() {
      return this.isAdmin ? 'yellow' : 'blue'
    },
    variant() {
      return this.isAdmin ? 'primary' : 'secondary'
    },
  },
  methods: {
    clearError(field) {
      this.errorMessages[field] = ''
    },
    submitForm() {
      const { email, password } = this.formData
      if (!email) {
        this.errorMessages.email = 'El correo electrónico es requerido'
      }
      if (!password) {
        this.errorMessages.password = 'La contraseña es requerida'
      }
      console.log(this.formData)
    },
  },
}
</script>

<style scoped>
.login-container {
  height: calc(100vh - 57px);
}
</style>
