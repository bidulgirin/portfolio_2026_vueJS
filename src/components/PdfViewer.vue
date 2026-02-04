<template>
    <div class="pdf-viewer">
        <div class="viewer-header">
            <router-link to="/">← Back</router-link>
            <span class="file-name">{{ fileName }}</span>
        </div>

        <div class="viewer-body">
            <iframe v-if="file" :src="file" frameborder="0" class="pdf-iframe"></iframe>
            <div v-else class="no-file">No file specified.</div>
        </div>

        <div class="viewer-footer">
            <a v-if="file" :href="file" target="_blank" rel="noopener">Open raw PDF</a>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const file = computed(() => route.query.file || "");

const fileName = computed(() => {
    try {
        return decodeURIComponent(String(file.value).split("/").pop());
    } catch (e) {
        return "";
    }
});
</script>

<style scoped>
.pdf-viewer {
    width: 100vw;
    height: 100vh;
}
.viewer-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 20px;
    position: sticky;
    top: 0;
    background: white;
}
.pdf-iframe {
    width: 100%;
    height: 100vh;
    border: none;
}
.no-file {
    padding: 10px;
    background: #f8f8f8;
    border-radius: 6px;
}
</style>
