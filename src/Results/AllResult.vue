<template>
    <nav-bar></nav-bar>
    <v-container class="px-15 mt-15">
        <div class="custom_loader d-flex flex-column justify-center align-center" v-if="loading">
            <v-progress-circular :size="62" indeterminate color="primary"></v-progress-circular>
        </div>
        <v-row class="mb-2" v-if="!loading">
            <v-col cols="12">
                <h1 class="text-h5 font-weight-bold text-primary mb-5">Check Results</h1>
                <v-text-field v-model="searchQuery" class="text-primary" color="primary" append-inner-icon="mdi-magnify"
                    label="Search by company" variant="outlined" dense clearable></v-text-field>
            </v-col>
        </v-row>
        <!-- Job Listings -->
        <v-row no-gutters class="d-flex justify-space-between">
            <v-col cols="5" v-for="list in filteredJobs" :key="list.id">
                <v-card style="min-height: 180px" class="mt-4 mb-6">
                    <v-row class="border-b-sm">
                        <v-col cols="3">
                            <v-img :src="list.companyLogoURL" cover style="width: 100%"></v-img>
                        </v-col>
                        <v-col cols="8" class="d-flex flex-column justify-center text-left pl-3">
                            <h1 class="text-h5 font-weight-bold text-primary">
                                {{ list.companyName }}
                            </h1>
                            <h1 class="text-h6 font-weight-bold text-primary">
                                CTC - {{ list.companyPackage }} LPA
                            </h1>
                        </v-col>
                    </v-row>
                    <div class="px-3 pt-4 pb-2 custom_colors text-subtitle-1 ma-0">
                        <p>Role : {{ list.jobRole }}</p>
                        <p>Job Location : {{ list.jobLocation }}</p>
                    </div>
                    <v-row class="px-3 pb-0 mb-0">
                        <v-col cols="6">
                            <v-btn class="bg-primary" style="height: 40px; width: 100%"
                                @click="viewtestshortlist(list.id)">OA Results</v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-btn class="bg-primary" style="height: 40px; width: 100%"
                                @click="viewfinalplaced(list.id)">Placed Students</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <div v-if="!loading">
            <p v-if="filteredJobs.length === 0" class="text-center text-primary">No jobs found.</p>
        </div>
    </v-container>
    <app-footer></app-footer>
</template>

<script>
import axios from "axios";
import Nav from "@/components/BaseComponents/NavBar.vue";
import Footer from "@/components/BaseComponents/Footer.vue";
import dayjs from "dayjs";

export default {
    components: {
        "nav-bar": Nav,
        "app-footer": Footer,
    },
    data() {
        return {
            joblists: [],
            loading: true,
            searchQuery: "",
        };
    },
    computed: {
        filteredJobs() {
            return this.joblists.filter((job) => {
                const search = this.searchQuery.toLowerCase();
                return (
                    (job.companyName.toLowerCase().includes(search))
                );
            });
        },
    },
    mounted() {
        this.fetchjobs();
    },
    methods: {
        async fetchjobs() {
            try {
                const response = await axios.get("https://tnp-portal-backend-tpx5.onrender.com/api/v1/jobs/inactive");
                this.joblists = response.data.jobs.map(job => ({
                    ...job,
                    formatDate: job.applicationDeadline ? dayjs(job.applicationDeadline).format("DD/MM/YYYY") : null
                }));
            } catch (err) {
                console.error(err);
            } finally {
                this.loading = false;
            }
        },
        viewtestshortlist(companyid) {
            this.$router.push({ name: "TestShortlist", params: { id: companyid } });
        },
        viewfinalplaced(companyid) {
            this.$router.push({ name: "FinalPlaced", params: { id: companyid } });
        },
    },
};
</script>

<style scoped>
.custom_colors {
    color: rgba(8, 30, 127, 0.6);
}

.custom_loader {
    height: 90vh;
}
</style>