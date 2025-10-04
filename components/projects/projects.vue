<template>
  <section id="projects">
    <div class="px-md-12 px-lg-16 px-7 py-16 bg-light-yellow">
        <div class="text-brown text-h3-semi-bold mb-3 text-center">
            Projects
        </div>
        <div class="mt-5 text-brown"
            :class="isDesktop ? 'text-h5-regular custom-padding': 'text-h6-regular'">
            大學時期參與許多社團事務，包括彰師小生物、彰師大升學輔導種子計畫以及彰師大諮輔志工團。 其中「彰師小生物」是提供學生課程評價搜尋的服務，目前收錄1000則以上的評價回饋。我主要負責粉絲專頁的文案平面設計，以及網站平台前端網頁的建置與維護，目前粉專有1300的追蹤人數，平台有6500以上的使用者，也藉此累積了很多作品及經驗。
        </div>

        <div v-for="(project, index) in visibleProjects" :key="index" class="px-lg-3">
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
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import useInnerWidth from '~/composables/useInnerWidth';
import ProjectCard from './project-card.vue';

const { isDesktop } = useInnerWidth();

const projects = ref([
  {
    title: '線上作品集',
    ownerRepo: 'supeihau/my-portfolio-2025',
    branch: 'main',
    pushAt: '',
    skills: ['UIUX', 'FrontEnd', 'Vue'],
    picture: 'images/project/timetable.png',
    designConceptUrl: 'https://ithelp.ithome.com.tw/users/20178581/ironman/8757?page=1',
    productUrl: 'TODO',
  },
  {
    title: '彰師小生物 - 學期預排課表',
    ownerRepo: 'ba2c7yoyo/NcueHuLoLo-v2025',
    branch: 'timetable-selina-0517-1',
    pushAt: '',
    skills: ['UIUX', 'FrontEnd', 'JavaScript'],
    picture: 'images/project/timetable.png',
    designConceptUrl: 'TODO',
    productUrl: 'https://ncuehulolo.idv.tw/timetable/',
  },
  {
    title: '彰師小生物 - 評價審核與查詢',
    ownerRepo: 'ba2c7yoyo/NcueHuLoLo-v2025',
    branch: 'admin-pulish-selina-250215-1',
    pushAt: '',
    skills: ['UIUX', 'FrontEnd', 'JavaScript'],
    picture: 'images/project/admin-publish.png',
    designConceptUrl: 'TODO',
    productUrl: 'https://lin.ee/grDXyk2',
  },
  {
    title: '科學毛怪 - 產品系統',
    ownerRepo:'ba2c7yoyo/PetSci-gogomaumau',
    branch: 'master',
    pushAt: '',
    skills: ['FrontEnd', 'React', 'Atomize'],
    picture: 'images/project/gogomaumau.png',
    productUrl: 'https://gogomaumau.petsci.tw/',
  },
  {
    title: '科學毛怪 - 產品官網',
    ownerRepo: 'ba2c7yoyo/PetSci-Bussiness-Web',
    branch: 'main',
    pushAt: '',
    skills: ['FrontEnd', 'React', 'Atomize'],
    picture: 'images/project/petsci.png',
    productUrl: 'https://petsci.tw/',
  },
  {
    title: '彰師小生物 - 一頁式網頁',
    ownerRepo: 'supeihau/hulolo-landing-pages',
    branch: 'main',
    pushAt: '2024-06-01',
    skills: ['FrontEnd', 'JavaScript'],
    picture: 'images/project/hulolo-price.png',
    productUrl: 'https://ncuehulolo.idv.tw/subscribe/',
  },
]);

const expand = ref(false);

onMounted(() => {
  projects.value.forEach(async (project) => {
    if (project.ownerRepo && project.branch) {
      const data = await getRepoInfo(project.ownerRepo, project.branch);
      project.pushAt = new Date(data.pushAt).toLocaleDateString();
    } else {
      project.pushAt = '無更新時間';
    }
  });
});

// computed
const visibleProjects = computed(() =>
  expand.value ? projects.value : projects.value.slice(0, 2)
);

// methods
const toggleExpand = () => {
  expand.value = !expand.value;
};

const getRepoInfo = async (repo, branch) => {
  try {
    const res = await $fetch(`/api/github/branch?repo=${repo}&branch=${branch}`)
    return res;
  } catch (error) {
    return;
  }
};
</script>

<style lang="scss" scoped>
.custom-padding {
    padding-left: 10%;
    padding-right: 10%;
}
</style>