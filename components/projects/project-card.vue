<template>
    <div 
        class="bg-white d-flex flex-row"
        :class="isDesktop ? 'pa-10 custom-rounded-lg mt-8': 'pa-5 custom-rounded-md mt-5'"
    >
        <v-row>
            <v-col 
                cols="12" sm="6" md="6" lg="6" class="d-flex flex-column" 
                :class="textColClass"
            >
                <div class="d-flex flex-column align-start justify-start flex-grow-1">
                    <div class="text-brown mb-3"
                        :class="isDesktop ? 'text-h3-semi-bold': 'text-h4-semi-bold'"
                    >
                        {{ props.project.title }}
                    </div>
                    <div class="text-brown text-h6-regular mb-5">
                        上次更新時間：{{ props.project.pushAt }}
                    </div>
                    <div>
                        <div class="text-brown"
                            :class="isDesktop ? 'text-h5-regular': 'text-h6-regular'"
                        >
                            {{ props.project.brief }}
                        </div>
                    </div>

                    <div class=" align-start justify-start mt-5"
                        :class="isDesktop? 'd-flex row' : 'column'">
                        <div 
                            v-for="value in props.project.skills"
                            class="text-main-orange mr-3"
                            :class="isDesktop ? 'text-h5-medium': 'text-h6-regular'"
                        >
                            # {{ value }}
                        </div>
                    </div>
                    
                </div>
                <div class="d-flex mt-5"
                    :class="isDesktop || isPad? 'flex-row ga-3': 'flex-column ga-3'"
                >
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
            </v-col>
            <v-col 
                cols="12" sm="6" md="6" lg="6" 
                :class="imageColClass"
            >
                <NuxtImg 
                    :src="props.project.picture" 
                    alt="project-pic" 
                    class="w-100 custom-rounded-md" 
                    loading="lazy"
                    format="webp"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import useInnerWidth from '~/composables/useInnerWidth';
import CustomButton from '../form/button.vue';


const { isDesktop, isPad } = useInnerWidth();

const props = defineProps({
    project: {
        type: Object,
        required: true
        },
        index: {
                type: Number,
                required: true
    }
});

const textColClass = computed(() => {
    if (!isDesktop.value) return 'order-2';
    return props.index % 2 === 0 ? 'order-sm-1 order-2' : 'order-sm-2 order-2';
});

const imageColClass = computed(() => {
    if (!isDesktop.value) return 'order-1';
    return props.index % 2 === 0 ? 'order-sm-2 order-1' : 'order-sm-1 order-1';
});

const openLink = (url) => {
  if (!url) return
  if (typeof window !== 'undefined') {
    window.open(url, '_blank')
  }
};
</script>

<style lang="scss" scoped>

</style>