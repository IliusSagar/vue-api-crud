<template>
  <div>
    <h1>Data from API</h1>

    <div class="container">
      <div class="card">
        <div class="card-header"></div>

        <div class="card-body">
          <h4>Name: {{ data.name }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const data = ref([]); // Store the fetched data here
const id = 2; // Replace this with the actual ID you want to fetch

const fetchData = () => {
  // Make a GET request to the API using Axios
  axios
    .get(`http://127.0.0.1:8000/api/students/edit/${id}`)
    .then((response) => {
      data.value = response.data; // Update the data property with the API response
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

onMounted(() => {
  fetchData();
});
</script>
