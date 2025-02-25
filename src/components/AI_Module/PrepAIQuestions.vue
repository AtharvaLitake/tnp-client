<template>
    <nav-bar></nav-bar>
    <v-container class="px-15 mt-15">
        <h1 class="text-h5 font-weight-bold text-primary mb-5">Prep AI Training Module</h1>
        <v-row v-for="(question, index) in paginatedQuestions" :key="index" class="mt-10">
            <v-col cols="12">
                <v-row class="d-flex justify-center mb-3">
                    <v-col cols="1">
                        <v-img src="@/Images/PrepAi-Logo.png"></v-img>
                    </v-col>
                    <v-col cols="10">
                        <h1 class="text-h5 font-weight-bold text-primary mb-2">Question {{ page }}</h1>
                        <p class="text-justify text-h6 mb-5" style="color: rgba(8, 30, 127, 0.6)">
                            {{ question }}
                        </p>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row class="d-flex justify-center">
                    <v-col cols="1">
                        <v-img src="@/Images/Profile-Picture.svg"></v-img>
                    </v-col>
                    <v-col cols="10">
                        <v-textarea label="Enter your Answer" rows="8" flat counter="400"
                            class="text-primary font-weight-medium" hint="Maximum 400 characters allowed"
                            persistent-hint></v-textarea>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-pagination v-model="page" :length="totalPages" :total-visible="5" active-color="primary" class="mt-4">
        </v-pagination>

        <v-row class="mt-4 justify-center">
            <!-- Previous Button -->
            <v-col cols="2">
                <v-btn class="bg-primary" size="large" @click="prevPage" :disabled="page === 1" block>
                    Previous
                </v-btn>
            </v-col>
            <!-- Next Button -->
            <v-col cols="2">
                <v-btn class="bg-primary" size="large" @click="validateAndNextPage" block v-if="page!=6">
                    Next
                </v-btn>
                <v-btn class="bg-primary" size="large" type="submit" v-if="page==6" block>SUBMIT</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import NavBar from '../BaseComponents/NavBar.vue';

export default {
    components: {
        "nav-bar": NavBar
    },
    data() {
        return {
            page: 1,
            techQuestions: [
                "Explain Object-Oriented Programming (OOP) with real-world examples and discuss its advantages.",
                "Describe the four main principles of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction, with examples.",
                "What is the difference between a class and an object in OOP? Provide a detailed explanation with code examples.",
                "What is encapsulation in OOP? How does it help in data hiding? Explain with an example.",
                "What is polymorphism in OOP? Explain the difference between compile-time and runtime polymorphism with examples.",
                "What is the difference between method overloading and method overriding? Provide examples to illustrate both concepts."
            ]
        };
    },
    computed: {
        totalPages() {
            return this.techQuestions.length;
        },
        paginatedQuestions() {
            return [this.techQuestions[this.page - 1]];
        }
    },
    methods: {
        validateAndNextPage() {
            if (this.page < this.totalPages) this.page++;
        },
        prevPage() {
            if (this.page > 1) this.page--;
        }
    }
};
</script>
