<script setup>
    import {ref} from "vue";
    
    const buttonPressed = ref('a')
    let listOfItens = localStorage.getItem('Desafio_Univali_Itens')
    

    const otherName = ref(buttonPressed.value)
</script>

<template>
    <div id="contentBody">

        <div id="header">
            <h1>Catalogo</h1>
            <h2>Lista com todos os itens salvos</h2>
        </div>
        <hr />

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
