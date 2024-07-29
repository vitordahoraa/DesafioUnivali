<script setup>

    //importação das libs e dos componentes
    import {ref, watch,defineProps,onMounted} from 'vue'
    import Field from "../item/TextField.vue"
    import CurrencyField from "../item/CurrencyField.vue"
    import DropDown from "../item/Dropdown.vue"
    import CheckBox from "../item/CheckBoxField.vue"
    import DateField from "../item/DateField.vue"
    import { useRouter } from 'vue-router';
    
    
    const props = defineProps({
            /*
            prop_name : {
                type : String,
                required : false
            },
            prop_dataValidade : {
                type : String,
                default : null,
                required : false

            },
            prop_isPericivel : {
                type : Boolean,
                default : false,
                required : false
            },
            prop_dataFabricacao : {
                type : String,
                required : false

            },
            prop_quantidade : {
                type : String,
                required : false

            },
            prop_valorUnitario : {
                type : String,
                required : false

            },
            prop_moeda : {
                type : String,
                default : 'BRL',
                required : false

            },
            */
            id : {
                type : String,
                required : false

            }
            
    })


    //Definição das constantes utilizadas
    const router = useRouter()
    

    const options = ref(['Litro','Kilograma','Unidade'])
    
    const selectedOption = ref(null)

    const Currency = ref('BRL')

    const Value = ref('')

    const isPerecivel = ref('') 

    const data_vencimento = ref('')

    const data_fabricacao = ref('')

    const placeholderQuantidade = ref('')
    
    const complementQuantidade = ref('')
    
    const name = ref('')

    const quantidade = ref('')
    
    const id = ref('')



    //Vigia a unidade selecionada para alterar os valores de quantidade
    watch(selectedOption,() =>{ 
        switch(selectedOption.value) {
            case 'Unidade':
                placeholderQuantidade.value = '0'
                complementQuantidade.value = 'un'
                break;
            case 'Litro':
                placeholderQuantidade.value =  '0,000'
                complementQuantidade.value = 'lt'
                break;
            case 'Kilograma':
                placeholderQuantidade.value =  '0,000'
                complementQuantidade.value = 'kg'
                break;
            default:
                placeholderQuantidade.value = ''
                complementQuantidade.value = ''
        }
    })




    
    // Função que adiciona dias para uma data
    function addDays(date, days) {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + days);
        return newDate;
    }

    //Função que converte uma string em 'dd/MM/yyyy' para uma var Date
    const convertStringToDate = (date) => {
        let splitDate = date.split('/')

        return new Date(splitDate[2], splitDate[1] - 1 ,splitDate[0])
    }

    //Cria o json do item baseado no formulário
    const createItemJson = () => {
        const formatter = new Intl.DateTimeFormat('pt-br', {dateStyle: 'short'}); 
        return {
            //ID é um numero aleatório entre 0 e 10000, para não ter que implementar um sistema de identificação com localstorage
            'id' : props.id != null ? props.id : Math.floor(Math.random() * 99999),
            'name' : name.value,
            'unit' : selectedOption.value,
            'quantidade' : quantidade.value,
            'moeda' : Currency.value,
            'valor' : Value.value,
            'isPerecivel' : isPerecivel.value,
            'data_vencimento' : data_vencimento.value.length == 0 ? null : formatter.format(addDays(new Date(data_vencimento.value),1)),
            'data_fabricacao' : data_fabricacao.value.length == 0 ? null : formatter.format(addDays(new Date(data_fabricacao.value),1))
        }
    }

    //Função que valida a quantidade baseado na unidade
    const validateQuantidade = (item) => {
        if(item.quantidade.length == 0)
            return true
        
        //Quantidade não deve ter caracteres diferentes de números e virgulas, e no máximo 1 virgula
        if(!/^[0-9|,]+$/.test(item.quantidade) || item.quantidade.split(',').length > 2 ){
            window.alert('Quantidade deve apenas possuir numeros')
            return false

        }

        switch(item.unit){

            case 'Unidade':
                if(item.quantidade.includes(',')){
                    window.alert('Quantidade deve ser numero inteiro')
                    return false
                }
                item.quantidade = item.quantidade.concat(' un')
                return true

            case 'Litro':
            case 'Kilograma':
                
            if(item.quantidade.includes(',')){
                if(item.quantidade.split(',')[1].length > 3){
                    window.alert('Quantidade deve ter no maximo 3 casas decimais')
                    return false
                }
            }
                item.quantidade = item.unit=='Litro' ? item.quantidade.concat(' lt') : item.quantidade.concat(' kg')
                return true
        }
        
    }

    //Função responsável por validar o item
    const validateItem = (item) =>
    {   
        //Removendo pontos da quantidae, caso o usuário tenha inserido
        item.quantidade.replace('.','')

        let dataAtual = new Date()
        dataAtual.setHours(0,0,0,0)


        //Verificações dos campos obrigatórios
        if(item.name.length == 0){
            window.alert('Nome do produto obrigatorio')
            return false
        }
        if(item.unit == null){
            window.alert('Unidade do produto obrigatorio')
            return false
        }
        if(item.valor.length == 0){
            window.alert('Valor do produto obrigatorio')
            return false
        }
        if(item.data_fabricacao == null){
            window.alert('Data de fabricacao obrigatorio')
            return false
        }
        if(item.data_vencimento == null && item.isPerecivel){
            window.alert('Data de vencimento obrigatoria para itens pereciveis')
            return false
        }
        
        //Verificar se o tamanho do nome é maior que 50
        if (item.name.length > 50){
            window.alert('Nome do produto com mais de 50 caracteres')
            return false
        }
        
        //Verificar se o nome possui apenas letras
        if (!/^[a-zA-Z]+$/.test(item.name)){
            window.alert('Nome do produto deve possuir apenas letras')
            return false
        }
        
        //Valida as regras da quantidade
        if(!validateQuantidade(item)){
            return false
        }
        
        //Verifica se a data de vencimento é menor que a atual
        if(item.data_vencimento != null){
            if(convertStringToDate(item.data_vencimento) < dataAtual){
                window.alert('Item vencido')
                return false
            }
        }

        if(item.data_vencimento != null){
           //Verifica se a data de vencimento é menor que a data de fabricação, caso seja perecivel
            if(convertStringToDate(item.data_vencimento) < convertStringToDate(item.data_fabricacao) && item.isPerecivel){
                
                window.alert('Item perecivel e com data de fabricacao maior que vencimento')
                return false
            }
        }
        //Verificar se valor do produto contem virgula. Se não, é menos que um real
        if(item.valor.indexOf(',') == -1){
            item.valor = (item.valor/100).toString().replace('.',',')
        }

        return true
    }

    // Função utilizada para salvar o input do usuário numa lista salva no LocalStorage. Caso vazia, ele cria essa lista.
    //Antes de salvar no localStorage, ele deve validar o input do usuário com as regras definidas no desafio.
    const saveToLocalStorage = () => {
        let item = createItemJson()
        

        //Validar o item antes de salvar no localStorage
        if(validateItem(item)){
            
            let ArrayOfItens = []
            let storedItens = localStorage.getItem('listOfItemsDesafioUnivali')
            
            if(storedItens != null)
            {
                ArrayOfItens = JSON.parse(storedItens)            
            }
            if(props.id == null){
                ArrayOfItens.push(item)
                window.alert('Item adicionado com sucesso')
            } else {
                let index = ArrayOfItens.findIndex(field => field.id == props.id)
                ArrayOfItens[index] = item
                window.alert('Item editado com sucesso')
            }
            localStorage.setItem('listOfItemsDesafioUnivali',JSON.stringify(ArrayOfItens))

            router.push('/')
        }
    }

    
    //Verifica se a chamada do component passou algum ID via params
    onMounted(() => {
        if(props.id != null){
            let stringOfList = localStorage.getItem('listOfItemsDesafioUnivali')
            if(stringOfList != null){
                let listOfItens = JSON.parse(stringOfList)

                let editItem = listOfItens.find(field => field.id == props.id)

                name.value = editItem.name
                
                Currency.value = editItem.moeda

                Value.value = editItem.valor

                isPerecivel.value = editItem.isPerecivel

                data_vencimento.value = editItem.data_vencimento == null ? null : convertStringToDate(editItem.data_vencimento).toISOString().split('T')[0]
                data_fabricacao.value = convertStringToDate(editItem.data_fabricacao).toISOString().split('T')[0]

                quantidade.value = editItem.quantidade.split(' ')[0]
                
                selectedOption.value = editItem.unit
                
            }
        }
    }
)

