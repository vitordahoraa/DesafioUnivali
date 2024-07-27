<script setup>

    import SideBar from './components/Sidebar/SideBar.vue';
    import Catalog from './components/contentComponent/contentComponent.vue';

    const sideBarComponent = shallowRef(SideBar)
    const catalogComponent = shallowRef(Catalog)
</script>

<template>
    <SideBar></SideBar>
</template>