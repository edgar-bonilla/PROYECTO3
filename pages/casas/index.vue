<template>
  <div class="container py-5">
    <h3 class="text-warning text-center text-uppercase fw-bold mb-5">Casas Destacadas</h3>

    <div v-if="houses && houses.length > 0" class="row">
      <div v-for="house in houses" :key="house.id" class="col-12 col-sm-6 col-md-4 mb-4">
        <div class="card h-100 border-0 shadow bg-dark"> 
          <NuxtLink :to="`/casas/${house.id}`" class="text-decoration-none text-light">
            <div class="card-body text-light text-center">
              <div class="card-img-container">
                <img :src="house.imagen" :alt="house.nombre" class="card-img-top"/>
              </div>
              <h5 class="card-title fw-bold text-warning">{{ house.nombre }}</h5>
              <p class="card-text mb-2"><strong>Lema:</strong> {{ house.lema }}</p>
              <p class="card-text mb-0"><strong>Región:</strong> {{ obtenerNombreRegion(house.region_id) }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <p v-else class="text-center text-muted">No se encontraron casas.</p>
  </div>
</template>

<script setup>
const dataCasas = await queryContent('casas').only('items').findOne()
const dataRegiones = await queryContent('regiones').only('items').findOne()

const houses = dataCasas?.items ?? []
const regiones = dataRegiones?.items ?? []

const obtenerNombreRegion = (regionId) => {
  const region = regiones.find(r => r.id === regionId)
  return region ? region.nombre : 'Desconocida'
}
</script>

<style scoped>
h3 {
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 3px 3px 5px #000;
  font-family: 'Georgia', serif; 
}


.card {
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%; 
  background-color: #2f2f2f; 
  border: 2px solid #444; 
  border-radius: 0.5rem;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5); 
}


.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  font-family: 'Georgia', serif;
}


.card-img-container {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: contain; 
  border: 3px solid #333; 
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  min-height: 150px; 
  padding: 1rem;
  text-align: center;
}
.card-text {
  font-size: 1rem;
  font-family: 'Times New Roman', serif;
}

.text-muted {
  color: #6c757d;
}

.text-warning {
  color: #d39e00; 
}

.text-light {
  color: #f8f9fa; 
}
</style>
