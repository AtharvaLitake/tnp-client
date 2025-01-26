<template>
    <v-container class="px-15 px-xs-0">
        <h1 class="text-h5 font-weight-bold text-primary mb-5">Help & Support</h1>
        <p class="text-secondary text-justify text-h6">This section is designed for students to submit queries directly
            to the Training and Placement Department, ensuring quick communication and efficient resolution of
            placement-related concerns.</p>
        <h1 class="text-h5 font-weight-bold text-primary my-5">Send Query</h1>
        <v-form @submit.prevent>
            <v-textarea label="Enter your query" color="bg-grey-lighten-4" rows="8" class="text-secondary"></v-textarea>
            <v-row class="d-flex justify-end">
                <v-col cols="4" class="d-flex justify-end">
                    <v-btn class="mt-4 bg-primary" size="x-large" type="submit">Send Query</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>
<script>

</script>