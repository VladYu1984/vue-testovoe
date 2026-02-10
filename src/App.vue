<script setup lang="ts"></script>

<template>
    <main class="app">
        <router-view />
    </main>
</template>

<style scoped lang="scss">
@use './assets/styles/_mixins' as *;

.app {
    display: flex;
    justify-content: center;
    padding: 16px 28.5px;

    @include respond('desktop') {
        padding: 40px;
        justify-content: space-between;
    }
}
</style>
