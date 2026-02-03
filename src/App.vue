<template>
    <div ref="root" id="app">
        <HeaderBar name="Your Name" role="Frontend Developer" />
        <section id="main" class="section">
            <div class="box box1 hoverable">
                <h1>BIDULGIRIN</h1>
                <div class="box_point"></div>
            </div>
            <div class="box box2 parallax-bg">
                <div class="main_logo">
                    BI<br />
                    BIDUL
                </div>
                <div class="img-wrap"><BlobBackground /></div>
            </div>
        </section>

        <CareerBoard :items="careers" />
        <ContactSection toEmail="your.email@example.com" />

        <footer class="container footer muted">© {{ new Date().getFullYear() }} Your Name</footer>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, nextTick } from "vue";
import HeaderBar from "./components/HeaderBar.vue";
import CareerBoard from "./components/CareerBoard.vue";
import ContactSection from "./components/ContactSection.vue";
import BlobBackground from "./components/svg/BlobBackground.vue";

import { initCommon } from "./assets/script/common";

import { careers } from "./data/careers";

import { ref } from "vue";
import { useSectionActiveObserver } from "@/composables/useSectionActiveObserver";

let cleanup;

onMounted(async () => {
    await nextTick();
    cleanup = initCommon();
});

onUnmounted(() => {
    cleanup?.();
});

const root = ref(null);
useSectionActiveObserver(root);
</script>
