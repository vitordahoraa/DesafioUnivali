<template>
    <div id="checkbox-field">
            <p>{{ labelText }}</p>
            <input type="checkbox" id="checkbox" v-model="value" />
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
    
    #checkbox-field
    {
        display:flex;
        width:22rem;
    }
    #checkbox
    {
        margin-left: 3rem;
    }

</style>