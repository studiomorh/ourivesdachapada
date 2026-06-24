<template>


    <section class="home-hero">

        <video ref="video" autoplay muted loop playsinline preload="auto" @play="started = true"
            class="hero-video h-[95vh] w-full object-cover">
            <source src="/images/portfolio/hero.mp4" type="video/mp4">
        </video>

        <button v-if="!started" @click="playVideo" class="play-button mt-[-10px]">
            ▶
        </button>

        <div class="home-hero-overlay z-9"></div>

        <div class="home-hero-content z-99 mb-35 sm:mb-50 items-center justify-between">
            <Header class="header mt-4" />
            <img src="/images/logosolo.png" alt="Ourives da Chapada Logo" class="home-hero-logo">
        </div>


    </section>

    <div class="flex justify-center gap-1 row-gallery bg-contain md:bg-cover px-3 sm:px-0">
        <div class="flex gap-1 justify-center">
            <div class="home-1-gallery rounded-tl-xl">
                <img src="/images/home/foto1.jpg" class="">
            </div>
            <div class="home-2-gallery rounded-tr-xl lg:rounded-none">
                <img src="/images/home/foto2.jpg" class="">
            </div>
        </div>
        <div class="flex gap-1 justify-center">
            <div class="home-3-gallery rounded-bl-xl lg:rounded-none">
                <img src="/images/home/foto3.jpg" class="">
            </div>
            <div class="home-4-gallery rounded-br-xl lg:rounded-tr-xl lg:rounded-br-none">
                <img src="/images/home/foto4.jpg" class="">
            </div>
        </div>
    </div>

    <div class="section3 w-full flex flex-col items-center justify-center z-[55] relative">
        <img src="/images/logosoloblack.png" class="logo1">
        <span class="text-center text-[19px] sm:text-[23px] mt-2 mb-4" style="letter-spacing: 2px;">OURIVES DA
            CHAPADA</span>

    </div>
    <div class="header-div">
        <StickyHeader class="header2 px-0 sm:px-4 py-1 w-fit" style="border-top: 1px solid lightgray;" />
    </div>

    <div class="bg-home w-full">
        <div class="section4 px-2 sm:py-0 w-full items-center justify-center flex flex-col gap-1 mt-3">
            <img src="/images/hero-poster.jpg" class="max-w-[1210px] w-full"
                style="border-radius: 10px 10px 0px 0px;" />
            <div class="flex gap-1 sm:mt-5 text-center text-[16px] sm:text-[20px] max-w-[1210px]"
                style="letter-spacing: 2px; font-weight: 400;">
                <div class="flex gap-1 flex-col sm:flex-row">
                    <a href="/portfolio#classicos" style="padding: 0px !important;">
                        <div class="category-card">
                            <img src="/images/home/classicos.jpg"
                                class="sm:h-[400px] h-[300px] object-cover rounded-sm w-[300px]">
                            <span class="category-title">
                                CLÁSSICOS ESSENCIAIS
                            </span>
                        </div>
                    </a>
                    <a href="/portfolio#metais" style="padding: 0px !important;">
                        <div class="category-card">
                            <img src="/images/home/metais.png"
                                class="sm:h-[400px] h-[300px] rounded-sm object-cover w-[300px]">
                            <span class="category-title">METAIS NOBRES</span>
                        </div>
                    </a>
                </div>
                <div class="flex gap-1 flex-col sm:flex-row">
                    <a href="/portfolio#fibras" style="padding: 0px !important;">
                        <div class="category-card">
                            <img src="/images/home/fibras.jpg"
                                class="sm:h-[400px] h-[300px] rounded-sm  object-cover w-[300px]">
                            <span class="category-title">FIBRAS E TRAMAS</span>
                        </div>
                    </a>
                    <a href="/portfolio#natureza" style="padding: 0px !important;">
                        <div class="category-card">
                            <img src="/images/home/natureza.jpg"
                                class="sm:h-[400px] h-[300px] rounded-sm object-cover w-[300px]">
                            <span class="category-title">NATUREZA BRUTA</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="flex max-w-[1210px] flex-col sm:flex-row max-h-fit sm:max-h-[400px] justify-between w-full text-center gap-1 text-[16px] sm:text-[20px]"
                style="letter-spacing: 2px; font-weight: 400;">
                <a href="/portfolio#madeiras" class=" sm:w-1/3" style="padding: 0px !important;">
                    <div class="category-card">
                        <img src="/images/home/madeiras.jpg"
                            class="w-full rounded-sm  h-[300px] sm:min-h-full object-cover">
                        <span class="category-title">MADEIRAS BRASILEIRAS</span>
                    </div>
                </a>
                <a href="/portfolio#gemas" class=" sm:w-1/3" style="padding: 0px !important;">
                    <div class="category-card">
                        <img src="/images/home/gemas.jpg"
                            class="w-full rounded-sm  h-[300px] sm:min-h-full object-cover">
                        <span class="category-title">GEMAS E METAIS</span>
                    </div>
                </a>
                <a href="/portfolio#projetos" class=" sm:w-1/3" style="padding: 0px !important;">
                    <div class="category-card">
                        <img src="/images/home/projetos.jpg"
                            class="w-full rounded-sm h-[300px] sm:min-h-full object-cover">
                        <span class="category-title">PROJETOS ESPECIAIS</span>
                    </div>
                </a>
            </div>
        </div>

        <div class="home-gallery px-5 sm:px-0 mt-20 w-full flex flex-col items-center justify-center">
            <!-- ROW 1 -->
            <div class="flex flex-col sm:flex-row gap-1 w-full max-w-[1210px]">

                <!-- FOTO GRANDE -->
                <div class="w-full sm:w-1/2 gallery-item">
                    <img src="/images/home/gallery1.jpg"
                        class="w-full h-[500px] sm:h-[702px] object-cover rounded-t-lg sm:rounded-tr-none">
                    <a href="/portfolio#madeiras" style="padding: 0px !important;">
                        <div class="gallery-overlay">
                            <span>Madeiras Brasileiras</span>
                        </div>
                    </a>
                </div>

                <!-- BLOCO DAS DUAS FOTOS -->
                <div class="w-full sm:w-1/2 flex flex-row sm:flex-col gap-1 ">
                    <div class="gallery-item w-[50%] sm:w-full">
                        <img src="/images/home/gallery2.png"
                            class="w-full h-[200px] sm:h-[379px] object-cover sm:rounded-tr-lg">
                        <a href="/portfolio#madeiras" style="padding: 0px !important;">
                            <div class="gallery-overlay">
                                <span>Madeiras Brasileiras</span>
                            </div>
                        </a>
                    </div>


                    <div class="gallery-item w-[49%] sm:w-full h-[200px] sm:h-[319px]">
                        <img src="/images/home/gallery3.jpg" class="h-full w-full object-cover">
                        <a href="/portfolio#madeiras" style="padding: 0px !important;">
                            <div class="gallery-overlay">
                                <span>Madeiras Brasileiras</span>
                            </div>
                        </a>

                    </div>
                </div>

            </div>

            <!-- ROW 2 -->
            <div class="flex flex-col gap-1 w-full max-w-[1210px] mt-1 sm:mt-0">

                <!-- PRIMEIRA LINHA MOBILE -->
                <div class="w-full gallery-item">
                    <img src="/images/home/gallery4.jpg" class="w-full object-top h-[450px] sm:hidden object-cover">
                    <a href="/portfolio#metais" style="padding: 0px !important;">
                        <div class="gallery-overlay">
                            <span>Metais Nobres</span>
                        </div>
                    </a>
                </div>

                <!-- DESKTOP -->
                <div class="hidden sm:flex gap-1 w-full">

                    <div class="w-[35%] gallery-item">
                        <img src="/images/home/gallery4.jpg" class="w-full h-[430px] object-cover">
                        <a href="/portfolio#metais" style="padding: 0px !important;">
                            <div class="gallery-overlay">
                                <span>Metais Nobres</span>
                            </div>
                        </a>
                    </div>

                    <div class="w-[40%] gallery-item">
                        <img src="/images/home/gallery5.png" class="w-full h-[430px] object-cover">
                        <a href="/portfolio#gemas" style="padding: 0px !important;">
                            <div class="gallery-overlay">
                                <span>Gemas e Metais</span>
                            </div>
                        </a>
                    </div>

                    <div class="w-[25%] gallery-item">
                        <img src="/images/home/gallery6.png" class="w-full h-[430px] object-cover">
                        <a href="/portfolio#gemas" style="padding: 0px !important;">
                            <div class="gallery-overlay">
                                <span>Gemas e Metais</span>
                            </div>
                        </a>
                    </div>

                </div>

                <!-- SEGUNDA LINHA MOBILE -->
                <div class="flex sm:hidden gap-1 w-full">

                    <div class="w-[60%] gallery-item">
                        <img src="/images/home/gallery5.png" class="w-full h-[220px] object-cover">
                        <a href="/portfolio#gemas" style="padding: 0px !important;">
                            <div class="gallery-overlay">
                                <span>Gemas e Metais</span>
                            </div>
                        </a>
                    </div>

                    <div class="w-[40%] gallery-item">
                        <img src="/images/home/gallery6.png" class="w-full h-[220px] object-cover">
                        <a href="/portfolio#gemas" style="padding: 0px !important;">
                            <div class="gallery-overlay">
                                <span>Gemas e Metais</span>
                            </div>
                        </a>
                    </div>

                </div>

            </div>

            <!-- ROW 3 -->

            <div class="flex flex-col sm:flex-row gap-1 w-full max-w-[1210px] h-full sm:h-[200px] sm:h-[430px] mt-1">

                <div class="w-full sm:w-1/3 h-full gallery-item">
                    <img src="/images/home/gallery7.png" class="w-full h-full object-cover">
                    <a href="/portfolio#gemas" style="padding: 0px !important;">
                        <div class="gallery-overlay">
                            <span>Gemas e Metais</span>
                        </div>
                    </a>
                </div>
                <div class="w-full sm:w-2/3 gap-1 h-full flex">
                    <div class="w-1/2 min-h-full gallery-item">
                        <img src="/images/home/gallery8.jpg" class="w-full h-full object-cover">
                        <a href="/portfolio#metais" style="padding: 0px !important;">
                            <div class="gallery-overlay">
                                <span>Metais Nobres</span>
                            </div>
                        </a>
                    </div>

                    <div class="w-1/2 h-full gallery-item">
                        <img src="/images/home/gallery9.jpg" class="w-full h-full object-cover">
                        <a href="/portfolio#gemas" style="padding: 0px !important;">
                            <div class="gallery-overlay">
                                <span>Gemas e Metais</span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>

            <div class="flex flex-col gap-1 w-full max-w-[1210px] mt-1">

                <!-- MOBILE -->
                <div class="flex sm:hidden gap-1">

                    <div class="w-1/2 gallery-item">
                        <img src="/images/home/gallery10.jpg" class="w-full h-[220px] object-cover object-bottom">
                        <a href="/portfolio#madeiras" style="padding: 0px !important;">
                            <div class="gallery-overlay">
                                <span>Madeiras Brasileiras</span>
                            </div>
                        </a>
                    </div>

                    <div class="w-1/2 gallery-item">
                        <img src="/images/home/gallery11.jpg" class="w-full h-[220px] object-cover">
                        <a href="/portfolio#gemas" style="padding: 0px !important;">
                            <div class="gallery-overlay">
                                <span>Gemas e Metais</span>
                            </div>
                        </a>
                    </div>

                </div>

                <div class="flex sm:hidden flex-col gap-1">
                    <div class="gallery-item">
                        <img src="/images/home/gallery12.jpg" class="w-full h-[220px] object-cover">
                        <a href="/portfolio#madeiras" style="padding: 0px !important;">
                            <div class="gallery-overlay">
                                <span>Madeiras Brasileiras</span>
                            </div>
                        </a>
                    </div>
                    <div class="gallery-item">
                        <img src="/images/home/gallery13.jpg" class="w-full h-[250px] object-cover rounded-b-lg">
                        <a href="/portfolio#metais" style="padding: 0px !important;">
                            <div class="gallery-overlay">
                                <span>Gemas e Metais</span>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- DESKTOP -->
                <div class="hidden sm:flex gap-1 h-[480px]">

                    <div class="flex gap-1 w-[66%]">

                        <div class="w-1/2 gallery-item">
                            <img src="/images/home/gallery10.jpg" class="w-full h-full object-cover rounded-bl-lg">
                            <a href="/portfolio#madeiras" style="padding: 0px !important;">
                                <div class="gallery-overlay">
                                    <span>Madeiras Brasileiras</span>
                                </div>
                            </a>
                        </div>

                        <div class="w-1/2 gallery-item">
                            <img src="/images/home/gallery11.jpg" class="w-full h-full object-cover">
                            <a href="/portfolio#gemas" style="padding: 0px !important;">
                                <div class="gallery-overlay">
                                    <span>Gemas e Metais</span>
                                </div>
                            </a>
                        </div>

                    </div>

                    <div class="flex flex-col gap-1 w-[34%]">
                        <div class="h-[48%] gallery-item">
                            <img src="/images/home/gallery12.jpg" class="w-full h-full object-cover">
                            <a href="/portfolio#madeiras" style="padding: 0px !important;">
                                <div class="gallery-overlay">
                                    <span>Madeiras Brasileiras</span>
                                </div>
                            </a>
                        </div>
                        <div class="h-[51%] gallery-item">
                            <img src="/images/home/gallery13.jpg" class="w-full h-full object-cover rounded-br-lg">
                            <a href="/portfolio#gemas" style="padding: 0px !important;">
                                <div class="gallery-overlay">
                                    <span>Gemas e Metais</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="portfolio-button mt-6 w-full justify-center items-center flex" id="contato">
            <a href="/portfolio" class="">
                <button class="btn-primary cursor-pointer">
                    VER PORTFÓLIO COMPLETO
                </button>
            </a>
        </div>

        <div class="contact mt-20 flex justify-center items-center text-center">
            <div class="contact-form w-[90%] sm:w-[600px]">
                <div class="social-buttons flex gap-4 mt-5">

                    <a href="https://www.instagram.com/ourivesdachapada/" target="_blank"
                        style="padding: 0px !important;">
                        <div class="instagram">
                            <img src="/images/instagram.png" class="w-[27px] sm:w-[30px]" />
                        </div>
                    </a>
                    <a href="https://wa.me/557598621044?text=Olá!%20Vim%20através%20do%20site%20da%20Ourives%20da%20Chapada%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20peças."
                        target="_blank" style="padding: 0px !important;">
                        <div class="whatsapp">
                            <img src="/images/whatsapp.png" class="w-[27px] sm:w-[30px]" />
                        </div>
                    </a>
                </div>
                <span class="text-[50px] sm:text-[60px]" style="letter-spacing: 2px;">CONTATO</span>
                <span class="text-[16px] sm:text-[18px] w-[80%] mb-8">Para aquisições, exposições, parcerias ou outras
                    informações, entre
                    em
                    contato.</span>
                <form class="flex flex-col gap-3 w-[90%] items-center justify-center mb-8"
                    action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="c3cbdf81-e3d9-4c7d-89f6-9eac25b8519d">
                    <input placeholder="Nome" class="input-form" type="text" name="name" required>
                    <input class="input-form" placeholder="E-mail" type="email" name="email" required>
                    <textarea name="message" style="border: 1px solid lightgray; 
                    border-radius: 5px; 
                    background-color: #ffffff24; 
                    width: 100%;
                    min-height: 120px;
                    padding: 10px;" placeholder="Mensagem" required></textarea>
                    <button class="submit-button cursor-pointer" type="submit">ENVIAR</button>
                </form>
            </div>
        </div>
    </div>

    <button v-show="showScrollTop" @click="scrollToTop" class="scroll-top justify-center flex items-center">
        <img src="/images/down.png" class="rotate-180 w-[40px]">
    </button>

</template>


<script setup>
import Header from '../components/Header.vue'
import StickyHeader from '../components/StickyHeader.vue'
import { ref, onMounted, onUnmounted } from 'vue'


const showScrollTop = ref(false)

const handleScroll = () => {
    showScrollTop.value = window.scrollY > 500
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const video = ref(null)
const started = ref(false)

const playVideo = async () => {
    try {
        await video.value.play()
    } catch (err) {
        console.error(err)
    }
}
</script>

<style scoped>
.bg-home {
    background-image: url(/images/home/desktopbg.png);
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
