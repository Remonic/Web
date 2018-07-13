<template>
  <main-card centered card-class="pa-4">
    <span class="register-title">Create an Account</span>

    <v-text-field 
      label="Full Name"
      prepend-icon="perm_identity" 
      class="register-field pt-2" 
      v-model="name">
    </v-text-field>
    <v-text-field 
      label="Email" 
      prepend-icon="email" 
      class="register-field" 
      v-model="email">
    </v-text-field>
    <v-text-field 
      label="Password" 
      prepend-icon="lock" 
      class="register-field pb-3" 
      type="password" 
      v-model="password"
      :rules="[rules.min]"
      messages="Minimum 8 characters">
    </v-text-field>

    <v-btn color="accent" block v-on:click="register" :loading="loading">Register</v-btn>
  </main-card>
</template>

<script>
import RemonicApi from '~/components/api'
import MainCard from '~/components/MainCard'

export default {
  components: {
    MainCard
  },
  methods: {
    register (event) {
      window.setTimeout(() => {
        RemonicApi.register(this.name, this.email, this.password)
          .then(res => {
          })
          .catch(error => {
            this.loading = false
            let response = error.response.data
          })
      }, 1000)
    }
  },
  data () {
    return {
      rules: {
        min: v => (v !== undefined && v.length >= 8) || 'Minimum 8 characters',
        loading: false
      }
    }
  }
}
</script>

<style>
.register-title {
  font-size: 34px;
}

.register-field {
  width: 100%;
}
</style>
