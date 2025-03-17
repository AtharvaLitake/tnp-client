<!-- eslint-disable vue/no-unused-vars -->
<template>
    <nav-bar></nav-bar>
    <v-container class="px-15 mt-15">
        <h1 class="text-h5 font-weight-bold text-primary mb-3">Check Placed Students</h1>
        <p class="text-justify text-subtitle-1" style="color: rgba(8, 30, 127, 0.6)">
            Congratulations, following students are placed.We are thrilled to announce that the following students have
            been successfully placed! Wishing them all the best for their exciting new journey ahead. Stay inspired and
            keep achieving great heights!
        </p>
        <v-text-field v-model="search" class="text-primary mt-5 mb-1 text-body-1" color="primary"
            append-inner-icon="mdi-magnify" label="Search by Name, Registration_ID or PRN" variant="outlined"
            clearable></v-text-field>
        <v-data-table :headers="table_headers" :items="filteredStudents" class="text-left text-primary"
            :loading="loading">
        </v-data-table>
    </v-container>
    <app-footer></app-footer>
</template>

<script>
import axios from 'axios';
import Nav from "@/components/BaseComponents/NavBar.vue";
import Footer from "@/components/BaseComponents/Footer.vue";
export default {
    data() {
        return {
            jobId:null,
            loading: true,
            placed_students: [],
            search: "",
            table_headers: [
                { title: 'Student Name', key: 'fullName' },
                { title: 'Registration Number', key: 'pictRegistrationId' },
                { title: 'University PRN Number', key: 'universityPRN' },
            ],
        };
    },
    components: {
        "nav-bar": Nav,
        "app-footer": Footer,
    },
    computed: {
        filteredStudents() {
            if (!this.search) return this.placed_students;
            return this.placed_students.filter(student =>
                student.fullName.toLowerCase().includes(this.search.toLowerCase()) ||
                student.pictRegistrationId.toLowerCase().includes(this.search.toLowerCase()) ||
                student.universityPRN.toLowerCase().includes(this.search.toLowerCase())
            );
        }
    },
    created() {
        this.jobId = this.$route.params.id;
        console.log("Job ID:", this.jobId);
    },
    mounted() {
        this.fetchUnverifiedStudents(this.jobId)
    },
    methods: {
        async fetchUnverifiedStudents(jobId) {
            try {
                const response = await axios.get(
                    `https://tnp-portal-backend-tpx5.onrender.com/api/v1/jobs/${jobId}/placed-results`
                );
                this.placed_students = response.data.students;
                console.log(this.placed_students);
            } catch (err) {
                console.log(err);
            } finally {
                this.loading = false;
            }
        },
    }
};
</script>
