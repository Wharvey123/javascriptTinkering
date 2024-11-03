<template>
  <div class="flex items-start justify-center pt-10 bg-white mx-4 md:mx-0"> <!-- Added mx-4 for mobile -->
    <div class="w-full max-w-md bg-black shadow-lg rounded-lg overflow-hidden mb-10">
      <div class="p-4">
        <!-- Display -->
        <div class="text-right bg-blue-600 text-white text-4xl font-mono p-4 rounded-md mb-4">
          <span>{{ displayValue }}</span>
        </div>

        <!-- Buttons -->
        <div class="grid grid-cols-4 gap-2">
          <button @click="inputOperation('%')" class="bg-red-600 text-white text-2xl p-4 rounded-md hover:bg-red-500">%</button>
          <button @click="clearEntry" class="bg-red-600 text-white text-2xl p-4 rounded-md hover:bg-red-500">CE</button>
          <button @click="clearDisplay" class="bg-red-600 text-white text-2xl p-4 rounded-md hover:bg-red-500">C</button>
          <button @click="deleteDigit" class="bg-red-600 text-white text-2xl p-4 rounded-md hover:bg-red-500">DEL</button>

          <button @click="inputOperation('1/x')" class="bg-blue-600 text-white text-2xl p-4 rounded-md hover:bg-blue-500">1/x</button>
          <button @click="inputOperation('x^2')" class="bg-blue-600 text-white text-2xl p-4 rounded-md hover:bg-blue-500">x²</button>
          <button @click="inputOperation('sqrt')" class="bg-blue-600 text-white text-2xl p-4 rounded-md hover:bg-blue-500">√x</button>
          <button @click="inputOperation('/')" class="bg-red-600 text-white text-2xl p-4 rounded-md hover:bg-red-500">÷</button>

          <button @click="inputDigit('7')" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">7</button>
          <button @click="inputDigit('8')" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">8</button>
          <button @click="inputDigit('9')" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">9</button>
          <button @click="inputOperation('*')" class="bg-blue-600 text-white text-2xl p-4 rounded-md hover:bg-blue-500">×</button>

          <button @click="inputDigit('4')" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">4</button>
          <button @click="inputDigit('5')" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">5</button>
          <button @click="inputDigit('6')" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">6</button>
          <button @click="inputOperation('-')" class="bg-blue-600 text-white text-2xl p-4 rounded-md hover:bg-blue-500">-</button>

          <button @click="inputDigit('1')" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">1</button>
          <button @click="inputDigit('2')" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">2</button>
          <button @click="inputDigit('3')" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">3</button>
          <button @click="inputOperation('+')" class="bg-blue-600 text-white text-2xl p-4 rounded-md hover:bg-blue-500">+</button>

          <button @click="toggleSign" class="bg-black text-white text-2xl p-4 rounded-md hover:bg-gray-800">+/-</button>
          <button @click="inputDigit('0')" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">0</button>
          <button @click="inputDecimal" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">,</button>
          <button @click="calculateResult" class="bg-blue-800 text-white text-2xl p-4 rounded-md col-span-4 hover:bg-blue-700 relative overflow-hidden">
            <div class="web-bg"></div>=</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
const displayValue = ref('0')
let lastOperation = false

function clearDisplay() {
  displayValue.value = '0'
  lastOperation = false
}

function inputDigit(digit) {
  if (lastOperation === true) {
    displayValue.value = digit
    lastOperation = false
  } else if (displayValue.value === '0') {
    displayValue.value = digit
  } else {
    displayValue.value += digit
  }
}

function inputOperation(operator) {
  const operators = ['+', '-', '*', '/'];
  if (operators.includes(displayValue.value.slice(-1))) {
    displayValue.value = displayValue.value.slice(0, -1) + operator
  } else {
    displayValue.value += operator
    lastOperation = false
  }
}

function calculateResult() {
  displayValue.value = eval(displayValue.value)
  lastOperation = true
}

function deleteDigit() {
  displayValue.value = displayValue.value.slice(0, -1)
  if (displayValue.value === '') {
    displayValue.value = '0'
  }
}
</script>

<style scoped>
.web-bg {
  background-image: url('https://media.istockphoto.com/id/1417471888/vector/spiderwebs-isolate-on-png-or-transparent-background-happy-halloween-banner-template-for.jpg?s=612x612&w=0&k=20&c=WgPsUR4S7x1SSUL3HNGvjIo7WkOj-ExI47t0TLoWUiE=');
  background-size: cover;
  opacity: 0.2; /* Lower opacity for the web */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px; /* Adjust radius to fit the button shape */
  z-index: 0; /* Behind the text */
}

button {
  position: relative;
  z-index: 1; /* Ensure button text is above the web background */
}
</style>
