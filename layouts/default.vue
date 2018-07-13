<template>
  <v-app>
    <v-toolbar color="primary" fixed app>
      <v-toolbar-title>
        <a href="/">
          <img src="/remonic-text.svg" style="height: 36px; width: 230px; padding-top: .5rem" />
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat href="/login" color="white">Login / Register</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer fixed app color="primary">
      <v-flex primary text-xs-center white--text xs12>
        &copy; 2018 - <strong>Remonic</strong>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style>
.navbar-link {
  color: white;
  text-decoration: none;
}
</style>
