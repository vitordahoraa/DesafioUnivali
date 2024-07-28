<template>
    <div id="field">
        <label id="field-label" for="field-input">{{labelText}}</label>
        <input id="field-input" class="text-field" required v-model="value">
    </div>
</template>

<script setup>
    import {defineModel, defineProps, defineEmits} from 'vue';

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
    
    .text-field
    {
        width: 22rem;
        height: 2rem;
        display: block;
    }

    #field-input
    {
        margin-top: 1rem;
    }

</style>