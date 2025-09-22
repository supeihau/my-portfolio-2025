<template>
    <div class="text-h5-medium mb-3">
        {{ props.label }} 
        <span v-if="props.required" style="color: red;">*</span>
    </div>

    <!-- 一般輸入框 -->
    <v-text-field
        v-if="props.type === 'text'"
        v-model="inputVal"
        variant="outlined"
        :placeholder="props.placeholder"
        :required="props.required"
        :rules="props.rules"
        :disabled="props.disabled"
        hide-details="auto"
        rounded="pill"
    ></v-text-field>

    <!-- 多行輸入框 -->
    <v-textarea 
        v-if="props.type === 'textarea'"
        v-model="inputVal"
        variant="outlined"
        :required="props.required"
        :disabled="props.disabled"
        rows="4"
        rounded="xl"
    >
    </v-textarea>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: String,
        default: '',
        required: false,
    },
    type: {
        type: String,
        default: 'text',
        required: false,
    },
    label: {
        type: String,
        default: '',
        required: true
    },
    placeholder: {
        type: String,
        default: '',
        required: false,
    },
    required: {
        type: Boolean,
        default: false,
        required: false,
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false,
    },
    rules: {
        type: Array,
        default: () => [],
        required: false,
    }
});

const emit = defineEmits(['update:modelValue']);

const inputVal = computed({
  get: () => props.modelValue,
  set: (val) => {
    return emit('update:modelValue', val);
  },
});
</script>

<style lang="scss" scoped>
</style>