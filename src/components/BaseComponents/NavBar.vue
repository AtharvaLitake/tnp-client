<template>
  <v-app-bar app fixed dense height="60" color="#081E7F" dark class="navbar" elevation="0" flat>
    <v-toolbar-title>
      <div class="d-flex align-center logo-container">
        <v-img :src="logo" alt="Logo" max-height="50" max-width="50"></v-img>
        <span class="white--text app-title">TNP Portal</span>
      </div>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Desktop Navigation -->
    <template v-if="$vuetify.display.mdAndUp">
      <v-btn text class="nav-link" to="/home">HOME</v-btn>
      <v-btn text class="nav-link" to="/jobs">JOBS</v-btn>
      <v-btn text class="nav-link" to="/applications">APPLICATIONS</v-btn>
      <v-btn text class="nav-link" to="/studentprofile">PROFILE</v-btn>
      <v-btn text class="nav-link" to="/mock">AI</v-btn>
      <v-btn text class="nav-link" to="/help">HELP</v-btn>
    </template>

    <!-- Login Button -->
    <div style="padding-right: 20px;padding-left: 20px;">
      <v-btn outlined color="white" @click="LoginLogoutAction" class="login-btn" :loading="loader">{{ token ? 'LOGOUT' : 'LOGIN'
        }}</v-btn>
    </div>

    <!-- Notification Bell -->
    <div style="padding-right: 36px; margin-left: -20px;">
      <v-btn icon to="/notifications" class="text-none" stacked>
        <v-badge dot color="warning" content="1+">
          <v-icon class="bell-icon">mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </div>


    <!-- Mobile Navigation Toggle -->
    <template v-if="$vuetify.display.smAndDown">
      <v-app-bar-nav-icon @click="toggleMenu" color="white"></v-app-bar-nav-icon>
    </template>
  </v-app-bar>

  <!-- Mobile Navigation Menu -->
  <v-expand-transition><!-- eslint-disable-line -->
    <v-sheet v-if="menuVisible" class="mobile-menu">
      <v-btn text class="nav-link" to="/">HOME</v-btn>
      <v-btn text class="nav-link" to="/jobs">JOBS</v-btn>
      <v-btn text class="nav-link" to="/applications">APPLICATIONS</v-btn>
      <v-btn text class="nav-link" to="/studentprofile">PROFILE</v-btn>
      <v-btn text class="nav-link" to="/help">HELP</v-btn>
    </v-sheet>
  </v-expand-transition>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      menuVisible: false,
      logo: require("@/Images/pict-logo.png"),
      token: localStorage.getItem("studentAuth"),
      loader:false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    async LoginLogoutAction() {
      if (this.token != null || this.token != undefined) {
        this.loader=true
        try {
          await axios.post(
            "https://tnp-portal-backend-tpx5.onrender.com/api/v1/students/logout");
            localStorage.removeItem("studentAuth");
            this.loader=false;
          this.$router.push("/login")
        } catch (error) {
          localStorage.removeItem("studentAuth");
          console.error("Error uploading:", error);
        }
      }
      else {
        this.$router.push("/login")
      }
    }
  },
};
</script>

<style scoped>
/* Remove unwanted space below navbar */
body,
.v-application {
  margin: 0;
  padding: 0;
}

/* Navbar Styling */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: none;
}

/* Align the logo and title properly */
.logo-container {
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
}

.app-title {
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 12px;
}

/* Navigation links */
.nav-link {
  color: white !important;
  font-size: 14px;
  text-transform: none;
  margin: 0 16px;
  padding-right: 20px;
  transition: all 0.3s ease-in-out;
}

.nav-link:hover {
  color: #ffcc00 !important;
}

/* Login Button */
.login-btn {
  margin-right: 36px;
  border: 2px solid white;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
}

.login-btn:hover {
  background-color: white;
  color: #081E7F !important;
  font-weight: 600;
}

/* Notification Bell */
.bell-icon {
  font-size: 35px !important;
  color: white;
}

/* Mobile Menu */
.mobile-menu {
  background-color: #081E7F;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 80px;
  /* Matches navbar height */
  z-index: 999;
}

.mobile-link {
  font-size: 16px;
  color: #fff !important;
  text-transform: none;
  width: 100%;
  text-align: center;
  margin: 8px 0;
  background: transparent;
  /* Removes white strip */
  transition: all 0.3s ease-in-out;
  box-shadow: none !important;
  /* Removes any unwanted shadows */
  border: none;
  /* Ensures no border effect */
}

.mobile-link:hover {
  color: #ffcc00 !important;
}

/* Hide text in mobile view */
@media (max-width: 600px) {
  .app-title {
    display: none;
  }
}
</style>