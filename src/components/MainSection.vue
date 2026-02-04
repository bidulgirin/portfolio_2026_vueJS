<template>
    <section id="main" class="section">
        <div class="box box1 hoverable">
            <h1 class="main-title" ref="mainTitle">
                <span v-for="(char, idx) in splitTitle" :key="idx" class="char">{{ char }}</span>
            </h1>
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
</template>
<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import BlobBackground from "./svg/BlobBackground.vue";

const splitTitle = "BIDULGIRIN".split("");
const mainTitle = ref(null);

onMounted(() => {
    gsap.set(".main-title .char", { opacity: 0, y: 40 });
    gsap.to(".main-title .char", {
        opacity: 1,
        y: 0,
        stagger: 0.07,
        duration: 0.7,
        ease: "power3.out",
    });
});
</script>
<style scoped>
.main-title {
    display: flex;
    justify-content: center;
    gap: 0.05em;
    font-weight: 900;
    letter-spacing: 0.08em;
    margin: 0;
}
.main-title .char {
    display: inline-block;
    will-change: opacity, transform;
}
</style>
