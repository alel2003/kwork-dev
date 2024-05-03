<script setup>
import { ref, onMounted, onUnmounted  } from 'vue'

const NavbarLinks = [
    {
        link: '/',
        color: 'link-color_one',
        label: 'Главная'
    },
    {
        link: '',
        color: 'link-color_two',
        label: 'Тренажеры виртуальной реальности '
    },
    {
        link: '/interactive-content',
        color: 'link-color_three',
        label: 'Интерактивный контент'
    },
    {
        link: '',
        color: 'link-color_four',
        label: 'Разработка ПО'
    },
    {
        link: '',
        color: 'link-color_five',
        label: 'Разработка игр'
    },
    {
        link: '',
        color: 'link-color_six',
        label: 'Поставка оборудования'
    },
    {
        link: '',
        color: 'link-color_seven',
        label: 'Контакты'
    },
    {
        link: '',
        color: 'link-color_eight',
        label: 'Сменить цвет'
    }
]

const menu = ref(false)

onMounted(() => {
    const body = document.querySelector("body")
    watchEffect(() => {
        if (menu.value) {
            body.classList.add('hidden-scroll')
        } else {
            body.classList.remove('hidden-scroll')
        }
    })
})

onUnmounted(() => {
    const body = document.querySelector("body")
    body.classList.remove('hidden-scroll')
})

</script>

<template>
    <div class="lg:max-w-[1800px] mx-auto w-full px-[20px] md:py-[30px] py-[13px] flex justify-between items-center">
        <NuxtLink to="/"><img class="md:w-[161px] md:h-[58px] w-[60px] h-[22px]" src="~/public/image/logo.svg" alt="logo" /></NuxtLink>
        <div @click="menu = true">
            <img class="cursor-pointer md:flex hidden animate-bounce" src="~/public/image/menu.svg" alt="menu" />
            <img class="cursor-pointer md:hidden flex" src="~/public/image/icons/menu-mobile.svg" alt="menu-mobile" />
        </div>
    </div>
    <!-- menu links -->
   <div :class="`${menu ? 'block' : 'hidden'} burger__desktop-bg absolute top-0 bottom-0 right-0 left-0 md:pt-[101px] pt-[13px] md:px-[98px] px-[14px] z-30 h-screen overflow-scroll w-full`">
    <div class="flex justify-end cursor-pointer" @click="menu = false">
        <img class="md:flex hidden w-[40px] h-[38px]" src="~/public/image/icons/close.svg" alt="close"/>
        <img class="md:hidden flex w-[24px] h-[24px]" src="~/public/image/icons/close-mobile.svg" alt="close-mobile"/>
    </div>
    <nav class="flex justify-center">
       <ul class="flex flex-col gap-[30px]"><li v-for="(item, idx) in NavbarLinks" :key="idx"><NuxtLink :to="`${item.link}`" class="flex gap-[24px] items-center"><span :class='`${item.color} block md:w-[50px] md:h-[50px] w-[16px] h-[16px] rounded-full`'></span><span class="md:text-[32px] font-medium uppercase text-white">{{ item.label }}</span></NuxtLink></li></ul>
    </nav>
   </div>
</template>

