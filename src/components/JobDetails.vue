<template>
  <nav-bar></nav-bar>
  <v-container class="px-15 mt-15">
    <!-- Loader -->
    <div class="custom_loader d-flex flex-column justify-center align-center" v-if="loading">
      <v-progress-circular :size="62" indeterminate color="primary"></v-progress-circular>
    </div>
    <h1 class="text-h5 font-weight-bold text-primary mb-2">Job Description</h1>
    <!-- Job Details -->
    <v-card v-if="jobDetails && Object.keys(jobDetails).length" class="pa-1 no-extra-space">
      <v-row align="center" class="mb-1">
        <v-col cols="2">
          <v-avatar size="80">
            <v-img :src="jobDetails.companyLogoURL" alt="Company Logo"></v-img>
          </v-avatar>
        </v-col>
        <v-col>
          <h1 class="text-primary font-weight-bold mb-3 ml-11">
            {{ jobDetails.companyName }}
          </h1>
          <v-list-item-title class="custom-ctc ml-11"><strong>CTC:</strong> ₹{{
            jobDetails.companyPackage
          }}
            LPA</v-list-item-title>
        </v-col>
        <v-col>
          <v-row justify="center">
            <v-btn class="mt-1 bg-primary" size="x-large" style="text-transform: none"
              :disabled="jobDetails.hasApplied || !jobDetails.isEligible" @click="applyCompany(jobDetails.id)">
              {{ buttonText }}
            </v-btn>
          </v-row>
          <h3 style="
              color: #081e7f;
              font-weight: bold;
              text-align: center;
              margin-top: 20px;
            ">
            <strong>Application Deadline - </strong>{{ fomatteddate }}
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" align-self="start">
          <v-list>
            <v-list-item>
              <v-list-item-title class="custom-ctc">
                <strong>Role</strong>
                <span class="custom_colors">- {{ jobDetails.jobRole }}</span>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title class="custom-ctc">
                <strong>Job Location </strong>
                <span class="custom_colors">- {{ jobDetails.jobLocation }}</span>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title class="custom-ctc">
                <strong>Company Description </strong>
                <p class="text-muted custom_colors company-desc" v-html="jobDetails.companyDesc"></p>
              </v-list-item-title>
            </v-list-item>

            <v-btn @click="openCompanyWebsite(jobDetails.companyWebsiteURL)" color="primary" class="ml-3 mt-3 mb-3"
              style="text-transform: none">
              Visit Company Website<v-icon class="ml-2" right>mdi-open-in-new</v-icon>
            </v-btn>

            <v-list-item>
              <v-list-item-title class="custom-ctc">
                <strong>Dream Company </strong>
                <span class="custom_colors">- {{ jobDetails.dreamCompany }}</span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" sm="6" align-self="start">
          <v-list>
            <v-list-item>
              <v-list-item-title class="custom-ctc">
                <strong>Eligibility Criteria -</strong>
                <strong><span class="custom_colors">Eligibile Branches-
                    {{
                      jobDetails.eligibleBranches
                        ? jobDetails.eligibleBranches.join(", ")
                        : "N/A"
                    }}</span></strong></v-list-item-title>
            </v-list-item>

            <v-list-item class="mb-2">
              <v-list-item-title class="custom-ctc"><strong>Company Criteria -</strong></v-list-item-title>
              <strong><span class="custom_colors">10th - {{ jobDetails.percentage10th }} % and
                  above</span></strong><br />
              <strong><span class="custom_colors">12th - {{ jobDetails.percentage12th }} % and
                  above</span></strong><br />
              <strong><span class="custom_colors">CGPA - {{ jobDetails.cgpa }} (No active backlog)</span></strong><br />
              <strong><span class="custom_colors">ELQ Score - {{ jobDetails.elqScore }} % and
                  above</span></strong><br />
              <strong><span class="custom_colors">Autometa fix+pro- {{ jobDetails.automataScore }} and
                  above</span></strong>
            </v-list-item>

            <v-list-item class="mb-2">
              <v-list-item-title class="custom-ctc"><strong>Selection Process -</strong></v-list-item-title>
              <strong><span class="custom_colors">{{
                jobDetails.selectionProcess
              }}</span></strong>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="custom-ctc">
                <strong>Job Description - </strong>
                <a :href="jobDetails.companyJdURL" download="Job_Description.pdf">
                  <v-btn class="mt-4 bg-primary ml-4" size="x-large">
                    Download
                  </v-btn>
                </a>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card>

    <v-alert v-if="error" type="error" class="mt-5">{{ error }}</v-alert>
  </v-container>
  <app-footer></app-footer>
