<template>
  <div class="about">
    <h1>Edit Student</h1>
    <div class="container">
      <form>
        <input
          v-model="formData.name"
          type="text"
          class="form-control"
          placeholder="Enter Name"
        />
        <br />
        <input
          v-model="formData.course"
          type="text"
          class="form-control"
          placeholder="Enter Course"
        />
        <br />
        <input
          v-model="formData.email"
          type="text"
          class="form-control"
          placeholder="Enter Email"
        />
        <br />
        <input
          v-model="formData.phone"
          type="text"
          class="form-control"
          placeholder="Enter Phone"
        />
        <br />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const formData = ref({
  name: "",
  course: "",
  email: "",
  phone: "",
});

const fetchData = (id) => {
  axios
    .get(`http://127.0.0.1:8000/api/students/edit/${id}`)
    .then((response) => {
      formData.value = response.data; // Update formData with the fetched student data
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

onMounted(() => {
  // Fetch data when the component is mounted
  fetchData(/* pass the student ID here */);
});
</script>
