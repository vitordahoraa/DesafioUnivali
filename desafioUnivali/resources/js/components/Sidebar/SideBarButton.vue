<template>
    <div  class="sidebar_item">
        <img src = "../../../svg/list-items-svgrepo-com.svg" alt="ListItens"/>
        <a id="catalog" href="/catalog">Listagem</a>
    </div>
</template>

<script>
    export default {
        props : [
            'href',
            'insideText',
            'hrefIcon'
        ]
    }
</script>

<style scoped>
    .sidebar_item
    {
        position:relative;
        border: 1px red solid;
        border-radius: 1em;
        margin: 5px;
        padding: 10px;
        width: 6em;
        
    }

    .sidebar_item > a 
    {
        font-size: 22px;
        text-decoration: none; /* no underline */
        color: black;
        margin-left: 0em;
    }

    .sidebar_item > img 
    {
        width: 20px;
        /*padding: 5px 40px 0px 0px ;*/

    }
</style>