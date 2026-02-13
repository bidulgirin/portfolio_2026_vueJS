<template>
    <div class="chatbot-container" :class="{ 'is-open': isOpen }">
        <!-- 챗봇 토글 버튼 -->
        <button class="chatbot-toggle" @click="toggleChat" :aria-label="isOpen ? '채팅 닫기' : '채팅 열기'">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>

        <!-- 챗봇 창 -->
        <div class="chatbot-window" v-show="isOpen">
            <div class="chatbot-header">
                <h3>AI 비서</h3>
                <button class="clear-btn" @click="handleClear" title="대화 초기화">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>

            <div class="chatbot-messages" ref="messagesContainer">
                <!-- 환영 메시지 -->
                <div v-if="messages.length === 0" class="welcome-message">
                    <p>안녕하세요! 무엇을 도와드릴까요?</p>
                </div>

                <!-- 메시지 목록 -->
                <div v-for="(msg, index) in messages" :key="index" class="message" :class="msg.role">
                    <div class="message-content">
                        {{ msg.content }}
                    </div>
                    <span class="message-time">{{ formatTime(msg.timestamp) }}</span>
                </div>

                <!-- 로딩 인디케이터 -->
                <div v-if="isLoading" class="message assistant loading">
                    <div class="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <!-- 에러 메시지 -->
                <div v-if="error" class="error-message">
                    <p>{{ error }}</p>
                </div>
            </div>

            <form class="chatbot-input" @submit.prevent="handleSend">
                <input v-model="inputMessage" type="text" placeholder="메시지를 입력하세요..." :disabled="isLoading" />
                <button type="submit" :disabled="isLoading || !inputMessage.trim()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, nextTick, watch } from "vue";
import { useChat } from "@/composables/useChat";

// Spring Boot 백엔드 URL
const props = defineProps({
    baseUrl: {
        type: String,
        default: process.env.VUE_APP_CHAT_API_URL || "http://localhost:8080/api/chat",
    },
});

const { messages, isLoading, error, sendMessage, clearMessages } = useChat(props.baseUrl);

const isOpen = ref(false);
const inputMessage = ref("");
const messagesContainer = ref(null);

const toggleChat = () => {
    isOpen.value = !isOpen.value;
};

const handleSend = async () => {
    if (!inputMessage.value.trim() || isLoading.value) return;

    const message = inputMessage.value;
    inputMessage.value = "";

    try {
        await sendMessage(message);
        scrollToBottom();
    } catch (err) {
        console.error("메시지 전송 실패:", err);
    }
};

const handleClear = () => {
    clearMessages();
};

const scrollToBottom = async () => {
    await nextTick();
    if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
};

const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
    });
};

// 메시지가 추가될 때마다 스크롤
watch(
    messages,
    () => {
        scrollToBottom();
    },
    { deep: true },
);
</script>

<style scoped>
.chatbot-container {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 1000;
    font-family: inherit;
}

.chatbot-toggle {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--g_accent, #ff8709);
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s, box-shadow 0.2s;
}

.chatbot-toggle:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.chatbot-window {
    position: absolute;
    bottom: 70px;
    right: 0;
    width: 360px;
    height: 500px;
    background: var(--background-alt, #23232a);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--g_border, #33343a);
}

.chatbot-header {
    padding: 16px;
    background: var(--background, #18181c);
    border-bottom: 1px solid var(--g_border, #33343a);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chatbot-header h3 {
    margin: 0;
    color: var(--g_white, #e0e0e0);
    font-size: 16px;
    font-weight: 600;
}

.clear-btn {
    background: transparent;
    border: none;
    color: var(--g_text, #bdbdbd);
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: color 0.2s;
}

.clear-btn:hover {
    color: var(--g_accent, #ff8709);
}

.chatbot-messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.welcome-message {
    text-align: center;
    color: var(--g_text, #bdbdbd);
    padding: 40px 20px;
}

.message {
    max-width: 80%;
    display: flex;
    flex-direction: column;
}

.message.user {
    align-self: flex-end;
}

.message.assistant {
    align-self: flex-start;
}

.message-content {
    padding: 10px 14px;
    border-radius: 12px;
    line-height: 1.4;
    word-break: break-word;
}

.message.user .message-content {
    background: var(--g_accent, #ff8709);
    color: white;
    border-bottom-right-radius: 4px;
}

.message.assistant .message-content {
    background: var(--g_card, #23232a);
    color: var(--g_white, #e0e0e0);
    border: 1px solid var(--g_border, #33343a);
    border-bottom-left-radius: 4px;
}

.message-time {
    font-size: 11px;
    color: var(--g_text, #bdbdbd);
    margin-top: 4px;
    opacity: 0.7;
}

.message.user .message-time {
    text-align: right;
}

.typing-indicator {
    display: flex;
    gap: 4px;
    padding: 10px 14px;
    background: var(--g_card, #23232a);
    border: 1px solid var(--g_border, #33343a);
    border-radius: 12px;
    border-bottom-left-radius: 4px;
}

.typing-indicator span {
    width: 8px;
    height: 8px;
    background: var(--g_text, #bdbdbd);
    border-radius: 50%;
    animation: typing 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes typing {
    0%,
    60%,
    100% {
        transform: translateY(0);
        opacity: 0.4;
    }
    30% {
        transform: translateY(-4px);
        opacity: 1;
    }
}

.error-message {
    background: rgba(255, 82, 82, 0.1);
    border: 1px solid rgba(255, 82, 82, 0.3);
    color: #ff5252;
    padding: 10px 14px;
    border-radius: 8px;
    font-size: 13px;
}

.chatbot-input {
    padding: 12px;
    background: var(--background, #18181c);
    border-top: 1px solid var(--g_border, #33343a);
    display: flex;
    gap: 8px;
}

.chatbot-input input {
    flex: 1;
    padding: 10px 14px;
    border: 1px solid var(--g_border, #33343a);
    border-radius: 8px;
    background: var(--background-alt, #23232a);
    color: var(--g_white, #e0e0e0);
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
}

.chatbot-input input:focus {
    border-color: var(--g_accent, #ff8709);
}

.chatbot-input input::placeholder {
    color: var(--g_text, #bdbdbd);
    opacity: 0.6;
}

.chatbot-input button {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: var(--g_accent, #ff8709);
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;
}

.chatbot-input button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.chatbot-input button:not(:disabled):hover {
    opacity: 0.9;
}

/* 반응형 */
@media (max-width: 480px) {
    .chatbot-container {
        bottom: 16px;
        right: 16px;
    }

    .chatbot-window {
        width: calc(100vw - 32px);
        height: calc(100vh - 120px);
        right: -8px;
    }
}
</style>
