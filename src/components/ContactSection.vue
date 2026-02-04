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
                <div class="info-card">
                    <span class="info-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"
                                fill="#ff8709" />
                        </svg>
                    </span>
                    <span class="info-label">전화</span>
                    <span class="info-value">
                        <a href="tel:010-4909-9553">010-4909-9553</a>
                    </span>
                </div>
                <div class="info-card">
                    <span class="info-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M4 4h16v16H4V4zm8 2a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8zm0 1.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill="#ff8709" />
                        </svg>
                    </span>
                    <span class="info-label">이메일</span>
                    <span class="info-value"><a href="mailto:de05164@gmail.com">de05164@gmail.com</a></span>
                </div>
            </div>
            <div class="layout_blog">
                <ul>
                    <li>
                        <a href="https://github.com/bidulgirin">
                            <img
                                src="data:image/png;base64,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"
                                alt="github" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.notion.so/Final-Project-2df941ec8f178037a0d1c9fad91442dd">
                            <img
                                src="data:image/png;base64,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"
                                alt="노션" />
                        </a>
                    </li>
                    <li>
                        <a href="https://velog.io/@pipgma/posts">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNuQX1l6HQmFG-Jpg_stYnV1j9efZ-Mvbgrg&s" alt="velog" />
                        </a>
                    </li>
                </ul>
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
    border-radius: 10px;
    overflow: hidden;
    justify-content: center;
    transition: box-shadow 0.3s, border-color 0.2s;
}

.info-card {
    position: relative;
    background: var(--g_card, #23232a);
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 220px;
    z-index: 1;
    border: 2px solid transparent;
    transition: box-shadow 0.3s, border-color 0.2s;
}
</style>
