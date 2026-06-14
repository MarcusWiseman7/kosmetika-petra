<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';
import '@/assets/main.css';
</script>

<template>
  <div class="page-wrapper">
    <TheNavbar />
    <RouterView />
    <TheFooter />
  </div>
</template>

<style scoped>
.page-wrapper {
  max-width: 1600px;
  margin: 0 auto;
  overflow: hidden;
}
</style>
