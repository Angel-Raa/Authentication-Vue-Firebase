<template>
  <section>
    <p>{{ user }}</p>
    <p>{{ short }}</p>
    <p>{{ name }}</p>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  name?: string
  short?: string
  user?: string
}>()
</script>

<style></style>
