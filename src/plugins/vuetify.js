import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.yellow, //#FFEB3B
        secondary: colors.grey.darken4, //#21212
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        dark: "#212121"
      },
    },
  },
});

/*
*  Importacao da biblioteca vuetify para uso no design da aplicacao
*  classe feita automaticamente pelo vue
*  alteracao apenas nas cores primarias e secundarias
*  alteracao baseada na documentacao da lib em:
*  https://vuetifyjs.com/en/styles/colors
*/
