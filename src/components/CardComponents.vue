<template>
  <section>
    <p>{{ user }}</p>
    <p>{{ short }}</p>
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

