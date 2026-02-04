<template>
    <h1 class="g_title">Introduce</h1>
    <section class="container intro-section">
        <div class="intro-main">
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
                    안녕하세요! 웹 프론트엔드 개발자 이경민입니다.<br />
                    사용자 경험과 인터랙션을 중시하며, 최신 기술과 트렌드를 빠르게 습득하고 적용합니다.<br />
                    React, Vue, TypeScript, GSAP 등 다양한 프레임워크와 라이브러리 경험이 있습니다.
                </p>
            </div>
        </div>
        <div class="intro-timeline">
            <h4>연혁</h4>
            <ul>
                <li><span class="year">2026</span> - 포트폴리오 사이트 리뉴얼</li>
                <li><span class="year">2025</span> - AI 챗봇 프로젝트 프론트엔드 담당</li>
                <li><span class="year">2024</span> - 베이비파스텔 스튜디오 웹 개발</li>
                <li><span class="year">2023</span> - 신촌 캠퍼스 프론트엔드 강의 수료</li>
                <li><span class="year">2022</span> - 웹 개발 입문</li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import profile from "../assets/img/profile.png";
</script>

<style scoped>
.github {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    overflow: hidden;
}
.github img {
    width: 100%;
    height: 100%;
    display: block;
}
.intro-main {
    display: flex;
    gap: 32px;
    align-items: center;
    margin-bottom: 32px;
}
.intro-photo img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 2px 12px #0001;
}
.intro-info {
    flex: 1;
}
.intro-name {
    font-size: 2.1rem;
    font-weight: 800;
    margin-bottom: 8px;
}
.intro-role {
    font-size: 1.2rem;
    font-weight: 600;
    color: #764ba2;
    margin-bottom: 16px;
}
.intro-desc {
    font-size: 1rem;
    color: white;
    line-height: 1.7;
}
.intro-timeline {
    margin-top: 24px;
}
.intro-timeline h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 12px;
}
.intro-timeline ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.intro-timeline li {
    font-size: 1rem;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
}
.intro-timeline .year {
    display: inline-block;
    min-width: 56px;
    font-weight: 700;
    color: #ff8709;
    margin-right: 12px;
}
@media (max-width: 600px) {
    .intro-main {
        flex-direction: column;
        gap: 18px;
        align-items: flex-start;
    }
    .intro-photo img {
        width: 100px;
        height: 100px;
    }
}
</style>
