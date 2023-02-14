<template>
    <main>
        <div v-if="car" class="container">        
            <h2>{{ car.make }}</h2>
            <p>Body: {{ car.body }}</p>
            <p>Price: ${{ car.price }}</p>
            <p>Year: {{ car.year }}</p>

            <!-- dealer and manufacturer details -->
            <RouterView/>
            <button class="btn" @click="router.back()">Go Back</button>
        </div>
        <div v-else class="error">
            <h2>Car Not Found.</h2>
            <button class="btn" @click="returntoHome">Ok</button>
        </div>
    </main>
</template>

<script setup>
import {useRouter, useRoute, RouterView} from 'vue-router';
import {ref, onBeforeMount} from 'vue';
import cars from "../assets/data.json";

let car = ref(null);
const route = useRoute();
const router = useRouter(); // router.back() remembers history
// console.log(typeof(route)); // Object
// console.log(route.params); // id of the GET request

const { id } = route.params;

onBeforeMount(() => {
    // find the particular id
    car.value = cars.find(c => c.id === parseInt(id)); // id in route object is a string (so requires casting for comparison)
})

const returntoHome = () => {
    router.push('/');
}
</script>

<style scoped>
@import "../assets/main.css";
.container {
    text-align: center;
}
.error{
    color: red;
    text-align: center;
}
</style>