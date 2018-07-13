<template>
    <v-layout column justify-center align-center>
        <v-card class="main-card pb-2">
            <v-layout column justify-center align-center :class="cardClass">
                <v-layout column :justify-center="centered" :align-center="centered" class="content">
                    <slot></slot>
                </v-layout>
            </v-layout>
        </v-card>
    </v-layout>
</template>

<script>
export default {
  props: {
    centered: Boolean,
    cardClass: String
  }
}
</script>


<style scoped>
.content {
  width: 100%;
}

.main-card {
  width: 100%;
}

@media (min-width: 1025px) {
  .main-card {
    max-width: 33%;
  }

  .content {
    width: 75%
  }
}
</style>
