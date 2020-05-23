<template>
    <v-row class="login-form">
        <v-col cols="12" class="login-form__header">
            Авторизация
        </v-col>
        <v-col cols="12" class="login-form__item">
            <v-text-field
                    color="#e85a19"
                    class="input-center"
                    label="Логин"
                    v-model="login"
            />
        </v-col>
        <v-col cols="12" class="login-form__item">
            <v-text-field
                    color="#e85a19"
                    class="input-center"
                    label="Пароль"
                    v-model="password"
            />
        </v-col>
        <v-col cols="12" class="login-form__item">
            <button class="btn-hover color-2" @click="sendLoginRequest">Войти</button>
        </v-col>
    </v-row>

</template>

<script>
    import request from "../../helpers/request";
    import {mapActions, mapGetters} from "vuex"

    export default {
        name: "login",

        data: () => ({
            login: 'johndoe@gmail.com',
            password: 'password'
        }),

        methods: {
            ...mapActions("user", ["setIsAuthed", "setToken", "setUser"]),


            sendLoginRequest() {
                const that = this;
                request.post('login', {
                    email: this.login,
                    password: this.password
                })
                    .then(function (response) {
                        if(response.data.token){
                            that.setToken(response.data.token)
                            that.setIsAuthed(true)
                            that.setUser(response.data.user)
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

<style  lang="scss">
    .input-center{
        label{
            width: 100%;
            max-width: 100%;
            min-width: 100%;
            text-align: center;
            font-family: "Raleway Light", sans-serif;
        }
        input{
            text-align: center;
            font-family: "Raleway Bold", sans-serif;
        }
    }

    .login-form{
        max-width: 350px;
        &__header{
            font-size: 20px;
            color: #e85a19;
            font-family: "Raleway Bold", sans-serif;
        }
    }
</style>