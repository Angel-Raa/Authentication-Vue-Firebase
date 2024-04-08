<template>
  <section>
    <p>{{ user ?? 'Usuario no especificado' }}</p>
    <p>{{ short }}</p>
    <p>{{ name }}</p>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  name?: string
  short?: string
  user?: string
}>()
console.log(props.name)
</script>

<style></style>
