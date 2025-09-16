<template>
    <div 
        class="bg-white d-flex flex-row"
        :class="isDesktop ? 'pa-10 custom-rounded-lg mt-8': 'pa-5 custom-rounded-md mt-5'"
    >
        <v-row>
            <v-col 
                cols="12" sm="6" md="6" lg="6" class="d-flex flex-column" 
                :class="isDesktop ? 'order-sm-1 order-2' : 'order-2'"
            >
                <div class="d-flex flex-column align-start justify-start flex-grow-1">
                    <div class="text-brown mb-3"
                        :class="isDesktop ? 'text-h3-semi-bold': 'text-h4-semi-bold'"
                    >
                        {{ props.project.title }}
                    </div>
                    <div class="flex-grow-1">
                        <div 
                            v-for="value in props.project.skills"
                            class="text-brown"
                            :class="isDesktop ? 'text-h4-medium': 'text-h6-medium'"
                        >
                            # {{ value }}
                        </div>
                    </div>
                    
                </div>
                <div class="d-flex mt-5"
                    :class="isDesktop || isPad? 'flex-row ga-3': 'flex-column ga-3'"
                >
                    <v-btn  
                        v-if="props.project.designConcept != ''"
                        append-icon="mdi-arrow-right" rounded="xl" size="large" 
                        variant="outlined" color="bg-orange"
                        @click="window.open(props.project.designConcept, '_blank')"
                    >
                        設計理念
                    </v-btn>
                    <v-btn  
                        v-if="props.project.productUrl != ''"
                        append-icon="mdi-arrow-right" rounded="xl" size="large"
                        color="bg-orange"
                        @click="window.open(props.project.productUrl, '_blank')"
                    >
                        產品網址
                    </v-btn>
                </div>
            </v-col>
            <v-col 
                cols="12" sm="6" md="6" lg="6" 
                :class="isDesktop ? 'order-sm-2 order-1' : 'order-1'"
            >
                <img src="https://placehold.co/700x440" alt="project-pic" class="w-100"/>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import useInnerWidth from '~/composables/useInnerWidth';

const { isDesktop, isPad } = useInnerWidth();

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});

</script>

<style lang="scss" scoped>

</style>