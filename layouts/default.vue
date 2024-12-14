<template>
  <div class="main-container">
    <HeaderComponent />
    <div class="content">
      <slot></slot>
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '~/components/HeaderComponent.vue';
import FooterComponent from '~/components/FooterComponent.vue';
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