</template>

<script>
import axios from "axios";
import Nav from "@/components/BaseComponents/NavBar.vue";
import Footer from "@/components/BaseComponents/Footer.vue";
import dayjs from "dayjs";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  components: {
    "nav-bar": Nav,
    "app-footer": Footer,
  },
  data() {
    return {
      jobId: null,
      jobDetails: {},
      loading: true,
      btnloader: false,
      fomatteddate: "",
      error: null,
    };
  },
  created() {
    this.jobId = this.$route.params.id;
    console.log("Job ID:", this.jobId);
  },
  mounted() {
    this.fetchJobDetails(this.jobId);
  },
  methods: {
    openCompanyWebsite(url) {
      if (!url.startsWith("http")) {
        url = "https://" + url;
      }
      window.open(url, "_blank");
    },
    async fetchJobDetails(id) {
      try {
        const response = await axios.get(
          `https://tnp-portal-backend-tpx5.onrender.com/api/v1/jobs/${id}`
        );
        this.jobDetails = response.data.job;
        console.log(this.jobDetails);
        this.fomatteddate = dayjs(this.jobDetails.applicationDeadline).format(
          "DD/MM/YYYY"
        );
      } catch (err) {
        this.error = "Failed to fetch job details";
        console.error(err);
        toast.error("Failed to load the job details. Please try again later.", {
          position: "top-center",
          autoClose: 4000,
          style: {
            width: "500px",
            height: "200px",
            fontSize: "16px",
            padding: "10px",
            textAlign: "center",
          },
        });
      } finally {
        this.loading = false;
      }
    },
    async applyCompany(jobid) {
      this.btnloader = true;
      try {
        await axios.post(
          `https://tnp-portal-backend-tpx5.onrender.com/api/v1/jobs/${jobid}/apply`
        );
        this.$router.push("/applications");
      } catch (err) {
        this.error = "Failed to Apply to Job";
        this.btnloader = false;
        console.error(err);
      }
    },
  },
  computed: {
    buttonText() {
      if (this.jobDetails.hasApplied) {
        return "Applied";
      }
      if (!this.jobDetails.isEligible) {
        return "Not Eligible";
      }
      return "Apply Now";
    },
  },
};
</script>

<style scoped>
.custom_colors {
  color: rgba(8, 30, 127, 0.6);
  font-size: 18px;
  font-weight: 400;
}

.custom_loader {
  height: 90vh;
}

.company-desc {
  white-space: pre-line;
}

.custom-ctc {
  color: #081e7f;
  font-size: 18px;
  font-weight: bold;
  margin-top: 0 !important;
  padding-top: 0 !important;
}

.no-extra-space {
  margin: 0 !important;
  padding: 0 !important;
  position: relative;
  top: 0 !important;
}

.v-card {
  margin: 0 !important;
  padding: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.v-row {
  flex-wrap: nowrap !important;
  align-items: center !important;
  margin: 0 !important;
  width: 100% !important;
}

.v-col.logo-col {
  flex: 0 0 auto !important;
  width: 120px !important;
}

.v-col.details-col {
  flex: 1 !important;
  min-width: 0 !important;
}

.v-avatar {
  width: 160px !important;
  height: 160px !important;
  overflow: visible !important;
  margin-right: 15px;
}

.v-img {
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain !important;
}
</style>
