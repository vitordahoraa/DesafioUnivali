<script setup>
    import { useRouter } from 'vue-router';
    import Item from '../catalog/Item.vue'
    
    const router = useRouter();
    
    let listOfItens = JSON.parse(localStorage.getItem('listOfItemsDesafioUnivali'))
    

</script>

<template>
    <div id="contentBody">

        <div id="header">
            <h1>Catalogo</h1>
            <h2>Lista com todos os itens salvos</h2>
            <button @click="router.push({name :  'register'})"id="add-item">Adicionar item</button>
        </div>
        <hr />
        <Item v-for="item in listOfItens" :key="item.id" :itemName="item.name" :dataValidade="item.data_vencimento" :isPerecivel="item.isPerecivel" :dataFabricacao="item.data_fabricacao" :quantidade="item.quantidade" :valorUnitario="item.valor" :moeda="item.moeda" :id="item.id"></Item>
    
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
    #add-item
    {
        background-color: #DFF2FF;
        position: absolute;
        width: 5rem;
        height: 3rem;
        border-radius: 1rem;
        top:1rem;
        right:1rem;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

</style>
