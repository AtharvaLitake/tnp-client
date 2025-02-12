<template>
    <nav-bar></nav-bar>
    <v-container class="px-15">
        <br>
        <br>
        <br>
        <h1 class="text-h5 font-weight-bold text-primary mb-5">Notifications</h1>
        <v-row no-gutters class="py-3 border-b-sm" v-for="notification in notifications" :key='notification.id'>
            <v-col cols="10" class="text-left">
                <p class="text-h6 text-primary">{{ notification.title }}</p>
                <p style="color:rgba(8, 30, 127, 0.6);">{{ notification.content }}</p>
            </v-col>
            <v-col cols="2" class="text-right">
                <v-icon class="text-primary h-100" size="large">mdi-delete-forever</v-icon>
            </v-col>
        </v-row>
    </v-container>
    <app-footer></app-footer>
</template>

<script>
import Nav from "@/components/BaseComponents/Nav.vue";
import Footer from "@/components/BaseComponents/Footer.vue";
export default {
    components:{
    'nav-bar':Nav,
    'app-footer':Footer
  },
    data() {
        return {
            notifications: [
                {
                    id: 1, title: 'PhonePe Registration Drive', content: 'Submit your application before the deadline to avoid disqualification'
                },
                {
                    id: 1, title: 'Barclays Regsitration Drive', content: 'Barclays is visiting campus on 24th September 2024 , register asap'
                },
                {
                    id: 1, title: 'PhonePe Regsitration Drive', content: 'Submit your application before the deadline to avoid disqualification'
                },
                {
                    id: 1, title: 'PhonePe Regsitration Drive', content: 'Submit your application before the deadline to avoid disqualification'
                },
            ]
        }
    }
}
</script>