<template>
    <nav-bar></nav-bar>
    <v-container class="px-15 px-xs-0 mt-16">
      <h1 class="text-h5 font-weight-bold text-primary mb-5">Welcome to Prep AI</h1>
      <p class="text-justify text-h7 mb-5" style="color: rgba(8, 30, 127, 0.6)">
        The Rate Your Skill section features an AI-powered bot designed to help students assess their technical and soft skills for fresher-level job interviews.
        The AI bot will ask a series of industry-relevant interview questions, evaluate your responses, and provide a skill rating along with personalized feedback on areas for improvement.
      </p>
      <h4 class="text-h6 font-weight-bold text-primary mb-5">Choose a topic you want to be interviewed on</h4>
  
        <v-row v-for="(row, rowIndex) in formattedTopics" :key="rowIndex" class="mb-4" justify="start">
          <v-col v-for="(topic, index) in row" :key="index" cols="12" sm="4" md="4" lg="4" class="d-flex" align-self="center">
            <v-card class="custom-card">
              <v-img class="image" :src="topic.image" cover></v-img>
              <v-card-title class="text-primary" style="font-weight: 600;">{{ topic.name }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      
    </v-container>
  </template>
  
  <script>
  import Nav from "@/components/BaseComponents/NavBar.vue";
  
  export default {
    components: {
      "nav-bar": Nav,
    },
    data() {
      return {
        topics: [
          { name: "DBMS", image: require("@/Images/dbms.png") },
          { name: "OS", image: require("@/Images/os.png") },
          { name: "OOPs", image: require("@/Images/oop.png") },
          { name: "DSA", image: require("@/Images/DSA.png") },
          { name: "Personality", image: require("@/Images/person.jpg") },
        ],
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
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.5);
  }
  .image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin: 5px auto;
    display: block;
  }
  </style>
  