<template>
    <v-footer class="bg-primary text-white custom-footer mt-auto">
      <div class="text-center d-flex flex-column">
        <!-- About Us Section -->
        <v-row justify="center">
          <v-col cols="10" sm="11" class="d-flex flex-column align-center mb-2">
            <div class="icon-container">
              <v-btn
                v-for="icon in icons"
                :key="icon"
                :icon="icon"
                class="mx-2 icon-btn"
                variant="text"
              ></v-btn>
            </div>
            <p class="text-center footer-text">
              The Training and Placement Portal is a smart, automated solution designed to revolutionize the hiring process for students and the TNP Department. 
              It serves as a one-stop platform for job listings, eligibility tracking, and seamless student-company interaction, eliminating manual errors and inefficiencies.
              With smart notifications, real-time updates, and seamless communication, students stay informed without the hassle of multiple forms and deadlines. 
            </p>
          </v-col>
        </v-row>
  
        <!-- Footer Bottom Section -->
        <v-col class="text-center mt-2 footer-bottom" cols="12">
          {{ new Date().getFullYear() }} — <strong>@Team_TNP_Portal</strong>
        </v-col>
      </div>
    </v-footer>
  </template>
  
  <script>
  export default {
    name: "GreetFooter",
    data: () => ({
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    }),
  };
  </script>
  
  <style scoped>
  .bg-custom-blue {
    background-color: #081E7F !important;
    padding: 1px 0 !important; 
  }
  
  .custom-footer {
    margin-top: auto; 
    width: 100%;
    max-height: 200px !important; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .icon-container {
    display: flex;
    justify-content: center;
    gap: 10px; 
  }
  
  .icon-btn {
    margin: 0 !important;
    padding: 0 !important;
  }
  
  .footer-text {
    font-size: 14px;
    word-spacing: 4px;
    margin-top: 8px !important; 
    padding: 0 10px;
  }
  
  .footer-bottom {
    margin-top: 10px !important;
    font-size: 14px;
  }
  </style>
  