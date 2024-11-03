<template>
  <div class="bg-gray-100 py-16 sm:py-24 flex justify-center"> <!-- Reduït el padding vertical -->
    <div class="max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">

        <!-- Bloc Aplicació SPA amb Vue -->
        <div class="lg:pr-4">
          <!-- Primer Bloc Vue -->
          <div class="relative flex flex-col items-center overflow-hidden rounded-3xl bg-[#4a4a4a] px-6 pb-6 pt-4 text-center shadow-2xl sm:px-10 lg:max-w-lg xl:px-8 xl:pb-6">
            <h1 class="text-4xl font-serif font-bold text-white tracking-tight sm:text-4xl z-10">
              Aplicació SPA amb Vue
            </h1>
            <p class="mt-4 text-lg text-white z-10">
              Aquest projecte és una aplicació web tipus SPA creada amb Vue, que inclou diverses pàgines i funcionalitats per mostrar la capacitat de Vue.
            </p>
            <img class="absolute inset-0 h-full w-full object-cover brightness-90 saturate-0 opacity-90" src="https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png" alt="" />
            <div class="absolute inset-0 bg-[#4a4a4a] mix-blend-multiply"></div>
          </div>

          <!-- Segon Bloc Vue amb funcions destacades -->
          <div class="relative flex flex-col items-center overflow-hidden rounded-3xl bg-[#4a4a4a] px-6 pb-6 pt-4 text-center shadow-2xl sm:px-10 lg:max-w-lg xl:px-8 xl:pb-6 mt-6">
            <h2 class="text-4xl font-serif font-bold text-white tracking-tight sm:text-4xl z-10">
              Funcions Clau
            </h2>
            <p class="mt-4 text-lg text-white z-10">
              Descobreix les funcionalitats principals d’aquesta aplicació SPA amb Vue.
            </p>

            <div class="mt-6 grid grid-cols-2 gap-8 text-white z-10 w-full">
              <div class="flex flex-col items-center">
                <img src="https://img.icons8.com/ios/50/ffffff/speed.png" alt="Rendiment ràpid" class="w-10 h-10"/>
                <span class="mt-2">Rendiment Ràpid</span>
              </div>
              <div class="flex flex-col items-center">
                <img src="https://img.icons8.com/ios/50/ffffff/add-database.png" alt="Gestió de dades" class="w-10 h-10"/>
                <span class="mt-2">Gestió de Dades</span>
              </div>
              <div class="flex flex-col items-center">
                <img src="https://img.icons8.com/ios/50/ffffff/online-support.png" alt="Suport en temps real" class="w-10 h-10"/>
                <span class="mt-2">Suport en Temps Real</span>
              </div>
              <div class="flex flex-col items-center">
                <img src="https://img.icons8.com/ios/50/ffffff/screen-resolution.png" alt="Responsive" class="w-10 h-10"/>
                <span class="mt-2">Responsive</span>
              </div>
            </div>

            <img class="absolute inset-0 h-full w-full object-cover brightness-90 saturate-0 opacity-90" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9jNbWLflZUz1Eg0gKXE6iX-WOeX-MIv2kFw&s" alt="" />
            <div class="absolute inset-0 bg-[#4a4a4a] mix-blend-multiply"></div>
          </div>

        </div>

        <!-- Bloc Estadístiques -->
        <div class="relative flex flex-col items-start overflow-hidden rounded-3xl bg-[#373737] px-6 pb-6 pt-4 text-left shadow-2xl sm:px-10 lg:max-w-lg xl:px-8 xl:pb-6">
          <h2 class="text-4xl font-serif font-bold text-white tracking-tight sm:text-4xl z-10">
            Estadístiques
          </h2>
          <img class="absolute inset-0 h-full w-full object-cover opacity-40 filter blur-sm" src="https://i.pinimg.com/736x/4d/2f/77/4d2f77789c4e6230873d6cb1d1bdefc8.jpg" alt="" />
          <div class="absolute inset-0 bg-[#373737] mix-blend-multiply opacity-90"></div>
          <div class="relative mt-6 space-y-4 text-white z-10 w-full">
            <div v-for="stat in newStats" :key="stat.label" class="flex justify-between text-lg border-b border-gray-500 pb-2">
              <span class="font-semibold">{{ stat.label }}</span>
              <span>{{ stat.value }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const newStats = [
  {label: 'Usuaris Actius', value: '150+'},
  {label: 'Desenvolupament', value: '6 mesos'},
  {label: 'Funcionalitats', value: '10+'},
  {label: 'Compatibilitat', value: '5 navegadors'},
  {label: 'Feedback Positiu', value: '95%'},
  {label: 'Sessions Diàries', value: '500+'},
  {label: 'Projectes Complets', value: '8'},
  {label: 'Temps Mitjà de Resposta', value: '2s'},
  {label: 'Temps de Càrrega', value: '1.5s'}
]
</script>