<template>
  <template v-for="[key, value] in iconList" :key="key">
    <div>:{{ key }}: => {{ value }}</div>
  </template>
</template>
<script setup>
  import iconRef from "./icon-ref.js";
  import { reactive } from "vue";
  const iconList = reactive(Object.entries(iconRef));
</script>
