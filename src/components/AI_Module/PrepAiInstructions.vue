<template>
  <nav-bar></nav-bar>
  <v-container class="px-15 px-xs-0 mt-16">
    <h1 class="text-h5 font-weight-bold text-primary mb-4">Prep AI</h1>
    <p class="text-justify text-h6 mb-5" style="color: rgba(8, 30, 127, 0.6); font-weight: 500;">
      Before starting in, Let us have a look at how this session will be -
    </p>

    <v-row class="d-flex justify-space-between mt-4">
      <v-col cols="12" sm="5">
        <v-img src="@/Images/interview.png" width="100%" height="100%"></v-img>
      </v-col>
      <v-col cols="12" sm="7" class="d-flex flex-column" align-self="center">
        <v-sheet>
          <h4 class="text-h5 font-weight-bold text-primary mb-5">
            Instructions -
          </h4>
          <p
            class="text-justify text-h6 mb-5"
            style="color: rgba(8, 30, 127, 0.6);">
            • AI will ask questions related to the topic.<br>
            • Type answers in the box and be honest.<br>
            • Do not copy answers; plagiarism is detected.<br>
            • You will get a rating based on responses.<br>
            • Result show overall rating and improvements.<br>
            • It also provide ideal answers to questions.<br>
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <h1 class="text-h5 font-weight-bold text-primary mb-5 mt-10 text-center">We hope this will be helpful in refining your interview skills and boosting your confidence!</h1>
    <v-container class="d-flex justify-center align-center">
  <v-btn class="bg-primary" size="x-large">START PREPARATION</v-btn>
</v-container>

  </v-container>
</template>
<script>
import Nav from "@/components/BaseComponents/NavBar.vue";
export default {
  components: {
    "nav-bar": Nav,
  },
};
</script>
