<template>
    <div  class="sidebar_item">
        <img v-bind:src="getImageUrl()" :alt="props.altText"/>
        <a :href=props.hrefOutput>{{ props.insideText }}</a>
    </div>
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