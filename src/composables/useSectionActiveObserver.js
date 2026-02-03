import { onMounted, onUnmounted, nextTick } from "vue";

/**
 * 특정 컨테이너(root) 내부의 section들을 관찰해서
 * 교차되면 is-active 클래스를 토글해줌
 */
export function useSectionActiveObserver(rootRef, options = {}) {
    let observer = null;

    const config = {
        threshold: 0.7,
        rootMargin: "0px 0px -10% 0px",
        ...options,
    };

    onMounted(async () => {
        await nextTick();
        const rootEl = rootRef?.value ?? document;
        const sections = rootEl.querySelectorAll(".section");
        if (!sections.length) return;

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("is-active", entry.isIntersecting);
            });
        }, config);

        sections.forEach((el) => observer.observe(el));
    });

    onUnmounted(() => {
        if (observer) observer.disconnect();
        observer = null;
    });
}
