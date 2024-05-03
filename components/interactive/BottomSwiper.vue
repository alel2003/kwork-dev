<script setup>
import { defineProps, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
const modules = [Navigation, EffectCoverflow]

const swiperInstance = ref()

const props = defineProps({
    swiper: Array,
});


const breakpoints = {
    320: {
        slidesPerView: 1,
        centeredSlides: false
    },
    900: {
        slidesPerView: 1,
        centeredSlides: false
    },
    1020: {
        slidesPerView: 3,
        centeredSlides: true

    },
    1200: {
        slidesPerView: 3,
        centeredSlides: true
    },
    1920: {
        slidesPerView: 3,
        centeredSlides: true
    }
}

const onSwiper = (swiper) => {
    swiperInstance.value = swiper
};
const onSlideChange = (swiper) => {
    const disablePrev = document.querySelector('.custom-disable-prev')
    const disableNext = document.querySelector('.custom-disable-next')

    if (swiper.activeIndex) {
        disablePrev.classList.remove('swiper-button-disabled')
    } else {
        disablePrev.classList.add('swiper-button-disabled')
    }

    if (swiper.activeIndex === 2) {
        disableNext.classList.add('swiper-button-disabled')
    } else {
        disableNext.classList.remove('swiper-button-disabled')
    }
};
const swiperNextSlide = () => {
    swiperInstance.value.slideNext()
};
const swiperPrevSlide = () => {
    swiperInstance.value.slidePrev()
};

</script>

<template>
    <section class="lg:max-w-[1800px] mx-auto w-full px-[20px] md:pt-[40px] pt-[12px] md:pb-[70px] pb-[64px] z-1">
        <Swiper class="md:mb-[57px] mb-[24px] custom-button_two"
            :modules="modules" navigation :speed="500" :breakpoints="breakpoints" :scrollbar="{ draggable: true }"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <SwiperSlide v-for="(item, idx) in swiper" :key="idx" :class="`swiper-custom_bottom`"><img :src="item"
                    alt="swiper" />
            </SwiperSlide>
            <div @click="swiperPrevSlide"
                class="swiper-button-prev custom-button_two custom-disable-prev swiper-button-disabled"></div>
            <div @click="swiperNextSlide" class="swiper-button-next custom-disable-next custom-button_two "></div>
        </Swiper>
    </section>
</template>