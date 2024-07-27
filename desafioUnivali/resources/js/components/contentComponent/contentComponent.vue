<script setup>
    import {ref} from "vue";
    
    const buttonPressed = ref('a')
    

    const otherName = ref(buttonPressed.value)
</script>

<template>
    <div>
        ALO
    </div>

</template>

<style scoped>
    div
    {   
        position: fixed;
        right:0;
        border: 10rem red solid;
    }
</style>
