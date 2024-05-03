<script setup>
const TechnologyListLeft = ['Python', 'C#, C++', 'NET Framework', 'Unity', 'Unreal Engine', 'MySql', 'PostgreSQL', 'DirectX']
const TechnologyListRight = ['OpenGL', '3Ds Max', 'Maya', 'Blender', 'Cinema 4D', 'Houdini', 'Figma', 'Git']
</script>

<template>
    <section class="lg:max-w-[1800px] mx-auto w-full px-[20px] md:pb-[144px] pb-[64px] md:pt-[70px] pt-[64px] flex md:flex-row flex-col md:gap-[47px] gap-[58px]">
        <div class="lg:w-[35%] w-full">
            <h2
                class="text-green lg:text-[56px] text-[32px] font-normal uppercase lg:leading-[64px] leading-0 mb-[24px]">
                Технологии</h2>
            <p class="text-white font-inter lg:text-[20px] text-[14px] font-normal lg:leading-[32px] leading-0">В нашем
                При разработке различной сложности игр наша команда способна использовать различный стек технологий, такие как:
            </p>
        </div>
        <div class="flex md:flex-row flex-col md:gap-[60px] gap-[16px]">
            <div class="flex flex-col gap-[5px]">
                <p v-for="(item, idx) in TechnologyListLeft" :key="idx" class="text-green font-inter md:text-[24px] text-[16px] font-normal uppercase">{{ item }}</p>
            </div>
            <div class="flex flex-col gap-[5px]">
                <p  v-for="(item, idx) in TechnologyListRight" :key="idx" class="text-green font-inter md:text-[24px] text-[16px] font-normal uppercase">{{ item }}</p>
            </div>
        </div>
    </section>
</template>



