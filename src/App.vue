<template>
  <!-- <div class="links">
    <a href="/">Home</a>
    <a href="/about">About Page</a>
  </div> -->

  <div class="links">
    <RouterLink to="/" active-class="active">Home</RouterLink>
    <RouterLink to="/about" active-class="active">About Page</RouterLink>
  </div>

  <!-- Renders each component dynamically based on Path supplied -->
  <RouterView/> 
</template>

<script setup>
import {RouterView, RouterLink} from "vue-router";

</script>

<style scoped>
.links {
  text-align: center;
  padding-top: 30px;
}

.links a{
  padding: 20px;
}

.active {
  font-weight: bold;
  color: green;
}
</style>