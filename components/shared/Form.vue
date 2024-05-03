<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  color: String,
});
</script>

<template>
    <section
        class="lg:max-w-[1800px] mx-auto w-full px-[20px] lg:pt-[110px] lg:pb-[209px] pt-[64px] pb-[25px] flex flex-wrap lg:flex-row flex-col lg:gap-[19px] gap-[16px]">
        <div class="lg:w-[500px] w-full">
            <h3 class="text-green lg:flex hidden text-[40px] font-medium uppercase leading:[48px] mb-[20px]">Свяжитесь с
                нами</h3>
            <h3 class="text-green lg:hidden flex text-[20px] font-medium uppercase mb-[12px]">Напишите нам</h3>
            <p class="text-white font-inter font-normal lg:leading-[32px] leading-0 lg:text-[20px] text-[14px]">
                Расскажите, чем мы можем вам помочь и давайте создадим что-то новое вместе!</p>
        </div>
        <form class="relative">
            <div :class="`gradient-form ${color}`"></div>
            <div class="flex lg:flex-row flex-col lg:items-center items-start gap-[16px] mb-[20px]">
                <div class="flex flex-col gap-[16px] lg:w-[319px] w-full">
                    <input
                        class="p-[16px] font-inter lg:text-[20px] text-[16px] font-normal lg:leading-[32px] leading-[120%] rounded-[16px] border-2 border-white text-white"
                        type="text" placeholder="Имя" />
                    <input
                        class="p-[16px] font-inter lg:text-[20px] text-[16px] font-normal lg:leading-[32px] leading-[120%] rounded-[16px] border-2 border-white text-white"
                        type="text" placeholder="Телефон" />
                </div>
                <textarea
                    class="px-[20px] py-[12px] border-[2px] border-white rounded-[16px] font-inter lg:text-[20px] text-[16px] font-normal lg:leading-[32px] leading-[120%] lg:w-[469px] w-full h-[152px] text-white resize-y"
                    placeholder="Ваша идея или вопрос"></textarea>
            </div>
            <div class="flex lg:justify-end justify-start items-center">
                <button
                    class="px-[20px] py-[12px] text-green border-2 border-green rounded-[20px] font-inter text-[20px] font-normal lg:leading-[32px] lg:w-fit w-full"
                    type="submit">Отправить запрос</button>
            </div>
        </form>
    </section>
</template>
