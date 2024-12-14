<template>
  <div class="container py-5">
    <h3 class="card-title text-warning text-center text-uppercase fw-bold mb-5">{{ batalla?.nombre }}</h3>

    <div v-if="batalla" class="card mx-auto border-dark shadow-lg" style="max-width: 900px; background-color: #1f1f1f;">
      <div class="row g-0">

        <div class="col-md-6 d-flex align-items-center">
          <img :src="batalla?.imagen" alt="Imagen de {{ batalla?.nombre }}" class="img-fluid rounded-start"/>
        </div>
        
        <div class="col-md-6">
          <div class="card-body text-light">
            <div class="info-section mt-4">
              <p class="mb-1">
                <strong class="text-warning">Tipo de Batalla: </strong> 
                <span>{{ batalla?.tipos_de_batalla }}</span>
              </p>

              <p class="mb-1">
                <strong class="text-warning">Fecha: </strong> 
                <span>{{ batalla?.fecha }}</span>
              </p>

              <p class="mb-1">
                <strong class="text-warning">Resultado: </strong> 
                <span>{{ batalla?.resultado }}</span>
              </p>

              <p class="mb-1">
                <strong class="text-warning">Lugar: </strong> 
                <span>{{ batalla?.lugar }}</span>
              </p>
              
              <p class="mb-1">
                <strong class="text-warning">Región: </strong>
                <span>
                  <NuxtLink v-if="region" :to="`/region/${region.id}`" class="text-white">
                    {{ region?.nombre }}
                  </NuxtLink>
                  <span v-else>'Desconocida'</span>
                </span>
              </p>

              <p class="mb-1">
                <strong class="text-warning">Descripción: </strong> 
                <span>{{ batalla?.descripcion }}</span>
              </p>

              <p class="mt-3">
                <strong class="text-warning">Contexto Histórico: </strong>
                <span>
                  <NuxtLink 
                    v-if="contextoHistorico" 
                    :to="`/contexto_historico/${contextoHistorico.id}`" 
                    class="text-white">
                     Contexto histórico
                  </NuxtLink>
                  <span v-else>Sin detalles históricos disponibles</span>
                </span>
              </p>

              <div v-if="personajes.length" class="mt-4">
                <strong class="text-warning">Personajes Relacionados: </strong>
                <ul>
                  <li v-for="personaje in personajes" :key="personaje.id">
                    <NuxtLink :to="`/personajes/${personaje.id}`" class="text-warning">
                      {{ personaje.nombre }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center mt-5">
      <p class="text-muted">La batalla no fue encontrada.</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const batallaId = route.params.slug 

const batallasData = await queryContent('batallas').only('items').findOne()
const personajesData = await queryContent('personajes').only('items').findOne()
const contextoHistoricoData = await queryContent('contexto_historico').only('items').findOne()
const regionesData = await queryContent('regiones').only('items').findOne()

const batalla = batallasData?.items?.find(b => b.id === parseInt(batallaId))
const personajes = personajesData?.items?.filter(p => p.batallas_id?.includes(batalla?.id)) ?? []
const contextoHistorico = contextoHistoricoData?.items?.find(c => c.batalla_id === batalla?.id)
const region = regionesData?.items?.find(r => r.id === batalla?.region_id)
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
