<template>Hello World</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      jobId: null,
      jobdetails: null,
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
      }
    },
  },
};
</script>