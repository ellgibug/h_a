<template>
  <v-container>
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
        <v-btn color="primary" @click="sendLoginRequest">Send</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="isAuthed">
      <v-col>
        Authed
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="primary" @click="getPosts">Projects</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from "axios"
  export default {
    name: 'HelloWorld',

    data: () => ({
      login: '',
      password: '',
      isAuthed: false,
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvbGFyYXZlbFwvaGVscHlcL3B1YmxpY1wvYXBpXC9sb2dpbiIsImlhdCI6MTU5MDIxMzgzMiwiZXhwIjoxNTkwMjIxMDMyLCJuYmYiOjE1OTAyMTM4MzIsImp0aSI6IkJTTlFCR1lmTzhWTFI4NUUiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.UQfealihBV1ZPUuXP3D4VJd-HvxULzsXJLqG16r4lWE'
    }),

    methods: {
      sendLoginRequest(){
        const that = this;
        axios.post('http://localhost:8888/laravel/helpy/public/api/login', {
          email: 'johndoe@gmail.com',
          password: 'password'
        })
                .then(function (response) {
                  console.log(response.data.access_token);
                  if(response.data.access_token){
                    that.isAuthed = true
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
      },

      getPosts(){
        const config = {
          // headers: { Authorization: `Bearer ${this.token}` }
        };

        axios.get('http://localhost:8888/laravel/helpy/public/api/pages', config)
                .then(function (response) {
                  // handle success
                  console.log(response);
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
