<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
      <v-container class="pa-0" fluid>
        <div>
          <v-row class="row d-flex flex-nowrap justify-space-between pa-0 bg-light-yellow" >
            <img src="/assets/images/bg-left-top.png" alt="bg-left-top" class="w-100 w-md-50 h-auto intro-bg-left-top" />
            <img src="/assets/images/bg-right-top.png" alt="bg-right-top" class="d-none d-md-flex intro-bg-right-top"/>
          </v-row>
          <div class="intro">
            <intro></intro>
          </div>
          <v-row class="row d-flex flex-nowrap justify-space-between align-end pa-0 intro-bg-bottom">
            <img src="/assets/images/bg-left-bottom.png" alt="bg-left-bottom" class="intro-bg-left-bottom"/>
            <img src="/assets/images/bg-right-bottom.png" alt="bg-right-bottom" class="d-none d-md-flex intro-bg-right-bottom" />
          </v-row>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from '@/components/navbar.vue';
</script>

<style scoped>
.intro-bg-left-top {
  top: -40px; 
  position: relative;
}

.intro-bg-right-top {
  width: auto;
  height: 100px;
  margin-right: 100px; 
  margin-top: 50px;
}

.intro {
  z-index: 1;
}

.intro-bg-bottom {
  top: -350px; 
  position: relative;
}

.intro-bg-left-bottom {
  width: auto; 
  height: 300px; 
  margin-right: 100px; 
  margin-bottom: 50px;
}

.intro-bg-right-bottom {
  width: auto; 
  height: 100px; 
  margin-right: 100px; 
  margin-bottom: 50px;
}
</style>
