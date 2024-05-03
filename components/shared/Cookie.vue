<script setup lang="ts">
const route = useRoute()

const agree = useCookie('agreeCookie', { default: () => 'no', watch: true , path: route.path})

const agreeCookie = () => {
    agree.value = 'yes'
}

</script>

<template>
    <div v-if="agree === 'no'"
        class="fixed left-0 right-0 flex justify-end md:px-[50px] px-[20px] md:bottom-[150px] bottom-[70px] z-10">
        <div
            class="md:max-w-[1464px] w-full rounded-[30px] flex gap-x-[44px] bg-cookie md:p-[31px] p-[20px] border-[2px] border-pink justify-between items-center flex-wrap">
            <div
                class="text-pink font-inter md:text-[20px] text-[12px] font-normal leading-[32px] md:w-[80%] w-full md:mb-0 mb-[10px]">
                Мы используем файлы cookie. Продолжая использовать наш сайт, вы соглашаетесь на их использование.
                Для получения дополнительной информации, пожалуйста, ознакомьтесь с <a href="/"
                    class="text-green">Политикой конфиденциальности.</a>
            </div>
            <div><button @click="agreeCookie"
                    class="text-green font-inter md:text-[20px] text-[12px] font-normal leading-[32px] py-[15] px-[20px] border-[2px] border-pink bg-cookie cursor-pointer rounded-[20px] h-[47px]">Я
                    согласен</button></div>
        </div>
    </div>
</template>
