<template>
    <div>
        <h1 class="g_title">Study</h1>
        <div class="container">
            <swiper
                :slides-per-view="3"
                :space-between="30"
                :breakpoints="{
                    0: { slidesPerView: 1.1, spaceBetween: 10 },
                    768: { slidesPerView: 2.2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }"
                class="study-swiper">
                <swiper-slide v-for="item in items" :key="item.id">
                    <div class="study-card">
                        <img :src="item.imgUrl" alt="" />
                        <div class="study-info">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.desc }}</p>
                            <a v-if="item.link" :href="item.link" target="_blank">인증서보기</a>
                            <span class="company">{{ item.company }}</span>
                            <span class="year">{{ item.created_at }}</span>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const items = [
    {
        id: 2,
        created_at: "2025",
        title: "Supabase, Next 풀 스택 시작하기 (feat. 슈파베이스 OAuth, nextjs 14)",
        desc: ``,
        imgUrl: "https://cdn.inflearn.com/public/courses/333682/cover/4c11de3e-6aa7-475c-9258-62bc2257417d/333682.png?f=avif&w=180",
        link: "https://www.inflearn.com/certificate/415023-333682-13184587",
        company: "인프런",
    },
    {
        id: 3,
        created_at: "2024",
        title: "누구든지 하는 리액트: 초심자를 위한 react 핵심 강좌",
        desc: ``,
        imgUrl: "https://cdn.inflearn.com/wp-content/uploads/react_velopert2.png?f=avif&w=180",
        link: "https://www.inflearn.com/certificate/415023-158906-10625762",
        company: "인프런",
    },
    {
        id: 4,
        created_at: "2022",
        title: "애플 웹사이트 인터랙션 클론!",
        desc: ``,
        imgUrl: "https://cdn.inflearn.com/public/files/courses/328921/62c5f82a-8dd8-4b50-a147-62cc9744f253/dd.PNG",
        link: "https://www.inflearn.com/certificate/415023-325248-10784308",
        company: "인프런",
    },
];
</script>

<style scoped>
.recent-work {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5%;
}

/* Front side - Image */
.study-swiper {
    width: 100%;
    padding-bottom: 32px;
}
.study-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px #0001;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
}
.study-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
}
.study-info {
    padding: 16px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
}
.study-info h3 {
    margin: 0 0 10px 0;
    font-size: 1.1rem;
    font-weight: 700;
}
.study-info p {
    margin: 0 0 10px 0;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.4;
}
.study-info a {
    display: inline-block;
    padding: 8px 16px;
    background: #667eea;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    margin: 10px 5px;
    transition: all 0.2s;
}
.study-info a:hover {
    background: #764ba2;
}
.study-info .company {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    margin-top: 12px;
    opacity: 0.9;
}
.study-info .year {
    display: block;
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0.85;
    margin-top: 4px;
}
@media (max-width: 768px) {
    .study-card {
        min-width: 80vw;
        max-width: 90vw;
    }
}
</style>
