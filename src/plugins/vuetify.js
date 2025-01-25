// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
// Vuetify
import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    defaultTheme: 'light', // Set default theme to light
    themes: {
      light: {
        colors: {
          primary:'rgb(8, 30, 127)', // Example primary color
          secondary:'rgba(8, 30, 127, 0.6)', // Example secondary color
        },
      },
    },
  },
});
