import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark:false,
        themes: {
            light: {
                primary: '#6ed48c',
                // secondary: '#b0bec5',
                // accent: '#8c9eff',
                // error: '#b71c1c',
            },
            dark: {
                primary: '#6ed48c',
                // secondary: '#b0bec5',
                // accent: '#8c9eff',
                // error: '#b71c1c',
            },
        },
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
});
