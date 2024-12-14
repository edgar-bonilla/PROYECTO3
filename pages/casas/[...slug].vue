<template>
  <div class="container py-5">
    <h3 class="card-title text-warning text-center text-uppercase fw-bold mb-5">Casa de {{ casa?.nombre }}</h3>


    <div v-if="casa" class="card mx-auto border-dark shadow-lg" style="max-width: 900px; background-color: #1f1f1f;">
      <div class="row g-0">

        <div class="col-md-6 d-flex align-items-center">
          <img :src="casa?.imagen" alt="Imagen de {{ casa?.nombre }}" class="img-fluid rounded-start" />
        </div>

        <div class="col-md-6">
          <div class="card-body text-light">
            <h3 class="card-title text-warning text-center text-uppercase fw-bold">{{ casa?.nombre }}</h3>

            <div class="info-section mt-4">

              <p class="mb-1">
                <strong class="text-warning">Lema: </strong>
                <span>{{ casa?.lema }}</span>
              </p>

              <p class="mb-1">
                <strong class="text-warning">Historia: </strong>
                <span>{{ casa?.historia }}</span>
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


              <div v-if="miembros.length" class="mt-4">
                <strong class="text-warning">Miembros: </strong>
                <ul>
                  <li v-for="miembro in miembros" :key="miembro.id">
                    <NuxtLink :to="`/personajes/${miembro.id}`" class="text-white">
                      {{ miembro.nombre }}
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
      <p class="text-muted">La casa no fue encontrada.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const casaId = route.params.slug

const casasData = await queryContent('casas').only('items').findOne()
const personajesData = await queryContent('personajes').only('items').findOne()
const regionesData = await queryContent('regiones').only('items').findOne()

const casa = casasData?.items?.find(c => c.id === parseInt(casaId))
const region = regionesData?.items?.find(r => r.id === casa?.region_id)


const miembros = personajesData?.items?.filter(p => p.casa_id === casa?.id) ?? []
</script>

<style scoped>

.card {
  border-radius: 1rem;
  background-color: #2a2a2a;
  border: 2px solid #8a1b1b;
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
  max-height: 150px;
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
