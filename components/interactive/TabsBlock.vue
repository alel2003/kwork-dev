<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

import TopSwiper from './TopSwiper.vue';
import BottomSwiper from './BottomSwiper.vue';

import swiper from '~/public/image/swiper-menu/1.png'
import center from '~/public/image/swiper/center.png'
import left from '~/public/image/swiper/left.png'
import right from '~/public/image/swiper/right.png'

const TabsText = ['киностудия имени горького', 'Экскурсия', 'визуализация виллы на Бали']

const TabsSwiper = [
    {
        one: [swiper, swiper, swiper],
        two: [left, center, right]
    },
    {
        one: [center, swiper, swiper],
        two: [right, center, right]
    },
    {
        one: [right, swiper, swiper],
        two: [right, center, right]
    }
]

const selectedTab = ref(0)


const changeTab = (index) => {
    selectedTab.value = index
}

</script>


<template>
    <section>
        <TabGroup :selectedIndex="selectedTab" @change="changeTab" >
            <div v-for="(item, idx) in TabsText" :key="idx"  class="lg:max-w-[1800px] md:px-[120px] mx-auto w-full px-[20px]">
                <TabList>
                    <Tab
                        :class="`${idx === selectedTab ? 'md:text-white text-green' : 'md:text-green text-white'} font-inter md:text-[32px] text-[16px] font-normal uppercase flex md:gap-[56px] gap-[24px] md:py-[28px] py-[12px] border-b-2 md:border-green border-white w-full outline-none`">
                        <span>{{ idx + 1 }}</span>
                        <span>{{ item }}</span>
                        <img :class="`${idx === selectedTab ? 'md:flex hidden' : 'hidden'} hidden`"
                            src="~/public/image/icons/active.svg" alt="active" />
                        <img :class="`${idx === selectedTab ? 'md:hidden flex' : 'hidden'}`" src="~/public/image/icons/active-mobile.svg" alt="active-mobile">
                    </Tab>
                </TabList>
            </div>
            <div v-for="(item, idx) in TabsSwiper" :key="idx">
                <TabPanels>
                    <TabPanel>
                        <TopSwiper :swiper="item.one" />
                        <BottomSwiper :swiper="item.two" />
                    </TabPanel>
                </TabPanels>
            </div>
        </TabGroup>
    </section>
</template>
