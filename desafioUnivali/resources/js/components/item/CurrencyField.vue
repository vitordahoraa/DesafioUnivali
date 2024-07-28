<template>
    <div id="money-info">
            
            <div id="currency-field">
                <p>{{labelTextCurrency}}</p>
                <input class="text-field currency-input" required v-model="valueCurrency">
            </div>
            <div id="value-field">
                <p>{{labelTextValue}}</p>
                <input class="text-field money-input" required placeholder="0,00" v-model="value">
            </div>
            
        </div>
</template>

<script setup>
    import {defineModel, defineProps, defineEmits} from 'vue';

    const valueCurrency = defineModel('currency')
    const value = defineModel('value')

    const props = defineProps(
        {
            labelTextCurrency : {
                type : String,
                required : true
            },
            
            labelTextValue : {
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
    #currency-field
    {
        margin-right: 1rem;
    }
    .currency-input
    {
        width: 3rem;
    }
    .money-input
    {
        unicode-bidi: bidi-override;
        text-align: right;
        width: 17rem;
    }
    #money-info
    {
        display:flex;
    }

</style>