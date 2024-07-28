<template>
    <div id="item-container">
        <div id="header">
            <h1 id="nome-item">{{name.length > 15 ? name.substring(0,12).concat('...') : name}}</h1>
            <button id="editar">Editar</button>
            <button id="excluir">Excluir</button>

        </div>

        <div id="quality-info">
            <h2 class="quality-field">
                Validade
            </h2>
            <h3 class="quality-value">
                {{dataValidade}}
            </h3>

            <h2 class="quality-field">
                Produto Perecivel?
            </h2>
            <h3 class="quality-value">
                {{isPericivel ? 'Sim' : 'Nao'}}
            </h3>
            
            <h2 class="quality-field">
                Fabricacao
            </h2>
            <h3 class="quality-value">
                {{dataFabricacao}}
            </h3>
        </div>

        <div id="price-info">
            <h2 class="price-field">
                Quantidade
            </h2>
            <h3 class="price-value">
                {{quantidade}}
            </h3>
            
            <h2 class="price-field">
                Valor Unitario
            </h2>
            <h3 class="price-value">
                {{valorUnitario}} {{ moeda }}
            </h3>

            <h2 class="price-field">
                Valor total
            </h2>
            <h3 class="price-value">
                {{valorUnitario.replace(',','.') * quantidade.split(' ')[0].replace(',','.')}} {{ moeda }}
            </h3>


        </div>
    </div>
</template>

<script setup>
    import {ref, defineProps} from 'vue';

    const props = defineProps(
        {
            name : {
                type : String,
                required : true
            },
            dataValidade : {
                type : String,
                required : true

            },
            isPericivel : {
                type : Boolean,
                required : true
            },
            dataFabricacao : {
                type : String,
                required : true

            },
            quantidade : {
                type : String,
                required : true

            },
            valorUnitario : {
                type : String,
                required : true

            },
            moeda : {
                type : String,
                required : true

            }
            
        
        }
    )

</script>

<style scoped>
    #item-container 
    {
        border: 1px red solid;
        background-color: #bcd3f5;
        border-radius: 1rem;
        padding: 1rem;
        width: 22rem;
        position: relative;
        display: block;
        height: 14rem;
        margin-bottom: 1rem;
    }
    #nome-item
    {
        width: 7rem;
    }

    #header
    {
        display: flex;
    }

    #editar
    {
        height: 1.5rem;
        width: 3rem;
        background-color: #cefad0;
        border:1px grays solid;
        margin-right: 1rem;
        margin-left: 9rem;
    }
    #excluir
    {
        height: 1.5rem;
        width: 3rem;
        background-color: #ffcbd1;
        border:1px grays solid;

    }

    #nome-item
    {
        margin-top: 0;
        font-weight:bold;
        font-family: 'Courier New';
        font-size: 26px;
    }
    #price-info
    {
        position:absolute;
        right:0;
        width:10em;
        padding: 0;
    }

    #quality-info
    {
        width:10em;
        padding: 0;
        position: absolute;
    }

    .quality-field,
    .price-field
    {   
        font-weight: lighter;
        font-family: 'Franklin Gothic Medium';
        font-size: 20px;
        margin-top: 1rem;
        margin-bottom: 0;
    }
    .quality-value,
    .price-value
    {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: normal;
    }
    
    h2
    {   
        font-weight: normal;
        font-family: 'Franklin Gothic Medium';
        font-size: 16px;
    }


</style>