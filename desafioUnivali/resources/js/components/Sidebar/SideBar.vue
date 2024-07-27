<script setup>
    import {ref, shallowRef} from 'vue'
    import SideBarButton from './SideBarButton.vue'
    import SideBarButtonPressed from './SideBarButtonPressed.vue'

    let buttonBackgroundCatalog = ref(false);

    function changeBackground(){
        buttonBackground.value = !buttonBackground.value;
        console.log(buttonBackground.value);
    }

    const catalogComponent = shallowRef(SideBarButton)
    const catalogComponentPressed = shallowRef(SideBarButtonPressed)
    const registerComponent = shallowRef(SideBarButton)



</script>
<template>
    <div class="sidebar">
        <h2>Desafio Univali</h2>
        <div id="itens">
        
            <Transition name="catalogTransition">

                <component v-if="buttonBackgroundCatalog" @click="buttonBackgroundCatalog = !buttonBackgroundCatalog" :is="catalogComponent" insideText="Listagem" hrefOutput="/catalog" iconFileName="list-items-svgrepo-com.svg" altText="Listagem"></component>
                <component v-else-if="!buttonBackgroundCatalog" @click="buttonBackgroundCatalog = !buttonBackgroundCatalog" :is="catalogComponentPressed" insideText="Listagem" hrefOutput="/catalog" iconFileName="list-items-svgrepo-com.svg" altText="Listagem"></component>

            </Transition>
        
            <Transition name="itemTransition">
                
               <component :is="registerComponent" insideText="Cadastro" hrefOutput="/item" iconFileName="register-svgrepo-com.svg" altText="Cadastro"></component>
               
            </Transition>
        
        </div>
    </div>
</template>

<style scoped>
    .sidebar
    {
        border: 1px #15A4F4 solid;
        width: 10rem;
        height: 20rem;
        position: fixed;
        padding: 10px;
        align-items: center;
        text-align: center;
    }
    
    .sidebar > h2 
    {
        font-weight: normal;
        font-family:'Arial Narrow';
        font-size: 24px;
    }

    #itens
    {   
        display:grid;
        padding: 10px;
    }

</style>