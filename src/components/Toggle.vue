<template>
    <div>
        <input type="checkbox" class="checkbox" :id="id" :checked="isChecked" @click="toggleAndEmit">
        <label :for="id" class="checkbox-label" :style="{ 'background-color': bgColor}">
            <i :class="iconClass1" :style="{ color: color1 }"></i>
            <i :class="iconClass2" :style="{ color: color2 }"></i>
            <span class="ball" :style="{ 'background-color': ballColor}"></span>
        </label>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
    id: {
        type: String,
        default: 'defaultToggle'
    },
    isChecked: {
        type: Boolean,
        default: false
    },
    bgColor: {
        type: String,
        default: 'black'
    },
    ballColor: {
        type: String,
        default: 'white'
    },
    iconClass1: {
        type: String,
        default: 'fas fa-moon'
    },
    iconClass2: {
        type: String,
        default: 'fas fa-sun'
    },
    color1: {
        type: String,
        default: 'yellow'
    },
    color2: {
        type: String,
        default: 'orangered'
    },
    modelValue: {
        type: Boolean,
        default: false
    },
});

const emit = defineEmits(['update:modelValue']);

const toggleAndEmit = () => {
    emit('update:modelValue', !props.modelValue);
};

</script>

<style scoped>
.checkbox {
    opacity: 0;
    position: absolute;
}

.checkbox-label {
    width: 50px;
    height: 26px;
    border-radius: 50px;
    position: relative;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.checkbox-label .ball {
    width: 22px;
    height: 22px;
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
}

.checkbox:checked+.checkbox-label .ball {
    transform: translateX(24px);
}
</style>