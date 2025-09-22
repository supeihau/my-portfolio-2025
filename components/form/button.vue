<template>
    <v-btn
        :append-icon="hasIcon && props.appendIcon"
        rounded="xl" 
        size="large" 
        class="text-h5-medium px-5"
        :class="props.class"
        :variant="props.type"
        :disabled="props.disabled"
        @click="onClick()"
    >
        {{ props.btnName }}
    </v-btn>
</template>

<script setup> 
const props = defineProps({
    type: {
        type: String,
        default: '',
        required: true
    },
    class: {
        type: String,
        default: '',
        required: true
    },
    btnName: {
        type: String,
        default: '',
        required: true,
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false,
    },
    hasIcon: {
        type: Boolean,
        default: false,
        required: false,
    },
    appendIcon: {
        type: String,
        default: 'mdi-arrow-right',
        required: false,
    },
});

const emit = defineEmits(['click']);

function onClick() {
  emit('click');
}
</script>

<style lang="scss" scoped>
</style>