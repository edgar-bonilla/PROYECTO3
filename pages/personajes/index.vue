<template>
  <div class="container py-5">
    <h3 class="text-warning text-center text-uppercase fw-bold mb-5">Personajes de Game of Thrones</h3>

    <div v-if="characters && characters.length > 0" class="row">
      <div v-for="character in characters" :key="character.id" class="col-12 col-sm-6 col-md-4 mb-4">
        <div class="card h-100 border-0 shadow bg-dark"> 
          <NuxtLink :to="`/personajes/${character.id}`" class="text-decoration-none text-light">
            <img :src="character.imagen" :alt="character.nombre" class="card-img-top img-fluid rounded-top"/>
            <div class="card-body text-light text-center">
              <h5 class="card-title fw-bold text-warning">{{ character.nombre }}</h5>
              <p class="card-text mb-2"><strong>Título:</strong> {{ character.titulo }}</p>
              <p v-if="character.es_comandante" class="card-text text-success mb-2"><strong>Rango:</strong> Comandante</p>
              <p v-else class="card-text mb-2"><strong>Rango:</strong> {{ character.titulo }}</p>
              <p class="card-text mb-0"><strong>Familia:</strong> {{ obtenerNombreCasa(character.casa_id) }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <p v-else class="text-center text-muted">No se encontraron personajes.</p>
  </div>
</template>

<script setup>
const dataPersonajes = await queryContent('personajes').only('items').findOne()
const dataCasas = await queryContent('casas').only('items').findOne()

const characters = dataPersonajes?.items ?? []
const casas = dataCasas?.items ?? []

const obtenerNombreCasa = (casaId) => {
  const casa = casas.find(c => c.id === casaId)
  return casa ? casa.nombre : 'Desconocida'
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

/***** Imagen de la tarjeta *****/
.card-img-top {
  height: 200px;
  object-fit: cover;
  width: 100%;
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

.card-text.text-success {
  font-weight: bold;
  color: #28a745; 
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
