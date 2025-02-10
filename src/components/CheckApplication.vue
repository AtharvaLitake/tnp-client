<template>
    <navbar></navbar>
    <v-container class="px-15">
        <br>
        <br>
        <br>
        <h1 class="text-h5 font-weight-bold text-primary mb-5">Your Applications</h1>
        <v-row no-gutters v-for="application in applications" :key="application.id" justify="space-between" class="mb-2 border-b-sm" style="height: 90px;">
            <v-col cols="3" class="d-flex align-center" >
                <v-img :src="application.url" transition class="mr-5" width="45" height="45"/>
            </v-col>
            <v-col cols="5" class="d-flex flex-column justify-center text-left pl-3">
                    <p class="text-h6 font-weight-bold text-primary mb-2">{{ application.title }}</p>
                    <p class="font-weight-medium text-primary">CTC - {{ application.package }}</p>
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-center">
                <v-btn class="bg-primary text-subtitle-2" width="120" height="30">{{ application.status}}</v-btn>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script>
import Nav from '@/components/BaseComponents/Nav.vue';

export default {
    name: "CheckApplications",
    components: {
    'navbar': Nav,
  },
    data() {
        return {
            applications: [
                {
                    id: 1, title: "PhonePe", package: "33 LPA", url: require('../Images/Company Logos/PhonePe-Logo.jpg'),status:'Applied'
                },
                {
                    id: 2, title: "Barclays", package: "14 LPA", url: require('../Images/Company Logos/barclays-logo.png'),status:'In Progress'
                },
                {
                    id: 3, title: "HSBC", package: "9 LPA", url: require('../Images/Company Logos/hsbc-logo.png'),status:'In Progress'
                },
                {
                    id: 4, title: "EQ Technologic", package: "12 LPA", url: require('../Images/Company Logos/eq-logo.png'),status:'Applied'
                },
            ]
        }
    }
}

</script>