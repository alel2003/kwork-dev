<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import Hero from '@/components/shared/Hero.vue'
import Ticker from '@/components/home/Ticker.vue';
import Technology from '@/components/home/Technology.vue';
import Form from '@/components/shared/Form.vue';
import ProcessAndResult from '@/components/home/ProcessAndResult.vue'
import Cookie from '@/components/shared/Cookie.vue'

const HeroBlockText = {
    title: 'Разработка программного обеспечения',
    text: 'Компания Интерактивные технологии предлагает полный спектр услуг по разработке программного обеспечения, адаптированный под уникальные потребности каждого клиента. Наша команда экспертов  обладает богатым опытом работы с различными технологиями и платформами.'
}

</script>

<template>
    <MainLayout>
        <div class="nav-mobile_gradient md:hidden flex"></div>
        <div class="gradient_body gradient_body-right-one md:flex hidden "></div>
        <div class="gradient_body gradient_body-left-one md:flex hidden"></div>
        <Hero :title="HeroBlockText.title" :text="HeroBlockText.text" width="md:w-[75%] "/>
        <Ticker />
        <ProcessAndResult />
        <Technology />
        <Form color="form-one"/>
        <Cookie />
    </MainLayout>
</template>


