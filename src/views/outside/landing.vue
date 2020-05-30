<template>
    <div class="wrapper">
        <img src="../../assets/lamp.png" alt="" @click="openLoginPage" height="500px">
    </div>
</template>

<script>
    export default {
        name: "dashboard",
        methods: {
            openLoginPage(){
                window.location.href = '/login'
            }
        }
    }
</script>

<style scoped>
    .wrapper{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>