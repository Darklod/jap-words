import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.lightBlue.darken4,
        secondary: colors.grey.darken1,
        accent: colors.red.accent2,
        error: colors.red,
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
})
