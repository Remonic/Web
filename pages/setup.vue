<template>
  <main-card centered card-class="pa-4 page">
    <sliding-content :pages="['loading', ]" :currentPage="currentPage">
      <div slot="loading" class="centered">
        <v-progress-circular indeterminate color="accent" />
      </div>
    </sliding-content>
  </main-card>
</template>

<script>
import SlidingContent from '~/components/SlidingContent'
import MainCard from '~/components/MainCard'

export default {
  components: {
    SlidingContent,
    MainCard
  },
  data () {
    return {
      currentPage: 'loading'
    }
  }
}
</script>

<style>
.centered {
  display: flex;
  align-content: center;
  justify-content: center;
}

.page {
  height: 40%;
}
</style>

