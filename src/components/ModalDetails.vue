<script>
import ButtonComponent from './common/ButtonComponent.vue';

export default {
  components: { ButtonComponent }, 
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    }
  }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

</style>


<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black/70">
      
      <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative flex items-center">
        <img :src="image" alt="Curso" class="w-30 h-30 object-cover rounded-lg mr-6">
        <div class="flex-1">
          <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            ✖
          </button>

          <h2 class="text-xl font-bold text-blue-satori mb-3">{{ title }}</h2>
          <p class="text-gray-700 mb-4">{{ description }}</p>

          <p class="text-blue-satori font-semibold">Link del curso:</p>
          <a 
            v-if="link" 
            :href="link" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-gray-700 mb-4"
          >
            {{ link }}
          </a>

          <div class="mt-4 flex justify-end">
            <ButtonComponent variant="secondary">Iniciar curso</ButtonComponent>
          </div>
        </div>
      </div>

    </div>
  </transition>
</template>

  
 