<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="url" placeholder="Ingrese URL" />
    <button type="submit">Agregar</button>
    <button @click="store.deleteUrl">Delete</button>
  </form>
</template>

<script lang="ts" setup>
import { useDbStore } from '@/stores/db'
import { ref } from 'vue'
const store = useDbStore()
const url = ref('')
//TODO valida url
const onSubmit = () => {
  
  store.addUrl(url.value)
}
</script>

<style></style>
