<template>
    <div class="px-md-12 px-lg-16 px-7 py-16">
      <div class="text-brown text-h3-semi-bold mb-3 text-center">
          Personal Information
      </div>
      <v-row :class="isDesktop? 'mt-10': 'mt-3'">
        <v-col col="12" md="6" lg="6" class="mb-0">
          <div v-for="(value, i) in info.slice(0, 4)" :key="value.title">
            <div class="justify-start align-center d-flex flex-row mt-3">
              <div class="custom-icon-border" :class="isDesktop? 'border-size-desktop': 'border-size-phone'">
                  <img :src="value.icon" alt="school" :class="isDesktop? 'img-size-desktop': 'img-size-phone'"/>
              </div>
              <div class="text-orange ml-4 text-center"
                  :class="isDesktop ? 'text-h4-medium' : 'text-h5-medium'">
                  {{ value.title }}
              </div>
            </div>
          </div>
        </v-col>

        <v-col col="12" md="6" lg="6" class="mb-0">
          <div v-for="(value, i) in info.slice(4, 8)" :key="value.title">
            <div class="justify-start align-center d-flex flex-row mt-3">
              <div class="custom-icon-border" :class="isDesktop? 'border-size-desktop': 'border-size-phone'">
                  <img :src="value.icon" alt="school" :class="isDesktop? 'img-size-desktop': 'img-size-phone'"/>
              </div>
              <div class="text-orange ml-4"
                  :class="isDesktop ? 'text-h4-medium' : 'text-h5-medium'">
                  {{ value.title }}
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import useInnerWidth from '~/composables/useInnerWidth';

const { isDesktop } = useInnerWidth();

import SchoolIcon from '@/assets/icon/school.svg';
import BirthdateIcon from '@/assets/icon/birthdate.svg';
import LocationIcon from '@/assets/icon/location.svg';
import UserIcon from '@/assets/icon/user.svg';
import PhoneIcon from '@/assets/icon/phone.svg';
import EmailIcon from '@/assets/icon/email.svg';
import GitHubIcon from '@/assets/icon/github.svg';


const info = ref([
  {
    icon: SchoolIcon,
    title: '國立彰化師範大學 資訊管理學系',
  },
  {
    icon: BirthdateIcon,
    title: '2000/02/17',
  },
  {
    icon: LocationIcon,
    title: '新北市，淡水區',
  },
  {
    icon: PhoneIcon,
    title: '0928453360',
  },
  {
    icon: UserIcon,
    title: '蘇姵華',
  },
  {
    icon: EmailIcon,
    title: 'selina240@gmail.com',
  },
  {
    icon: GitHubIcon,
    title: 'supeihau',
  },
]);
</script>

<style lang="scss" scoped>
.custom-icon-border {
  border: 2px solid #6F6C3E; 
  padding: auto; 
  border-radius: 12px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
}
.border-size-desktop {
  width: 50px; 
  height: 50px; 
}
.border-size-phone {
  width: 40px; 
  height: 40px; 
}

.img-size-desktop {
  width: 32px; 
  height: 32px;
}

.img-size-phone {
  width: 24px; 
  height: 24px;
}


</style>