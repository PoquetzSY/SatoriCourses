<template>
  <div class="w-full flex font-nunito login-container">
    <section class="w-1/2 flex items-center">
      <form class="w-[400px] mx-auto flex flex-col gap-y-12" @submit.prevent="handleSubmit">
        <div>
          <h1 class="text-3xl font-bold text-blue-satori">Iniciar sesión</h1>
          <p class="text-gray-secondary text-sm font-bold">Plataforma de capacitación</p>
        </div>
        <div>
          <CustomInput
            label="Correo electrónico"
            type="email"
            placeholder="Correo electrónico"
            :required="true"
            v-model="credentials.email"
            @input="clearError('email')"
          />
          <CustomError v-if="errorMessages.email">{{ errorMessages.email }}</CustomError>
        </div>
        <div>
          <CustomInput
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            :required="true"
            v-model="credentials.password"
            @input="clearError('password')"
          />

          <CustomError v-if="errorMessages.password">{{ errorMessages.password }}</CustomError>
        </div>
        <ButtonComponent variant="primary">Iniciar sesión</ButtonComponent>
      </form>
    </section>
    <section class="w-1/2">
      <img class="object-cover w-full h-full" src="./../assets/login-user-image.svg" alt="" />
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
      credentials: {
        email: '',
        password: '',
      },
      errorMessages: {
        email: '',
        password: '',
      },
      isSubmitting: false,
    }
  },
  watch: {
    credentials: {
      deep: true,
      handler(newCredentials) {
        console.log('Updated credentials:', newCredentials) // Log cuando cambian los valores
      },
    },
  },

  methods: {
    validateForm() {
      this.errorMessages = {}
      let isValid = true

      if (!this.credentials.email.trim()) {
        this.errorMessages.email = 'El correo electrónico es requerido'
        isValid = false
      }

      if (!this.credentials.password.trim()) {
        this.errorMessages.password = 'La contraseña es requerida'
        isValid = false
      }

      return isValid
    },

    clearError(field) {
      this.errorMessages[field] = ''
    },

    validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
      return re.test(email)
    },

    validatePassword(password) {
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      return re.test(password)
    },

    async handleSubmit() {
      console.log(this.credentials)
      if (this.isSubmitting) return
      this.isSubmitting = true

      if (!this.validateForm()) {
        this.isSubmitting = false
        return
      }

      try {
        console.log('Formulario enviado')
      } catch (error) {
        console.error(error)
      } finally {
        this.isSubmitting = false
      }
    },
  },
}
</script>

<style scoped>
.login-container {
  height: calc(100vh - 57px);
}
</style>
