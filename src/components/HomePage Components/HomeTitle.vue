<template>
    <v-container class="px-15">
        <br>
        <br>
        <br>

        <v-row class="d-flex justify-space-between">
            <v-col cols="12" sm="6" class="d-flex flex-column" align-self="center">
                <v-sheet>
                    <p class="text-secondary" style="color: rgba(8, 30, 127, 0.6) !important;">Pune Institute of
                        Computer Technology</p>
                    <h1 class="text-primary font-weight-bold">Training and Placement Portal</h1>
                    <p class="text-secondary" style="color: rgba(8, 30, 127, 0.6) !important;">Your gateway to a bright
                        future with placements in great companies</p>
                    <v-btn class="mt-4 bg-primary" size="x-large" @click="LoginorJobs">{{ token ? 'VIEW JOBS' : 'LOGIN'
                    }}</v-btn>
                </v-sheet>
            </v-col>
            <v-col cols="12" sm="4">
                <v-img src="@/Images/home-page-image.svg" width="100%"></v-img>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    data() {
        return {
            token: localStorage.getItem("studentAuth"),
        }
    },
    methods: {
        LoginorJobs() {
            if (this.token != null || this.token != undefined) {
                this.$router.push("/jobs")
            }
            else {
                this.$router.push("/login")
            }
        }
    }
}
</script>