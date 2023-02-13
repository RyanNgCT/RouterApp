<template>
    <main class="container">
      <!-- <div class="links">
        <a href="/">Home</a>
        <a href="/about">About Page</a>
      </div> -->
      <h1>Our Cars</h1>

      <select v-model="make" @change="handleQueryChange">
        <option value="">Please select an option...</option>
        <option value="All">All</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Porsche">Porsche</option>
        <option value="Audi">Audi</option>
        <option value="Buick">Buick</option>
      </select>

      <div class="price-range">
        <label for="price">Maximum Price: $ </label>
        <input type="number" v-model="price" @change="handleQueryChange"/>
      </div>

      <div class="cards">
        <!-- <span v-for="car in cars" class="carsSpan">
          <RouterLink :to="`/car/${car.id}`">
            <h2>{{ car.make }} - {{ car.year }}</h2> 
            <p>${{ car.price }}</p>
          </RouterLink>
        </span> -->
        <div
        v-for="car in cars" 
        class="carsSpan"
        @click="router.push(`/car/${car.id}`)"
        >
          <h2>{{ car.make }} - {{ car.year }}</h2> 
          <p>${{ car.price }}</p>
        </div>
      </div>
    </main>
  </template>
  
<script setup>
import carsData from "../assets/data.json";
import {ref, watch, onMounted} from 'vue'; // to store cars as a piece of state
// import {RouterLink} from 'vue-router';
import {useRouter, useRoute} from 'vue-router';

const cars = ref(carsData);
const make = ref("");
const router = useRouter();
const route = useRoute();
const price = ref(0);

// bind query param to 
onMounted(() => {
  make.value = route.query.make || ""; // need to check empty string (app initialize)
  price.value = route.query.price;
});

// watching 2 params - make and price
watch([make, price], () => {
  if (price.value > 0) {
    if(make.value){
      if(make.value === "All"){
        cars.value = carsData.filter(c => {
          return c.price <= price.value
        }); 
      }
      else{
         // need return statement for .filter (not entirely sure why)
        cars.value = carsData.filter(c => {return c.make === make.value && c.price <= price.value});
      }
    }
  }
  else{
    if(make.value === "All"){
      cars.value = carsData;
    }
    else{
      cars.value = carsData.filter(c => {return c.make === make.value}); 
    }
  }
});

const handleQueryChange = () => {
  router.push(
    {
      query: {
        make: make.value,
        maxPrice: price.value,
      }
    }
  );
}

</script>

<style scoped>
@import "../assets/main.css";
.cards{
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
}

.carsSpan{
  box-shadow: 1px 1px 10px rgba(0,0,0, 0.207);
  padding: 15px;
  width: 150px;
  margin-right: 15px;
  cursor: pointer; /* change cursor to select hand */
  margin-bottom: 20px;
}

.links {
  padding: 20px;
}

.links a{
  margin: 0 5px;
}

h2 {
  font-family: Georgia, 'Times New Roman', Times, serif
}

.price-range {
  padding: 10px;
}
</style>
