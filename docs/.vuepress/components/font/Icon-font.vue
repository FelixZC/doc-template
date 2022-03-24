<template>
  <template v-for="[key, value] in iconList" :key="key">
    <div>:{{ key }}: => {{ value }}</div>
  </template>
</template>
<script setup>
import { reactive } from 'vue'
import iconRef from './icon-ref.js'
const iconList = reactive(Object.entries(iconRef))
</script>
