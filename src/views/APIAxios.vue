<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const users = ref([]) // Array to hold user data

onMounted(() => {
  axios.get('https://dummyjson.com/users')
      .then(response => {
        users.value = response.data.users // Access users array from API response
      })
      .catch(error => console.error(error))
})
</script>

<template>
  <div class="pb-4">
    <div class="max-w-3xl mx-auto mt-8 p-6 bg-blue-900 shadow-md rounded-lg border border-red-600">
      <h1 class="text-4xl font-bold text-center text-yellow-400 mb-6">Avengers Users</h1>
      <ul class="divide-y divide-red-400">
        <li
            v-for="user in users"
            :key="user.id"
            class="py-4 flex flex-col sm:flex-row sm:items-center transition-all duration-300 transform hover:scale-105 hover:bg-blue-800 rounded-lg mx-2">
          <!-- Profile Image -->
          <img
              :src="user.image"
              alt="User Profile Picture"
              class="w-20 h-20 rounded-full border border-yellow-400 mr-4 mb-2 sm:mb-0" />

          <!-- User Info -->
          <div class="flex-1">
            <h2 class="text-xl font-semibold text-yellow-300">{{ user.firstName }} {{ user.lastName }}</h2>
            <p class="text-gray-200 mt-1">Age: {{ user.age }}</p>
            <p class="text-gray-200 mt-1">Phone: {{ user.phone }}</p>
            <p class="text-gray-200 mt-1">Address: {{ user.address.city }}, {{ user.address.state }}</p>
            <p class="text-gray-400 text-sm mt-2 sm:mt-0 sm:ml-4">Email: {{ user.email }}</p> <!-- Ensure "Email: " label is included -->
          </div>

          <!-- Email -->
          <p class="text-gray-400 text-sm mt-2 sm:mt-0 sm:ml-4">{{ user.email }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
body {
  background-image: url('https://example.com/avengers_background.jpg'); /* Add an Avengers background */
  background-size: cover;
  background-position: center;
}

h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
}

ul {
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background for the list */
  padding: 1rem;
  border-radius: 8px;
}

li {
  transition: background-color 0.3s, transform 0.3s; /* Include transform in the transition */
}

li:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Hover effect on comments */
  margin-left: 0.5rem; /* Increase left margin on hover */
  margin-right: 0.5rem; /* Increase right margin on hover */
  padding: 1rem; /* Add padding for better spacing */
}
</style>