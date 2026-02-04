<template>
    <div id="recent-work">
        <h1 class="g_title">Output</h1>
        <div class="container recent-work">
            <div class="card" v-for="item in items" :key="item.id" :style="{ backgroundImage: `url(${item.imgUrl})` }" data-aos="fade-up" data-aos-delay="100">
                <div class="card-content">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.desc }}</p>
                    <router-link v-if="item.link && item.link.endsWith('.pdf')" :to="{ name: 'PdfViewer', query: { file: item.link } }">View PDF</router-link>
                    <a v-else-if="item.link" :href="item.link" target="_blank">View More</a>
                    <span>{{ item.company }}</span>
                    <span>{{ item.created_at }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<script>
import voicePhishingImg from "@/assets/img/recent_work/koreait/voice.png";
import happyTestImg from "@/assets/img/recent_work/koreait/happytest.png";
//import pjSinbalImg from "@/assets/img/recent_work/koreait/pj_sinbal.png";
import test from "@/assets/img/recent_work/howto/test.jpg";
export default {
    name: "RecentWork",
    data() {
        return {
            items: [
                {
                    id: 1,
                    created_at: "2026",
                    title: "보이스피싱 탐지 앱",
                    desc: `보이스피싱 탐지 및 예방을 위한 모바일 애플리케이션 개발
                        - Kotlin, Android Studio
                        - UI/UX 디자인 및 기능 구현
                        - 딥러닝 모델 기능 연동
                        - 백엔드/프론트엔드 담당
                        `,
                    imgUrl: voicePhishingImg,
                    link: "/pdf/Dropout.pdf",
                    company: "koreit 신촌 캠퍼스",
                },
                {
                    id: 2,
                    created_at: "2025",
                    title: "행복 테스트",
                    desc: `Django 기반의 심리테스트 웹 애플리케이션
                        - Django, Python
                        - 데이터베이스 설계 및 관리
                        - 프론트엔드 퍼블리싱 및 기능 연결
                        `,
                    imgUrl: happyTestImg,
                    link: "https://de05164.pythonanywhere.com/",
                    company: "koreit 신촌 캠퍼스",
                },

                // {
                //     id: 3,
                //     created_at: "2025",
                //     title: "Project Sinbal",
                //     desc: `Django 기반의 신발 쇼핑몰
                //     - 쇼핑몰, 관리자 페이지 구축
                //     - Django, Python
                //     `,
                //     imgUrl: pjSinbalImg,
                //     link: "/pdf/pj_sinbal.pdf",
                //     company: "koreit 신촌 캠퍼스",
                // },
                {
                    id: 4,
                    created_at: "2024",
                    title: "베이비파스텔 본점",
                    desc: `베이비파스텔 본점, 대전점등 
                        스튜디오 소개 페이지
                        - javascript, node.js
                        - 퍼블리싱, 기능연결
                        `,
                    imgUrl: "https://wkxtfljwsmaevxplcqvj.supabase.co/storage/v1/object/public/bidulgirin-project-2024/projects/1737460199180__.PNG",
                    link: "https://www.babypastel.com/",
                    company: "luvmom",
                },
                {
                    id: 5,
                    created_at: "2024",
                    title: "베이비파스텔 대전점",
                    desc: `베이비파스텔 본점, 대전점등 
                    스튜디오 소개 페이지

                    - javascript, node.js
                    - 퍼블리싱, 기능연결
                    `,
                    imgUrl: "https://wkxtfljwsmaevxplcqvj.supabase.co/storage/v1/object/public/bidulgirin-project-2024/projects/1737460230198__.PNG",
                    link: "https://pprk.co.kr/",
                    company: "luvmom",
                },
                {
                    id: 6,
                    created_at: "2024",
                    title: "LMEDRP",
                    desc: `베이비파스텔 파일 관리/일정 관리 프로그램 
                        - Django
                        - 퍼블리싱, 기능연결, 일부기획

                        `,
                    imgUrl: "https://wkxtfljwsmaevxplcqvj.supabase.co/storage/v1/object/public/bidulgirin-project-2024/projects/1737460300310_lmedrp.PNG",
                    link: "https://pastel.lmedrp.com/",
                    company: "luvmom",
                },
                {
                    id: 7,
                    created_at: "2024",
                    title: "눈부신 일상",
                    desc: `일상 스튜디오 소개 예약페이지

                    -REACT.JS
                    - 기능 추가 수정
                    `,
                    imgUrl: "https://wkxtfljwsmaevxplcqvj.supabase.co/storage/v1/object/public/bidulgirin-project-2024/projects/1737460316044__.PNG",
                    link: "https://www.ilsangst.com/",
                    company: "",
                },
                {
                    id: 8,
                    created_at: "2024",
                    title: "메세유람",
                    desc: `박람회 소개 및 사전신청 페이지

                    -REACT.JS 
                    - 퍼블리싱, 기능연결
                    `,
                    imgUrl: "https://wkxtfljwsmaevxplcqvj.supabase.co/storage/v1/object/public/bidulgirin-project-2024/projects/1737460344893__.PNG",
                    link: "https://yuram.luvmom2020.com/",
                    company: "luvmom",
                },
                {
                    id: 9,
                    created_at: "2022",
                    title: "유튜버테스트",
                    desc: `순수 css, html, javascript로 제작한 유튜버 테스트`,
                    imgUrl: test,
                    link: "https://bidulgirin.github.io/youtube_mbti_test/",
                    company: "how2",
                },
                // {
                //     id: 10,
                //     created_at: "2022",
                //     title: "다이어트LIVE",
                //     desc: ``,
                //     imgUrl: "",
                //     link: "",
                //     company: "how2",
                // },
            ],
        };
    },
};
</script>

<style scoped>
.recent-work {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}
.card {
    position: relative;
    width: 500px;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}
.card:hover {
    transform: scale(1.05);
}
.card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: 1;
}
.card-content {
    position: relative;
    z-index: 2;
    padding: 20px;
    color: white;
    width: 100%;
}
.card h3 {
    margin: 0 0 10px 0;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
}
.card p {
    margin: 0 0 15px 0;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.4;
}
.card a {
    display: inline-block;
    padding: 8px 16px;
    background: white;
    color: #333;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    margin-right: 10px;
    margin-bottom: 10px;
    transition: background 0.2s;
}
.card a:hover {
    background: #f0f0f0;
}
.card span {
    display: block;
    font-size: 0.85rem;
    font-weight: 500;
    opacity: 0.9;
    margin-bottom: 4px;
}
</style>
