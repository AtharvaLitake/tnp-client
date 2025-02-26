<template>
  <nav-bar></nav-bar>
  <v-container class="px-15 px-xs-0 mt-16">
    <v-card class="pa-5 mb-4 rounded-lg page-card">
      <v-row justify="center" align="center">
        <v-col cols="12" md="4">
          <v-card class="pa-3 text-center blue-border" elevation="0">
            <h1 class="text-h6 font-weight-bold text-primary mb-1">
              Your Score is
            </h1>
            <h1 class="text-h1 font-weight-bold text-primary mb-3 mt-1">{{ testResults.overall_rating }}</h1>
            <h4 class="text-h5 font-weight-bold text-primary mb-3">of 10</h4>
            <h1
              v-if="testResults.overall_rating < 7"
              class="text-h6 font-weight-bold mb-1">
              You need improvement.
            </h1>
            <h1 v-else class="text-h6 font-weight-bold text-primary mb-1">
              Great! You are good for placements!
            </h1>
          </v-card>
        </v-col>
      </v-row>

      <div class="mt-5">
        <v-row>
          <v-col cols="12" md="8">
            <h1 class="text-h5 font-weight-bold text-primary mb-3">
              Questions
            </h1>
            <v-sheet
              v-for="(question, index) in bestAnswer"
              :key="index"
              class="pa-4 mb-3 rounded-lg"
              outlined
            >
              <h2 class="text-h6 font-weight-bold text-primary">
                Question {{ index + 1 }}. {{ question.question }}
              </h2>

              <div class="d-flex align-center mt-2">
                <span
                  class="text-subtitle-1 font-weight-bold mr-3"
                  style="color: rgba(8, 30, 127, 0.6)"
                  >Rating for your answer:</span
                >
                <h4 class="text-h7" style="color: rgba(8, 30, 127, 0.6)">
                  {{ question.rating }}/10
                </h4>
              </div>

              <v-expansion-panels flat class="mt-2">
                <v-expansion-panel color="#C8D3F5">
                  <v-expansion-panel-title>
                    <div
                      class="text-h7 font-weight-bold text-primary text-left"
                    >
                      See Ideal Answer
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text class="text-primary">
                    {{ question.correct_answer }}
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="4">
            <h1 class="text-h5 font-weight-bold text-primary mb-3">
              Topics for Improvement
            </h1>
            <v-list>
              <v-list-item
                v-for="(topic, index) in improvementTopics"
                :key="index"
              >
                <v-list-item-content>
                  <v-list-item-title style="color: rgba(8, 30, 127, 0.6)">{{
                    topic
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </div>
    </v-card>
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
      testResults:[],
      bestAnswer: [],
      improvementTopics: [
        "Data Structures & Algorithms",
        "System Design",
        "Operating Systems",
        "DBMS Concepts",
        "Networking",
      ],
    };
  },
  mounted()
  {
    this.testResults=localStorage.getItem("Results")
    this.testResults=JSON.parse(this.testResults)
    this.bestAnswer=this.testResults.evaluations,
    this.improvementTopics=this.testResults.topics_to_improve
  }
};
</script>
<style scoped>
.blue-border {
  border: 2px solid #081e7f;
  border-radius: 8px;
}
.page-card {
  border: 2px solid #e5eafd;
}
</style>
