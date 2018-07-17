import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VCard,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VTextField,
  VCheckbox,
  VDialog,
  VProgressCircular
} from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: '#58439C',
    accent: '#F9CA24'
  },
  components: {
    VApp,
    VCard,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTextField,
    VCheckbox,
    VDialog,
    VProgressCircular
  },
  iconfont: 'mdi'
})
