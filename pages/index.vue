<template>
  <div>

    <section class="hero text-center text-white d-flex align-items-center justify-content-center">
      <div class="container position-relative z-index-2">
        <h1 class="display-1 fw-bold mb-4">Bienvenidos a Game of Thrones</h1>
        <p class="lead fs-4">Explora las Casas, los Personajes y los eventos históricos de este mundo legendario.</p>
        <NuxtLink to="/personajes" class="btn btn-warning btn-lg mt-4">Descubrir Personajes</NuxtLink>
      </div>
    </section>

    <section class="quick-access bg-dark py-5">
      <div class="container text-center">
        <h2 class="fw-bold text-white mb-4">Acceso Rápido a las Casas</h2>
        <div class="d-flex flex-wrap justify-content-center gap-4">
          <NuxtLink to="/casas/1" class="btn btn-outline-warning">Casa Arryn</NuxtLink>
          <NuxtLink to="/casas/2" class="btn btn-outline-warning">Casa Stark</NuxtLink>
          <NuxtLink to="/casas/3" class="btn btn-outline-warning">Casa Targaryen</NuxtLink>
          <NuxtLink to="/casas/4" class="btn btn-outline-warning">Casa Lannister</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Estilo para la sección Hero */
.hero {
  background: url('/imagenes/image.png') no-repeat center center;
  background-size: cover;
  height: 100vh;
  color: #fff;
  position: relative;
  
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.hero h1 {
  font-size: 3rem;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
  text-transform: uppercase;
}

.hero p {
  font-size: 1.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
}

.hero .btn {
  font-size: 1.25rem;
  padding: 15px 30px;
  text-transform: uppercase;
  font-weight: bold;
}

/* Sección de acceso rápido */
.quick-access {
  background-color: #1c1c1c;
  color: #fff;
}

.quick-access h2 {
  font-size: 2.5rem;
  color: #ffc107;
}

.quick-access .btn {
  font-size: 1.25rem;
  padding: 12px 30px;
  border-radius: 5px;
  transition: all 0.3s;
}

.quick-access .btn-outline-warning {
  color: #ffc107;
  border: 2px solid #ffc107;
}

.quick-access .btn-outline-warning:hover {
  background-color: #ffc107;
  color: #1c1c1c;
}
</style>
