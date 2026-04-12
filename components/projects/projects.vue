<template>
  <section id="projects">
    <div class="custom-px-lg px-md-12 px-7 py-16 bg-light-yellow">
        <div class="text-brown mb-3 text-center"
            :class="isDesktop ? 'text-h2-small-semi-bold': 'text-h4-semi-bold'">
            Projects
        </div>
        <div 
          class="mt-5 text-brown"
          :class="isDesktop ? 'text-h5-regular custom-padding': 'text-h6-regular'"
        >
          擁有豐富的前端開發實作經驗，曾參與逾萬名使用者的 Line Bot 產品「彰師小生物」，並在「科學毛怪」專案中展現高度的數據視覺化與跨裝置互動網頁。我喜歡探索新技術，近期正透過 AI 工具優化開發效率與個人產品孵化，實現產品的高效迭代；並透過文字記錄開發心法，持續從工程、產品與個人實踐轉化為正向的影響力。
        </div>

        <div v-for="(project, index) in visibleProjects" :key="index" class="px-lg-5">
          <ProjectCard :project="project" :index="index"></ProjectCard>
        </div>

        <div
          class="text-brown text-center text-decoration-underline cursor-pointer"
          :class="isDesktop ? 'text-h4-medium mt-10' : 'text-h5-medium mt-6'"
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
    title: '麻將輸贏即時記',
    brief: '利用 AI 快速開發的麻將結算工具，整合 Google sheet 雲端同步，點擊間將混亂帳目轉化為精準戰績。',
    ownerRepo: 'supeihau/mahjong',
    branch: 'main',
    pushAt: '',
    skills: ['UIUX', 'JavaScript', 'Gemini AI'],
    picture: 'images/project/majong.png',
    designConceptUrl: '/pdf/ai-vibe-coding-majong.pdf',
    productUrl: 'https://mahjong-oh7d.vercel.app/',
  },
  {
    title: '2025 鐵人賽 - 30 天 Nuxt 自我挑戰',
    brief: '運用一個月內的碎片時間，把大工程拆成小任務，以 Nuxt 3 從零開始實作個人化履歷作品集網站，並加入SEO部署上線。',
    ownerRepo: 'supeihau/my-portfolio-2025',
    branch: 'main',
    pushAt: '',
    skills: ['UIUX', 'FrontEnd', 'Vue'],
    picture: 'images/project/ithome.png',
    designConceptUrl: 'https://ithelp.ithome.com.tw/users/20178581/ironman/8757?page=1',
    productUrl: 'https://my-portfolio-2025-mauve-zeta.vercel.app/',
  },
  {
    title: '彰師小生物 - 學期預排課表',
    brief: '以彰師大選課學生為受眾，讓學生可以在預選期間將感興趣的課程加入課表中，方便安排課表，並查看通識、系上選課、衝堂和學分數的計算。',
    ownerRepo: 'ba2c7yoyo/NcueHuLoLo-v2025',
    branch: 'timetable-selina-0517-1',
    pushAt: '',
    skills: ['UIUX', 'FrontEnd', 'JavaScript'],
    picture: 'images/project/timetable.png',
    designConceptUrl: '/pdf/hulolo-timetable.pdf',
    productUrl: 'https://ncuehulolo.idv.tw/timetable/',
  },
  {
    title: '彰師小生物 - 評價審核與查詢',
    'brief': '學生透過 Google 表單提交課程評價，經由管理員後台人工審查後，將評價同步至資料庫，實現 Line Bot 課程評價的即時查詢。',
    ownerRepo: 'ba2c7yoyo/NcueHuLoLo-v2025',
    branch: 'admin-pulish-selina-250215-1',
    pushAt: '',
    skills: ['UIUX', 'FrontEnd', 'JavaScript'],
    picture: 'images/project/admin-publish.png',
    designConceptUrl: '/pdf/hulolo-admin-publish.pdf',
    productUrl: 'https://lin.ee/grDXyk2',
  },
  {
    title: '科學毛怪 - 產品系統',
    'brief': '主導 PetSci 高互動性的寵物健康報告系統開發，實作多層次數據視覺化頁面，並套用互動組件與動態視覺處理，將專業資訊轉化為美感與資訊深度的網頁。',
    ownerRepo:'ba2c7yoyo/PetSci-gogomaumau',
    branch: 'master',
    pushAt: '',
    skills: ['FrontEnd', 'React', 'Atomize'],
    picture: 'images/project/gogomaumau.png',
    productUrl: 'https://gogomaumau.petsci.tw/',
  },
  {
    title: '科學毛怪 - 產品官網',
    'brief': '獨立負責 PetSci 官網前端開發，精準還原 UI 設計，建立專業且親和的寵物生技品牌門面。',
    ownerRepo: 'ba2c7yoyo/PetSci-Bussiness-Web',
    branch: 'main',
    pushAt: '',
    skills: ['FrontEnd', 'React', 'Atomize'],
    picture: 'images/project/petsci.png',
    productUrl: 'https://petsci.tw/',
  },
  {
    title: '彰師小生物 - 一頁式網頁',
    brief: '獨立開發一頁式訂閱說明頁，實作響應式佈局並優化排版邏輯，確保在不同設備上皆具品牌呈現效果與資訊傳遞。',
    ownerRepo: 'supeihau/hulolo-landing-pages',
    branch: 'main',
    pushAt: '2024-06-01',
    skills: ['FrontEnd', 'JavaScript', 'Bootstrap'],
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