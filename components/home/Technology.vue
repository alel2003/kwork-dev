<script setup>
import CSS from '~/public/image/technology/CSS.svg'
import Html from '~/public/image/technology/Html.svg'
import JavaScript from '~/public/image/technology/JavaScript.svg'
import Figma from '~/public/image/technology/Figma.svg'
import PostgreSQL from '~/public/image/technology/PostgreSQL.svg'
import Django from '~/public/image/technology/Django.svg'
import CS from '~/public/image/technology/CS.svg'
import Python from '~/public/image/technology/Python.svg'

const icons = [
    {
        img: CSS,
        alt: 'CSS'
    },
    {
        img: Html,
        alt: 'Html'
    },
    {
        img: JavaScript,
        alt: 'JavaScript'
    },
    {
        img: Figma,
        alt: 'Figma'
    },
    {
        img: PostgreSQL,
        alt: 'PostgreSQL'
    },
    {
        img: Django,
        alt: 'Django'
    },
    {
        img: CS,
        alt: 'CS'
    },
    {
        img: Python,
        alt: 'Python'
    }
]
</script>

<template>
    <section
        class="lg:max-w-[1800px] mx-auto w-full px-[20px] lg:pt-[50px] lg:pb-[110px] pt-[64px] pb-[64px] flex lg:gap-x-[58px] lg:gap-y-0 gap-x-0 gap-y-[58px] md:flex-row flex-col">
        <div class="lg:w-[30%] w-full">
            <h2
                class="text-green lg:text-[56px] text-[32px] font-normal uppercase lg:leading-[64px] leading-0 mb-[24px]">
                Технологии</h2>
            <p class="text-white font-inter lg:text-[20px] text-[14px] font-normal lg:leading-[32px] leading-0">В нашем
                арсенале широкий стек технологий:
                <span class="text-green">C#, Python, Django, PostgreSQL, Figma HTML, CSS, Java Script.</span> Мы
                выбираем оптимальные инструменты вместе с вами для достижения лучших результатов.
            </p>
        </div>
        <div class="flex flex-wrap items-center gap-x-[56px] lg:gap-y-0 gap-y-[20px]">
            <img class="w-[66px] h-[66px]" v-for="item in icons" :key="icons.alt" :src="item.img" :alt="item.alt" />
        </div>
    </section>
</template>
