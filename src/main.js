import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
//router imports
import { createRouter, createWebHistory } from "vue-router";
//componennt imports
import HomePage from "./components/HomePage.vue";
import HelpSupport from "./components/HelpSupport/HelpSupport.vue";
import LockPage from "./components/LockPage.vue";
import WaitPage from "./components/WaitPage.vue";
import LoginPage from "./components/LoginPage.vue";
import CheckApplication from "./components/CheckApplication.vue";
import GetNotifications from "./components/GetNotifications.vue";
import RegisterPage from "./components/RegisterPage.vue";
import JobListing from "./components/JobListing.vue";
import JobDetails from "./components/JobDetails.vue";
import StudentProfile from "./components/StudentProfile.vue";
import NotFound from "./components/BaseComponents/NotFound.vue";
import SplashScreen from "./components/BaseComponents/SplashScreen.vue";
import MockInterview from "./components/AI_Module/MockInterview.vue";
import PrepAiInstructions from "./components/AI_Module/PrepAiInstructions.vue";
import PrepAIQuestions from "./components/AI_Module/PrepAIQuestions.vue";
import PrepAIResult from "./components/AI_Module/PrepAIResult.vue";
import AllResult from "./Results/AllResult.vue";
import TestShortlist from "./Results/TestShortlist.vue";
import FinalPlaced from "./Results/FinalPlaced.vue";
//axios setup
import axios from "axios";

//router setup
const routes = [
  { path: "/", name: "SplashScreen", component: SplashScreen },
  { path: "/home", name: "Home", component: HomePage },
  { path: "/help", name: "Help", component: HelpSupport },
  { path: "/lock", name: "Lock", component: LockPage },
  { path: "/wait", name: "Wait", component: WaitPage },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/applications", name: "Application", component: CheckApplication },
  { path: "/notifications", name: "Notification", component: GetNotifications },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/jobs", name: "JobListing", component: JobListing },
  { path: "/jobdetails/:id", name: "jobdetails", component: JobDetails },
  { path: "/mock", name: "MockInterview", component: MockInterview },
  { path: "/prepinstructions/:id", name: "PrepInstructions", component: PrepAiInstructions },
  { path: "/prepquestions/:id", name: "PrepQuestions", component: PrepAIQuestions },
  { path: "/prepresultpage", name: "PrepAIResult", component: PrepAIResult },
  { path: "/resultpage", name: "AllResult", component: AllResult },
  { path: "/testshortlist/:id", name: "TestShortlist", component: TestShortlist },
  { path: "/finalplaced/:id", name: "FinalPlaced", component: FinalPlaced },
  {
    path: "/studentprofile",
    name: "studentProfile",
    component: StudentProfile,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

//Attaching header
const token = localStorage.getItem("studentAuth");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//guard for login
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("studentAuth");
  if (
    to.path !== "/" &&
    to.path !== "/lock" &&
    to.path !== "/login" &&
    to.path !== "/register" &&
    to.path !== "/home" && to.path !== "/wait"
  ) {
    to.meta.requiresAuth = true;
  }
  if (
    to.meta.requiresAuth &&
    (!token || token == "null" || token == "undefined")
  ) {
    next("/lock");
  } else {
    next();
  }
});

loadFonts();

createApp(App).use(vuetify).use(router).mount("#app");
