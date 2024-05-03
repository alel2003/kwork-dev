<script setup>
const cardsProcess = [
    {
        style: 'card-one',
        title: '1. исследование',
        text: 'Мы тщательно анализируем потребности и задачи клиента, проводим исследования рынка и конкурентов'
    },
    {
        style: 'card-two',
        title: '2. Проектирование',
        text: 'Разрабатывается архитектура программного решения, определяются основные компоненты системы, их взаимосвязи и интерфейсы.'
    },
    {
        style: 'card-three',
        title: '3. Разработка',
        text: 'Наша команда использует передовые методологии разработки, для обеспечения гибкости, прозрачности и быстроты выполнения проектов. Мы также заботимся о безопасности и применяем современные методы обеспечения кибербезопасности'
    },
    {
        style: 'card-four',
        title: '4. Тестирование',
        text: 'Проводится тестирование программного продукта с целью выявления ошибок, проверки соответствия требованиям и улучшения качества.'
    }
]

const cardsResult = [
    {
        style: 'card-five',
        title: '5. Релиз',
        text: 'Программное решение разворачивается и запускается в реальной среде. Пользователи начинают его использовать.'
    },
    {
        style: 'card-six',
        title: '6. Сопровождение',
        text: 'После запуска осуществляется техническая поддержка, исправление ошибок и обновление продукта.'
    }
]
</script>

<template>
    <section
        class="lg:max-w-[1800px] mx-auto w-full px-[20px] md:pt-[59px] pt-[24px] md:pb-[50px] pb-[64px] flex flex-col lg:gap-[100px] md:gap-[100px] gap-[50px]">
        <!-- process -->
        <div class="flex md:flex-row flex-col lg:gap-[120px] gap-[50px]">
            <h2 class="text-pink md:text-[56px] text-[20px] uppercase font-medium md:leading-[64px] leading-0 md:text-left text-center">Процесс
            </h2>
            <div class="flex flex-col lg:w-[920px] w-full lg:items-start items-center lg:gap-0 gap-[24px]">
                <div v-for="item in cardsProcess" :key="item.style" :class="`card ${item.style}`">
                    <div>
                        <h5
                            class="text-green font-inter md:text-[34px] text-[16px] font-medium uppercase md:mb-[14px] mb-[20px]">
                            {{ item.title }}
                        </h5>
                        <p class="text-green font-inter md:text-[20px] text-[14px] font-normal">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- result -->
        <div class="flex md:flex-row flex-col lg:gap-x-[60px] gap-[50px] lg:mt-[-90px]">
            <h2 class="text-pink md:text-[56px] text-[20px] uppercase font-medium md:leading-[64px] leading-0 md:text-left text-center">Результат
            </h2>
            <div class="flex flex-col lg:w-[920px] w-full lg:items-start items-center lg:gap-0 gap-[24px]">
                <div v-for="item in cardsResult" :key="item.style" :class="`card ${item.style}`">
                    <div>
                        <h5
                            class="text-green font-inter md:text-[34px] text-[16px] font-medium uppercase md:mb-[14px] mb-[20px]">
                            {{ item.title }}
                        </h5>
                        <p class="text-green font-inter md:text-[20px] text-[14px] font-normal">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
