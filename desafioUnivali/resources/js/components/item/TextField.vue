<template>
    <div id="field">
        <label id="field-label" for="field-input">{{labelText}}</label>
        <div id="input-area">
            <input id="field-input" class="text-field" :placeholder="placeHolderInput" v-model="value"><p>{{ complement }}</p>
        </div>
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
            },
            
            placeHolderInput : {
                type : String,
                required : false
            },
            complement : {
                type : String,
                required : false
            },
            
        }
    )


</script>

<style scoped>
    
    .text-field
    {
        width: 19rem;
        height: 2rem;
        display: block;
    }

    #field-input
    {
        margin-top: 1rem;
    }
    #input-area
    {
        display:flex;
        text-align: center;
    }
    
    #input-area > p
    {
        margin-top: 2rem;
        margin-bottom: 0rem;
        margin-left: 0.6rem;
    }

</style>