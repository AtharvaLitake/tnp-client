<template>
  <v-app>
    <home-title></home-title>
    <company-carousel></company-carousel>
  </v-app>
</template>

<script>
import CompanyCarousel from './components/HomePage Components/CompanyCarousel.vue'
import HomeTitle from './components/HomePage Components/HomeTitle.vue';
export default {
  components:{
    'company-carousel':CompanyCarousel,
    'home-title':HomeTitle
  }
}
</script>
