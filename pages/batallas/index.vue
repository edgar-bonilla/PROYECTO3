<template>
  <div class="container py-5">
    <h3 class="text-warning text-center text-uppercase fw-bold mb-5">Batallas Memorables</h3>

    <div v-if="batallas && batallas.length > 0" class="row">
      <div v-for="batalla in batallas" :key="batalla.id" class="col-12 col-sm-6 col-md-4 mb-4">
        <div class="card h-100 border-0 shadow bg-dark"> 
          <NuxtLink :to="`/batallas/${batalla.id}`" class="text-decoration-none">
            <img 
              :src="batalla.imagen" 
              :alt="batalla.nombre" 
              class="card-img-top img-fluid rounded-top"
            />
            <div class="card-body text-light text-center"> 
              <h5 class="card-title fw-bold text-warning">{{ batalla.nombre }}</h5>
              <p class="card-text mb-2"><strong>Fecha:</strong> {{ batalla.fecha }}</p>
              <p class="card-text mb-2"><strong>Lugar:</strong> {{ batalla.lugar }}</p>
              <p class="card-text mb-0"><strong>Resultado:</strong> {{ batalla.resultado }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <p v-else class="text-center text-muted">No se encontraron batallas.</p>
  </div>
</template>

<script setup>
const dataBatallas = await queryContent('batallas').only('items').findOne()
const batallas = dataBatallas?.items ?? []
</script>

<style scoped>

h3 {
  font-size: 2rem;
  text-shadow: 3px 3px 5px #000;
  font-family: 'Georgia', serif; 
}


.card {
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%; 
  background-color: #212529; 
  color: #fff; 
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
}


.card-img-top {
  height: 200px; 
  object-fit: cover;
}


.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  min-height: 150px; 
  color: #fff; 
}


.card-body .card-text {
  flex-grow: 1; 
}
</style>
