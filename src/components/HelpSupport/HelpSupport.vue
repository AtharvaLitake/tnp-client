<template>
  <navbar></navbar>
  <v-container class="px-15 px-xs-0">
    
    <br>
    <br>
    <br>
    <h1 class="text-h5 font-weight-bold text-primary mb-5">Help & Support</h1>
    <p class="text-justify text-h6" style="color: rgba(8, 30, 127, 0.6);">
      This section is designed for students to submit queries directly to the Training and Placement Department,
      ensuring quick communication and efficient resolution of placement-related concerns.
    </p>
    <h1 class="text-h5 font-weight-bold text-primary my-5">Send Query</h1>
    <v-form @submit.prevent>
      <v-textarea label="Enter your query" rows="6" v-model="query" flat counter="100"
        class="text-primary font-weight-medium" hint="Maximum 100 characters allowed" persistent-hint></v-textarea>
      <v-row class="d-flex justify-end">
        <v-col cols="4" class="d-flex justify-end">
          <v-btn class="mt-4 bg-primary" size="x-large" type="submit">Send Query</v-btn>
        </v-col>
      </v-row>
    </v-form>
    
  </v-container>
  <app-footer></app-footer>
</template>

<script>
import Nav from '@/components/BaseComponents/Nav.vue';
import Footer from '@/components/BaseComponents/Footer.vue';
export default {
  name: "HelpSupport",
  components: {
    'navbar': Nav,
    'app-footer': Footer
  },
  data() {
    return {
      query: '', // For binding the textarea input
    };
  },
};
</script>

<!--Styling-->
<style scoped></style>