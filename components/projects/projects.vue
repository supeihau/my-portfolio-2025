<template>
    <div class="px-md-12 px-lg-16 px-7 py-16 bg-light-yellow">
        <div class="text-brown text-h3-semi-bold mb-3 text-center">
            Projects
        </div>
        <div class="mt-5 text-brown"
            :class="isDesktop ? 'text-h5-regular custom-padding': 'text-h6-regular'">
            大學時期參與許多社團事務，包括彰師小生物、彰師大升學輔導種子計畫以及彰師大諮輔志工團。 其中「彰師小生物」是提供學生課程評價搜尋的服務，目前收錄1000則以上的評價回饋。我主要負責粉絲專頁的文案平面設計，以及網站平台前端網頁的建置與維護，目前粉專有1300的追蹤人數，平台有6500以上的使用者，也藉此累積了很多作品及經驗。
        </div>

        <div v-for="(project, index) in visibleProjects" :key="index">
            <ProjectCard :project="project"></ProjectCard>
        </div>

        <div
          class="text-brown text-center text-decoration-underline cursor-pointer"
          :class="isDesktop ? 'text-h4-semi-bold mt-10' : 'text-h5-semi-bold mt-6'"
          @click="toggleExpand"
        >
          {{ expand ? 'View Less' : 'View More' }}
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import useInnerWidth from '~/composables/useInnerWidth';
import ProjectCard from './project-card.vue';

const { isDesktop } = useInnerWidth();

const projects = ref([
  {
    title: '彰師小生物 - 學期預排課表',
    skills: ['UIUX', 'FrontEnd', 'JavaScript'],
    designConcept: 'kkkk',
    picture: '/images/propject/timetable.png',
    productUrl: 'https://ncuehulolo.idv.tw/timetable/',
    updatedAt: '2024-06-01',
  },
  {
    title: '彰師小生物 - 評價審核與查詢',
    skills: ['UIUX', 'FrontEnd', 'JavaScript'],
    designConcept: '',
    picture: '/images/propject/admin-publish.png',
    productUrl: '',
    updatedAt: '2024-06-01',
  },
  {
    title: '科學毛怪 - 產品系統',
    skills: ['FrontEnd', 'React', 'Atomize'],
    designConcept: '',
    picture: '/images/propject/gogomaumau.png',
    productUrl: '',
    updatedAt: '2024-05-15',
  },
  {
    title: '科學毛怪 - 產品官網',
    skills: ['FrontEnd', 'React', 'Atomize'],
    designConcept: '',
    picture: '/images/propject/petsci.png',
    productUrl: '',
    updatedAt: '2024-05-15',
  },
  {
    title: '彰師小生物 - 一頁式網頁',
    skills: ['FrontEnd', 'JavaScript'],
    designConcept: '',
    picture: '/images/propject/hulolo-price.png',
    productUrl: 'https://ncuehulolo.idv.tw/subscribe/',
    updatedAt: '2024-04-20',
  },
]);

const expand = ref(false);

const visibleProjects = computed(() =>
  expand.value ? projects.value : projects.value.slice(0, 2)
);

const toggleExpand = () => {
  expand.value = !expand.value;
}
</script>

<style lang="scss" scoped>
.custom-padding {
    padding-left: 10%;
    padding-right: 10%;
}
</style>