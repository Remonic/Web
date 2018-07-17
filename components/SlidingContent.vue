<template>
  <div class="container">
      <div 
        v-for="(page) in pages" 
        :page="page" 
        :key="page" 
        :class="'content content-' + (pageStatuses[pages.indexOf(page)])"
        >
        <slot :name="page"></slot>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    pages: Array,
    currentPage: String
  },
  watch: {
    currentPage: function (newPage, oldPage) {
      var newIndex = this.pages.indexOf(newPage)
      var oldIndex = this.pages.indexOf(oldPage)

      this.pageStatuses[oldIndex] = 'left'
      this.pageStatuses[newIndex] = 'center'

      setTimeout(() => {
        Vue.set(this.pageStatuses, oldIndex, 'right no-transition')

        setTimeout(() => {
          Vue.set(this.pageStatuses, oldIndex, 'right')
        }, 10)
      }, 1000)
    }
  },
  data () {
    let pageStatuses = []

    for (var i = 1; i < this.pages.length; i++) {
      pageStatuses[i] = 'right'
    }

    pageStatuses[0] = 'center'

    return {
      pageStatuses
    }
  }
}
</script>

<style scoped>
.container {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s transform ease;
  width: inherit;
  height: inherit;
}

.content-right {
  transform: translateX(100%);
}

.content-center {
  transform: translateX(0%);
}

.content-left {
  transform: translateX(-100%);
}

.no-transition {
  transition: none !important;
}
</style>
