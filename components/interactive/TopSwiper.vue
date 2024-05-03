<script setup>
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';


const modules = [Navigation, Scrollbar]

const props = defineProps({
  swiper: Array,
});

const swiperInstance = ref()

const onSwiper = (swiper) => {
    swiperInstance.value = swiper
};
const onSlideChange = () => {
    console.log('slide change');
};
const swiperNextSlide = () => {
    swiperInstance.value.slideNext()
};
const swiperPrevSlide = () => {
    swiperInstance.value.slidePrev()
};
</script>


<template>
    <section class="lg:max-w-[1800px] mx-auto w-full px-[20px] md:pt-[133px] pt-[46px] md:pb-[40px] pb-[12px]">
        <div class="relative">
            <h3
                class="text-green md:text-[40px] text-[20px] font-medium uppercase md:absolute md:top-0 md:right-0 md:left-0 md:bottom-0 flex justify-center md:mb-0 mb-[24px]">
                киностудия имени горького</h3>
            <div  @click="swiperPrevSlide" class="swiper-button-prev custom-button_one"></div>
            <div  @click="swiperNextSlide" class="swiper-button-next custom-button_one"></div>
            <div class="md:pt-[120px] pt-0 md:px-[100px] px-0 z-1">
                <Swiper class="md:mb-[57px] mb-[24px] custom-button_one" :slides-per-view="1" :modules="modules"
                    navigation :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
                    <SwiperSlide class="swiper-custom  swiper-menu" v-for="(item, idx) in swiper" :key="idx"><img
                            :src="item" alt="swiper" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1">
            <div class="flex flex-col md:gap-[35px] gap-[5px]">
                <h4
                    class="md:text-green text-white font-inter md:text-[32px] font-normal md:leading-[32px] uppercase text-[16px] leading-0">
                    Заказчик</h4>
                <span
                    class="md:font-inter font-lato text-white md:text-[32px] text-[16px] md:font-normal md:leading-[32px] font-medium">Киностудия
                    имени Горького</span>
                <span
                    class="md:text-green text-white md:font-inter font-lato md:text-[32px] text-[16px] md:font-normal font-medium uppercase">2020</span>
            </div>
            <div class="flex flex-col gap-[16px]">
                <h4
                    class="md:text-green text-white font-inter md:text-[32px] font-normal md:leading-[32px] uppercase text-[16px] leading-0">
                    О проекте</h4>
                <p
                    class="text-white md:font-inter font-lato md:text-[20px] text-[14px] md:font-medium font-normal md:leading-[32px] leading-0">
                    Буровая машина «Boomer 282»
                    Заказчик
                    Boehm, Hettinger and Huels
                    2023
                    О проекте
                    Комплекс позволяет обучать навыкам оперативно-технологического управления оборудования: Порядок
                    включения и остановки электролизера Р-101ИМ. Порядок подготовки к ремонту электролизера Р-101ИМ.
                    Правила ТБ при произведении работ по обслуживанию оборудования и произведения технологических
                    операций.</p>
            </div>
        </div>
    </section>
</template>
