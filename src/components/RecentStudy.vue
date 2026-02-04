<template>
    <div>
        <h1 class="g_title">Study</h1>
        <div class="container recent-work">
            <div class="card" v-for="item in items" :key="item.id" :style="{ backgroundImage: `url(${item.imgUrl})` }">
                <div class="card-content">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.desc }}</p>
                    <a v-if="item.link" :href="item.link" target="_blank">View More</a>
                    <span>{{ item.company }}</span>
                    <span>{{ item.created_at }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecentStudy",
    data() {
        return {
            items: [
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
    gap: 1.5%;
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
    margin-bottom: 20px;
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
