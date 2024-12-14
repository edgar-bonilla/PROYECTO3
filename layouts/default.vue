<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Header -->
    <header class="bg-dark text-white p-3">
      <nav>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <NuxtLink class="nav-link text-white" to="/">Inicio</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-white" to="/personajes">Personajes</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-white" to="/casas">Casas</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/batallas" class="nav-link text-white">Batallas</NuxtLink>

          </li>
        </ul>
      </nav>
    </header>
  
    <main class="flex-grow-1 container my-4">
      <NuxtPage/>
    </main>
  
    <footer class="bg-dark text-white text-center p-3">
      <p>&copy; 2024 Game of Thrones - Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>

</style>
