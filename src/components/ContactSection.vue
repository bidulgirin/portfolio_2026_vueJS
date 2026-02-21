<template>
    <section id="contact">
        <!-- background animation -->
        <div class="background_line_animation"></div>
        <h2 class="g_title">Contact me</h2>
        <div class="container contact_layout">
            <form id="contactForm" action="" @submit.prevent="submit" style="display: none">
                <label>
                    <input type="text" name="name" placeholder="성함/업체이름" required v-model.trim="form.name" />
                </label>

                <label>
                    <input id="phone" type="text" name="contact" placeholder="연락처" required v-model="form.contact" inputmode="numeric" />
                </label>

                <label>
                    <input type="text" name="email" placeholder="이메일" required v-model.trim="form.email" />
                </label>

                <textarea name="message" placeholder="문의사항" v-model.trim="form.message"></textarea>

                <button type="submit" class="g_l_btn custom-btn btn-8" :disabled="sending">
                    <span>{{ sending ? "전송 중..." : "문의하기" }}</span>
                </button>
            </form>
            <div class="contact-info">
                <a class="info-card social-card email" href="mailto:de05164@gmail.com">
                    <span class="info-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                                d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9Zm2 .36V16.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V7.86l-6.42 4.18a1 1 0 0 1-1.08 0L5 7.86Zm13.55-1.02a.5.5 0 0 0-.05-.02H5.5l6.5 4.23 6.55-4.21Z"
                                fill="currentColor" />
                        </svg>
                    </span>
                    <span class="info-label">이메일</span>
                    <span class="info-value">de05164@gmail.com</span>
                </a>
            </div>
            <div class="layout_blog">
                <div class="social-links">
                    <a class="info-card social-card github" href="https://github.com/bidulgirin" target="_blank" rel="noopener noreferrer">
                        <span class="info-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path
                                    d="M12 .5A11.5 11.5 0 0 0 .5 12.33c0 5.24 3.36 9.68 8.02 11.25.58.11.79-.26.79-.57v-2.05c-3.26.73-3.95-1.44-3.95-1.44-.53-1.4-1.3-1.77-1.3-1.77-1.07-.75.08-.73.08-.73 1.18.09 1.8 1.26 1.8 1.26 1.05 1.86 2.74 1.32 3.41 1.01.11-.78.41-1.31.74-1.61-2.6-.31-5.34-1.34-5.34-5.98 0-1.32.46-2.39 1.22-3.24-.12-.31-.53-1.57.12-3.28 0 0 1-.33 3.28 1.24a11.08 11.08 0 0 1 5.96 0c2.28-1.57 3.28-1.24 3.28-1.24.65 1.71.24 2.97.12 3.28.76.85 1.22 1.92 1.22 3.24 0 4.65-2.75 5.66-5.37 5.97.42.37.79 1.09.79 2.19v3.24c0 .32.21.69.8.57A11.84 11.84 0 0 0 23.5 12.33 11.5 11.5 0 0 0 12 .5Z"
                                    fill="currentColor" />
                            </svg>
                        </span>
                        <span class="info-label">GitHub</span>
                        <span class="info-value">@bidulgirin</span>
                    </a>
                    <a class="info-card social-card notion" href="https://www.notion.so/Final-Project-2df941ec8f178037a0d1c9fad91442dd" target="_blank" rel="noopener noreferrer">
                        <span class="info-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" stroke-width="2" />
                                <path d="M8 16V8h1.8l4.2 5.5V8H16v8h-1.8L10 10.5V16H8Z" fill="currentColor" />
                            </svg>
                        </span>
                        <span class="info-label">Notion</span>
                        <span class="info-value">Final Project</span>
                    </a>
                    <a class="info-card social-card velog" href="https://velog.io/@pipgma/posts" target="_blank" rel="noopener noreferrer">
                        <span class="info-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <circle cx="12" cy="12" r="10" fill="currentColor" />
                                <path d="M7 7h2.5L12 14l2.5-7H17l-4 10H11L7 7Z" fill="#ffffff" />
                            </svg>
                        </span>
                        <span class="info-label">Velog</span>
                        <span class="info-value">@pipgma</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

const sending = ref(false);

const form = reactive({
    name: "",
    contact: "",
    email: "",
    message: "",
});

// --- 연락처 자동 하이픈 ---
// 사용자가 입력한 값을 숫자만 남기고, 9자리 이상이면 000-0000-0000 형태로 가공
let lastFormatted = "";
watch(
    // ...existing code...

    // contact-info 스타일을 위한 CSS
    // 실제 적용은 main.css에 넣는 것이 좋지만, 빠른 확인을 위해 scoped로 추가

    () => form.contact,
    (v) => {
        if (v === lastFormatted) return;

        const digits = (v || "").replace(/\D/g, "");

        // 너무 길면 잘라줌(한국 휴대폰 기준 11자리 정도)
        const clipped = digits.slice(0, 11);

        let formatted = clipped;

        // 9자리 이상일 때만 하이픈 적용 (너가 원했던 조건)
        if (clipped.length >= 9) {
            formatted = clipped.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, "$1-$2-$3");
        }

        lastFormatted = formatted;
        form.contact = formatted;
    },
);

// --- 간단 검증 ---
function validate() {
    if (!form.name.trim()) return "성함/업체이름을 입력해주세요.";
    const digits = form.contact.replace(/\D/g, "");
    if (digits.length < 9) return "연락처를 올바르게 입력해주세요.";
    if (!form.email.trim()) return "이메일을 입력해주세요.";

    // 아주 가벼운 이메일 체크(필요하면 강화 가능)
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) return "이메일 형식이 올바르지 않습니다.";

    return null;
}

async function submit() {
    if (sending.value) return;

    const error = validate();
    if (error) {
        alert(error);
        return;
    }

    sending.value = true;

    try {
        const payload = {
            name: form.name,
            contact: form.contact,
            email: form.email,
            message: form.message,
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            alert(err?.message || "전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
            return;
        }

        alert("문의가 전송되었습니다! 곧 연락드릴게요.");

        // reset
        form.name = "";
        form.contact = "";
        form.email = "";
        form.message = "";
    } catch (e) {
        alert("네트워크 오류가 발생했습니다.");
    } finally {
        sending.value = false;
    }
}
</script>
<style scoped>
.contact-info {
    overflow: hidden;
    justify-content: center;
    transition: box-shadow 0.3s, border-color 0.2s;
    margin-bottom: 10px;
}

.info-card {
    position: relative;
    background: var(--g_card, #23232a);
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 220px;
    z-index: 1;
    border: 2px solid transparent;
    transition: box-shadow 0.3s, border-color 0.2s;
}

.social-links {
    display: grid;
    gap: 10px;
    margin-top: 10px;
}

.social-card {
    color: #f5f5f5;
    text-decoration: none;
}

.social-card .info-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
}

.social-card .info-value {
    margin-left: auto;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.72);
}

.social-card:hover {
    border-color: #ff8709;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
}

.social-card.github .info-icon,
.social-card.notion .info-icon {
    color: #f5f5f5;
}

.social-card.email .info-icon {
    color: #ff8709;
}

.social-card.velog .info-icon {
    color: #20c997;
}
</style>
