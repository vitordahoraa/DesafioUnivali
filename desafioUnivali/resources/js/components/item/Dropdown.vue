<template>
    <div class="dropdown-wrapper">
        
        <div class="selected-option" @click=" isDropDownVisible = true" ref="dropdownElement">
            {{ selectedOption || 'Selecione uma unidade de medida'}}
        </div>
    
        <Transition name="fade">
    
            <div v-if="isDropDownVisible"  class="options-wrapper">
            
                <div 
                    class="option"
                    v-for="(option, index) in options"
                    :key="index"
                    @click="toogleOptionSelect(option)"
                >
                    {{ option }}
                </div>
        
            </div>
    
        </Transition>
    
    </div>
</template>

<script setup>
    import {ref, defineProps, defineEmits, onMounted, onBeforeUnmount, watch} from 'vue';


    const props = defineProps(
        {
            options : {
                type : Array,
                required : true
            },
            modelValue : {
                defaul : null
            }
        }
    )
    watch(props.modelValue,() => {
        selectedOption.value = props.modelValue.value
    })
    const dropdownElement = ref(null)
    const selectedOption = ref(null);
    const isDropDownVisible = ref(false);

    const emit = defineEmits(['update:modelValue'])

    const toogleOptionSelect = (option) => {
        selectedOption.value = option;
        emit('update:modelValue',option);
        isDropDownVisible.value = false;
    }

    //Apenas fechar o dropdown caso o click seja fora do elemento que abre o dropdown
    const closeDropdown = (element) => {
        if(!dropdownElement.value.contains(element.target)){
            isDropDownVisible.value = false
        }
    }

    onMounted(() => {
        window.addEventListener('click', closeDropdown)
    })

    onBeforeUnmount(()=>{
        window.removeEventListener('click', closeDropdown)
    })

</script>

<style scoped>
    .wrapper
    {
        padding:1rem;
        cursor:pointer;
        max-width: 200px;
        margin:0 auto;
    }
    .options-wrapper
    {
        position:absolute;
        width: 15rem;
    }
    .selected-option
    {
        padding:0.5rem;
        border: 1px solid #313131;
        border-radius: 8px;
        box-sizing: border-box;
        margin-bottom: 4px;
        height: 2rem;
        width: 15rem;
        cursor:pointer;
    }
    .option:hover
    {
        background-color: #c5c5c5;

    }
    .option
    {
        padding:16px;
        border: 1px solid #313131;
        background-color: white;
        box-sizing: border-box;
        z-index: 3;
    }
    .option:last-of-type
    {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .fade-enter-active
    {
        transition: all 0.3s ease-out;
    }
    .fade-leave-active
    {
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8,1);
    }

    .fade-enter-from,
    .fade-leave-to
    {
        transform: translateY(-4px);
        opacity: 0;
    }
</style>