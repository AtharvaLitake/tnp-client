<template>
    <v-card>
      <v-layout>
        <v-app-bar :style="{ backgroundColor: '#081E7F' }" prominent>
          <div class="d-flex align-center logo-container">
            <v-img :src="logo" alt="Logo" max-height="60" max-width="60"></v-img>
  
            <v-toolbar-title
              class="white--text app-title"
              style="font-weight: 500"
              >TNP Portal</v-toolbar-title
            >
          </div>
  
          <v-spacer></v-spacer>
  
          <!-- Navigation Links (Shown on larger screens) -->
  
          <template v-if="$vuetify.display.mdAndUp">
            <v-btn
              variant="text"
              class="white--text"
              to="/home"
              style="padding-right: 36px; font-size: 16px"
              >Home</v-btn
            >
            <v-btn
              variant="text"
              class="white--text"
              to="/profile"
              style="padding-right: 36px; font-size: 16px"
              >About</v-btn
            >
            <v-btn
              variant="text"
              class="white--text"
              to="/settings"
              style="padding-right: 36px; font-size: 16px"
              >Jobs</v-btn
            >
            <v-btn
              variant="text"
              class="white--text"
              to="/settings"
              style="padding-right: 36px; font-size: 16px"
              >Profile</v-btn
            >
          </template>
  
          <div style="padding-right: 36px; font-size: 16px">
            <v-btn variant="outlined" color="white" to="/login">Login</v-btn>
          </div>
  
          <!-- Bell Icon -->
          <v-btn icon variant="text">
            <i
              class="fas fa-bell"
              style="color: white; font-size: 1.6rem; padding-right: 36px"
            ></i>
          </v-btn>
  
          <!-- Drawer Toggle Icon (Visible only on mobile screens) -->
          <template v-if="$vuetify.display.smAndDown">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              color="white"
            ></v-app-bar-nav-icon>
          </template>
        </v-app-bar>
  
        <!-- Navigation Drawer (for smaller screens) -->
        <v-navigation-drawer v-model="drawer" temporary>
          <v-list>
            <v-list-item to="/home">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item to="/profile">
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
            <v-list-item to="/settings">
              <v-list-item-title>Jobs</v-list-item-title>
            </v-list-item>
            <v-list-item to="/profile">
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <!-- Main Content -->
        <v-main style="height: 500px">
          <v-card-text>
            The navigation drawer will toggle for smaller screens.
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>
  </template>
    
    <script>
  export default {
    name: "GreetNavigation",
    data() {
      return {
        drawer: false, // Control navigation here
        logo: require("@/Images/pict-logo.png"),
      };
    },
  };
  </script>
    
    <style scoped>
  .white--text {
    color: white !important;
  }
  
  .app-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    font-size: 1.6rem;
    margin-left: 10px;
  }
  
  .logo-container {
    padding-left: 36px;
    padding-right: 10px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  
  .v-btn .fas.fa-bell {
    font-size: 1.8rem;
  }
  </style>
    