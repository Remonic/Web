<template>
  <main-card centered card-class="pa-4">
    <span class="register-title">Create an Account</span>

    <v-text-field 
      label="Full Name"
      prepend-icon="perm_identity" 
      class="register-field pt-2"
      :rules="[rules.required]"
      :error="nameError"
      :error-messages="nameError"
      v-model="name">
    </v-text-field>
    <v-text-field 
      label="Email" 
      prepend-icon="email" 
      class="register-field"
      :rules="[rules.required, rules.email]"
      :error="emailError"
      :error-messages="emailError"
      v-model="email">
    </v-text-field>
    <v-text-field 
      label="Password" 
      prepend-icon="lock" 
      class="register-field pb-3" 
      type="password" 
      v-model="password"
      :rules="[rules.required, rules.min]"
      :error="passwordError"
      :error-messages="passwordError"
      messages="Minimum 8 characters">
    </v-text-field>

    <v-btn color="accent" block @click="register" :loading="loading">Register</v-btn>

    <v-dialog v-model="noRegistrationDialog" max-width="310">
      <v-card>
        <v-card-title class="headline">Registration Disabled</v-card-title>

        <v-card-text>Registration has been disabled on Remonic. Please contact the administrator to create an account</v-card-text>
        
        <v-card-actions>
          <v-spacer />
          <v-btn flat @click="noRegistrationDialog = false" color="accent">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      this.error = {}
      this.loading = true

      RemonicApi.register(this.name, this.email, this.password)
        .then(res => {
          this.loading = false

          // todo save token and proceed
        })
        .catch(error => {
          this.loading = false
          let response = error.response.data

          if (response.errorCode === 5) {
            this.noRegistrationDialog = true
            return
          }

          this.error = response
        })
    },
    getErrorMessage (errorTest) {
      return errorTest ? [this.error.errorMessage] : null
    }
  },
  computed: {
    emailError () {
      return this.getErrorMessage(this.error.errorCode === 1 || this.error.errorCode === 3)
    },
    passwordError () {
      return this.getErrorMessage(this.error.errorCode === 2)
    },
    nameError () {
      return this.getErrorMessage(this.error.errorCode === 4)
    }
  },
  data () {
    return {
      rules: {
        min: v => (v !== undefined && v.length >= 8) || 'Minimum 8 characters',
        required: v => (v !== undefined && v.length > 0) || 'Required field',
        email: v => (v !== undefined && v.includes('@')) || 'Must be a valid email'
      },
      loading: false,
      noRegistrationDialog: false,
      error: {
      },
      name: '',
      email: '',
      password: ''
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
