<template>
    <v-row class="px-lg-16 px-8 custom-bg">
        <v-col cols="12" md="6" lg="7" class="d-flex align-center pa-0">
            <div class="d-flex flex-column align-start justify-start">
                <div class="text-brown"
                    :class="isDesktop ? 'text-h1-semi-bold': 'text-h2-semi-bold'">
                    Hi, 我的名字
                </div>
                <div class="text-yellow text-h1-semi-bold"
                    :class="isDesktop ? 'text-h1-semi-bold': 'text-h2-semi-bold'">
                    應徵工作職稱
                </div>
                <div class="mt-5 text-brown"
                    :class="isDesktop ? 'text-h5-regular': 'text-h6-regular'">
                    我對設計一直抱有熱情，曾自學並產出一些平面設計作品；大學就讀資管系時，希望將設計興趣與專業能力結合，便開始進入UIUX介面設計的領域，並學習前端相關技術，讓設計稿能真正落地。一路以來，我不僅在意功是否能完成，更重視介面的設計感與使用者需求，同時注重程式碼的可讀性與擴充性。<br/>
                    目前我熟悉 Nuxt 3、React、Vue 與 Figma，並持續探索如何在需求、設計與程式之間找到平衡。未來，我希望透過更多實戰經驗，打造能說故事、解決問題、讓使用者喜愛的數位產品，同時也為團隊或品牌創造流量與實際成效。
                </div>
            </div>
        </v-col>
        <v-col cols="12" md="6" lg="5" class="d-flex align-center justify-end" :class="!isDesktop && 'mt-5'">
            <img src="/images/intro-pic.png" alt="intro-pic" style="width: 90%;"/>
        </v-col>
    </v-row>
</template>

<script setup>
import useInnerWidth from '~/composables/useInnerWidth';

const { isDesktop } = useInnerWidth();
</script>

<style lang="scss" scoped>
.custom-bg {
    background-image: url('/images/intro-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 100px;
    padding-bottom: 100px;
}
</style>