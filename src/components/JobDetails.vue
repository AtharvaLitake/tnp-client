<template>
    <v-container class="px-15 mt-15">
    <div class="custom_loader d-flex flex-column justify-center align-center" v-if="loading">
      <v-progress-circular
      model-value="20"
      :size="62"
      indeterminate
      color="primary"
    ></v-progress-circular>
    </div>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      jobId: null,
      jobdetails: null,
      loading:true,
    };
  },
  created() {
    this.jobId = this.$route.params.id;
    console.log(this.jobId)
  },
  mounted()
  {
    this.fetchJobDetails(this.jobId);
  },
  methods: {
    async fetchJobDetails(id) {
      try {
        const response = await axios.get(`https://tnp-portal-backend-tpx5.onrender.com/api/v1/jobs/${id}`);
        this.jobDetails = response.data;
        console.log(this.jobDetails)
      } catch (err) {
        this.error = "Failed to fetch job details";
        console.error(err);
      }finally{
        this.loading=false
      }
    },
  },
};
</script>

<style scoped>
.custom_colors {
  color: rgba(8, 30, 127, 0.6);
}
.custom_loader
{
  height: 90vh;
}
</style>