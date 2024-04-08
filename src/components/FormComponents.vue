<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="url" placeholder="Ingrese URL" />
    <button type="submit">Agregar</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const url = ref('')
const onSubmit = () => {
  alert('Hola Mundo')
}
</script>

<style></style>
