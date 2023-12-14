<template>
  <div class="about">
    <h1>List Student</h1>

    <div class="container">
      <div class="card">
        <div class="card-header"></div>

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
              <tr v-for="(student, index) in this.students" :key="index">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.course }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.phone }}</td>
                <td>{{ student.created_at }}</td>
                <td>
                  <RouterLink to="/" class="btn btn-success">Edit</RouterLink>
                  <button type="button" class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
import axios from "axios";

export default {
  name: "students",

  data() {
    return {
      students: [],
    };
  },

  mounted() {
    this.getStudents();
    // console.log('i am here')
  },
  methods: {
    getStudents() {
      axios.get("http://127.0.0.1:8000/api/students").then((res) => {
        this.students = res.data.students;
        console.log(this.students);
      });
    },
  },
};
</script>
