<script setup lang="ts">
import CardComponents from '@/components/CardComponents.vue'
import { useAuthStore } from '@/stores/auth'
import { useDbStore } from '@/stores/db'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const store = useAuthStore()
const dbStore = useDbStore()
const router = useRouter()
const handlerLogut = async () => {
  await store.logout()
  router.push('/login')
}
const getData = async () => {
  await dbStore.getUrls()
}

onMounted( () => {
  getData()
})
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>

        <button
          @click="handlerLogut"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Sign Out
        </button>
      </div>
    </div>
  </div>
  <div v-if="dbStore.loading">
    <p>Cargando.....</p>
  </div>
  <section v-else>
    <CardComponents
      v-for="(item, index) in dbStore.documents"
      :key="index"
      :name="item.id?.name"
      :short="item.id?.short"
      :user="item.id?.user"
    />
  </section>
</template>
