<template>
  <v-app-bar class="custom-px-lg px-3 d-flex justify-space-between align-center custom-border-bottom" 
    :class="navBg ? 'bg-main-yellow' : 'bg-transparent'" 
    elevation="0"
  >
    <div class="d-none d-md-flex align-center justify-center">
      <div 
        v-for="(item, i) in state.items" :key="i" :value="i"
        class="px-2"
      >
        <span 
          role="button"
          tabindex="0"
          class="text-white text-h5-medium pr-5"
          @click="scrollTo(item.targetId)"
        >
          {{ item.title }}
        </span>
      </div>
    </div>
    
    <div class="row d-flex flex-nowrap">
      <div class="custom-icon-border mr-5"
        :class="isDesktop? 'border-size-desktop': 'd-none border-size-phone'"
        @click="openGitHub"
      >
        <NuxtImg 
          :src="GitHubIcon"  
          alt="contact-icon" 
          :class="isDesktop? 'img-size-desktop': 'img-size-phone'" 
          loading="lazy"
          format="webp"
        />
      </div>
      <div class="custom-icon-border" 
        :class="isDesktop? 'border-size-desktop': 'd-none border-size-phone'"
        @click="sendEmail"
      >
        <NuxtImg 
          :src="EmailIcon"  
          alt="contact-icon" 
          :class="isDesktop? 'img-size-desktop': 'img-size-phone'" 
          loading="lazy"
          format="webp"
        />
      </div>
    </div>
    
    <v-app-bar-nav-icon
      v-if="!isDesktop && navBg"
      variant="text"
      color="white"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
      aria-label="Main menu"
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

        <v-list-item class="custom-list-item">
          <v-list-item-title 
            class="text-brown" 
            @click="openGitHub"
          >
            Github
          </v-list-item-title>
        </v-list-item>

        <v-list-item class="custom-list-item">
          <v-list-item-title 
            class="text-brown" 
            @click="sendEmail"
          >
            Email
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { reactive, ref } from 'vue';
import useInnerWidth from '~/composables/useInnerWidth';
import GitHubIcon from '@/assets/icon/github.svg';
import EmailIcon from '@/assets/icon/email.svg';

const { isDesktop } = useInnerWidth();

const navBg = ref(false);
const drawer = ref(false);

const state = reactive({
  items: [
    { title: 'Intro', targetId: 'intro' },
    { title: 'Skills', targetId: 'skills' },
    { title: 'Projects', targetId: 'projects' },
    { title: 'Contact', targetId: 'contact' },
  ],
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  // 如果是手機，點了之後順便關掉 drawer
  drawer.value = false;
};

const handleScroll = () => {
  navBg.value = window.scrollY > 50;
};

const openGitHub = () => {
  window.open('https://github.com/supeihau', '_blank');
};

const sendEmail = () => {
  window.location.href = 'mailto: selina240@gmail.com';
};
</script>

<style lang="scss" scoped>
.bg-transparent {
  background: transparent !important;
  box-shadow: none !important;
}

.custom-border-bottom {
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}

:deep(.v-app-bar) {
  background: transparent !important;
  box-shadow: none !important;
}

:deep(.v-toolbar__content) {
  @media screen and (min-width: 960px) {
    justify-content: space-between !important;

  }
}

:deep(.custom-menu) {
  min-height: calc(100vh - 64px);
  position: fixed;
  z-index: 1000;
  border-radius: 0;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: #FEF4EA !important;
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
  background-color: #F5B85D !important;
}

.custom-icon-border {
  width: 40px;
  height: 40px;
  background-color: #FFFFFF;
  border: 2px solid #6F6C3E; 
  padding: auto; 
  border-radius: 12px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
}
</style>
