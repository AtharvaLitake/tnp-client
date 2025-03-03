<template>
  <nav-bar></nav-bar>
  <div class="custom_loader d-flex flex-column justify-center align-center" v-if="loader">
      <v-progress-circular :size="62" indeterminate color="primary"></v-progress-circular>
    </div>
  <v-container class="px-15 px-xs-0 mt-16" v-if="!loader">
    <h1 class="text-h5 font-weight-bold text-primary mb-5">Welcome to Prep AI</h1>
    <p class="text-justify text-h7 mb-5" style="color: rgba(8, 30, 127, 0.6)">
      The Rate Your Skill section features an AI-powered bot designed to help students assess their technical and soft
      skills for fresher-level job interviews.
      The AI bot will ask a series of industry-relevant interview questions, evaluate your responses, and provide a
      skill rating along with personalized feedback on areas for improvement.
    </p>
    <h4 class="text-h6 font-weight-bold text-primary mb-5">Choose a topic you want to be interviewed on</h4>
    <v-row v-for="(row, rowIndex) in formattedTopics" :key="rowIndex" class="mb-4" justify="start">
      <v-col v-for="topic in row" :key="topic.id" cols="12" sm="4" md="4" lg="4" class="d-flex"
        align-self="center">
        <v-card class="custom-card" @click="startskillprep(topic.id)">
          <v-img class="image" :src="topic.logoURL" cover></v-img>
          <v-card-title class="text-primary" style="font-weight: 600;">{{ topic.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import Nav from "@/components/BaseComponents/NavBar.vue";
import axios from "axios";
export default {
  components: {
    "nav-bar": Nav,
  },
  data() {
    return {
      topics: [],
      loader:false,
    };
  },
  computed: {
    formattedTopics() {
      return this.topics.reduce((rows, topic, index) => {
        if (index % 3 === 0) rows.push([]);
        rows[rows.length - 1].push(topic);
        return rows;
      }, []);
    },
  },
  mounted() {
    this.fetchskills()
  },
  methods: {
    async fetchskills() {
      this.loader=true
      try {
        const response = await axios.get(
          "https://tnp-portal-backend-tpx5.onrender.com/api/v1/skills"
        );
        this.topics = response.data.skills;
      } catch (err) {
        console.log(err);
      } finally {
        this.loader = false;
      }
    },
    startskillprep(topicid)
    {
      this.$router.push({ name: "PrepInstructions", params: { id: topicid } });
    }
  }
};
</script>

<style scoped>
.custom-card {
  width: 250px;
  height: 200px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in-out;
}

.custom-card:hover {
  transform: scale(1.1);
}

.image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin: 5px auto;
  display: block;
}


.custom_loader {
  height: 90vh;
}
</style>