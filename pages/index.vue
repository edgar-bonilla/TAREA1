<template>
  <div class="d-flex justify-content-center my-5">
    <section class="container">
      <br><br><br>
      <h2 class="text-center mb-4 fs-2 fw-bold">Secciones de Noticias</h2>
      <br><br><br>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
        <!-- Deportes -->
        <div class="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
          <NuxtLink to="/deportes" class="text-decoration-none">
            <div class="card border-0 shadow-lg rounded-4 overflow-hidden" style="width: 100%; max-width: 350px;">
              <img src="/images/costa Rica.png" class="card-img-top" alt="Deportes">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fs-4 fw-bold">Deportes</h5>
                <p class="card-text fs-6 flex-grow-1">Últimas noticias y eventos deportivos. Haz clic para explorar más.</p>
                <a href="/deportes" class="btn btn-primary mt-3 align-self-center">Ver Deportes</a>
              </div>
            </div>
          </NuxtLink>
        </div>
        <!-- Espectáculos -->
        <div class="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
          <NuxtLink to="/espectaculos" class="text-decoration-none">
            <div class="card border-0 shadow-lg rounded-4 overflow-hidden" style="width: 100%; max-width: 350px;">
              <img src="/images/espectaculos.webp" class="card-img-top" alt="Espectáculos">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fs-4 fw-bold">Espectáculos</h5>
                <p class="card-text fs-6 flex-grow-1">Todo sobre los últimos eventos y noticias del mundo del entretenimiento.</p>
                <a href="/espectaculos" class="btn btn-primary mt-3 align-self-center">Ver Espectáculos</a>
              </div>
            </div>
          </NuxtLink>
        </div>
        <!-- Sucesos -->
        <div class="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
          <NuxtLink to="/sucesos" class="text-decoration-none">
            <div class="card border-0 shadow-lg rounded-4 overflow-hidden" style="width: 100%; max-width: 350px;">
              <img src="/images/susesos.jpeg" class="card-img-top" alt="Sucesos">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fs-4 fw-bold">Sucesos</h5>
                <p class="card-text fs-6 flex-grow-1">Noticias sobre los eventos más recientes y relevantes en la comunidad.</p>
                <a href="/sucesos" class="btn btn-primary mt-3 align-self-center">Ver Sucesos</a>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-img-top:hover {
  transform: scale(1.05);
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
