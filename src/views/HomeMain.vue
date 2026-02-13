<template>
    <section ref="root" id="app">
        <HeaderBar name="Lee Kyung Min" role="Frontend Developer" />
        <MainSection />
        <IntroduceSection />
        <CareerBoard :items="careers" />
        <RecentWork />
        <!-- <RecentStudy /> -->
        <ChatBot />
        <ContactSection toEmail="de05164@gmail.com" />

        <footer class="container footer muted">© {{ new Date().getFullYear() }} Lee Kyung Min</footer>
    </section>
</template>

<script setup>
import { ref } from "vue";
// Components
import HeaderBar from "../components/HeaderBar.vue"; // 메뉴
import MainSection from "../components/MainSection.vue"; // 메인 섹션
import CareerBoard from "../components/CareerBoard.vue"; // 경력
import IntroduceSection from "../components/IntroduceSection.vue"; // 소개
import RecentWork from "../components/RecentWork.vue"; // 최근 작업
//import RecentStudy from "../components/RecentStudy.vue"; // 최근 공부
import ContactSection from "../components/ContactSection.vue"; // 연락처
// 가라 데이터
import { careers } from "../data/careers";
import { useSectionActiveObserver } from "@/composables/useSectionActiveObserver";
import ChatBot from "@/components/ChatBot.vue";
const root = ref(null);
useSectionActiveObserver(root);
</script>
