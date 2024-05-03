<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import Hero from '@/components/shared/Hero.vue'
import Technology from '@/components/interactive/Technology.vue';
import Form from '@/components/shared/Form.vue';
import TabsBlock from '@/components/interactive/TabsBlock.vue';
import Cookie from '@/components/shared/Cookie.vue'

const HeroBlockText = {
    title: 'Создание интерактивного контента',
    text: 'Наша команда сосредоточена на том, чтобы предоставить вам контент, который будет делать пользователей активными участниками обсуждений и взаимодействия.'
}

</script>

<template>
    <MainLayout>
        <div class="nav-gradient md:flex hidden"></div>
        <div class="nav-mobile_gradient md:hidden flex"></div>
        <Hero :title="HeroBlockText.title" :text="HeroBlockText.text" width="md:w-[45%] "/>
        <TabsBlock />
        <Technology />
        <Form color="form-two" />
        <Cookie />
    </MainLayout>
</template>
