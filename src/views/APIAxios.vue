<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios' // Import Axios

const comments = ref([])

onMounted(() => {
  axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        comments.value = response.data
      })
      .catch(error => console.error(error))
})
</script>

<template>
  <div class="pb-4">
    <div class="max-w-3xl mx-auto mt-8 p-6 bg-blue-900 shadow-md rounded-lg border border-red-600">
      <h1 class="text-4xl font-bold text-center text-yellow-400 mb-6">Avengers Comments</h1>
      <ul class="divide-y divide-red-400">
        <li
            v-for="comment in comments"
            :key="comment.id"
            class="py-4 flex flex-col sm:flex-row sm:items-center transition-all duration-300 transform hover:scale-105 hover:bg-blue-800 rounded-lg mx-2">
          <div class="flex-1">
            <h2 class="text-xl font-semibold text-yellow-300">{{ comment.name }}</h2>
            <p class="text-gray-200 mt-1">{{ comment.body }}</p>
          </div>
          <p class="text-gray-400 text-sm mt-2 sm:mt-0 sm:ml-4">{{ comment.email }}</p>
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
