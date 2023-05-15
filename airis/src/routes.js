// import App from "@/App.vue";
import HistoryOverview from "@/components/HistoryOverview.vue";
import ChatBox from "@/components/ChatBox.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/components/HomePage.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomePage},
    { path: '/history', component: HistoryOverview},
    { name: "chat", path: '/chat', component: ChatBox, props: true }
]

export default {routes};