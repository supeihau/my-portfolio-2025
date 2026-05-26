<template>
    <section id="intro">
        <v-row class="custom-px-lg px-md-12 px-8 custom-bg custom-padding-lg">
            <v-col cols="12" sm="6" md="6" lg="5" class="d-flex align-center justify-center justify-md-end pr-lg-6" :class="!isDesktop && 'mt-5 pa-0'">
                <NuxtImg 
                    src="images/intro-pic.webp" 
                    alt="intro-pic" 
                    :class="isDesktop? 'profile-desktop' : 'profile-phone'" 
                    preload
                    fetchpriority="high" 
                    format="webp"
                    loading="lazy"
                />
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="7" class="d-flex align-center pa-0 pl-lg-6">
                <div class="d-flex flex-column align-start justify-start">
                    <div class="text-brown"
                        :class="isDesktop ? 'text-h1-semi-bold': 'text-h2-semi-bold'">
                        <span>{{ typedGreeting }}</span>
                        <span v-if="showGreetingCursor" class="typewriter-cursor">|</span>
                    </div>
                    <div class="text-main-yellow text-h1-semi-bold typewriter-title-line"
                        :class="isDesktop ? 'text-h1-semi-bold': 'text-h2-semi-bold'">
                        <span>{{ typedTitle }}</span>
                        <span v-if="showTitleCursor" class="typewriter-cursor">|</span>
                    </div>
                    <div class="mt-5 text-brown"
                        :class="isDesktop ? 'text-h5-regular': 'text-h6-regular'">
                        我對設計始終抱有熱情，曾自學並產出平面設計作品；大學就讀資管系時，希望結合設計與專業能力，便投入 UIUX 領域，並學習前端技術讓設計稿能落地。我在意的不只是功能，更重視設計感、使用者需求，以及程式碼的可讀性與擴充性。目前熟悉 Nuxt 3、React、Vue 與 Figma，並持續探索設計與程式的平衡。未來希望透過更多實戰，打造能說故事、解決問題、讓使用者喜愛的產品，同時為團隊或品牌創造實際成效。
                    </div>
                </div>
            </v-col>
        </v-row>
    </section>
    
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import useInnerWidth from '~/composables/useInnerWidth';

const { isDesktop } = useInnerWidth();

const greetingText = "Hi, I'm Selina Su.";
const titleText = 'Design Engineer';
const typeSpeed = 90;
const nextLineDelay = 250;

const typedGreeting = ref('');
const typedTitle = ref('');
const showGreetingCursor = ref(true);
const showTitleCursor = ref(false);

let typingTimer = null;
let nextLineTimer = null;

const clearTypingTimers = () => {
    if (typingTimer) {
        clearInterval(typingTimer);
        typingTimer = null;
    }

    if (nextLineTimer) {
        clearTimeout(nextLineTimer);
        nextLineTimer = null;
    }
};

const typeText = (source, target, done) => {
    let index = 0;

    typingTimer = setInterval(() => {
        index += 1;
        target.value = source.slice(0, index);

        if (index >= source.length) {
            clearInterval(typingTimer);
            typingTimer = null;
            done?.();
        }
    }, typeSpeed);
};

onMounted(() => {
    typedGreeting.value = '';
    typedTitle.value = '';
    showGreetingCursor.value = true;
    showTitleCursor.value = false;

    typeText(greetingText, typedGreeting, () => {
        showGreetingCursor.value = false;

        nextLineTimer = setTimeout(() => {
            showTitleCursor.value = true;
            typeText(titleText, typedTitle, () => {
                showTitleCursor.value = false;
            });
        }, nextLineDelay);
    });
});

onBeforeUnmount(() => {
    clearTypingTimers();
});
</script>

<style lang="scss" scoped>
.custom-bg {
    background-image: url('/images/intro-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 145px;
    padding-bottom: 100px;

    @media (max-width: 960px) {
        padding-top: 70px;
    }
}

.profile-desktop {
    width: 88%;
    animation: updown 6s linear infinite;
}

.profile-phone {
    width: 100%;
    animation: updown 6s linear infinite;
    padding-bottom: 32px;
}

// 打字機效果
.typewriter-cursor {
    display: inline-block;
    margin-left: 2px;
    animation: caret-blink 0.9s steps(1, end) infinite;
}

.typewriter-title-line {
    min-height: 1.5em;
}

@keyframes caret-blink {
    0%,
    49% {
        opacity: 1;
    }

    50%,
    100% {
        opacity: 0;
    }
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