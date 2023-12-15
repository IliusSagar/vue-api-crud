<template>
  <div>
    <h1>Data from API</h1>

    <div class="container">
      <div class="card">
        <div class="card-header">
          <h4>
            Students
            <RouterLink to="/add" class="btn btn-primary float-end"
              >Add Student</RouterLink
            >
          </h4>
        </div>

        <div class="card-body">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.course }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.created_at }}</td>
                <button @click="deleteStudent(item.id)" class="btn btn-danger">
                  Delete
                </button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
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

const deleteStudent = (id) => {
  // You can add a confirmation dialog here before making the delete request
  if (confirm("Are you sure you want to delete this student?")) {
    // Make a DELETE request to the API using Axios
    axios
      .delete(`http://127.0.0.1:8000/api/students/delete/${id}`)
      .then(() => {
        // If the deletion is successful, remove the item from the data array
        data.value = data.value.filter((item) => item.id !== id);
      })
      .catch((error) => {
        console.error("Error deleting student:", error);
      });
  }
};

onMounted(() => {
  // Fetch data from the API when the component is created
  fetchData();
});
</script>

<style scoped>
/* Add your styles here */
</style>
