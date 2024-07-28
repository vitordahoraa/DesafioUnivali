<script setup>
    import {ref} from 'vue'
    import Field from "../item/TextField.vue"
    import CurrencyField from "../item/CurrencyField.vue"
    import DropDown from "../item/Dropdown.vue"
    import CheckBox from "../item/CheckBoxField.vue"
    import DateField from "../item/DateField.vue"

    const options = ref(['Litro','Kilograma','Unidade'])
    
    const selectedOption = ref(null)

    const initialCurrency = ref('BRL')

    const initialValue = ref('')

    const isPerecivel = ref(false) 

    const data_vencimento = ref(null)

    const data_fabricacao = ref(null)
    
    const name = ref(null)

    const createItemJson = () => {
        return {
            'id' : Math.floor(Math.random() * 9999),
            'name' : name.value
        }
    }

    const saveToLocalStorage = () => {
        let item = createItemJson()

        console.log(item)
        let storedItens = localStorage.getItem('listOfItemsDesafioUnivali')
        if(storedItens == null)
        {
            let newArrayOfItens = [
                
            ]
        }
        //localStorage.setItem('listOfItemsDesafioUnivali',)
    }

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
        
        <Field labelText="Nome *" v-model:value="name"></Field>


        <div id="unit-field">
            <label id="unit-label" for="unit-input">Unidade *</label>
            <DropDown id="dropdown-input" :options="options" v-model="selectedOption"/>
        </div>

        <Field labelText="Quantidade" v-model:value="quantidade"></Field>

        
        <CurrencyField labelTextCurrency="Moeda *" labelTextValue="Valor *" v-model:currency="initialCurrency" v-model:value="initialValue"></CurrencyField>
        
        <CheckBox labelText="Item perecivel?" v-model:value="isPerecivel"></CheckBox>
        
        <DateField :labelText="isPerecivel ? 'Data Vencimento *' : 'Data Vencimento '" v-model:value="data_vencimento"></DateField>
        
        <DateField labelText="Data Fabricacao" v-model:value="data_fabricacao"></DateField>
        
        
    </div>
    
    <div id="buttons">

        <button @click="saveToLocalStorage" id="save-button" >Salvar</button>
        
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


    #dropdown-input
    {
        margin-top:1rem;
    }
    #unit-field 
    {
        margin:1rem 0;
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