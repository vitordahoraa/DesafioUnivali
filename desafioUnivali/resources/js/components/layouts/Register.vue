<script setup>
    import {ref, watch} from 'vue'
    import Field from "../item/TextField.vue"
    import CurrencyField from "../item/CurrencyField.vue"
    import DropDown from "../item/Dropdown.vue"
    import CheckBox from "../item/CheckBoxField.vue"
    import DateField from "../item/DateField.vue"

    const options = ref(['Litro','Kilograma','Unidade'])
    
    const selectedOption = ref(null)

    const Currency = ref('BRL')

    const Value = ref('')

    const isPerecivel = ref(false) 

    const data_vencimento = ref(null)

    const data_fabricacao = ref(null)

    const placeholderQuantidade = ref('')
    const complementQuantidade = ref('')
    
    const name = ref(null)
    const quantidade = ref(null)

    
    // Function to Add days to current date
    function addDays(date, days) {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + days);
        return newDate;
    }

    const convertStringToDate = (date) => {
        let splitDate = date.split('/')

        return new Date(splitDate[2], splitDate[1] - 1 ,splitDate[0])
    }

    const createItemJson = () => {
        const formatter = new Intl.DateTimeFormat('pt-br', {dateStyle: 'short'}); 
        return {
            'id' : Math.floor(Math.random() * 9999),
            'name' : name.value,
            'unit' : selectedOption.value,
            'quantidade' : quantidade.value,
            'moeda' : Currency.value,
            'valor' : Value.value,
            'isPerecivel' : isPerecivel.value,
            'data_vencimento' : data_vencimento.value == null ? null : formatter.format(addDays(new Date(data_vencimento.value),1)),
            'data_fabricacao' : data_fabricacao.value == null ? null : formatter.format(addDays(new Date(data_fabricacao.value),1))
        }
    }

    const validateQuantidade = (item) => {
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
                    console.log(item.quantidade)
                    window.alert('Quantidade deve ter no maximo 3 casas decimais')
                    return false
                }
            }
                item.quantidade = item.unit=='Litro' ? item.quantidade.concat(' lt') : item.quantidade.concat(' kg')
                return true
        }
        
    }

    const validateItem = (item) =>
    {   
        //Removendo pontos da quantidae, caso o usuário tenha inserido
        item.quantidade.replace('.','')

        let dataAtual = new Date()
        dataAtual.setHours(0,0,0,0)


        //Verificações dos campos obrigatórios
        if(item.name == null){
            window.alert('Nome do produto obrigatorio')
            return false
        }
        if(item.unit == null){
            window.alert('Unidade do produto obrigatorio')
            return false
        }
        if(item.valor == null){
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
        
        if(!validateQuantidade(item)){
            return false
        }
        
        if(convertStringToDate(item.data_vencimento) < dataAtual){
            window.alert('Item vencido')
            return false
        }

        if(convertStringToDate(item.data_vencimento) < convertStringToDate(item.data_fabricacao) && item.isPerecivel){
            
            window.alert('Item perecivel e com data de fabricacao maior que vencimento')
            return false
        }




        return true
    }

    // Função utilizada para salvar o input do usuário numa lista salva no LocalStorage. Caso vazia, ele cria essa lista.
    //Antes de salvar no localStorage, ele deve validar o input do usuário com as regras definidas no desafio.
    const saveToLocalStorage = () => {
        let item = createItemJson()
        

        //Validar o item antes de salvar no localStorage
        if(validateItem(item)){
            console.log(item)
            
            let ArrayOfItens = []
            let storedItens = localStorage.getItem('listOfItemsDesafioUnivali')
            
            if(storedItens != null)
            {
                ArrayOfItens = JSON.parse(storedItens)            
            }
            ArrayOfItens.push(item)
            //localStorage.setItem('listOfItemsDesafioUnivali',JSON.stringify(ArrayOfItens))
        }
    }

    const quantidadeOnUnit = () =>{
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
    }

    watch(selectedOption,quantidadeOnUnit)
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
            <DropDown id="dropdown-input" :options="options" v-model="selectedOption"/>
        </div>

        <Field labelText="Quantidade" :placeHolderInput="placeholderQuantidade" v-model:value="quantidade" :complement="complementQuantidade"></Field>
        {{ console.log(placeholderQuantidade) }}

        
        <CurrencyField labelTextCurrency="Moeda *" labelTextValue="Valor *" v-model:currency="Currency" v-model:value="Value"></CurrencyField>
        
        <CheckBox labelText="Item perecivel?" v-model:value="isPerecivel"></CheckBox>
        
        <DateField :labelText="isPerecivel ? 'Data Vencimento *' : 'Data Vencimento '" v-model:value="data_vencimento"></DateField>
        
        <DateField labelText="Data Fabricacao *" v-model:value="data_fabricacao"></DateField>
        
        
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