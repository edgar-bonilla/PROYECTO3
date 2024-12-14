<template>
    <div class="car-details">
      <img :src="car.image" :alt="car.name" class="car-image" />
      <h2>{{ car.name }}</h2>
      <p>{{ car.description }}</p>
      <p class="price">Precio: ${{ car.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      car: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .car-details {
    border: 1px solid #ddd;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
  }
  .car-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .price {
    font-weight: bold;
    color: #2d89ef;
  }
  </style>
  <template>
    <div class="car-details">
      <img :src="car.image" :alt="car.name" class="car-image" />
      <h2>{{ car.name }}</h2>
      <p>{{ car.description }}</p>
      <p class="price">Precio: ${{ car.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      car: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .car-details {
    border: 1px solid #ddd;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
  }
  .car-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .price {
    font-weight: bold;
    color: #2d89ef;
  }
  </style>
  