<template>
    <main>
        <div class="container">        
            <h1>404</h1>
            <p>URL Requested Not Found.</p>
            <button class="btn" @click="returntoHome">Ok</button>
        </div>
    </main>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
const returntoHome = () => {
    router.push('/');
}
</script>

<style scoped>
@import "../assets/main.css";
.container {
    text-align: center;
}
</style>