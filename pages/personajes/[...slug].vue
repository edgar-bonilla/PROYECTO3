<template>
  <div class="container py-5">
    <h3 class="card-title text-warning text-center text-uppercase fw-bold mb-5">{{ personaje?.nombre }}</h3>

    <div v-if="personaje" class="card mx-auto border-dark shadow-lg" style="max-width: 900px; background-color: #1f1f1f;">
      <div class="row g-0">

      
        <div class="col-md-6 d-flex align-items-center">
          <img :src="personaje?.imagen" alt="Imagen de {{ personaje?.nombre }}" class="img-fluid rounded-start"/>
        </div>

      
        <div class="col-md-6">
          <div class="card-body text-light">
            <div class="info-section mt-4">
              <p class="mb-1">
                <strong class="text-warning">Casa: </strong> 
                <NuxtLink :to="`/casas/${personaje?.casa_id}`" class="text-white">
                  {{ personaje?.familia }}
                </NuxtLink>
              </p>

              <p class="mb-1">
                <strong class="text-warning">Título: </strong> 
                <span>{{ personaje?.titulo }}</span>
              </p>

              <p class="mb-1">
                <strong class="text-warning">Aliados: </strong> 
                <span>{{ personaje?.aliados.join(', ') }}</span>
              </p>

              <p class="mb-1">
                <strong class="text-warning">Enemigos: </strong> 
                <span>{{ personaje?.enemigos.join(', ') }}</span>
              </p>

              <p class="mb-1">
                <strong class="text-warning">Historia: </strong> 
                <span>{{ personaje?.historia }}</span>
              </p>

           
              <div v-if="batallas.length" class="mt-4">
                <strong class="text-warning">Batallas: </strong>
                <ul>
                  <li v-for="batalla in batallas" :key="batalla.id">
                    <NuxtLink :to="`/batallas/${batalla.id}`" class="text-warning">
                      {{ batalla.nombre }}
                    </NuxtLink> - <span>{{ batalla.fecha }}</span>
                  </li>
                </ul>
              </div>

            </div>

            <p v-if="personaje?.es_comandante" class="mt-4 text-success text-center">
              <strong>Rango: Comandante de la Guardia de la Noche</strong>
            </p>
          </div>
        </div>

      </div>
    </div>


    <div v-else class="text-center mt-5">
      <p class="text-muted">El personaje no fue encontrado.</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const personajeId = route.params.slug 


const personajesData = await queryContent('personajes').only('items').findOne()
const casasData = await queryContent('casas').only('items').findOne()
const batallasData = await queryContent('batallas').only('items').findOne()

const personaje = personajesData?.items?.find(p => p.id === parseInt(personajeId))
const batallas = batallasData?.items?.filter(b => personaje?.batallas_id.includes(b.id)) ?? []
const casa = casasData?.items?.find(c => c.id === personaje?.casa_id)
</script>

<style scoped>

.card {
  border-radius: 1rem;
  background-color: #2a2a2a; 
  border: 2px solid #444; 
}


.card-title {
  font-size: 2rem;
  font-family: 'Georgia', serif;
  text-shadow: 2px 2px 5px #000;
}


.card-body {
  padding: 2rem;
  font-family: 'Times New Roman', serif;
  text-align: left;
}

.card-img-top {
  max-height: 300px;
  object-fit: cover;
  border-radius: 0.75rem;
  border: 4px solid #444; 
}


.info-section p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #d1d1d1;
}

.info-section strong {
  color: #d39e00; 
}

.container {
  background-color: #121212;
  padding-top: 2rem;
}


.text-muted {
  color: #8a8a8a;
}
</style>
