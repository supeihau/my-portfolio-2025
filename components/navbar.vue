<template>
  <v-app-bar class="bg-yellow px-lg-16 px-3">
    <div 
      v-for="(item, i) in state.items" :key="i" :value="i"
      class="d-none d-lg-flex align-center justify-center px-2"
    >
      <span 
        class="text-white text-h6-semi-bold pr-5"
        @click="scrollTo(item.targetId)"
      >
        {{ item.title }}
      </span>
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
          <v-list-item-title 
            class="text-brown" 
            @click="scrollTo(item.targetId)"
          >
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { reactive, ref } from 'vue';
import useInnerWidth from '~/composables/useInnerWidth';

const { isDesktop } = useInnerWidth();

const drawer = ref(false);

const state = reactive({
  items: [
    { title: 'Intro', targetId: 'intro' },
    { title: 'Skills', targetId: 'skills' },
    { title: 'Projects', targetId: 'projects' },
    { title: 'Contact', targetId: 'contact' },
  ],
});

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  // 如果是手機，點了之後順便關掉 drawer
  drawer.value = false;
};
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

:deep(.v-navigation-drawer__scrim) {
  background-color: #F5B85D;
}
</style>
