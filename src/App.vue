<template>
  <v-app>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Nav from "./components/BaseComponents/Nav.vue";
import Footer from './components/BaseComponents/Footer.vue';
export default {
  components:{
    'nav-bar':Nav,
    'app-footer':Footer
  }
}
</script>
