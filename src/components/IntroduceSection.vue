<template>
    <h1 class="g_title" data-aos="fade-up">Introduce</h1>
    <section class="container intro-section">
        <div class="intro-main" data-aos="fade-up" data-aos-delay="80">
            <div class="intro-photo">
                <img :src="profile" alt="프로필 사진" />
            </div>
            <div class="intro-info">
                <h2 class="intro-name">
                    이경민
                    <a href="https://github.com/bidulgirin" class="github" title="github가기">
                        <img src="../assets/img/github.svg" alt="github" />
                    </a>
                </h2>
                <h3 class="intro-role">Web Developer</h3>
                <p class="intro-desc">
                    안녕하세요! 이유를 고민하며 문제를 해결하는 웹 개발자 이경민입니다.<br />
                    럽맘 개발연구팀에서 웹 퍼블리싱과 CRUD 기반 웹 애플리케이션 유지보수를 담당했고, 하우투 퍼블리셔 경험을 보유하고 있습니다.<br />
                    최근에는 코리아IT아카데미 AI 개발 과정을 통해 Django, 데이터 분석, 머신러닝까지 학습하며 프론트엔드 역량을 확장하고 있습니다.
                </p>
                <div class="intro-keywords" data-aos="fade-up" data-aos-delay="140">
                    <h4>My Keywords</h4>
                    <ul class="keyword-list">
                        <li v-for="(keyword, idx) in keywords" :key="keyword.id" class="keyword-card" data-aos="fade-up" :data-aos-delay="180 + idx * 70">
                            <span class="keyword-index">{{ keyword.id }}</span>
                            <div class="keyword-body">
                                <strong>{{ keyword.title }}</strong>
                                <p>{{ keyword.desc }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="intro-timeline" data-aos="fade-up" data-aos-delay="220">
            <h4>연혁</h4>
            <ul class="timeline-list">
                <li>
                    <span class="year">2026</span>
                    <span class="timeline-text">개인 포트폴리오(Vue.js, AWS Amplify) 리뉴얼 및 배포</span>
                </li>
                <li>
                    <span class="year">2025</span>
                    <span class="timeline-text">코리아IT아카데미 AI 개발 과정 수강 (2025.08 ~ 2026.01)</span>
                </li>
                <li>
                    <span class="year">2024</span>
                    <span class="timeline-text">㈜럽맘 개발연구팀 웹개발 경력 마무리 (2022.12 ~ 2024.06)</span>
                </li>
                <li>
                    <span class="year">2021</span>
                    <span class="timeline-text">하우투 퍼블리셔 근무 (2020.12 ~ 2021.11)</span>
                </li>
                <li>
                    <span class="year">2020</span>
                    <span class="timeline-text">대학 졸업, 더조은아카데미 웹퍼블리셔 과정 수료</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import profile from "../assets/img/profile.png";

const keywords = [
    {
        id: "01",
        title: "문제 해결",
        desc: "원인을 먼저 파악하고, 이유 있는 선택으로 해결합니다.",
    },
    {
        id: "02",
        title: "빠른 적응",
        desc: "새 기술을 빠르게 습득해 프로젝트에 바로 적용합니다.",
    },
    {
        id: "03",
        title: "끝까지 책임",
        desc: "맡은 작업은 일정과 품질을 지키며 완수합니다.",
    },
];
</script>

<style scoped>
.intro-section {
    position: relative;
    margin-top: 24px;
    padding: 34px 30px 30px;
    border-radius: 22px;
    border: 1px solid var(--g_border);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01)), var(--background-alt);
    box-shadow: 0 16px 44px rgba(0, 0, 0, 0.28);
    overflow: hidden;
}
.intro-section::before,
.intro-section::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
    z-index: 0;
}
.intro-section::before {
    width: 320px;
    height: 320px;
    top: -180px;
    right: -110px;
    background: radial-gradient(circle, rgba(255, 135, 9, 0.24), rgba(255, 135, 9, 0));
}
.intro-section::after {
    width: 240px;
    height: 240px;
    bottom: -150px;
    left: -90px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
}
.github {
    display: inline-flex;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.2s ease, border-color 0.2s ease;
}
.github:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 135, 9, 0.75);
}
.github img {
    width: 100%;
    height: 100%;
    display: block;
}
.intro-main {
    display: flex;
    gap: 28px;
    align-items: flex-start;
    margin-bottom: 26px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 1;
}
.intro-photo {
    flex-shrink: 0;
}
.intro-photo img {
    width: 154px;
    height: 154px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.14);
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.3);
}
.intro-info {
    flex: 1;
}
.intro-name {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--g_white);
    margin-bottom: 10px;
}
.intro-role {
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--g_white);
    background: linear-gradient(90deg, rgba(255, 135, 9, 0.26), rgba(255, 135, 9, 0.1));
    border: 1px solid rgba(255, 135, 9, 0.6);
    margin-bottom: 16px;
}
.intro-desc {
    font-size: 1rem;
    color: rgba(224, 224, 224, 0.94);
    line-height: 1.76;
    max-width: 78ch;
}
.intro-keywords {
    margin-top: 20px;
}
.intro-keywords h4 {
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.72);
    margin-bottom: 12px;
}
.keyword-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    list-style: none;
    margin: 0;
    padding: 0;
}
.keyword-card {
    display: flex;
    gap: 10px;
    padding: 12px 13px;
    border-radius: 14px;
    background: linear-gradient(145deg, rgba(255, 135, 9, 0.24), rgba(255, 135, 9, 0.06));
    border: 1px solid rgba(255, 135, 9, 0.38);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.keyword-card:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 135, 9, 0.75);
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.24);
}
.keyword-index {
    display: inline-flex;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
    font-weight: 700;
    color: #18181c;
    background: #ffb15f;
    flex-shrink: 0;
}
.keyword-body strong {
    display: block;
    font-size: 0.92rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 3px;
}
.keyword-body p {
    font-size: 0.8rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.88);
    margin: 0;
}
.intro-timeline {
    margin-top: 2px;
    position: relative;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.18);
    padding: 18px 18px 16px;
}
.intro-timeline h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 14px;
    color: var(--g_white);
}
.timeline-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 8px;
}
.timeline-list li {
    display: grid;
    grid-template-columns: 68px 1fr;
    gap: 12px;
    align-items: start;
    padding: 10px 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.04);
}
.intro-timeline .year {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 26px;
    font-weight: 700;
    color: #ff8709;
    border: 1px solid rgba(255, 135, 9, 0.45);
    border-radius: 999px;
    background: rgba(255, 135, 9, 0.12);
    font-size: 0.85rem;
}
.timeline-text {
    color: rgba(224, 224, 224, 0.92);
    line-height: 1.5;
    font-size: 0.93rem;
}
@media (max-width: 980px) {
    .keyword-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media (max-width: 600px) {
    .intro-section {
        padding: 24px 18px 20px;
        border-radius: 18px;
    }
    .intro-main {
        flex-direction: column;
        gap: 16px;
        align-items: flex-start;
        margin-bottom: 18px;
        padding-bottom: 18px;
    }
    .keyword-list {
        grid-template-columns: 1fr;
    }
    .timeline-list li {
        grid-template-columns: 1fr;
        gap: 8px;
    }
    .intro-role {
        margin-bottom: 12px;
    }
    .intro-photo img {
        width: 100px;
        height: 100px;
    }
}
</style>
