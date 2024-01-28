
<template>
    <h1>{{ userdetails.name }}</h1>
    <div>
        <el-input v-model="userdetails.hobby" maxlength="100" show-word-limit :autosize="{ maxRows: 2 }" type="textarea" />
    </div>
</template>

<script setup>


const props = defineProps({
    userdetails: Object,
})

</script>