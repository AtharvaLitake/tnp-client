<template>
    <nav-bar />
    <div class="custom_loader d-flex flex-column justify-center align-center" v-if="loading">
      <v-progress-circular :size="62" indeterminate color="primary"></v-progress-circular>
    </div>
    <v-container class="px-15 mt-15" v-if="!loading">
        <h1 class="text-h5 font-weight-bold text-primary mb-5">Your Applications</h1>
        <v-row no-gutters v-for="application in applications" :key="application.id" justify="space-between"
            class="mb-2 border-b-sm" >
            <v-col cols="2" class="d-flex align-center">
                <v-img :src="application.companyLogoURL" transition width="120" height="120"/>
            </v-col>
            <v-col cols="5" class="d-flex flex-column justify-center text-left ">
                <p class="text-h6 font-weight-bold text-primary mb-2">{{ application.companyName}}</p>
                <p class="font-weight-medium text-primary">CTC - {{ application.companyPackage }} LPA</p>
            </v-col>
            <v-col cols="4" class="d-flex flex-column justify-center align-center">
                <v-btn class="mb-2" variant="outlined" size="x-large" color="primary" :to="`jobdetails/${application.id}`">Applied</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <app-footer></app-footer>
</template>

<script>
import axios from 'axios';
import Nav from "@/components/BaseComponents/NavBar.vue";
import Footer from "@/components/BaseComponents/Footer.vue"
export default {
    name: "CheckApplications",
    components: {
        'nav-bar': Nav,
        'app-footer': Footer
    },
    mounted() {
        this.fetchapplications()
    },
    data() {
        return {
            applications: [],
            loading:false
        }
    }, methods: {
        async fetchapplications() {
            this.loading = true;
            try {
                const response = await axios.get(
                    "https://tnp-portal-backend-tpx5.onrender.com/api/v1/students/me/applied-jobs"
                );
                this.applications = response.data.jobs;
                console.log(this.applications)
            } catch (err) {
                console.log(err);
            } finally {
                this.loading = false
            }
        },
    }
}

</script>

<style scoped>
.custom_loader {
  height: 90vh;
}
</style>