</script>

<template>

<div id="contentBody">

    <div id="header">
        <h1>Cadastro</h1>
        <h2>Cadastro de itens no sistema</h2>
    </div>

    <hr />

    <div id="fields">
        
        <Field labelText="Nome *" v-model:value="name"></Field>


        <div id="unit-field">
            <label id="unit-label" for="unit-input">Unidade *</label>
            <DropDown id="dropdown-input" :options="options" v-model:value="selectedOption"/>
        </div>

        <Field labelText="Quantidade" :placeHolderInput="placeholderQuantidade" v-model:value="quantidade" :complement="complementQuantidade"></Field>

        
        <CurrencyField labelTextCurrency="Moeda *" labelTextValue="Valor *" v-model:currency="Currency" v-model:value="Value"></CurrencyField>
        
        <CheckBox labelText="Item perecivel?" v-model:value="isPerecivel"></CheckBox>
        <div id="DateFields">
            
            <DateField id="dueAtField" :labelText="isPerecivel ? 'Data Vencimento *' : 'Data Vencimento '" v-model:value="data_vencimento"></DateField>
            
            <DateField labelText="Data Fabricacao *" v-model:value="data_fabricacao"></DateField>
        
        </div>
        
    </div>
    
    <div id="buttons">

        <button @click="saveToLocalStorage" id="save-button" >Salvar</button>
        
        <router-link to="/">
            <button id="cancel-button">Cancelar</button>
        </router-link>
    </div>

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
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
    #cancel-button
    {
        
        background-color: #FF9E9E;
        width: 10rem;
        height: 3rem;
        margin-top: 2rem;
        margin-left: 4rem;
        border-radius: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
    #DateFields
    {
        display: flex;
    }
    #dueAtField
    {
        margin-right: 2rem;
    }
    
</style>