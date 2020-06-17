<template>
  <div>
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Вход</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Логин"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Пароль"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Войти</v-btn>
              </v-card-actions>
            </v-card>
  </div>
</template>

<script>
import store from './../store'

  export default {
    data () {
      return {
        email: '',
        password: ''  
      }
    },

    methods: {
      async login() {
        var form = {
          email: this.email,
          password: this.password
        }
        console.log("Trying to login " + this.email )

        await axios.post('/api/auth/signin', form, {
            headers: {
              'X-CSRF-TOKEN': window.Laravel.csrfToken,
            }
          },
        )
        .then(async (res) => {
          console.log(res.data['token'])
          store.state.logToken = res.data['token']
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.logToken
          
          await axios.get('/api/auth/me', form, {
            headers: {
              'X-CSRF-TOKEN': window.Laravel.csrfToken,
            }
          }).
          then(res => console.log(res))
          // this.$router.push({ name: 'user' })
        })
      }
    },
    props: {
      source: String,
    },
  }
</script>