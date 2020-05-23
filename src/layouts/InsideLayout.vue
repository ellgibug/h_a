<template>
    <div>
        <h1>Inside</h1>
        <br>
        <v-btn color="red" @click="sendLogoutRequest">Logout</v-btn>
        <br>
        <br>
        <v-btn color="red" @click="getPosts">Posts</v-btn>
        <br>
        {{ user }}
        <hr>
        POSTS {{ posts }}
        <router-view/>
    </div>
</template>

<script>
    import request from "../helpers/request";
    import {mapActions, mapGetters} from "vuex"

    export default {
        name: "login",

        data: () => ({
            login: '',
            password: '',
            posts: []
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
                        if(response.status === 200){
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

            getPosts(){
                const that = this;
                request.get('pages')
                    .then(function (response) {
                        // handle success
                        console.log(response);
                        that.posts = response.data
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
            },
        }
    }
</script>

<style scoped>

</style>