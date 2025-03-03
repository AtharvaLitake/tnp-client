<template>
    <nav-bar></nav-bar>

    <v-container class="px-15 mt-15">
        <v-card class="pa-3 px-10">
            <div v-if="!loader">
                <v-row class="d-flex mb-5 mt-2" no-gutters>
                    <v-col cols="2">
                        <v-img class="circular-image" src="@/Images/Profile-Picture.svg" width="130"></v-img>
                    </v-col>
                    <v-col cols="9">
                        <h1 class="text-h5 font-weight-bold text-primary mb-2">{{ studentDetails.fullName }}</h1>
                        <v-row class="d-flex" no-gutters>
                            <v-col cols="6">
                                <p class="text-body-1 text-primary mb-2">Engineering Branch - <span
                                        class="custom-style">{{
                                            studentDetails.branch }}</span></p>
                                <p class="text-body-1  font-weight-regular text-primary mb-2">Registration Number -
                                    <span class="custom-style">{{
                                        studentDetails.pictRegistrationId }}</span>
                                </p>
                                <p class="text-body-1  font-weight-regular text-primary mb-2">University PRN - <span
                                        class="custom-style">{{
                                            studentDetails.universityPRN }}</span></p>
                            </v-col>
                            <v-col cols="6">
                                <p class="text-body-1  font-weight-regular text-primary mb-2">BE Roll No - <span
                                        class="custom-style">{{
                                            studentDetails.rollNumber }}</span></p>
                                <p class="text-body-1  font-weight-regular text-primary mb-2">Date of Birth - <span
                                        class="custom-style">{{
                                            studentDetails.dateOfBirth }}</span></p>
                                <p class="text-body-1  font-weight-regular text-primary mb-2">Gender - <span
                                        class="custom-style">{{
                                            studentDetails.gender }}</span></p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <h1 class="text-h5 font-weight-bold text-primary mb-2">Contact Details</h1>
                <v-row class="mb-3" no-gutters>
                    <v-col cols="6">
                        <p class="text-body-1  font-weight-regular text-primary mb-2">Primary Email - <span
                                class="custom-style">{{ studentDetails.primaryEmail }}</span></p>

                    </v-col>
                    <v-col cols="6">
                        <p class="text-body-1  font-weight-regular text-primary mb-2 ml-10">Mobile No. - <span
                                class="custom-style">{{
                                    studentDetails.primaryMobileNumber }}</span></p>
                    </v-col>
                </v-row>
                <h1 class="text-h5 font-weight-bold text-primary mb-2">Personal Details</h1>
                <v-row class="mb-3" no-gutters>
                    <v-col cols="6">
                        <p class="text-body-1  font-weight-regular text-primary mb-2">Aadhar Number - <span
                                class="custom-style">{{ studentDetails.aadharNumber }}</span></p>
                        <p class="text-body-1  font-weight-regular text-primary mb-2">PassPort - <span
                                class="custom-style">{{ studentDetails.passportNumber }}</span></p>
                    </v-col>
                    <v-col cols="6">
                        <p class="text-body-1  font-weight-regular text-primary mb-2 ml-10">PanCard - <span
                                class="custom-style">{{
                                    studentDetails.panNumber }}</span></p>
                    </v-col>
                </v-row>
                <h1 class="text-h5 font-weight-bold text-primary mb-2">Educational Details</h1>
                <v-row class="mb-3" no-gutters>
                    <v-col cols="6">
                        <p class="text-body-1  font-weight-regular text-primary mb-2">10th Percentage - <span
                                class="custom-style">{{ studentDetails.percentage10th }}%</span></p>
                    </v-col>
                    <v-col cols="6">
                        <p class="text-body-1  font-weight-regular text-primary mb-2 ml-10">Diploma/12th Percentage - <span
                                class="custom-style">{{
                                    studentDetails.percentage12th }}%</span></p>
                    </v-col>
                </v-row>
                <h1 class="text-h5 font-weight-bold text-primary mb-2">Amcat Result Details</h1>
                <v-row class="mb-2" no-gutters>
                    <v-col cols="6">
                        <p class="text-body-1  font-weight-regular text-primary mb-2">ELQ Score - <span
                                class="custom-style">{{ studentDetails.elqScore }}</span></p>
                    </v-col>
                    <v-col cols="6">
                        <p class="text-body-1  font-weight-regular text-primary mb-2 ml-10">Automata Score - <span
                                class="custom-style">{{
                                    studentDetails.automataScore }}</span></p>
                    </v-col>
                </v-row>
            </div>

            <h1 class="text-h5 font-weight-bold text-primary mb-2 mt-1" v-if="!loader">SGPA Improvement Graph</h1>
            <div id="lineGraph" style="height:300px;"></div>
        </v-card>
    </v-container>
</template>
<script>
import NavBar from './BaseComponents/NavBar.vue'
import axios from 'axios'
import dayjs from 'dayjs';
import Plotly from "plotly.js-dist-min";
export default {
    components: {
        'nav-bar': NavBar
    },
    mounted() {
        this.fetchprofile()
    },
    data() {
        return {
            studentDetails: [],
            loader: false,
            graphData: [],
            layout: {}
        }
    },
    methods: {
        async fetchprofile() {
            this.loader = true;
            try {
                const response = await axios.get(
                    "https://tnp-portal-backend-tpx5.onrender.com/api/v1/students/me/profile"
                );
                this.studentDetails = response.data.student;
                this.studentDetails.dateOfBirth = dayjs(this.studentDetails.dateOfBirth).format("YYYY-MM-DD")
            } catch (err) {
                console.log(err);
            } finally {
                this.loader = false
                this.rendergraph()
            }
        },
        rendergraph() {
            const graph = {
                x: [1, 2, 3, 4, 5, 6],
                y: [this.studentDetails.sgpaFeSem1, this.studentDetails.sgpaFeSem2,
                this.studentDetails.sgpaSeSem1, this.studentDetails.sgpaSeSem2, this.studentDetails.sgpaTeSem1,
                this.studentDetails.sgpaTeSem2],
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "#081e7f" },
                hovertemplate: "Semester %{x}<br>SGPA: %{y}<extra></extra>"
            }
            this.layout = {
                xaxis: {
                    title: {
                        text: "Engineering Semesters",
                        font: { color: "#081e7f" }
                    },
                    titlefont: { color: "#081e7f" },
                    tickfont: { color: "#081e7f" }
                },
                yaxis: {
                    title: {
                        text: "SGPA",
                        font: { color: "#081e7f" },
                    },
                    range:[6,10.5],
                    titlefont: { color: "#081e7f" },
                    tickfont: { color: "#081e7f" }
                },
                margin: { l: 70, r: 20, t: 30, b: 50 }, // Minimal margins
            };
            this.graphData.push(graph)
            Plotly.newPlot("lineGraph", this.graphData, this.layout, {
                displayModeBar: false,
                scrollZoom: false,
                displaylogo: false,
            });
        }
    }
}
</script>

<style scoped>
.custom-style {
    color: rgba(8, 30, 127, 0.6);
}

.custom_loader {
    height: 90vh;
}

</style>
