import { ref, reactive } from "vue";

export function useChat(baseUrl = process.env.VUE_APP_CHAT_API_URL || "http://localhost:8080/api/chat") {
    const messages = reactive([]);
    const isLoading = ref(false);
    const error = ref(null);

    // Spring Boot 백엔드 엔드포인트
    const API_URL = baseUrl;

    // 백엔드로 메시지 전송
    const sendMessage = async (userMessage) => {
        if (!userMessage.trim()) return;

        // 사용자 메시지 추가
        messages.push({
            role: "user",
            content: userMessage,
            timestamp: new Date().toISOString(),
        });

        isLoading.value = true;
        error.value = null;

        try {
            // 백엔드에 전송할 메시지 히스토리
            const chatHistory = messages.map((msg) => ({
                role: msg.role,
                content: msg.content,
            }));

            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage,
                    history: chatHistory,
                    store: true,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `서버 오류 (${response.status})`);
            }

            const data = await response.json();
            const assistantMessage = data.answer || data.reply || data.message || data.content;

            if (assistantMessage) {
                messages.push({
                    role: "assistant",
                    content: assistantMessage,
                    timestamp: new Date().toISOString(),
                });
            }

            return assistantMessage;
        } catch (err) {
            error.value = err.message;
            console.error("Chat error:", err);
            throw err;
        } finally {
            isLoading.value = false;
        }
    };

    // 대화 내역 초기화
    const clearMessages = () => {
        messages.splice(0, messages.length);
        error.value = null;
    };

    // 마지막 메시지 가져오기
    const getLastMessage = () => {
        return messages.length > 0 ? messages[messages.length - 1] : null;
    };

    return {
        messages,
        isLoading,
        error,
        sendMessage,
        clearMessages,
        getLastMessage,
    };
}
