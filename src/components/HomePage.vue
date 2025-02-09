<template>
    <navbar></navbar>
    <home-title></home-title>
    <company-carousel></company-carousel>
    <achievements></achievements>
    <app-footer></app-footer>
</template>

<script>
import CompanyCarousel from './HomePage Components/CompanyCarousel.vue';
import HomeTitle from './HomePage Components/HomeTitle.vue';
import Nav from "./BaseComponents/Nav.vue";
import Footer from './BaseComponents/Footer.vue';
import Achievements from './HomePage Components/Achievements.vue';
export default {
    components: {
        'company-carousel': CompanyCarousel,
        'home-title': HomeTitle,
        'achievements': Achievements,
        'navbar': Nav,
        'app-footer': Footer
    }
}
</script>