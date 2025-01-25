<template>
    <v-container class="px-15">
        <h1 class="text-h5 font-weight-bold text-primary">Top Recruiters</h1>
        <v-carousel height="auto" show-arrows="hover" cycle hide-delimiter-background class="pl-5">
            <v-carousel-item>
                <v-row no-gutters>
                    <v-col v-for="company in companies" :key="company.id" cols="6" sm="4" lg="3"
                        class="d-flex justify-center">
                        <!-- Apply width and height explicitly -->
                        <v-img :src="company.url" width="100"></v-img>
                    </v-col>
                </v-row>
            </v-carousel-item>
            <v-carousel-item>
                <v-row no-gutters>
                    <v-col v-for="company in companies" :key="company.id" cols="6" sm="4" lg="3"
                        class="d-flex justify-center">
                        <!-- Apply width and height explicitly -->
                        <v-img :src="company.url" />
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            companies: [{
                id: 1, url: require('../../Images/Company Logos/PhonePe-Logo.png')
            }, {
                id: 2, url: require('../../Images/Company Logos/hsbc-logo.png'),
            }, {
                id: 3, url: require('../../Images/Company Logos/Siemens-Logo.png')
            }, {
                id: 4, url: require('../../Images/Company Logos/paloalto-logo.png')
            },
            {
                id: 5, url: require('../../Images/Company Logos/barclays-logo.png')
            },
            {
                id: 6, url: require('../../Images/Company Logos/eq-logo.png')
            },
            {
                id: 7, url: require('../../Images/Company Logos/aci-logo.jpg')
            },
            {
                id: 8, url: 'https://www.freepnglogos.com/uploads/mastercard-png/mastercard-machine-learning-analytics-cloud-cloudera-6.png', width: '100'
            }
            ]
        }
    }
}
</script>