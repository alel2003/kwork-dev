<script setup>
const trickerText = ['приложения', 'веб-приложения', 'корпоративные системы управления']
</script>

<template>
    <div class="py-[33px] border-y-2 border-white tricker md:flex hidden z-1">
        <div class="tricker-text">
            <div  v-for="(item, idx) in trickerText" :key="idx" :text="item" class="font-inter text-[32px] font-normal leading-[32px] uppercase text-white">{{ item }}</div>
        </div>
    </div>
</template>


