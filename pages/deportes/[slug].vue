<script setup lang="ts">
const route = useRoute();
const { data, error } = await useAsyncData('deporte', () =>
  queryContent(`/deportes/${route.params.slug}`).findOne()
);

if (error.value) {
  console.error('Error loading content:', error.value);
}
</script>

<template>
  <div class="container my-5">
    <div v-if="data" class="card">
      <h1 class="mb-4 text-center article-title">{{ data.title }}</h1>
      <img :src="data.image" class="img-fluid mb-4" alt="Imagen del artículo" v-if="data.image">
      <div class="article-content">
        <ContentRenderer :value="data" />
      </div>
    </div>
    <div v-else>
      <p>No se pudo cargar el artículo.</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.card {
  background: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 1rem;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.article-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.article-content {
  line-height: 1.8;
  color: #2d3436;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0.5rem;
}

.article-content p {
  margin-bottom: 1.5rem;
}

.article-content h2,
.article-content h3 {
  margin-top: 2rem;
  color: #34495e;
  font-weight: 600;
}

.article-content a {
  color: #3498db;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.article-content a:hover {
  color: #2980b9;
}

.img-fluid {
  max-height: 450px;
  object-fit: cover;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.img-fluid:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
</style>
