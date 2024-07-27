<script setup>
    import {ref} from "vue";

    const otherName = ref('')
</script>

<template>
    <input type="text" v-model="otherName"/>


    {{otherName}}
</template>
