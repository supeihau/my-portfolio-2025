<template>
  <v-app-bar class="bg-yellow px-lg-16 px-3">
    <div class="d-none d-lg-flex align-center justify-center px-4">
      <span class="text-white text-h6-semi-bold pr-5">Home</span>
      <span class="text-white text-h6-semi-bold pr-5">Skills</span>
      <span class="text-white text-h6-semi-bold pr-5">Projects</span>
      <span class="text-white text-h6-semi-bold pr-5">Info</span>
    </div>

    <v-menu
      class="d-flex d-lg-none"
      transition="slide-x-transition"
    >
      <template v-slot:activator="{ props }">
        <v-app-bar-nav-icon 
          class="d-flex d-lg-none"
          color="white" v-bind="props">
        </v-app-bar-nav-icon>
      </template>

      <v-list class="bg-light-yellow custom-menu">
        <v-list-item
          v-for="(item, i) in state.items"
          :key="i"
          :value="i"
          class="custom-list-item"
        >
          <v-list-item-title class="text-brown">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  items: [
    { title: 'Home' },
    { title: 'Skills' },
    { title: 'Projects' },
    { title: 'Info' },
  ],
});
</script>

<style lang="scss" scoped>
:deep(.custom-menu) {
  min-height: calc(100vh - 64px);
  width: 300px;
  position: fixed;
  top: 8px;
  left: -8px;
  z-index: 1000;
  border-radius: 0;
  padding-top: 0px;
  padding-bottom: 0px;
}

:deep(.custom-list-item) {
  padding-left: 24px;
  min-height: 60px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

:deep(.custom-list-item .v-list-item-title) {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
