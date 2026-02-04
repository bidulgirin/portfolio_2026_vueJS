<template>
    <svg class="blob-bg" width="100%" height="100%" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
            <filter id="blur-soft" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
            </filter>
            <filter id="blur-medium" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="50" result="blur" />
            </filter>
            <filter id="blur-heavy" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="80" result="blur" />
            </filter>
        </defs>

        <rect width="100%" height="100%" fill="#f8f9fa" />

        <g opacity="0.8">
            <circle class="blob b4" cx="200" cy="800" r="300" fill="#FF8709" opacity="0.08" filter="url(#blur-heavy)" />
            <circle class="blob b5" cx="1600" cy="200" r="250" fill="#F7BDF8" opacity="0.09" filter="url(#blur-heavy)" />

            <ellipse class="blob b1" cx="400" cy="300" rx="350" ry="300" fill="#FF8709" opacity="0.35" filter="url(#blur-medium)" />
            <circle class="blob b2" cx="600" cy="450" r="200" fill="#F7BDF8" opacity="0.25" filter="url(#blur-medium)" />

            <ellipse class="blob b3" cx="1400" cy="800" rx="400" ry="350" fill="#764ba2" opacity="0.32" filter="url(#blur-heavy)" />
            <circle class="blob b1" cx="1200" cy="700" r="150" fill="#0AE448" opacity="0.22" filter="url(#blur-medium)" />

            <circle class="blob b2" cx="960" cy="540" r="400" fill="#FF8709" opacity="0.13" filter="url(#blur-heavy)" />
        </g>
    </svg>
</template>

<style>
.blob-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

/* 애니메이션 CSS를 SFC style로 옮김 */
.blob {
    transform-origin: center center;
    will-change: transform;
}

@keyframes float-1 {
    0% {
        transform: translate(0, 0) rotate(0deg) scale(1);
    }
    33% {
        transform: translate(50px, -30px) rotate(5deg) scale(1.05);
    }
    66% {
        transform: translate(-20px, 40px) rotate(-5deg) scale(0.95);
    }
    100% {
        transform: translate(0, 0) rotate(0deg) scale(1);
    }
}

@keyframes float-2 {
    0% {
        transform: translate(0, 0) rotate(0deg) scale(1);
    }
    50% {
        transform: translate(-60px, -50px) rotate(-10deg) scale(1.1);
    }
    100% {
        transform: translate(0, 0) rotate(0deg) scale(1);
    }
}

@keyframes float-3 {
    0% {
        transform: translate(0, 0) scale(1);
    }
    50% {
        transform: translate(30px, 60px) scale(0.9);
    }
    100% {
        transform: translate(0, 0) scale(1);
    }
}

.b1 {
    animation: float-1 25s ease-in-out infinite;
}
.b2 {
    animation: float-2 30s ease-in-out infinite;
    animation-delay: -5s;
}
.b3 {
    animation: float-1 28s ease-in-out infinite reverse;
    animation-delay: -10s;
}
.b4 {
    animation: float-3 22s ease-in-out infinite;
    animation-delay: -2s;
}
.b5 {
    animation: float-2 35s ease-in-out infinite reverse;
    animation-delay: -15s;
}
</style>
