<script setup>
    import {ref, shallowRef} from 'vue'
    import SideBarButton from '../sidebar/SideBarButton.vue'
    import SideBarButtonPressed from '../sidebar/SideBarButtonPressed.vue'

    const buttonPressed = ref('');

    const catalogComponent = shallowRef(SideBarButton)
    const catalogComponentPressed = shallowRef(SideBarButtonPressed)

    const registerComponent = shallowRef(SideBarButton)
    const registerComponentPressed = shallowRef(SideBarButtonPressed)

    defineExpose({
        buttonPressed
    })
</script>
<!-- Template para a barra lateral cujo usuário interage -->
<template>
    <div class="sidebar">
        <h2>Desafio Univali</h2>
        <div id="itens">
            
            <!--  Essa Transition intercala entre o butão selecionado e não selecionado-->
            <Transition name="catalogTransition">

                <component v-if="buttonPressed != 'catalog'" @click="buttonPressed = 'catalog';$emit('catalog')" :is="catalogComponent" insideText="Listagem" hrefOutput="/" iconFileName="list-items-svgrepo-com.svg" altText="Listagem"></component>
                <component v-else-if="buttonPressed === 'catalog'" @click="buttonPressed = 'catalog';$emit('catalog')" :is="catalogComponentPressed" insideText="Listagem" hrefOutput="/" iconFileName="list-items-svgrepo-com.svg" altText="Listagem"></component>

            </Transition>
        
            <Transition name="itemTransition">
                
                <component v-if="buttonPressed != 'register'" @click="buttonPressed = 'register';$emit('register')" :is="registerComponent" insideText="Cadastro" hrefOutput="/register" iconFileName="register-svgrepo-com.svg" altText="Cadastro"></component>
                <component v-else-if="buttonPressed === 'register'" @click="buttonPressed = 'register';$emit('register')" :is="registerComponentPressed" insideText="Cadastro" hrefOutput="/register" iconFileName="register-svgrepo-com.svg" altText="Cadastro"></component>
               
            </Transition>
        
        </div>
    </div>
</template>

<style scoped>
    .sidebar
    {
        border: 1px #15A4F4 solid;
        width: 10rem;
        height: 100%;
        position: fixed;
        left:0;
        top:0;
        background-color: #FAFAFA;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }

        
    .catalogTransition-enter-active,
    .catalogTransition-leave-active {
    transition: all 0.25s ease-out;
    }

    .catalogTransition-enter-from {
    opacity: 0;
    transform: translateX(-30px);
    position:absolute;
    }

    .catalogTransition-leave-to {
    opacity: 0;
    transform: translateX(30px);
    position:absolute;
    }

</style>