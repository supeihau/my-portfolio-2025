<template>
    <div class="bg-white d-flex flex-column"
        :class="isDesktop ? 'mt-6 pa-6 custom-rounded-md': 'px-4 py-6 custom-rounded-sm'">
        <div class="d-flex flex-row">
            <div class="title-ui"/>
            <div 
                class="text-brown ml-4"
                :class="isDesktop ? 'text-h3-semi-bold': 'text-h4-semi-bold'"
            >
                {{ props.hardskills.category }}
            </div>
        </div>
        <div 
            class="text-brown my-4 flex-grow-1"
            :class="isDesktop ? 'text-h5-regular': 'text-h6-regular'"
        >
            {{ props.hardskills.description }}
        </div>
        <div 
            v-for="value in props.hardskills.skills"
            class="text-orange"
            :class="isDesktop ? 'text-h5-semi-bold': 'text-h6-semi-bold'"
        >
            # {{ value }}
        </div>
    </div>
</template>

<script setup>
import useInnerWidth from '~/composables/useInnerWidth';

const { isDesktop } = useInnerWidth();

const props = defineProps({
  hardskills: {
    type: Object,
    required: true,
    default: () => {},
  }
});
</script>

<style lang="scss" scoped>
.title-ui {
  border: 7px solid #BF6730;
}
</style>