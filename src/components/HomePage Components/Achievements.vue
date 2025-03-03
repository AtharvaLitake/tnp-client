<template>
    
    <v-container class="px-15">
        <h1 class="text-h5 font-weight-bold text-primary mb-5">Achievements</h1>
     
      <v-row class="d-flex justify-space-between">
        <v-col cols="12" sm="2" class="d-flex flex-column" align-self="center">
          <v-card class="custom-card mx-auto" style="width: 200px; height: 250px;">
            <v-img
              class="circular-image"
              src="@/Images/male1.jpg"
              cover
            ></v-img>
            <v-card-subtitle class="text-white" style="font-size: 18px; font-weight: 500;">
              Atharva Desai
            </v-card-subtitle>
            <v-card-title class="text-white" style="font-size: 22px;">
              Phonepe
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="12" sm="2" class="d-flex flex-column" align-self="center">
        <v-card class="custom-card mx-auto" style="width: 200px; height: 250px;">
            <v-img
              class="circular-image"
              src="@/Images/male2.jpg"
              cover
            ></v-img>
            <v-card-subtitle class="text-white" style="font-size: 18px; font-weight: 500;">
              Aniket Hend
            </v-card-subtitle>
            <v-card-title class="text-white" style="font-size: 22px;">
              Phonepe
            </v-card-title>
          </v-card>
        </v-col>
  
        <v-col cols="12" sm="2" class="d-flex flex-column" align-self="center">
        <v-card class="custom-card mx-auto" style="width: 200px; height: 250px;">
            <v-img
              class="circular-image"
              src="@/Images/male3.jpg"
              cover
            ></v-img>
            <v-card-subtitle class="text-white" style="font-size: 18px; font-weight: 500;">
               Rajesh Darade
            </v-card-subtitle>
            <v-card-title class="text-white" style="font-size: 22px;">
              Arista
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" sm="2" class="d-flex flex-column" align-self="center">
        <v-card class="custom-card mx-auto" style="width: 200px; height: 250px;">
            <v-img
              class="circular-image"
              src="@/Images/female.jpg"
              cover
            ></v-img>
            <v-card-subtitle class="text-white" style="font-size: 18px; font-weight: 500;">
              Riya Sharma
            </v-card-subtitle>
            <v-card-title class="text-white" style="font-size: 22px;">
              City Bank
            </v-card-title>
          </v-card>
        </v-col>
  
        
  

      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name:"AchievementsSection",
    data() {
      return {};
    },
  };
  </script>
  
  <style scoped>

  .custom-card {
    background-color: #081E7F !important; 
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  
  .text-white {
    color: white !important;
  }
  
  .circular-image {
    width: 120px;  
    height: 120px; 
    border-radius: 50%; 
    object-fit: cover; 
    margin: 10px auto; 
    display: block;
  }
  </style>
  