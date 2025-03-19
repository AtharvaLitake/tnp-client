<template>
    <nav-bar></nav-bar>
    <div class="custom_loader d-flex flex-column justify-center align-center" v-if="loading">
      <v-progress-circular :size="62" indeterminate color="primary"></v-progress-circular>
    </div>
    <v-container class="px-15 mt-15 " v-if="!loading">
        <h1 class="text-h5 font-weight-bold text-primary mb-4">Notices</h1>
        <v-row no-gutters class="py-3 border-b-sm " v-for="notification in notifications" :key='notification.id'>
            <v-col cols="10" class="text-left">
                <p class="text-h6 text-primary">{{ notification.title }}</p>
                <p class="custom_colors">{{ notification.description }}</p>
            </v-col>
        </v-row>
        <br><br><br><br><br>
    </v-container>
    <app-footer></app-footer>
</template>

<script>
import axios from 'axios';
import { toast } from "vue3-toastify";
import Nav from "@/components/BaseComponents/NavBar.vue";
import Footer from "@/components/BaseComponents/Footer.vue";
export default {
    components: {
        'nav-bar': Nav,
        'app-footer': Footer
    },
    data() {
        return {
            loading: false,
            notifications: []
        }
    },
    mounted() {
        this.fetchnotices()
    },
    methods: {
        async fetchnotices() {
            this.loading = true
            try {
                const response = await axios.get("https://tnp-portal-backend-tpx5.onrender.com/api/v1/notices");
                this.notifications = response.data.notices
            } catch (err) {
                toast.error("Failed to load the notices. Please try again later.", {
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
                console.error(err);
            } finally {
                this.loading = false;
            }
        },
    }
}
</script>

<style scoped>
.custom_colors {
  color: rgba(8, 30, 127, 0.6);
}
.custom_loader {
  height: 90vh;
}
</style>