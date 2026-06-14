<template>


    <section class="home-hero">

        <video autoplay muted loop playsinline preload="metadata" poster="/images/hero-poster.jpg"
            class="hero-video h-[95vh] w-full object-cover">
            <source src="/videos/home-hero.mp4" type="video/mp4">
        </video>

        <div class="home-hero-overlay"></div>

        <div class="home-hero-content mb-50 items-center justify-between">
            <Header class="header" />
            <img src="/images/logosolo.png" alt="Ourives da Chapada Logo" class="home-hero-logo">
        </div>

    </section>

    <div class="flex justify-center gap-1 row-gallery">
        <div class="flex gap-1 justify-center">
            <div class="home-1-gallery">
                <img src="/images/home/foto1.jpg" class="">
            </div>
            <div class="home-2-gallery">
                <img src="/images/home/foto2.jpg" class="">
            </div>
        </div>
        <div class="flex gap-1 justify-center">
            <div class="home-3-gallery">
                <img src="/images/home/foto3.jpg" class="">
            </div>
            <div class="home-4-gallery">
                <img src="/images/home/foto4.jpg" class="">
            </div>
        </div>
    </div>

    <div class="section3 w-full flex flex-col items-center justify-center z-[55] relative">
        <img src="/images/logosoloblack.png" class="logo1">
        <span class="text-center text-[23px] mt-2 mb-4" style="letter-spacing: 2px;">OURIVES DA
            CHAPADA</span>

    </div>
    <div class="header-div">
        <Header class="header2 pt-2 w-fit" style="border-top: 1px solid lightgray;" />
    </div>
    <div class="section4 w-full items-center justify-center flex flex-col gap-1 mt-3">
        <img src="/images/hero-poster.jpg" class="max-w-[1210px] w-full" />
        <div class="flex gap-1 text-center text-[16px] sm:text-[20px] max-w-[1210px]"
            style="letter-spacing: 2px; font-weight: 400;">
            <div class="flex gap-1 flex-col sm:flex-row">
                <div class="flex flex-col">
                    <img src="/images/home/foto1.jpg" class="w-[300px]">
                    <span class="">CLÁSSICOS ESSENCIAIS</span>
                </div>
                <div class="flex flex-col">
                    <img src="/images/home/foto1.jpg" class="w-[300px]">
                    <span class="">METAIS NOBRES</span>
                </div>
            </div>
            <div class="flex gap-1 flex-col sm:flex-row">
                <div class="flex flex-col">
                    <img src="/images/home/foto1.jpg" class="w-[300px]">
                    <span class="">FIBRAS E TRAMAS</span>
                </div>
                <div class="flex flex-col">
                    <img src="/images/home/foto1.jpg" class="w-[300px]">
                    <span class="">NATUREZA BRUTA</span>
                </div>
            </div>
        </div>
        <div class="flex max-w-[1210px] flex-col sm:flex-row max-h-fit sm:max-h-[400px] justify-between w-full text-center  text-[16px] sm:text-[20px] mt-4"
            style="letter-spacing: 2px; font-weight: 400;">
            <div class="flex flex-col">
                <img src="/images/home/foto1.jpg" class="w-full sm:w-[380px] h-full object-cover">
                <span class="mb-6 sm:mb-0 ">MADEIRAS BRASILEIRAS</span>
            </div>
            <div class="flex flex-col">
                <img src="/images/home/foto1.jpg" class="w-full sm:w-[380px] h-full object-cover">
                <span class="mb-6 sm:mb-0 ">GEMAS E METAIS</span>
            </div>
            <div class="flex flex-col">
                <img src="/images/home/foto1.jpg" class="w-full sm:w-[380px] h-full object-cover">
                <span class="">PROJETOS ESPECIAIS</span>
            </div>
        </div>
    </div>

    <div class="home-gallery mt-20 w-full flex flex-col items-center justify-center">
        <div class="flex gap-1 items-center justify-center w-full max-w-[1210px] ">

            <img src="/images/home/foto1.jpg" class="w-full h-[700px] object-cover">

            <div class="flex flex-col gap-1 w-full">

                <img src="/images/home/foto1.jpg" class="w-full h-[348px] object-cover">
                <img src="/images/home/foto1.jpg" class="w-full h-[348px] object-cover">

            </div>
        </div>

        <div class="flex gap-1 items-center justify-center w-full max-w-[1210px] mt-1">
            <div class="w-[27%]">
                <img src="/images/home/foto1.jpg" class="w-full h-[430px] object-cover">
            </div>
            <div class="w-[50%]">
                <img src="/images/home/foto1.jpg" class="w-full h-[430px] object-cover">
            </div>
            <div class="w-[23%]">
                <img src="/images/home/foto1.jpg" class="w-full h-[430px] object-cover">
            </div>
        </div>

        <div class="flex gap-1 items-center justify-center w-full max-w-[1210px] mt-1">

            <img src="/images/home/foto1.jpg" class="w-full h-[430px] object-cover">
            <img src="/images/home/foto1.jpg" class="w-full h-[430px] object-cover">
            <img src="/images/home/foto1.jpg" class="w-full h-[430px] object-cover">

        </div>

        <div class="flex gap-1 items-center justify-center w-full max-w-[1210px] mt-1">

            <div class="flex gap-1 w-[66%]">
                <img src="/images/home/foto1.jpg" class="w-full h-[480px] object-cover">
                <img src="/images/home/foto1.jpg" class="w-full h-[480px] object-cover">
            </div>

            <div class="flex flex-col gap-1 w-[34%]">
                <img src="/images/home/foto1.jpg" class="w-full h-[228px] object-cover">
                <img src="/images/home/foto1.jpg" class="w-full h-[248px] object-cover">
            </div>
        </div>

    </div>

    <div class="portfolio-button mt-6">
        <button class="btn-primary">
            VER PORTFÓLIO COMPLETO
        </button>
    </div>

    <div class="contact mt-5 flex justify-center items-center text-center">
        <div class="contact-form w-[90%] sm:w-[600px]">
            <div class="social-buttons flex gap-4 mt-5">
                <div class="instagram">
                    <img src="/images/instagram.png" class="w-[30px]" />
                </div>
                <div class="whatsapp">
                    <img src="/images/whatsapp.png" class="w-[30px]" />
                </div>
            </div>
            <span class="text-[60px]" style="letter-spacing: 2px;">CONTATO</span>
            <span class="text-[18px] w-[80%] mb-8">Para aquisições, exposições, parcerias ou outras informações, entre
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

</template>


<script setup>
import Header from '../components/Header.vue'
</script>
