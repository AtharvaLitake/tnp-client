<template>
  <v-app>
    <company-carousel></company-carousel>
  </v-app>
</template>

<script>
import CompanyCarousel from './components/HomePage Components/CompanyCarousel.vue'
export default {
  components:{
    'company-carousel':CompanyCarousel
  }
}
</script>
