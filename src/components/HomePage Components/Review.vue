<template>
  <v-container class="px-15 px-xs-0">
    <h1 class="text-h5 font-weight-bold text-primary mb-5">
      Our Successful Students
    </h1>

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
                    width="100"
                    height="100"
                    cover
                  ></v-img>
                </div>

                <!-- Content -->
                <div class="content-section">
                  <v-card-title class="txt text-primary">{{
                    company.title
                  }}</v-card-title>
                  <v-card-text>
                    <p class="subtitle-text custom_colors">
                      {{ company.subtitle }}
                    </p>
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
  <br />
</template>
  
  <script>
export default {
  name: "ReviewSection",
  data() {
    return {
      companies: [
        {
          id: 1,
          title: "Riya Sharma",
          subtitle:
            "Provides great opportunities with top companies. The TNP team was supportive throughout, ensuring smooth coordination and timely updates. Overall, a great experience that helped kickstart my career!",
          image: require("@/Images/female.jpg"),
          rating: 4.5,
        },
        {
          id: 2,
          title: "Atharva Desai",
          subtitle:
            "Amazing placement opportunities with top-tier companies! The TNP cell was proactive and ensured a hassle-free process with clear communication. I'm grateful for their support in helping me secure a great start to my professional journey",
          image: require("@/Images/male1.jpg"),
          rating: 3.8,
        },
        {
          id: 3,
          title: "Aniket Hend",
          subtitle:
            "The entire placement process was well-managed, with a wide range of opportunities to choose from. The TNP team was always available to guide and assist, making the journey smooth and stress-free.",
          image: require("@/Images/male2.jpg"),
          rating: 3.8,
        },
        {
          id: 4,
          title: "Apurva Kulkarni",
          subtitle:
            "Highly professional and well-coordinated placement process! The TNP team ensured timely updates and seamless execution, connecting students with some of the best recruiters.",
          image: require("@/Images/female.jpg"),
          rating: 3.8,
        },
        {
          id: 5,
          title: "Raj Darade",
          subtitle:
            "From preparation to final placements, the TNP team provided continuous support and guidance. The process was transparent, and the opportunities were excellent. I'm truly grateful for this experience, which helped me step into the corporate world with confidence!",
          image: require("@/Images/male3.jpg"),
          rating: 3.8,
        },
        {
          id: 6,
          title: "Atharva Desai",
          subtitle:
            "A well-organized placement drive with outstanding opportunities from top companies. The support from the TNP cell was commendable, making the process smooth and efficient. This experience has been a key stepping stone in my career journey!",
          image: require("@/Images/male1.jpg"),
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
  background-color: transparent !important;
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
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: left;
}

.circular-image {
  border-radius: 50%;
  object-fit: cover;
}
.custom_colors {
  color: rgba(8, 30, 127, 0.6);
}
</style>
  