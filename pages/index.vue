<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
      <Intro></Intro>
      <Skills></Skills>
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from '@/components/navbar.vue';
import Intro from '@/components/intro.vue';
import Skills from '@/components/skills/skills.vue';
</script>

<style scoped>
</style>
