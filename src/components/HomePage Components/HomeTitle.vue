<template>
    <v-container class="px-15">
        <v-row no-gutters jsutify="end">
            <v-col cols="12" sm="6" class="d-flex flex-column" align-self="center">
                <v-sheet>
                <p class="text-secondary">Pune Institute of Computer Technology</p>
                <h1 class="text-primary font-weight-bold">Training and Placement Portal</h1>
                <p class="text-secondary">Your gateway to bright future with placements in great companies</p>
                <v-btn class="mt-4 bg-primary" size="x-large">Login Now</v-btn>
                </v-sheet>
            </v-col>
            <v-col cols="12" sm="6" class="d-flex justify-end" align-self="center">
                <v-sheet>
                    <v-img src="@/Images/home-page-image.svg" width="350"></v-img>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>