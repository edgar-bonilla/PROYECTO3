<template>
  <div class="container py-5">
    <h3 class="text-center mb-4 text-warning text-uppercase fw-bold"> Contexto Histórico</h3>

    <div v-if="contextoHistorico" class="card mx-auto border-dark shadow-lg" style="max-width: 900px; background-color: #1f1f1f;">
      <div class="row g-0">

       
        <div class="col-md-6 d-flex align-items-center">
          <img :src="batalla?.imagen" alt="Imagen de {{ batalla?.nombre }}" class="img-fluid rounded-start"/>
        </div>

        
        <div class="col-md-6">
          <div class="card-body text-light">
            <h3 class="card-title text-warning text-center text-uppercase fw-bold">{{ batalla?.nombre }}</h3>

            <div class="info-section mt-4">
              <p class="mb-1">
                <strong class="text-warning">Fecha: </strong> 
                <span>{{ batalla?.fecha }}</span>
              </p>

              <p class="mb-1">
                <strong class="text-warning">Resultado: </strong> 
                <span>{{ batalla?.resultado }}</span>
              </p>

          
              <p class="mb-1">
                <strong class="text-warning">Contexto: </strong> 
                <span>{{ contextoHistorico?.descripcion }}</span>
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

   
    <div v-else class="text-center mt-5">
      <p class="text-muted">El contexto histórico no fue encontrado.</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const contextoHistoricoId = route.params.slug 


const contextoHistoricoData = await queryContent('contexto_historico').only('items').findOne()
const batallasData = await queryContent('batallas').only('items').findOne()

const contextoHistorico = contextoHistoricoData?.items?.find(c => c.id === parseInt(contextoHistoricoId))
const batalla = batallasData?.items?.find(b => b.id === contextoHistorico?.batalla_id)
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
