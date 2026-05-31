<template>
  <div
    class="project-flip h-100 w-100"
    :class="isDesktop ? 'mt-8' : 'mt-5'"
    @mouseleave="state.switch = false"
  >
    <div
      class="project-flip__inner h-100 w-100"
      :class="{ 'is-flipped': state.switch }"
    >
      <div
        class="project-flip__face project-flip__front bg-white d-flex h-100 w-100"
        :class="
          isDesktop ? 'pa-10 custom-rounded-lg' : 'pa-5 custom-rounded-md'
        "
      >
        <div class="d-flex flex-column align-start justify-start">
          <NuxtImg
            :src="props.project.picture"
            alt="project-pic"
            class="w-100 custom-rounded-md h-100 object-fit"
            loading="lazy"
            format="webp"
          />
          <div
            class="text-brown mb-3 mt-6"
            :class="isDesktop ? 'text-h3-semi-bold' : 'text-h4-semi-bold'"
          >
            {{ props.project.title }}
          </div>
          <div class="text-brown text-h6-regular mb-5">
            上次更新時間：{{ props.project.pushAt }}
          </div>

          <div class="d-flex row align-start justify-start mt-5">
            <div
              v-for="value in props.project.skills"
              :key="value"
              class="text-main-orange mr-3"
              :class="isDesktop ? 'text-h5-medium' : 'text-h6-regular'"
            >
              # {{ value }}
            </div>
          </div>
          <div
            class="w-100 d-flex align-end justify-end cursor-pointer"
            :class="isDesktop ? 'custom-position-desktop' : 'custom-position-phone'"
            @click="state.switch = true"
          >
            <div
              :class="isDesktop ? 'custom-plus-desktop' : 'custom-plus-phone'"
            >
              <v-icon class="text-main-orange" size="32px">mdi-plus</v-icon>
            </div>
          </div>
        </div>
      </div>

      <div
        class="project-flip__face project-flip__back bg-light-orange d-flex h-100 w-100"
        :class="
          isDesktop ? 'pa-10 custom-rounded-lg' : 'pa-5 custom-rounded-md'
        "
      >
        <div class="d-flex flex-column align-start justify-start flex-grow-1">
          <div class="h-100">
            <div
              class="text-white"
              :class="isDesktop ? 'text-h4-semi-bold' : 'text-h5-semi-bold'"
            >
              專案介紹
            </div>
            <div
              class="text-white mt-5"
              :class="isDesktop ? 'text-h5-medium' : 'text-h6-medium'"
            >
              {{ props.project.brief }}
            </div>

            <div
              class="text-white mt-8"
              :class="isDesktop ? 'text-h4-semi-bold' : 'text-h5-semi-bold'"
            >
              內容要點
            </div>
            <ul class="column align-start justify-start mt-5 ml-5">
              <li
                v-for="value in props.project.keyPoint || []"
                :key="value"
                class="text-white mt-1"
                :class="isDesktop ? 'text-h5-medium' : 'text-h6-medium'"
              >
                {{ value }}
              </li>
            </ul>
          </div>

          <div class="d-flex mt-5 flex-row ga-3">
            <CustomButton
              v-if="props.project.designConceptUrl"
              :type="'outlined'"
              :btnName="'設計理念'"
              :class="'bg-white text-main-orange'"
              :has-icon="true"
              @click="openLink(props.project.designConceptUrl)"
            />

            <CustomButton
              v-if="props.project.productUrl"
              :type="'elevated'"
              :btnName="'產品網址'"
              :class="'bg-main-orange text-white'"
              :has-icon="true"
              @click="openLink(props.project.productUrl)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import useInnerWidth from "~/composables/useInnerWidth";
import CustomButton from "../form/button.vue";

const { isDesktop, isPad } = useInnerWidth();

const state = reactive({
  switch: false,
});

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const imageColClass = computed(() => {
  if (!isDesktop.value) return "order-1";
  return props.index % 2 === 0 ? "order-sm-2 order-1" : "order-sm-1 order-1";
});

const openLink = (url) => {
  if (!url) return;
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
};

const switchCards = () => {};
</script>

<style lang="scss" scoped>
.project-flip {
  perspective: 1200px;
}

.project-flip__inner {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.4s ease;
}

.project-flip__inner.is-flipped {
  transform: rotateY(180deg);
}

.project-flip__face {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.project-flip__front {
  position: relative;
}

.project-flip__back {
  position: absolute;
  inset: 0;
  transform: rotateY(180deg);
}

.custom-plus-desktop {
  background: var(--main-light-yellow);
  padding: 16px;
  border-top-left-radius: 32px;
  border-bottom-right-radius: 32px;
}

.custom-position-desktop {
  top: 40px;
  left: 40px;
  position: relative;
  z-index: 1;
}

.custom-plus-phone {
  background: var(--main-light-yellow);
  padding: 12px;
  border-top-left-radius: 24px;
  border-bottom-right-radius: 24px;
}

.custom-position-phone {
  top: 20px;
  left: 20px;
  position: relative;
  z-index: 1;
}
</style>
