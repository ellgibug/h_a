<template>
    <v-app class="inside-page">
        <div class="inside-page__top inside-page-top">
            <div class="inside-page-top__left">
                <div class="top-logo">
<!--                    Helpy-->
                    <img src="../assets/lamp.png" height="44px" alt="">
                </div>
            </div>
            <div class="inside-page-top__right">
                <v-menu offset-y class="menu-no-shadow" open-on-hover>
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on" color="#888" large>mdi-account-circle</v-icon>
                    </template>
                    <v-list class="py-0 top-dropdown">
                        <v-list-item>
                            <v-list-item-title>Личный кабинет</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="sendLogoutRequest">
                            <v-list-item-title>Выход</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>
        <div class="inside-page__content">
            <router-view/>
        </div>

    </v-app>
</template>

<script>
    import request from "../helpers/request";
    import {mapActions, mapGetters} from "vuex"

    export default {
        name: "login",

        data: () => ({

        }),

        computed: {
            ...mapGetters("user", ["user"]),

        },

        methods: {
            ...mapActions("user", ["setIsAuthed", "setToken", "setUser"]),


            sendLogoutRequest() {

                const that = this;

                request.post('logout')
                    .then(function (response) {
                        if (response.status === 200) {
                            that.setToken('')
                            that.setIsAuthed(false)
                            that.setUser({})
                            window.location.reload()
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
        }
    }
</script>

<style lang="scss">


    .v-menu__content{
        box-shadow: 0 0 10px 5px rgba(59, 74, 87, 0.07);
        border: 1px solid #edeaf8;
    }

    .inside-page {
        &__top {
            color: white;
            font-family: "Raleway Bold", sans-serif;
            background: #f6f7fa;
            height: 54px;
            padding: 10px 30px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #edeaf8;
            /*box-shadow:  0 0 10px 5px rgba(59, 74, 87, 0.07);*/
        }
        &__content{
            padding: 30px;
        }
    }

    .inside-page-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .top-logo{
        img{
            /*margin-left: 10px;*/
        }
        font-family: "Raleway Black", sans-serif;
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #888;
        /*text-transform: uppercase;*/
    }

    .top-dropdown{
        .v-list-item{
            min-height: auto;
            padding: 12px 16px;
            &__title{
                font-size: 14px;
                font-family: "Raleway Medium", sans-serif;

            }
        }
    }
</style>