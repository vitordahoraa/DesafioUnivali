<script setup>
    import {ref} from "vue";
    import Item from '../catalog/Item.vue'
    
    let listOfItens = JSON.parse(localStorage.getItem('listOfItemsDesafioUnivali'))
    

</script>

<template>
    <div id="contentBody">

        <div id="header">
            <h1>Catalogo</h1>
            <h2>Lista com todos os itens salvos</h2>
        </div>
        <hr />
        <Item v-for="item in listOfItens" :key="item.id" :name="item.name" :dataValidade="item.data_vencimento" :isPerecivel="item.isPerecivel" :dataFabricacao="item.data_fabricacao" :quantidade="item.quantidade" :valorUnitario="item.valor" :moeda="item.moeda"></Item>
    
    
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

</style>
