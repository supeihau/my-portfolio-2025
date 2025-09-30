<template>
    <section id="intro">
        <v-row class="px-md-12 px-lg-16 px-8 custom-bg">
            <v-col cols="12" sm="6" md="6" lg="7" class="d-flex align-center pa-0 pl-lg-6">
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
                        我對設計始終抱有熱情，曾自學並產出平面設計作品；大學就讀資管系時，希望結合設計與專業能力，便投入 UIUX 領域，並學習前端技術讓設計稿能落地。我在意的不只是功能，更重視設計感、使用者需求，以及程式碼的可讀性與擴充性。目前熟悉 Nuxt 3、React、Vue 與 Figma，並持續探索設計與程式的平衡。未來希望透過更多實戰，打造能說故事、解決問題、讓使用者喜愛的產品，同時為團隊或品牌創造實際成效。
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="5" class="d-flex align-center justify-center justify-md-end pr-lg-6" :class="!isDesktop && 'mt-5 pa-0'">
                <NuxtImg src="images/intro-pic.png" alt="intro-pic" :class="isDesktop? 'profile-desktop' : 'profile-phone'"/>
            </v-col>
        </v-row>
    </section>
    
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

.profile-desktop {
    width: 88%;
    animation: updown 3s linear infinite;
}

.profile-phone {
    width: 100%;
    animation: updown 3s linear infinite;
}

@keyframes updown {
  0% {
    transform: translateY(-15px);
  }

  50% {
    transform: translateY(15px);
  }

  100% {
    transform: translateY(-15px);
  }
}
</style>