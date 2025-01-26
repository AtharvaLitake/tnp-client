<template>
    <home-title></home-title>
    <company-carousel></company-carousel>
</template>

<script>
import CompanyCarousel from './HomePage Components/CompanyCarousel.vue';
import HomeTitle from './HomePage Components/HomeTitle.vue';
export default {
    components: {
        'company-carousel': CompanyCarousel,
        'home-title': HomeTitle
    }
}
</script>