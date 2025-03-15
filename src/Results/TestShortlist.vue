<!-- eslint-disable vue/no-unused-vars -->
<template>
    <nav-bar></nav-bar>
    <v-container class="px-15 mt-15">
        <h1 class="text-h5 font-weight-bold text-primary mb-3">Check Shortlisted Students</h1>
        <p class="text-justify text-subtitle-1" style="color: rgba(8, 30, 127, 0.6)">
            Congratulations, following students have cleared the assessment of this company. Further details will be sent on mail and
            will be updated in notifications section. Stay Alert for updates.
        </p>
        <v-text-field v-model="search" class="text-primary mt-5 mb-1 text-body-1" color="primary"
            append-inner-icon="mdi-magnify" label="Search by Name, Registration_ID or PRN" variant="outlined"
            clearable></v-text-field>
        <v-data-table :headers="table_headers" :items="filteredStudents" class="text-left text-primary"
            :loading="loading">
            <!-- eslint-disable vue/valid-v-slot -->
            <template v-slot:item.actions="{ item }">
                <v-btn color="primary" @click="studentdetails(item.id)">Details</v-btn>
            </template>
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
            loading: true,
            unverified_students: [],
            search: "",
            table_headers: [
                { title: 'Student Name', key: 'fullName' },
                { title: 'Registration Number', key: 'pictRegistrationId' },
                { title: 'University PRN Number', key: 'universityPRN' },
                { title: 'View Registered Student Details', key: 'actions' },
            ],
        };
    },
    components: {
        "nav-bar": Nav,
        "app-footer": Footer,
    },
    computed: {
        filteredStudents() {
            if (!this.search) return this.unverified_students;
            return this.unverified_students.filter(student =>
                student.fullName.toLowerCase().includes(this.search.toLowerCase()) ||
                student.pictRegistrationId.toLowerCase().includes(this.search.toLowerCase()) ||
                student.universityPRN.toLowerCase().includes(this.search.toLowerCase())
            );
        }
    },
    mounted() {
        this.fetchUnverifiedStudents()
    },
    methods: {
        async fetchUnverifiedStudents() {
            try {
                const response = await axios.get(
                    "https://tnp-portal-backend-tpx5.onrender.com/api/v1/students/unverified"
                );
                this.unverified_students = response.data.students;
                console.log(this.unverified_students);
            } catch (err) {
                console.log(err);
            } finally {
                this.loading = false;
            }
        },
        studentdetails(studentID) {
            this.$router.push({ name: "verifyStudent", params: { id: studentID } });
        },
    }
};
</script>
