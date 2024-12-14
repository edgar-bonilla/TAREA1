<template>
  <div class="container my-5">
    <h1 class="text-center fw-bold mb-4">Explora los mejores artículos de <span class="text-primary">Sucesos</span></h1>
    <p class="text-center fs-5 text-muted mb-5">
      Mantente al tanto de los eventos más relevantes y noticias impactantes de la actualidad.
    </p>
    <div v-if="data && data.length">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col" v-for="suceso in data" :key="suceso._id">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden h-100">
            <img :src="suceso.image || '/placeholder.jpg'" class="card-img-top" alt="Imagen del artículo">
            <div class="card-body d-flex flex-column">
              <h4 class="card-title fw-bold text-primary mb-5">{{ suceso.title }}</h4>
              <div class="mt-auto">
                <NuxtLink 
                  :to="`/sucesos/${suceso._path?.split('/').pop()}`" 
                  class="btn btn-outline-primary w-100"
                >
                  Leer más
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-center text-muted fs-5">No se encontraron artículos de sucesos.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('sucesos', () =>
  queryContent('/sucesos').find()
);
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h1 span {
  text-decoration: underline;
}

p.text-muted {
  max-width: 500px;
  margin: 0 auto;
}
</style>
