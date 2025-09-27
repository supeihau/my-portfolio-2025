<template>
  <v-app-bar class="bg-yellow px-lg-16 px-3">
    <div 
      v-for="(item, i) in state.items" :key="i" :value="i"
      class="d-none d-lg-flex align-center justify-center px-2"
    >
      <span class="text-white text-h6-semi-bold pr-5">{{ item.title }}</span>
    </div>

    <v-app-bar-nav-icon
      v-if="!isDesktop"
      variant="text"
      color="white"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
    >
      <v-list class="bg-light-yellow custom-menu">
        <v-list-item
          v-for="(item, i) in state.items"
          :key="i"
          :value="i"
          class="custom-list-item"
        >
          <v-list-item-title class="text-brown">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { reactive } from 'vue';
import useInnerWidth from '~/composables/useInnerWidth';

const { isDesktop } = useInnerWidth();

const drawer = ref(false);

const state = reactive({
  items: [
    { title: 'Intro' },
    { title: 'Skills' },
    { title: 'Projects' },
    { title: 'Contact' },
  ],
});

</script>

<style lang="scss" scoped>
:deep(.custom-menu) {
  min-height: calc(100vh - 64px);
  position: fixed;
  z-index: 1000;
  border-radius: 0;
  padding-top: 0px;
  padding-bottom: 0px;
}

:deep(.custom-list-item) {
  width: 250px;
  padding-left: 24px;
  min-height: 60px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

:deep(.custom-list-item .v-list-item-title) {
  font-size: 1.2rem;
  font-weight: 500;
}

:deep .v-navigation-drawer__scrim {
  background-color: #F5B85D;
}
</style>
