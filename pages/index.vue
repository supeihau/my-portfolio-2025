<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container class="py-10 text-center">
        <v-btn color="primary" size="large" prepend-icon="mdi-rocket-launch">
          Hello Vuetify in Nuxt 32222
        </v-btn>
        <div class="mt-10 text-h4-semi-bold text-yellow">
          hello
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Header from '@/components/header.vue';
</script>

<style scoped></style>
