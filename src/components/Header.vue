<template>
  <header class="bg-[#C1DBE3]"> <!-- Header background color -->
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://purepng.com/public/uploads/large/purepng.com-spidey-logospider-manspidermansuperherocomic-bookmarvel-comicscharacterstan-leegamesmovie-1701528656172stfmi.png" alt="" />
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black hover:text-red-500" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            :class="{'text-red-500 font-bold': $route.path === item.href, 'text-black': $route.path !== item.href}"
            class="text-sm/6 font-semibold hover:text-red-500"
        >
          {{ item.name }}
        </RouterLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <RouterLink
            to="/login"
            :class="{'text-red-500 font-bold': $route.path === '/login', 'text-black': $route.path !== '/login'}"
            class="text-sm/6 font-semibold hover:text-red-500"
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </RouterLink>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed top-0 right-0 z-10 w-full bg-[#C1DBE3] px-6 py-6 sm:ring-1 sm:ring-white/10">
        <div class="flex items-center justify-between w-full">
          <RouterLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://purepng.com/public/uploads/large/purepng.com-spidey-logospider-manspidermansuperherocomic-bookmarvel-comicscharacterstan-leegamesmovie-1701528656172stfmi.png" alt="" />
          </RouterLink>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-black hover:text-red-500" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root text-center">
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="space-y-2 py-6">
              <RouterLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  :class="{'text-red-500 font-bold': $route.path === item.href, 'text-black': $route.path !== item.href}"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:text-red-500 hover:bg-gray-800"
                  @click="mobileMenuOpen = false"
              >
                {{ item.name }}
              </RouterLink>
            </div>
            <div class="py-6">
              <RouterLink
                  to="/login"
                  :class="{'text-red-500 font-bold': $route.path === '/login', 'text-black': $route.path !== '/login'}"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold hover:text-red-500 hover:bg-gray-800"
                  @click="mobileMenuOpen = false"
              >
                Log in
              </RouterLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import {ref} from 'vue'
import {Dialog, DialogPanel} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'
import {RouterLink, useRoute} from 'vue-router'

const navigation = [
  {name: 'Home', href: '/'},
  {name: 'Calculadora', href: '/calculadora'},
  {name: 'Fetch', href: '/api-fetch'},
  {name: 'Axios', href: '/api-axios'},
]

const mobileMenuOpen = ref(false)
</script>