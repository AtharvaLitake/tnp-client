<template>
  <nav-bar></nav-bar>
  <v-container class="px-15 px-xs-0 mt-16">
    <h1 class="text-h5 font-weight-bold text-primary mb-4">Prep AI</h1>
    <p
      class="text-justify text-h6 mb-5"
      style="color: rgba(8, 30, 127, 0.6); font-weight: 500"
    >
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
            style="color: rgba(8, 30, 127, 0.6)"
          >
            • AI will ask questions related to the topic.<br />
            • Type answers in the box and be honest.<br />
            • Do not copy answers; plagiarism is detected.<br />
            • You will get a rating based on responses.<br />
            • Result show overall rating and improvements.<br />
            • It also provide ideal answers to questions.<br />
          </p>
          <v-btn class="bg-primary" size="x-large" @click="startskilltest"
            >START PREPARATION</v-btn
          >
        </v-sheet>
      </v-col>
    </v-row>
    <v-container class="d-flex justify-center align-center">
      <p
        class="text-justify text-h6 mt-3"
        style="color: rgba(8, 30, 127, 0.6); font-weight: 500"
      >
        We hope the PrepAI module helps you refine your interview skills,
        enhance your preparation, and boost your confidence. With AI-powered
        mock interviews, real-time feedback, and personalized insights, PrepAI
        ensures you are well-prepared to tackle interviews effectively and make
        a strong impression!
      </p>
    </v-container>
  </v-container>
</template>
<script>
import Nav from "@/components/BaseComponents/NavBar.vue";
export default {
  components: {
    "nav-bar": Nav,
  },
  methods: {
    startskilltest() {
      const skillid = this.$route.params.id;
      this.$router.push({ name: "PrepQuestions", params: { id: skillid } });
    },
  },
};
</script>
