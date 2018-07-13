<template>
  <main-card centered card-class="pa-5">
    <span class="login-title">Login to Remonic</span>

    <v-text-field label="Email" class="login-field pt-1"></v-text-field>
    <v-text-field label="Password" type="password" class="login-field"></v-text-field>

    <v-layout row align-center class="login-field pb-3">
      <v-checkbox label="Remember Me" height=2></v-checkbox>
      <v-spacer />
      <a class="forgot-password">Forgot your password?</a>
    </v-layout>

    <v-btn color="accent" block>Login</v-btn>

    <v-layout row align-center justify-center class="login-field mt-3 mb-3" xs4>
      <div class="barrier-line mr-4"></div>
      <span class="or-text">OR</span>
      <div class="barrier-line ml-4"></div>
    </v-layout>

    <v-btn color="accent" block href="/register">Register</v-btn>
  </main-card>
</template>

<script>
import MainCard from '~/components/MainCard'

export default {
  components: {
    MainCard
  }
}
</script>


<style>
.login-title {
  font-size: 34px;
}

.login-field {
  width: 100%;
}

.barrier-line {
  height: 1px;
  background-color: gray;
  width: 20%;
}

.or-text {
  font-weight: lighter;
  font-size: 20px;
  color: gray;
}

.forgot-password {
  text-align: right;
}
</style>
