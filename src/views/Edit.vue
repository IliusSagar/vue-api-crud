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

const props = defineProps(["id"]); // Assuming id is passed as a prop

const data = ref({}); // Use an object instead of an array for the data

const fetchData = () => {
  // Make a GET request to the API using Axios
  axios
    .get(`http://127.0.0.1:8000/api/students/edit/${props.id}`)
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
