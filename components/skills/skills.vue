<template>
    <v-row class="px-md-12 px-lg-16 px-5" align="stretch">
        <v-col cols="12" sm="12" md="6" lg="6" >
            <div
                class="d-flex flex-column align-center justify-start bg-light-orange fill-height"
                :class="isDesktop ? 'pa-10 custom-rounded-lg': 'pa-4 custom-rounded-md'"
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
                            <div class="text-orange"
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

        <v-col cols="12"  sm="12" md="6" lg="6" >
            <div 
                class="d-flex flex-column align-center justify-start bg-light-orange fill-height" 
                :class="isDesktop ? 'pa-10 custom-rounded-lg': 'pa-4 custom-rounded-md'"   
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
                            :class="isDesktop ? 'flex-grow-1 pa-6 custom-rounded-md': 'pa-4 custom-rounded-sm'"
                        >
                            <div 
                                class=" text-orange"
                                :class="isDesktop ? 'text-h4-semi-bold': 'text-h5-semi-bold'"
                            >
                                {{ value.number }}
                            </div>
                            <div 
                                class="text-h4-regular text-brown pl-2"
                                :class="isDesktop ? 'text-h4-regular': 'text-h6-regular'"
                            >
                                {{ value.descibe }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue';
import useInnerWidth from '~/composables/useInnerWidth';

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
</script>

<style lang="scss" scoped>
</style>