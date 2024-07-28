<template>
    <div id="field">
        <label id="field-label" for="field-input">{{labelText}}</label>
        <input id="field-input" class="text-field" required v-model="modelValue">
    </div>
</template>

<script setup>
    import {ref, defineProps, defineEmits} from 'vue';

    const props = defineProps({
        {
            labelText : {
                type : String,
                required : true
            },
            modelValue : {
                defaul : null
            }
        }
    })


</script>