<script setup>
    import {ref} from 'vue'
    import DropDown from "../item/Dropdown.vue"

    const options = ref(['Litro','Kilograma','Unidade'])
    
    const selectedOption = ref(null)

    const initialCurrency = ref('BRL')

    const initialValue = ref('')

    const isPerecivel = ref(false) 

    const data_vencimento = ref(null)

    const data_fabricacao = ref(null)

</script>

<template>

<div id="contentBody">

    <div id="header">
        <h1>Cadastro</h1>
        <h2>Cadastro de itens no sistema</h2>
    </div>

    <hr />

<form action="/item_submit">
    <div id="fields">
    
        <div id="unit-field">
            <label id="unit-label" for="unit-input">Unidade *</label>
            <input id="unit-input" type="hidden" :value="selectedOption">
            <DropDown id="dropdown-input" :options="options" v-model="selectedOption"/>
        </div>

        <div id="quantity-field">
            <p>Quantidade</p>
            <input class="text-field" v-model="quantidade">
        </div>
        
        <div id="money-info">
            
            <div id="currency-field">
                <p>Moeda *</p>
                <input class="text-field currency-input" required v-model="initialCurrency">
            </div>
            <div id="value-field">
                <p>Valor *</p>
                <input class="text-field money-input" required placeholder="0,00"v-model="initialValue">
            </div>
            
        </div>
        
        <div id="perecivel-field">
            <p>Produto perecivel?</p>
            <input type="checkbox" id="checkbox" v-model="isPerecivel" />
        </div>
        
        <div id="dueAt-field">
            <p>Data Vencimento {{ isPerecivel ? '*' : ''}}</p>
            <input v-model="data_vencimento" type="date" required />
        </div>
        
        <div id="madeIn-field">
            <p>Data Fabricacao</p>
            <input v-model="data_fabricacao" type="date" required />
        </div>
    </div>
    
    <div id="buttons">

        <input type="submit" id="save-button" value = Salvar></input>
        
        <router-link to="/">
            <button id="cancel-button">Cancelar</button>
        </router-link>
    </div>
</form>

</div>


</template>

<style scoped>
    #contentBody
    {
        position: absolute;
        margin-left: 12rem;
    }
    
    #header
    {
        text-align: left;
        font-family:Georgia;
    }
    #header > h2 
    {
        font-weight: normal;
    }
    .text-field
    {
        width: 22rem;
        height: 2rem;
        display: block;
    }

    #name-input
    {
        margin-top: 1rem;
    }

    #dropdown-input
    {
        margin-top:1rem;
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
    #unit-field 
    {
        margin:1rem 0;
    }
    #perecivel-field
    {
        display:flex;
        width:22rem;
    }
    #checkbox
    {
        margin-left: 3rem;
    }
    #save-button
    {
        background-color: #47FA44;
        width: 10rem;
        height: 3rem;
        margin-top: 2rem;
        border-radius: 1rem;
    }
    #cancel-button
    {
        
        background-color: #FF9E9E;
        width: 10rem;
        height: 3rem;
        margin-top: 2rem;
        margin-left: 4rem;
        border-radius: 1rem;
    }
    
</style>