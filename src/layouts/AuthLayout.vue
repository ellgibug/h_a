<template>
    <div class="auth-page">
        <div class="auth-page__content">
            <a href="/">
                <img src="../assets/lamp.png" alt="" width="150px"/>
            </a>
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AuthLayout"
    }
</script>

<style scoped lang="scss">
    .auth-page{
        min-height: 100vh;
        background-color: #f7f8fa;
        display: flex;
        align-items: center;
        justify-content: center;

        &__content{
            text-align: center;
            padding: 20px 50px;
            border: 1px solid #edeaf8;
            background: white;
            /*background: #f7f8fa;*/
            box-shadow: 0 0 10px 5px rgba(59, 74, 87, 0.07);
            /*min-height: 100vh;*/
            /*min-width: 400px;*/
            border-radius: 10px;
            margin:  auto;
        }
    }



</style>