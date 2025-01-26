<template>
  <v-app>
    <nav-bar/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavBar from "./BaseComponents/NavBar.vue"
export default {
   components:{
    NavBar
   }
}
</script>
