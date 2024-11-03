<script setup>
import { onMounted, ref } from 'vue'

const comments = ref([])
onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        comments.value = data
      })
      .catch(error => console.log(error))
})
</script>

<template>
  <div class="pb-4">
    <div class="max-w-3xl mx-auto mt-8 p-6 bg-gray-900 shadow-md rounded-lg border border-yellow-600">
      <h1 class="text-4xl font-bold text-center text-yellow-500 mb-6">Batman's Comments</h1>
      <ul class="divide-y divide-yellow-500">
        <li
            v-for="comment in comments"
            :key="comment.id"
            class="py-4 flex flex-col sm:flex-row sm:items-center transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 rounded-lg mx-2">
          <div class="flex-1">
            <h2 class="text-xl font-semibold text-yellow-300">{{ comment.name }}</h2>
            <p class="text-gray-400 mt-1">{{ comment.body }}</p>
          </div>
          <p class="text-gray-500 text-sm mt-2 sm:mt-0 sm:ml-4">{{ comment.email }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
body {
  background-image: url('https://example.com/gotham_background.jpg'); /* Add a Gotham background */
  background-size: cover;
  background-position: center;
}

h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

ul {
  background: rgba(0, 0, 0, 0.5); /* Add semi-transparent background to the list */
  padding: 1rem;
  border-radius: 8px;
}

li {
  transition: background-color 0.3s, transform 0.3s; /* Include transform in the transition */
}

li:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Add hover effect on comments */
  margin-left: 0.5rem; /* Increase left margin on hover */
  margin-right: 0.5rem; /* Increase right margin on hover */
  padding: 1rem; /* Add padding for better spacing */
}
</style>
