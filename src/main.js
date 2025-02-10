import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
//router imports
import { createRouter, createWebHistory } from "vue-router";
//componennt imports
import HomePage from "./components/HomePage.vue";
import HelpSupport from './components/HelpSupport/HelpSupport.vue'
import LockPage from "./components/LockPage.vue"
import WaitPage from "./components/WaitPage.vue"
import LoginPage from './components/LoginPage.vue'
import CheckApplication from "./components/CheckApplication.vue";
import GetNotifications from "./components/GetNotifications.vue";
import RegisterPage from "./components/RegisterPage.vue";
import JobListing from "./components/JobListing.vue";
//router setup
const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path:"/help",name:"Help", component:HelpSupport},
  { path:"/lock" , name:"Lock",component:LockPage},
  { path:"/wait",name:"Wait",component:WaitPage},
  {path:"/login",name:"Login",component:LoginPage},
  {path:"/applications",name:"Application",component:CheckApplication},
  {path:"/notifications",name:"Notification",component:GetNotifications},
  {path:"/register",name:"Register",component:RegisterPage},
  {path:"/jobs",name:"JobListing",component:JobListing}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

loadFonts();

createApp(App).use(vuetify).use(router).mount("#app");
