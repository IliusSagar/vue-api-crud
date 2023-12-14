<template>
  <div>
    <h1>Data from API</h1>

    <!-- <li v-for="item in data" :key="item.id">{{ item.id }}</li> -->
    <p v-for="item in data" :key="item.id">
      <!-- <img :src="item.image" alt="" style="height: 50px" /> -->
      <p>{{ item.name }}</p>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const data = ref([]); // Store the fetched data here

const fetchData = () => {
  // Make a GET request to the API using Axios
  axios
    .get("http://127.0.0.1:8000/api/students")
    .then((response) => {
      data.value = response.data; // Update the data property with the API response
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

onMounted(() => {
  // Fetch data from the API when the component is created
  fetchData();
});
</script>

<style scoped>
/* Add your styles here */
</style>
