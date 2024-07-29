<script setup>
    import {ref, shallowRef} from 'vue'
    import SideBarButton from '../sidebar/SideBarButton.vue'
    import SideBarButtonPressed from '../sidebar/SideBarButtonPressed.vue'

    const buttonPressed = ref('');
    const isCollapsed = ref(false);

    const catalogComponent = shallowRef(SideBarButton)
    const catalogComponentPressed = shallowRef(SideBarButtonPressed)

    const registerComponent = shallowRef(SideBarButton)
    const registerComponentPressed = shallowRef(SideBarButtonPressed)

    const closeNav = () => {
        isCollapsed.value = false;
    }
    
    const openNav = () => {
        isCollapsed.value = true;
    }
</script>
<!-- Template para a barra lateral cujo usuário interage -->
<template>
    <div class="sidebar" :class="{ collapsed : isCollapsed}">
        <div id="itens">
            <img id="closeTab" src="../../../svg/close-tab-svgrepo-com.svg" @click="closeNav"alt="closeTab">
            <h2 id="header">Desafio Univali</h2>
            
            <!--  Essa Transition intercala entre o butão selecionado e não selecionado-->
            <Transition name="catalogTransition" mode="out-in">

                <component v-if="buttonPressed != 'catalog'" @click="buttonPressed = 'catalog';$emit('catalog')" :is="catalogComponent" insideText="Listagem" hrefOutput="/" iconFileName="list-items-svgrepo-com.svg" altText="Listagem"></component>
                <component v-else-if="buttonPressed === 'catalog'" @click="buttonPressed = 'catalog';$emit('catalog')" :is="catalogComponentPressed" insideText="Listagem" hrefOutput="/" iconFileName="list-items-svgrepo-com.svg" altText="Listagem"></component>

            </Transition>
        
            <Transition name="itemTransition" mode="out-in">
                
                <component v-if="buttonPressed != 'register'" @click="buttonPressed = 'register';$emit('register')" :is="registerComponent" insideText="Cadastro" hrefOutput="/register" iconFileName="register-svgrepo-com.svg" altText="Cadastro"></component>
                <component v-else-if="buttonPressed === 'register'" @click="buttonPressed = 'register';$emit('register')" :is="registerComponentPressed" insideText="Cadastro" hrefOutput="/register" iconFileName="register-svgrepo-com.svg" altText="Cadastro"></component>
               
            </Transition>
        
        </div>
    </div>
    <div id="openNav">
        <img src="../../../svg/burger-menu-svgrepo-com.svg" @click="openNav" id="openNav"alt="menu">
    </div>
</template>

<style scoped>
    .sidebar
    {
        border: 1px #15A4F4 solid;
        z-index: 10;
        width: 0;
        height: 100%;
        position: fixed;
        left:0;
        top:0;
        background-color: #FAFAFA;
        align-items: center;
        text-align: center;
        overflow-x: hidden;
        transition: 0.5s;
    }
    
    .sidebar > h2 
    {
        font-weight: normal;
        font-family:'Arial Narrow';
        font-size: 24px;
    }

    #itens
    {   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.3s;
    }
    #closeTab
    {
        width: 2rem;
        position: absolute;
        right:0;
        top: 5px;
        cursor: pointer;
    }
    #openNav
    {
        width: 2rem;
        position: absolute;
        left:5px;
        top: 5px;
        cursor: pointer;
        z-index: 4;
    }
    .collapsed
    {
        width: 18rem;
    }

        
    .catalogTransition-enter-active,
    .catalogTransition-leave-active {
    transition: all 0.25s ease-out;
    }

    .catalogTransition-enter-from {
    opacity: 0;
    transform: translateX(-30px);
    z-index: 5;
    }

    .catalogTransition-leave-to {
    opacity: 0;
    transform: translateX(30px);
    z-index: 5;
    }

</style>