<template>
    <router-view />
</template>

<script setup>
import { onMounted, onUnmounted, nextTick } from "vue";
import { initCommon } from "./assets/script/common"; // 공통 스크립트
import AOS from "aos";
import "aos/dist/aos.css";

// 마운트 시 초기화 및 언마운트 시 정리
let cleanup;

onMounted(async () => {
    await nextTick();
    cleanup = initCommon();
    AOS.init({ duration: 800, once: true });
});

onUnmounted(() => {
    cleanup?.();
});
</script>
