<template>
  <div class="flex items-start justify-center pt-10 bg-white mx-4 md:mx-0">
    <div class="w-full max-w-md bg-black shadow-lg rounded-lg overflow-hidden mb-10">
      <div class="p-4">
        <div class="text-right bg-blue-600 text-white text-4xl font-mono p-4 rounded-md mb-4">
          <span>{{ displayValue }}</span>
        </div>

        <div class="grid grid-cols-4 gap-2">
          <button @click="applyPercentage" data-testid="operation-percent" class="bg-red-600 text-white text-2xl p-4 rounded-md hover:bg-red-500">%</button>
          <button @click="clearEntry" data-testid="clear" class="bg-red-600 text-white text-2xl p-4 rounded-md hover:bg-red-500">CE</button>
          <button @click="clearDisplay" data-testid="clear-all" class="bg-red-600 text-white text-2xl p-4 rounded-md hover:bg-red-500">C</button>
          <button @click="deleteDigit" data-testid="delete" class="bg-red-600 text-white text-2xl p-4 rounded-md hover:bg-red-500">DEL</button>

          <button @click="cube" data-testid="operation-cube" class="bg-blue-600 text-white text-2xl p-4 rounded-md hover:bg-blue-500">x³</button>
          <button @click="square" data-testid="operation-squared" class="bg-blue-600 text-white text-2xl p-4 rounded-md hover:bg-blue-500">x²</button>
          <button @click="sqrt" data-testid="operation-sqrt" class="bg-blue-600 text-white text-2xl p-4 rounded-md hover:bg-blue-500">√x</button>

          <button @click="inputOperation('/')" data-testid="operation-divide" class="bg-blue-600 text-white text-2xl p-4 rounded-md hover:bg-blue-500">÷</button>

          <button @click="inputDigit('7')" data-testid="digit-7" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">7</button>
          <button @click="inputDigit('8')" data-testid="digit-8" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">8</button>
          <button @click="inputDigit('9')" data-testid="digit-9" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">9</button>

          <button @click="inputOperation('*')" data-testid="operation-multiply" class="bg-blue-600 text-white text-2xl p-4 rounded-md hover:bg-blue-500">×</button>

          <button @click="inputDigit('4')" data-testid="digit-4" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">4</button>
          <button @click="inputDigit('5')" data-testid="digit-5" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">5</button>
          <button @click="inputDigit('6')" data-testid="digit-6" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">6</button>

          <button @click="inputOperation('-')" data-testid="operation-subtract" class="bg-blue-600 text-white text-2xl p-4 rounded-md hover:bg-blue-500">-</button>

          <button @click="inputDigit('1')" data-testid="digit-1" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">1</button>
          <button @click="inputDigit('2')" data-testid="digit-2" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">2</button>
          <button @click="inputDigit('3')" data-testid="digit-3" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">3</button>

          <button @click="inputOperation('+')" data-testid="operation-add" class="bg-blue-600 text-white text-2xl p-4 rounded-md hover:bg-blue-500">+</button>

          <button @click="power" data-testid="operation-power" class="bg-black text-white text-2xl p-4 rounded-md hover:bg-gray-800">x^y</button>
          <button @click="inputDigit('0')" data-testid="digit-0" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">0</button>
          <button @click="inputDecimal" data-testid="decimal" class="bg-red-700 text-white text-2xl p-4 rounded-md hover:bg-red-600">,</button>

          <button @click="calculateResult" data-testid="equal" class="bg-blue-800 text-white text-2xl p-4 rounded-md col-span-4 hover:bg-blue-700 relative overflow-hidden">
            <div class="web-bg"></div>=</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const displayValue = ref('0');
let lastOperation = false;

function clearDisplay() {
  displayValue.value = '0';
  lastOperation = false;
}

function clearEntry() {
  if (displayValue.value !== '0') {
    displayValue.value = displayValue.value.slice(0, -1) || '0';
  }
}

function inputDigit(digit) {
  if (lastOperation) {
    displayValue.value = digit;
    lastOperation = false;
  } else if (displayValue.value === '0') {
    displayValue.value = digit;
  } else {
    displayValue.value += digit;
  }
}

function inputDecimal() {
  const lastNumber = displayValue.value.split(/[\+\-\*\/\%]/).pop();
  // Check if the last number doesn't already contain a comma
  if (!lastNumber.includes(',')) {
    displayValue.value += ',';  // Use a comma as the decimal separator
    lastOperation = false;
  }
}

function inputOperation(operator) {
  const operators = ['+', '-', '*', '/'];
  if (lastOperation) lastOperation = false;
  if (operators.includes(displayValue.value.slice(-1))) {
    displayValue.value = displayValue.value.slice(0, -1) + operator;
  } else {
    displayValue.value += operator;
  }
}

function calculateResult() {
  try {
    // Replace commas with dots for proper evaluation
    displayValue.value = eval(displayValue.value.replace(/,/g, '.')).toString().replace('.', ',');
    lastOperation = true;
  } catch {
    displayValue.value = 'Error';
  }
}

function applyPercentage() {
  if (lastOperation) {
    displayValue.value = (parseFloat(displayValue.value.replace(',', '.'))).toString().replace('.', ',') + '%';
  } else {
    displayValue.value = (parseFloat(displayValue.value.replace(',', '.')) / 100).toString().replace('.', ',');
  }
}

function cube() {
  displayValue.value = (Math.pow(parseFloat(displayValue.value.replace(',', '.')), 3)).toString().replace('.', ',');
}

function square() {
  displayValue.value = (Math.pow(parseFloat(displayValue.value.replace(',', '.')), 2)).toString().replace('.', ',');
}

function sqrt() {
  displayValue.value = (Math.sqrt(parseFloat(displayValue.value.replace(',', '.')))).toString().replace('.', ',');
}

function power() {
  displayValue.value += '^';
}

function deleteDigit() {
  displayValue.value = displayValue.value.slice(0, -1) || '0';
}
</script>

<style scoped>
.web-bg {
  background-image: url('https://media.istockphoto.com/id/1417471888/vector/spiderwebs-isolate-on-png-or-transparent-background-happy-halloween-banner-template-for.jpg?s=612x612&w=0&k=20&c=WgPsUR4S7x1SSUL3HNGvjIo7WkOj-ExI47t0TLoWUiE=');
  background-size: cover;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  z-index: 0;
}

button {
  position: relative;
  z-index: 1;
}
</style>
