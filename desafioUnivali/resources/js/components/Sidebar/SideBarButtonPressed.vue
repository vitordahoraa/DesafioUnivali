<template>
    <router-link :to="hrefOutput">
        <div  class="sidebar_item">
            <img v-bind:src="getImageUrl()" :alt="props.altText"/>
            <span>{{ props.insideText }}</span>
        </div>
    </router-link>  
</template>

<script setup>

import {defineProps} from "vue";

/*    export default {
        props : [
            'hrefOutput',
            'insideText',
            'hrefIcon'
        ]
    }
*/

const props = defineProps(
    [
        'insideText',
        'hrefOutput',
        'iconFileName',
        'altText'
    ]
)

function getImageUrl() {

  // This path must be correct for your file
  let result = "../../../svg/"+(props.iconFileName)
  console.log(result)
  return new URL(result, import.meta.url).href
}
</script>

<style scoped>
    .sidebar_item
    {
        position: relative;
        background-color: #15A4F4;
        width: 100%;
        height:2rem;
        margin-top: 1rem;
        
    }

    .sidebar_item > span
    {
        padding-left: 2rem;
        font-size: 22px;
        color: black;
        margin-left: auto;
        margin-top:auto;
        width: 0%;
        color:white;
    }

    .sidebar_item > img 
    {
        width: 1.2rem;
        left:0;
        margin-top:0.2rem;
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);

    }
</style>