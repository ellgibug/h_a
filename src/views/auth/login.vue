<template>
    <v-row>
        <v-col>
            <v-text-field
                    label="Login"
                    v-model="login"
            />
        </v-col>
        <v-col>
            <v-text-field
                    label="Password"
                    v-model="password"
            />
        </v-col>
        <v-col>
            <v-btn color="red" @click="sendLoginRequest">Send</v-btn>
        </v-col>
    </v-row>
</template>

<script>
    import axios from "axios";
    import {mapActions, mapGetters} from "vuex"

    export default {
        name: "login",

        data: () => ({
            login: '',
            password: ''
        }),

        methods: {
            ...mapActions("user", ["setIsAuthed", "setToken", "setUser"]),


            sendLoginRequest() {
                const that = this;
                axios.post('login', {
                    email: 'johndoe@gmail.com',
                    password: 'password'
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

<style scoped>

</style>