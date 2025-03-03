<template>
  <nav-bar></nav-bar>
  <v-container class="px-15 px-xs-0 mt-15">
    <h1 class="text-h5 font-weight-bold text-primary mb-5">Help & Support</h1>
    <p class="text-justify text-h6" style="color: rgba(8, 30, 127, 0.6);">
      This section is designed for students to submit queries directly to the Training and Placement Department,
      ensuring quick communication and efficient resolution of placement-related concerns.
    </p>
    <h1 class="text-h5 font-weight-bold text-primary my-5">Send Query</h1>
    <v-form @submit.prevent="submitquery">
      <v-textarea label="Enter your query" rows="6" v-model="query" flat counter="100"
        class="text-primary font-weight-medium" hint="Maximum 100 characters allowed" persistent-hint></v-textarea>
      <v-row class="d-flex justify-end">
        <v-col cols="4" class="d-flex justify-end">
          <v-btn class="mt-4 bg-primary" size="x-large" type="submit" :loading="loading">Send Query</v-btn>
        </v-col>
      </v-row>
    </v-form>

  </v-container>
  <app-footer></app-footer>
</template>

<script>
import Nav from "@/components/BaseComponents/NavBar.vue";
import axios from 'axios'
export default {
  name: "HelpSupport",
  components: {
    'nav-bar': Nav
  },
  data() {
    return {
      loading:false,
      query: '',
    };
  },
  methods: {
    submitquery() {
      this.loading=true
      const obj = {
        description: this.query
      }
      axios.post('https://tnp-portal-backend-tpx5.onrender.com/api/v1/queries', obj)
        .then(response => {
          console.log('Query Sent Successfully', response.data);
          this.query=''
          this.loading=false
        })
        .catch(error => {
          console.error(error);
          this.loading=false
        })
    }
  }
};
</script>

<!--Styling-->
<style scoped></style>