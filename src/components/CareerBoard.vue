<template>
    <section id="introduce" class="g_section">
        <div class="marquee container">
            <!-- background svg -->
            <div class="bg" aria-hidden="true">
                <svg id="svg-stage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 248">
                    <g class="group1">
                        <image href="https://assets.codepen.io/16327/flair-2.png" />
                        <image href="https://assets.codepen.io/16327/flair-2.png" />
                        <image href="https://assets.codepen.io/16327/flair-2.png" />
                    </g>

                    <g class="group2">
                        <image href="https://assets.codepen.io/16327/flair-3.png" mask="url(#g2_mask)" />
                    </g>
                    <mask id="g2_mask" fill="#fff">
                        <circle cx="124" cy="0" r="0" />
                        <circle cx="124" cy="248" r="0" />
                    </mask>

                    <g class="group3">
                        <image href="https://assets.codepen.io/16327/flair-4.png" mask="url(#g3_mask)" />
                    </g>
                    <mask id="g3_mask" fill="#fff">
                        <rect x="0" y="0" width="124" height="124" />
                        <rect x="124" y="0" width="124" height="124" />
                        <rect x="0" y="124" width="124" height="124" />
                        <rect x="124" y="124" width="124" height="124" />
                    </mask>

                    <g class="group4">
                        <image href="https://assets.codepen.io/16327/flair-5.png" x="70" />
                    </g>

                    <g class="group5">
                        <image href="https://assets.codepen.io/16327/flair-7.png" mask="url(#g5_mask)" />
                    </g>
                    <mask id="g5_mask" fill="#fff">
                        <path d="M0 248h248L124 0 0 247z" />
                        <circle cx="124" cy="83" r="83" />
                    </mask>
                </svg>
            </div>

            <!-- marquee -->
            <div class="marquee__track">
                <ul class="marquee__list">
                    <li v-for="(item, idx) in marqueeItems" :key="`a-${idx}`">
                        <div class="g_stack">
                            <img :src="item.src" :alt="item.label" loading="lazy" />
                        </div>
                        <div>{{ item.label }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted } from "vue";
import gsap from "gsap";

import html from "@/assets/img/stack/html.png";
import css from "@/assets/img/stack/css.png";
import js from "@/assets/img/stack/js.png";
import scss from "@/assets/img/stack/scss.png";
import react from "@/assets/img/stack/react.png";
import next from "@/assets/img/stack/nextjs.jpg";
import openai from "@/assets/img/stack/openai.png";

import bs4 from "@/assets/img/stack/bs4.png";
import selenium from "@/assets/img/stack/selenium.svg";
import android from "@/assets/img/stack/android.svg";
import flutter from "@/assets/img/stack/flutter.jpg";
import kotlin from "@/assets/img/stack/kotlin.png";
import django from "@/assets/img/stack/django.png";
import php from "@/assets/img/stack/php.png";
import mysql from "@/assets/img/stack/mysql.png";
import postgresql from "@/assets/img/stack/postgresql.png";
import photoshop from "@/assets/img/stack/photoshop.png";
import illustrator from "@/assets/img/stack/illustrator.png";
import ae from "@/assets/img/stack/ae.png";

const items = [
    { label: "HTML", src: html },
    { label: "CSS", src: css },
    { label: "JS", src: js },
    { label: "SCSS", src: scss },
    { label: "REACT", src: react },
    { label: "NEXT", src: next },
    { label: "OPENAI", src: openai },
    { label: "BS4", src: bs4 },
    { label: "SELENIUM", src: selenium },
    { label: "ANDROID", src: android },
    { label: "FLUTTER", src: flutter },
    { label: "KOTLIN", src: kotlin },
    { label: "DJANGO", src: django },
    { label: "PHP", src: php },
    { label: "MySQL", src: mysql },
    { label: "PostgreSQL", src: postgresql },
    { label: "PHOTOSHOP", src: photoshop },
    { label: "ILLUSTRATOR", src: illustrator },
    { label: "AFTER EFFECT", src: ae },
];

