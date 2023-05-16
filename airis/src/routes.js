import ContentOverview from "@/components/ContentOverview.vue";
import ChatBox from "@/components/ChatBox.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/components/HomePage.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomePage},
    { path: '/content', component: ContentOverview},
    { name: "chat", path: '/chat', component: ChatBox, props: true }
]

export default {routes};