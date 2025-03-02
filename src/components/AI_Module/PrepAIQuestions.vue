<template>
    <nav-bar></nav-bar>
    <div class="custom_loader d-flex flex-column justify-center align-center" v-if="loading">
        <v-progress-circular model-value="20" :size="62" indeterminate
            color="primary"></v-progress-circular>
    </div>
    <v-container class="px-15 mt-15" v-if="paginatedQuestions.length > 0">
        <h1 class="text-h5 font-weight-bold text-primary mb-5">Prep AI Training Module</h1>
        <v-form @submit.prevent="submitAnswers">
            <!-- Iterate over questions -->
            <v-row v-for="(question, index) in paginatedQuestions" :key="index" class="mt-10">
                <v-col cols="12">
                    <v-row class="d-flex justify-center mb-3">
                        <v-col cols="1">
                            <v-img src="@/Images/PrepAi-Logo.png"></v-img>
                        </v-col>
                        <v-col cols="10">
                            <h1 class="text-h5 font-weight-bold text-primary mb-2">
                                Question {{ page }}
                            </h1>
                            <p class="text-justify text-h6 mb-5" style="color: rgba(8, 30, 127, 0.6)">
                                {{ question.question }}
                            </p>
                        </v-col>
                    </v-row>
                </v-col>

                <!-- Answer Input -->
                <v-col cols="12">
                    <v-row class="d-flex justify-center">
                        <v-col cols="1">
                            <v-img src="@/Images/Profile-Picture.svg"></v-img>
                        </v-col>
                        <v-col cols="10">
                            <v-textarea
                                label="Enter your Answer"
                                rows="8"
                                flat
                                counter="400"
                                class="text-primary font-weight-medium"
                                hint="Maximum 400 characters allowed"
                                v-model="submitresponse[page - 1].answer"
                                persistent-hint
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <!-- Pagination -->
            <v-pagination v-model="page" :length="totalPages" :total-visible="5" active-color="primary" class="mt-4"></v-pagination>

            <!-- Navigation Buttons -->
            <v-row class="mt-4 justify-center">
                <v-col cols="2">
                    <v-btn class="bg-primary" size="large" @click="prevPage" :disabled="page === 1 && loader" block>
                        Previous
                    </v-btn>
                </v-col>
                <v-col cols="2">
                    <v-btn class="bg-primary" size="large" @click="validateAndNextPage" block v-if="page !== totalPages">
                        Next
                    </v-btn>
                    <v-btn class="bg-primary" size="large" type="submit" v-if="page === totalPages" block :loading="loader">
                        SUBMIT
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
import NavBar from '../BaseComponents/NavBar.vue';
import axios from 'axios';

export default {
    components: {
        "nav-bar": NavBar
    },
    data() {
        return {
            page: 1,
            skillid: '',
            techQuestions: [],
            submitresponse: [],
            loading:false,
            loader:false
        };
    },
    computed: {
        totalPages() {
            return this.techQuestions.length > 0 ? this.techQuestions.length : 1;
        },
        paginatedQuestions() {
            return this.techQuestions.length > 0 ? [this.techQuestions[this.page - 1]] : [];
        }
    },
    created() {
        this.skillid = this.$route.params.id;
    },
    mounted() {
        this.fetchQuestions();
    },
    methods: {
        validateAndNextPage() {
            if (this.page < this.totalPages) this.page++;
        },
        prevPage() {
            if (this.page > 1) this.page--;
        },
        async fetchQuestions() {
            this.loading=true
            try {
                const response = await axios.get(
                    `https://tnp-portal-backend-tpx5.onrender.com/api/v1/skills/${this.skillid}/questions`
                );
                this.techQuestions = response.data.questions;
                this.submitresponse = this.techQuestions.map(q => ({ question: q.question, answer: "",difficulty:q.difficulty }));
                console.log("Fetched Questions:", this.techQuestions);
            } catch (err) {
                console.error("Error fetching questions:", err);
            }finally{
                this.loading=false
            }
        },
        async submitAnswers() {
            this.loader=true
            const answers={
                questions:this.submitresponse
            }
            try {
                const response = await axios.post(
                    `https://tnp-portal-backend-tpx5.onrender.com/api/v1/skills/${this.skillid}/evaluations`,answers
                );
                localStorage.setItem("Results",JSON.stringify(response.data))
            } catch (err) {
                console.error("Error In Submitting Test", err);
            }
            this.$router.push('/resultpage')
        }
    }
};
</script>

<style scoped>
.custom_loader {
  height: 90vh;
}
</style>
