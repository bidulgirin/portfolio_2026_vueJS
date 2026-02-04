<template>
    <!-- 메뉴 -->
    <menu class="g_menu">
        <nav>
            <h1><MainLogo /></h1>
            <ul>
                <li>
                    <a href="#main">HOME</a>
                </li>
                <li>
                    <a href="#recent-work">WORK</a>
                </li>
                <li>
                    <a href="#contact">CONTACT</a>
                </li>
                <!-- <li>
                    <a href="https://github.com/bidulgirin/bidulgirin">github</a>
                </li>
                <li>
                    <a href="https://www.notion.so/94dfc9d8506846ca951b51d3950f1ab4?source=copy_link">notion</a>
                </li> -->
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
