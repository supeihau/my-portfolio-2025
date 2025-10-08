<template>
  <v-app>
    <ClientOnly>
      <NavBar></NavBar>
    </ClientOnly>
    <Intro></Intro>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
  </v-app>
</template>

<script setup>
import NavBar from '@/components/navbar.vue';
import Intro from '@/components/intro.vue';
import Skills from '@/components/skills/skills.vue';
import Projects from '@/components/projects/projects.vue';
import Contact from '../components/contact/contact.vue';
</script>

<style lang="scss" scoped>
</style>
