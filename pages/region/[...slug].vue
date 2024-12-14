<template>
  <div class="container py-5">
    <h3 class="text-warning text-center text-uppercase fw-bold mb-5">Región: {{ region?.nombre }}</h3>

    <div v-if="region" class="card mx-auto border-dark shadow-lg region-card">
      <div class="row g-0">
        <div class="col-md-6 d-flex align-items-center">
          <img :src="region?.imagen" alt="Imagen de {{ region?.nombre }}" class="img-fluid rounded-start"/>
        </div>

        <div class="col-md-6">
          <div class="card-body text-light">
            <h5 class="card-title text-warning text-center text-uppercase fw-bold">{{ region?.nombre }}</h5>

            <div class="info-section mt-4">
              <p class="mb-1">
                <strong class="text-warning">Descripción: </strong>
                <span>{{ region?.descripcion }}</span>
              </p>

              <div v-if="casas.length" class="mt-4">
                <strong class="text-warning">Casas en la región: </strong>
                <ul>
                  <li v-for="casa in casas" :key="casa.id">
                    <NuxtLink :to="`/casas/${casa.id}`" class="text-white">
                      {{ casa.nombre }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>

              <div v-if="batallas.length" class="mt-4">
                <strong class="text-warning">Batallas en la región: </strong>
                <ul>
                  <li v-for="batalla in batallas" :key="batalla.id">
                    <NuxtLink :to="`/batallas/${batalla.id}`" class="text-white">
                      {{ batalla.nombre }}
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
      <p class="text-muted">La región no fue encontrada.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const regionId = route.params.slug


const regionesData = await queryContent('regiones').only('items').findOne()
const casasData = await queryContent('casas').only('items').findOne()
const batallasData = await queryContent('batallas').only('items').findOne()

const region = regionesData?.items?.find(r => r.id === parseInt(regionId))


const casas = casasData?.items?.filter(c => c.region_id === region?.id) ?? []
const batallas = batallasData?.items?.filter(b => b.region_id === region?.id) ?? []
</script>

<style scoped>

.region-card {
  background-color: #2a2a2a;
  border-radius: 1rem;
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


.info-section a {
  color: #d39e00;
  text-decoration: none;
}

.info-section a:hover {
  text-decoration: underline;
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
