import { gsap } from "gsap";

/**
 * 공통 기능 초기화
 * - root를 주면 그 범위 안에서만 querySelector 하도록 안전해짐
 * - return cleanup()으로 이벤트/observer/raf 정리 가능
 */
export function initCommon(root = document) {
    const cleanupFns = [];
    const q = (sel) => root.querySelector(sel);
    const qa = (sel) => Array.from(root.querySelectorAll(sel));

    // -----------------------
    // 1) 자동 하이픈
    // -----------------------
    const phoneInput = q("#phone");
    const addHyphenToPhoneNumber = (input) => {
        const numbers = input.value.replace(/[^0-9]/g, "");
        if (numbers.length >= 9) {
            input.value = numbers.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        }
    };

    if (phoneInput) {
        const onInput = () => addHyphenToPhoneNumber(phoneInput);
        phoneInput.addEventListener("input", onInput);
        cleanupFns.push(() => phoneInput.removeEventListener("input", onInput));
    }

    // -----------------------
    // 2) 로딩 화면 (SPA에서는 window load가 이미 지나갔을 수도 있음)
    // -> 마운트 시점에 바로 처리/또는 존재할 때만 처리
    // -----------------------
    const loading = q("#loading");
    if (loading) {
        gsap.set(loading, { opacity: 1 });

        // 필요하면 여기서 바로 fade-out 처리 가능
        loading.classList.add("fade-out");
    }

    // -----------------------
    // 3) 커서 움직임 (요소 없으면 스킵)
    // -----------------------
    const bigBall = q(".cursor__ball--big");
    const smallBall = q(".cursor__ball--small");
    const hoverables = qa(".hoverable");

    let raf1 = 0;
    if (bigBall && smallBall) {
        let mouseX = 0,
            mouseY = 0;
        let bigX = 0,
            bigY = 0;
        let smallX = 0,
            smallY = 0;

        const BIG_OFFSET_X = 15,
            BIG_OFFSET_Y = 15;
        const SMALL_OFFSET_X = 5,
            SMALL_OFFSET_Y = 7;
        const BIG_EASE = 0.02;
        const SMALL_EASE = 0.35;

        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        document.addEventListener("mousemove", onMove);
        cleanupFns.push(() => document.removeEventListener("mousemove", onMove));

        hoverables.forEach((el) => {
            const onEnter = () => bigBall.classList.add("is-hover");
            const onLeave = () => bigBall.classList.remove("is-hover");
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
            cleanupFns.push(() => {
                el.removeEventListener("mouseenter", onEnter);
                el.removeEventListener("mouseleave", onLeave);
            });
        });

        const animate = () => {
            const targetBigX = mouseX - BIG_OFFSET_X;
            const targetBigY = mouseY - BIG_OFFSET_Y;
            const targetSmallX = mouseX - SMALL_OFFSET_X;
            const targetSmallY = mouseY - SMALL_OFFSET_Y;

            bigX += (targetBigX - bigX) * BIG_EASE;
            bigY += (targetBigY - bigY) * BIG_EASE;

            smallX += (targetSmallX - smallX) * SMALL_EASE;
            smallY += (targetSmallY - smallY) * SMALL_EASE;

            bigBall.style.transform = `translate3d(${bigX}px, ${bigY}px, 0)`;
            smallBall.style.transform = `translate3d(${smallX}px, ${smallY}px, 0)`;

            raf1 = requestAnimationFrame(animate);
        };
        raf1 = requestAnimationFrame(animate);
        cleanupFns.push(() => cancelAnimationFrame(raf1));
    }

    // -----------------------
    // 4) 폼/라이트박스 (있을 때만 바인딩)
    // -----------------------
    const form = q("#contactForm");
    const lightbox = q("#lightbox");
    const lbClose = q("#lbClose");
    const backdrop = lightbox?.querySelector(".lightbox__backdrop");

    const openLightbox = () => {
        if (!lightbox) return;
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
    };
    const closeLightbox = () => {
        if (!lightbox) return;
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
    };

    if (lbClose) {
        lbClose.addEventListener("click", closeLightbox);
        cleanupFns.push(() => lbClose.removeEventListener("click", closeLightbox));
    }
    if (backdrop) {
        backdrop.addEventListener("click", closeLightbox);
        cleanupFns.push(() => backdrop.removeEventListener("click", closeLightbox));
    }

    const onKey = (e) => {
        if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKey);
    cleanupFns.push(() => document.removeEventListener("keydown", onKey));

    if (form) {
        const onSubmit = async (e) => {
            e.preventDefault();
            const fd = new FormData(form);
            const payload = Object.fromEntries(fd.entries());

            try {
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

                openLightbox();
                form.reset();
            } catch {
                alert("네트워크 오류가 발생했습니다.");
            }
        };

        form.addEventListener("submit", onSubmit);
        cleanupFns.push(() => form.removeEventListener("submit", onSubmit));
    }

    // 최종 정리 함수
    return () => cleanupFns.forEach((fn) => fn());
}
