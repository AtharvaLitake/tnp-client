<template>
  <v-app>
    <v-main class="pa-0 ma-0">
      <v-container
        fluid
        class="pa-0 ma-0"
        style="height: 100vh; overflow: hidden"
      >
        <v-row style="height: 102vh" no-gutters>
          <v-col cols="6" class="bg-primary"></v-col>
          <v-col cols="6" class="h-100 align-center">
            <v-row no-gutters class="text-center h-100" align-content="center">
              <v-col
                cols="12"
                class="d-flex flex-column align-center justify-center"
              >
                <v-img src="@/Images/ElevateHire_splash.png" style="width: 24%"></v-img>
      
                <v-card class="text-justify pa-5 mt-3" style="width: 70%">
                  <h1 class="text-h5 font-weight-bold text-primary mb-1">
                    Get Started With ElevateHire
                  </h1>
                  <router-link to="/register" style="text-decoration: none">
                    <p
                      class="mt-2 text-subtitle-1"
                      style="color: rgba(8, 30, 127, 0.6)"
                    >
                      New Student ?
                      <span class="text-primary text-decoration-line"
                        >Register for placement opportunities</span
                      >
                    </p>
                  </router-link>
                  <v-form @submit.prevent="studentlogin" class="pa-3 mt-1">
                    <!-- Registration Number -->
                    <v-text-field
                      v-model="Registration_number"
                      label="Registration ID"
                      class="mb-1 pa-1"
                      placeholder="Enter your Registration Number"
                      append-inner-icon="mdi-login"
                      variant="underlined"
                      color="primary"
                      style="color: rgba(8, 30, 127)"
                      :rules="[(v) => !!v || 'Please enter Registration ID']"
                @input="Registration_number = Registration_number.toUpperCase()">
            </v-text-field>

                    <!-- Password -->
                    <v-text-field
                      v-model="student_password"
                      label="Password"
                      class="mb-1 pa-1"
                      :type="show2 ? 'text' : 'password'"
                      placeholder="Enter your password"
                      :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                      variant="underlined"
                      color="primary"
                      style="color: rgba(8, 30, 127)"
                      @click:append-inner="show2 = !show2"
                      :rules="[(v) => !!v || 'Please enter password']"
                ></v-text-field>

                    <v-btn
                      class="mt-2 bg-primary"
                      text="Login Now"
                      type="submit"
                      block
                      :loading="loading"
                    ></v-btn>
                  </v-form>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  data() {
    return {
      Registration_number: null,
      student_password: "",
      show2: false,
      loading: false,
    };
  },
  methods: {
    studentlogin() {
      const studentCredentials = {
        pict_registration_id: this.Registration_number,
        password: this.student_password,
      };
      this.loading = true;
      axios
        .post(
          "https://tnp-portal-backend-tpx5.onrender.com/api/v1/students/login",
          studentCredentials
        )
        .then((response) => {
          console.log("Login successful:", response.data);
          //Storing Token in Backend
          localStorage.setItem("studentAuth", response.data.token);
          //Setting header as token
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.token}`;
          this.$router.push("/home");
          this.loading = false;
        })
        .catch((error) => {
          toast.error("Please enter valid Registration ID and Password", {
            position: "top-center",
            autoClose: 4000,
            style: {
              width: "500px",
              height: "200px",
              fontSize: "16px",
              padding: "10px",
              textAlign: "center",
            },
          });
          console.error("Login failed:", error);
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped></style>