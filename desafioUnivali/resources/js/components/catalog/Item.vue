<template>
    <div id="item-container">
        <div id="header">
            <h1 id="nome-item">{{itemName.length > 15 ? itemName.substring(0,12).concat('...') : itemName}}</h1>
            <button @click="editItem" id="editar">Editar</button>
            <button @click="deleteItem"id="excluir">Excluir</button>

        </div>
        <hr />

        <div id="quality-info">
            <h2 class="quality-field">
                Validade
            </h2>
            <h3 class="quality-value">
                {{dataValidade == null ? 'Nao informada' : dataValidade}}
            </h3>

            <h2 class="quality-field">
                Perecivel?
            </h2>
            <h3 class="quality-value">
                {{isPerecivel ? 'Sim' : 'Nao'}}
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
                {{quantidade.length == 0 ? 'Nao informada' : quantidade}}
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
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const props = defineProps(
        {
            itemName : {
                type : String,
                required : true
            },
            dataValidade : {
                type : String,
                required : false

            },
            isPerecivel : {
                type : Boolean,
                required : true
            },
            dataFabricacao : {
                type : String,
                required : true

            },
            quantidade : {
                type : String,
                required : false

            },
            valorUnitario : {
                type : String,
                required : true

            },
            moeda : {
                type : String,
                required : true

            },
            id : {
                type : Number,
                required : true

            }
            
        
        }
    )

    // Ir para o componente Register, porém com o ID do item atual
    const editItem = () =>
    {
        router.push(
            {
                name : 'registerID', 
                params:{
                    id : props.id
                }
            }
        )
    } 
    
    const deleteItem = () =>
    {
        
        var conf = window.confirm('Voce tem certeza que deseja excluir esse item?');
        if(conf){
            
            let ArrayOfItens = []
            let storedItens = localStorage.getItem('listOfItemsDesafioUnivali')
            
            if(storedItens != null)
            {
                ArrayOfItens = JSON.parse(storedItens)            
            }
            ArrayOfItens = ArrayOfItens.filter(field => field.id != props.id)

            if(ArrayOfItens.length == 0 ){
                localStorage.removeItem('listOfItemsDesafioUnivali')
            } else {
                localStorage.setItem('listOfItemsDesafioUnivali', JSON.stringify(ArrayOfItens))    
            }
            
            window.alert('Item excluido com sucesso')

            window.location.reload()
        }
    } 

</script>

<style scoped>
    #item-container 
    {
        background-color: #bcd3f5;
        border-radius: 1rem;
        padding: 1rem;
        width: 20rem;
        position: relative;
        display: block;
        height: 14rem;
        margin-bottom: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
    #item-container:hover 
    {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    hr 
    {
        margin:0;
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
        width:11em;
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