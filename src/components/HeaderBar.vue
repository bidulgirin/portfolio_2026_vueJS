<template>
    <!-- 메뉴 -->
    <menu class="g_menu">
        <nav>
            <h1><MainLogo /></h1>
            <ul>
                <li>
                    <a href="./">홈</a>
                </li>
                <li>
                    <a href="./">작업물</a>
                </li>
                <li>
                    <a href="./">연락처</a>
                </li>
                <li>
                    <a href="./">github</a>
                </li>
                <li>
                    <a href="./">notion</a>
                </li>
            </ul>
        </nav>
    </menu>
</template>

<script setup>
import { defineProps } from "vue";
import MainLogo from "./svg/MainLogo.vue";

defineProps({
    name: { type: String, default: "Your Name" },
    role: { type: String, default: "Frontend Developer" },
});
</script>
