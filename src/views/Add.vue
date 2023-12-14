<template>
  <div class="about">
    <h1>Add Students</h1>
    <div class="container">
      <form @submit.prevent="addStudent">
        <input
          v-model="name"
          type="text"
          class="form-control"
          placeholder="Enter Name"
        />
        <br />
        <input
          v-model="course"
          type="text"
          class="form-control"
          placeholder="Enter Course"
        />
        <br />
        <input
          v-model="email"
          type="text"
          class="form-control"
          placeholder="Enter Email"
        />
        <br />
        <input
          v-model="phone"
          type="text"
          class="form-control"
          placeholder="Enter Phone"
        />
        <br />
        <button type="submit" class="btn btn-primary">Add Student</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const course = ref("");
const email = ref("");
const phone = ref("");

const addStudent = () => {
  const newStudent = {
    name: name.value,
    course: course.value,
    email: email.value,
    phone: phone.value,
  };

  // Make a POST request to add the new student
  axios
    .post("http://127.0.0.1:8000/api/students", newStudent)
    .then(() => {
      // Clear the input fields after successful addition
      name.value = "";
      course.value = "";
      email.value = "";
      phone.value = "";

      // Optionally, you can navigate to the list of students or perform any other action
    })
    .catch((error) => {
      console.error("Error adding student:", error);
    });
};
</script>
