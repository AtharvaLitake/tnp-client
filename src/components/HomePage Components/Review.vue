<template>
  <v-container class="px-15 px-xs-0">
    <h1 class="text-h5 font-weight-bold text-primary mb-5">Our Successful Students</h1>
    
    <v-carousel
      height="auto"
      show-arrows="hover"
      cycle
      hide-delimiter-background
    >
      <v-carousel-item v-for="(group, index) in chunkedCompanies" :key="index">
        <v-row no-gutters>
          <v-col
            v-for="company in group"
            :key="company.id"
            cols="6"
            class="d-flex justify-center"
          >
            <v-card class="custom-card d-flex flex-column">
              <div class="d-flex align-center">
                <!-- Circular Image -->
                <div class="image-container">
                  <v-img
                    :src="company.image"
                    class="circular-image"
                    height="150"
                    width="150"
                    contain
                  ></v-img>
                </div>

                <!-- Content -->
                <div class="content-section">
                  <v-card-title class="txt">{{
                    company.title
                  }}</v-card-title>
                  <v-card-text>
                    <p class="subtitle-text">{{ company.subtitle }}</p>
                  </v-card-text>

                  <!-- Star Rating -->
                  <div class="text-left mt-2" style="padding-left: 16px">
                    <v-rating
                      :model-value="company.rating"
                      color="amber"
                      readonly
                      density="compact"
                    ></v-rating>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
  <br>
  
</template>
  
  <script>
export default {
    name:"ReviewSection",
  data() {
    return {
      companies: [
        {
          id: 1,
          title: "Apurva Kulkarni",
          subtitle:
            "Provides great opportunities with top companies. The TNP team was supportive throughout, ensuring smooth coordination and timely updates. Overall, a great experience that helped kickstart my career!",
          image: require("@/Images/girlicon.png"),
          rating: 4.5,
        },
        {
          id: 2,
          title: "Atharva Litake",
          subtitle:
            "Provides great opportunities with top companies. The TNP team was supportive throughout, ensuring smooth coordination and timely updates. Overall, a great experience that helped kickstart my career!",
          image:  require("@/Images/boy.png"),
          rating: 3.8,
        },
        {
          id: 3,
          title: "Atharva Litake",
          subtitle:
            "Provides great opportunities with top companies. The TNP team was supportive throughout, ensuring smooth coordination and timely updates. Overall, a great experience that helped kickstart my career!",
          image:  require("@/Images/boy.png"),
          rating: 3.8,
        },
        {
          id: 4,
          title: "Apurva Kulkarni",
          subtitle:
            "Provides great opportunities with top companies. The TNP team was supportive throughout, ensuring smooth coordination and timely updates. Overall, a great experience that helped kickstart my career!",
          image:  require("@/Images/girlicon.png"),
          rating: 3.8,
        },
        {
          id: 5,
          title: "Atharva Litake",
          subtitle:
            "Provides great opportunities with top companies. The TNP team was supportive throughout, ensuring smooth coordination and timely updates. Overall, a great experience that helped kickstart my career!",
          image:  require("@/Images/boy.png"),
          rating: 3.8,
        },
        {
          id: 6,
          title: "Atharva Litake",
          subtitle:
            "Provides great opportunities with top companies. The TNP team was supportive throughout, ensuring smooth coordination and timely updates. Overall, a great experience that helped kickstart my career!",
          image:  require("@/Images/girlicon.png"),
          rating: 3.8,
        },
      ],
    };
  },
  computed: {
    chunkedCompanies() {
      return this.companies.reduce((acc, company, index) => {
        if (index % 2 === 0) acc.push([]);
        acc[acc.length - 1].push(company);
        return acc;
      }, []);
    },
  },
};
</script>
  
<style scoped>
.custom-card {
  background-color: transparent !important; /* Removes background */
  color: black !important;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  border: none !important; /* Removes border */
  box-shadow: none !important; /* Removes shadow */
}

.subtitle-text {
  font-size: 14px;
  color: black;
  line-height: 1.4;
  margin: 0; /* Removes extra space */
}

.content-section {
  flex: 1;
  padding-right: 10px;
}

.txt {
  
  font-size: 18px !important;
  font-style: italic;
}


.image-container {
  width: 180px; 
  height: 180px; 
  display: flex;
  justify-content: flex-start;
  align-items: left;
}

.circular-image {
  border-radius: 50%;
  object-fit: cover;
  
}


</style>
  