<script setup>
    import {ref, shallowRef} from 'vue'
    import SideBarButton from './SideBarButton.vue'

    let buttonBackground = ref(false);

    function changeBackground(){
        buttonBackground.value = !buttonBackground.value;
        console.log(buttonBackground.value);
    }

    const catalogComponent = shallowRef(SideBarButton)



</script>
<template>
    <div class="sidebar">
        <h2>Desafio Univali</h2>
        <div id="itens">
        
            <Transition name="catalogTransition">

               <component :is="catalogComponent"></component>

            </Transition>
        
            <Transition name="itemTransition">
              
                <div class="sidebar_item">
                    <img src = "../../../svg/register-svgrepo-com.svg" alt="Register"/>
                    <a id="item"href="/item">Cadastro</a>
                </div>
            
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