// 끊김 없는 무한 루프용으로 2배로 이어붙임
const marqueeItems = computed(() => [...items, ...items]);

onMounted(() => {
    gsap.set("#svg-stage", { opacity: 1 });

    gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
        .fromTo(".group1", { scale: 0.1, transformOrigin: "124 124" }, { duration: 0.35, scale: 0.5, ease: "expo.inOut" })
        .to(".group1", { duration: 1.2, rotate: 15, ease: "none" }, 0.1)
        .to(
            ".group1 image",
            {
                scale: (i) => [0.4, 0.2, 0.3][i],
                x: (i) => [0, 135, 100][i],
                y: (i) => [90, 24, 124][i],
                ease: "back",
            },
            0.4,
        )
        .to(".group1 image", { duration: 0.01, opacity: 0, stagger: 0.06 }, 1.1)
        .to("#g2_mask circle", { duration: 1, attr: { r: "124" }, ease: "circ" }, 1.3)
        .fromTo(".group2", { scale: 1, transformOrigin: "124 124" }, { duration: 1.5, scale: 0.9, ease: "none" }, 1.3)
        .to(
            "#g2_mask circle",
            {
                duration: 0.3,
                attr: { cx: (i) => ["+=248", "-=248"][i] },
                ease: "sine.in",
            },
            2.45,
        )
        .fromTo(".group3", { transformOrigin: "124 124", rotate: -90 }, { duration: 0.9, rotate: 0, ease: "expo" }, 2.6)
        .fromTo(
            "#g3_mask rect",
            {
                transformOrigin: (i) => ["0 124", "124 0", "124 124", "248 124"][i],
                scale: 0,
            },
            { duration: 0.4, scale: 1, ease: "expo", stagger: -0.03 },
            2.6,
        )
        .to(".group3", { duration: 0.01, scale: 0 }, 3.7)
        .from(".group4 image", { duration: 0.01, opacity: 0 }, 3.8)
        .fromTo(".group4", { transformOrigin: "83 124", rotate: 15, scale: 0.2 }, { duration: 0.5, rotate: 0, scale: 0.85, ease: "bounce" }, 3.8)
        .to(".group4 image", { duration: 0.01, opacity: 0 }, 4.7)
        .fromTo("#g5_mask path", { transformOrigin: "124 124", scale: 0 }, { duration: 0.8, scale: 1, ease: "expo" }, 4.7)
        .fromTo("#g5_mask circle", { transformOrigin: "83 0", scale: 0 }, { scale: 1, ease: "expo" }, 4.7);
});
</script>

<style scoped>
.g_section {
    position: relative;
    padding: 48px 0;
}

.container {
    width: min(1100px, 100%);
    margin: 0 auto;
    padding: 0 16px;
}

.marquee {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    padding: 28px 0;
}

/* 배경 SVG */
.bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.22;
    display: grid;
    place-items: center;
}
#svg-stage {
    width: 320px;
    height: 320px;
}

/* 트랙 무한 스크롤 */
.marquee__track {
    display: flex;
    width: max-content;
    animation: marquee 26s linear infinite;
    will-change: transform;
}

.marquee__list {
    display: flex;
    gap: 18px;
    align-items: center;
    padding: 0 18px;
    margin: 0;
    list-style: none;
}

.marquee__list > li {
    display: grid;
    gap: 10px;
    justify-items: center;
    min-width: 110px;
    padding: 12px 10px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.06);
}

.g_stack {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
}
.g_stack img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}

/* 호버 시 잠깐 멈추고 싶으면 */
.marquee:hover .marquee__track {
    animation-play-state: paused;
}

/* 접근성: 모션 줄이기 설정 */
@media (prefers-reduced-motion: reduce) {
    .marquee__track {
        animation: none;
        transform: none;
    }
}
</style>
