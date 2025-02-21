<template>
    <nav-bar></nav-bar>
    <home-title></home-title>
    <company-carousel></company-carousel>
    <achievements></achievements>
    <review-section></review-section>
    <app-footer></app-footer>
</template>

<script>
import CompanyCarousel from './HomePage Components/CompanyCarousel.vue';
import HomeTitle from './HomePage Components/HomeTitle.vue';
import Achievements from './HomePage Components/Achievements.vue';
import Review from './HomePage Components/Review.vue';
import Nav from "@/components/BaseComponents/NavBar.vue";
import Footer from "@/components/BaseComponents/Footer.vue";
export default {
    components: {
        'company-carousel': CompanyCarousel,
        'home-title': HomeTitle,
        'achievements': Achievements,
        'review-section': Review,
        'nav-bar':Nav,
        'app-footer': Footer
    }
}
</script>