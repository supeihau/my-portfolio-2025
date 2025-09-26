<template>
    <v-row class="px-md-12 px-lg-13 px-5 custom-top-effect" align="stretch">
        <v-col cols="12" sm="6" md="6" lg="6" class="pl-lg-8">
            <div
                class="d-flex flex-column align-center justify-start bg-light-orange fill-height"
                :class="isDesktop ? 'pa-10 custom-rounded-lg': 'pa-5 custom-rounded-md'"
            >
                <div 
                    class="text-white"
                    :class="isDesktop ? 'text-h3-semi-bold': 'text-h4-semi-bold'"
                >
                    Work Experience
                </div>
                <div 
                    class="w-100 d-flex flex-column fill-height" 
                    :class="isDesktop ? 'mt-6 ga-5': 'mt-3 ga-3'"
                >
                    <div class="d-flex flex-grow-1" v-for="value in experience" :key="value.time">
                        <div 
                            class="bg-white d-flex flex-column w-100 justify-space-between align-start"
                            :class="isDesktop ? 'flex-grow-1 pa-6 custom-rounded-md': 'pa-4 custom-rounded-sm'"
                        >
                            <div class="text-brown"  
                                :class="isDesktop ? 'text-h5-regular': 'text-h6-regular'">
                                {{ value.time }}
                            </div>
                            <div class="text-orange mt-2"
                                :class="isDesktop ? 'text-h3-semi-bold': 'text-h4-semi-bold '">
                                {{ value.position }}
                            </div>
                            <div class="text-brown"
                                :class="isDesktop ? 'text-h3-semi-bold': 'text-h4-semi-bold '">
                                {{ value.company }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-col>

        <v-col cols="12" sm="6" md="6" lg="6" class="pr-lg-8">
            <div 
                class="d-flex flex-column align-center justify-start bg-light-orange fill-height" 
                :class="isDesktop ? 'pa-10 custom-rounded-lg': 'pa-5 custom-rounded-md'"   
            >
                <div
                    class="text-white"
                    :class="isDesktop ? 'text-h3-semi-bold': 'text-h4-semi-bold'"
                >
                    Softskills 
                </div>
                <div 
                    class="w-100 d-flex flex-column fill-height"
                    :class="isDesktop ? 'mt-6 ga-3': 'mt-3 ga-2'"
                >
                    <div class="d-flex flex-grow-1" v-for="value in softskills" :key="value.number">
                        <div 
                            class="bg-white d-flex flex-row ga-1 w-100 justify-start align-center"
                            :class="isDesktop ? 'flex-grow-1 px-6 py-3 custom-rounded-md': 'px-4 py-2 custom-rounded-sm'"
                        >
                            <div 
                                class=" text-orange"
                                :class="isDesktop ? 'text-h4-semi-bold': 'text-h5-semi-bold'"
                            >
                                {{ value.number }}
                            </div>
                            <div 
                                class="text-brown pl-3"
                                :class="isDesktop ? 'text-h5-regular': 'text-h6-regular'"
                            >
                                {{ value.descibe }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="12" class="px-lg-8">
            <div 
                class="d-flex flex-column align-center justify-start bg-light-orange fill-height" 
                :class="isDesktop ? 'px-7 py-10 custom-rounded-lg': 'px-2 py-4 custom-rounded-md'"   
            >
                <div
                    class="text-white"
                    :class="isDesktop ? 'text-h3-semi-bold': 'text-h4-semi-bold mb-3'"
                >
                    Hardskills 
                </div>
                <v-row class="d-flex w-100" align="stretch">
                    <v-col 
                        cols="12" sm="4" md="4" lg="4"
                        v-for="value in hardskills" :key="value.category" 
                        class="d-flex"
                    >
                        <HardskillsCard :hardskills="value"/>
                    </v-col>
                </v-row>
            </div>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue';
import useInnerWidth from '~/composables/useInnerWidth';
import HardskillsCard from './hardskills-card.vue';

const { isDesktop } = useInnerWidth();

const experience = ref([
  {
    time: '2024/10 - NOW',
    position: '前端工程師',
    company: 'Insighteye Co., Ltd.',
  },
  {
    time: '2023/02 - 2024/10',
    position: 'UIUX 設計師',
    company: 'Insighteye Co., Ltd.',
  },
//   {
//     time: '2023/02 - 2023/07',
//     position: 'UIUX 實習生',
//     company: 'Insighteye Co., Ltd.',
//   },
]);

const softskills = ref([
  {
    number: '01',
    descibe: '良好的溝通與跨部門協作能力',
  },
  {
    number: '02',
    descibe: '使用者同理心，從需求端思考設計',
  },
  {
    number: '03',
    descibe: '樂於學習並持續精進新技術',
  },
  {
    number: '04',
    descibe: '問題解決能力，能獨立完成任務',
  },
  {
    number: '05',
    descibe: '時間管理與專案規劃能力',
  },
]);

const hardskills = ref([
  {
    category: '平面設計',
    description: '品牌識別設計(Logo / 名片)，社群圖文與網頁視覺設計經驗',
    skills: ['Adobe Illustrator', 'Canva'],
  },
  {
    category: 'UIUX',
    description: '熟悉設計流程，能運用Figma 製作高保真圓型並與前端協作交付，曾參與Web 專案 UIUX 設計與使用者測試訪談',
    skills: ['Flow Chart', 'Wireframe', 'Prototype'],
  },
  {
    category: '前端技術',
    description: '熟悉 HTML / CSS、RWD 切版與 Git 協作，能用 React、Vue 開發元件並串接 API，具 Quasar 、Bootstrap 使用經驗。',
    skills: ['React', 'Vue', 'Git'],
  },
]);
</script>

<style lang="scss" scoped>
.custom-margin {    
    margin-top: -60px;
}

.custom-bg {
    background-image: url('/images/skill-bg.png');
    width: 100%;
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: auto 20%;
}

.custom-top-effect {
    top: -80px; 
    position: relative;
}
</style>