<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  text: String,
  width: String
});
</script>

<template>
    <section class="lg:max-w-[1800px] mx-auto w-full px-[20px] md:pt-[38px] pt-[29px] md:pb-[57px] pb-[24px]">
        <h1 class="text-green md:text-[80px] font-medium uppercase text-[40px] md:leading-[92px] leading-0 md:mb-[16px] mb-[29px] md:w-[80%] w-full" >{{ title }}</h1>
        <p :class="`text-white font-inter md:text-[20px] text-[14px] font-normal md:leading-[32px] leading-0 ${width} w-full`">{{ text }}</p>
    </section>
</template>



