<template>
    <div id="date-field">
        <p>{{ labelText }}</p>
        <input v-model="value" type="date" required />
    </div>
</template>

<script setup>
    import {defineModel, defineProps} from 'vue';

    const value = defineModel('value')

    const props = defineProps(
        {
            labelText : {
                type : String,
                required : true
            }
        }
    )


</script>

<style scoped>
input{
    background-color: #0080ff;
    padding: 15px;
    top: 50%;
    left: 50%;
    font-family: "Roboto Mono",monospace;
    color: #ffffff;
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 5px;
}
::-webkit-calendar-picker-indicator{
    background-color: #ffffff;
    padding: 5px;
    cursor: pointer;
    border-radius: 3px;
}
</style>