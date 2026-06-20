<template>

    <section class="home-hero">

        <video ref="video" autoplay muted loop playsinline preload="auto" @play="started = true"
            class="hero-video h-[95vh] w-full object-cover">
            <source src="/videos/home-hero-noaudio.mp4" type="video/mp4">
        </video>

        <button v-if="!started" @click="playVideo" class="play-button">
            ▶
        </button>

        <div class="home-hero-overlay z-9"></div>

        <div class="home-hero-content z-99 mb-35 sm:mb-50 items-center justify-between">
            <Header class="header mt-3" />
            <img src="/images/logosolo.png" alt="Ourives da Chapada Logo" class="home-hero-logo">
        </div>

    </section>

    <Destaques />

    <div class="portfolio mt-40 w-full flex flex-col justify-center items-center">
        <div class="w-full max-w-[1210px] flex flex-col items-center justify-center">
            <div class="destaque-text text-start w-full pl-5">
                // PORTFÓLIO
            </div>
            <div class="titulo-flutuante text-start max-w-[98%] text-[25px] sm:text-[35px] w-full">
                {{ tituloAtual }}
            </div>
            <div class="px-2 md:px-0">
                <!--MADEIRAS BRASILEIRAS-->
                <div class="trigger-titulo" data-titulo="MADEIRAS BRASILEIRAS"></div>

                <div class="madeiras-gallery flex flex-col gap-1">

                    <!--MOBILE-->
                    <div class="flex flex-col md:hidden">
                        <div class="w-full">
                            <img src="/images/portfolio/madeiras/m1.jpg" class="max-h-[700px] w-full object-cover">
                        </div>
                        <div class="w-full flex gap-1">

                            <div class="w-1/2">
                                <img src="/images/portfolio/madeiras/m2.jpg" class="max-h-[500px] w-full object-cover">
                                <img src="/images/portfolio/madeiras/m5.jpg" class="max-h-[500px] w-full object-cover">
                                <img src="/images/portfolio/madeiras/m4.jpg" class="max-h-[500px] w-full object-cover">

                            </div>
                            <div class="w-1/2">
                                <img src="/images/portfolio/madeiras/m3.jpg" class="max-h-[500px] w-full object-cover">
                                <img src="/images/portfolio/madeiras/m6.jpg" class="max-h-[500px] w-full object-cover">
                                <img src="/images/portfolio/madeiras/m7.jpg" class="max-h-[500px] w-full object-cover">
                            </div>

                        </div>
                    </div>

                    <!--DESKTOP-->
                    <div class="hidden md:flex md:flex-col">

                        <div class="w-full">
                            <img src="/images/portfolio/madeiras/m1.jpg" class="max-h-[700px] w-full object-cover">
                        </div>

                        <div class="w-full flex gap-1">

                            <div class="w-full flex gap-1">
                                <div class="w-1/3">
                                    <img src="/images/portfolio/madeiras/m2.jpg"
                                        class="max-h-[500px] w-full object-cover">
                                    <img src="/images/portfolio/madeiras/m5.jpg"
                                        class="max-h-[500px] w-full object-cover">

                                </div>
                                <div class="w-1/3">
                                    <img src="/images/portfolio/madeiras/m3.jpg"
                                        class="max-h-[500px] w-full object-cover">
                                    <img src="/images/portfolio/madeiras/m6.jpg"
                                        class="max-h-[500px] w-full object-cover">
                                </div>

                                <div class="w-1/3">
                                    <img src="/images/portfolio/madeiras/m4.jpg"
                                        class="max-h-[500px] w-full object-cover">
                                    <img src="/images/portfolio/madeiras/m7.jpg"
                                        class="max-h-[500px] w-full object-cover">
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="w-full flex flex-col md:flex-row gap-1">
                        <div class="w-full md:w-3/5">
                            <img src="/images/portfolio/madeiras/m8.jpg" class="max-h-[500px] w-full object-cover">

                        </div>
                        <div class="w-full md:w-2/5">
                            <img src="/images/portfolio/madeiras/m9.jpg" class="min-h-full w-full object-cover">
                        </div>
                    </div>

                    <div class="w-full flex flex-col md:flex-row gap-1">
                        <div class="w-full md:w-2/5">
                            <img src="/images/portfolio/madeiras/m10.jpg" class="min-h-full w-full object-cover">

                        </div>
                        <div class="w-full md:w-3/5">
                            <img src="/images/portfolio/madeiras/m11.jpg" class="min-h-full w-full object-cover">
                        </div>
                    </div>


                    <!--DESKTOP-->
                    <div class="w-full hidden md:flex gap-1">
                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/madeiras/m12.jpg" class="max-h-[500px] w-full object-cover">
                            <img src="/images/portfolio/madeiras/m15.jpg" class="max-h-[500px] w-full object-cover">
                            <img src="/images/portfolio/madeiras/m18.jpg" class="max-h-[500px] w-full object-cover">
                            <img src="/images/portfolio/madeiras/m21.jpg" class="max-h-[500px] w-full object-cover">
                        </div>
                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/madeiras/m13.jpg" class="max-h-[500px] w-full object-cover">
                            <img src="/images/portfolio/madeiras/m16.jpg" class="max-h-[500px] w-full object-cover">
                            <img src="/images/portfolio/madeiras/m19.jpg" class="max-h-[420px] w-full object-cover">
                            <img src="/images/portfolio/madeiras/m22.jpg"
                                class="h-full lg:min-h-[443px] w-full object-cover">
                        </div>
                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/madeiras/m14.jpg" class="max-h-[500px] w-full object-cover">
                            <img src="/images/portfolio/madeiras/m17.jpg" class="max-h-[500px] w-full object-cover">
                            <img src="/images/portfolio/madeiras/m20.jpg" class="max-h-[463px] w-full object-cover">
                            <img src="/images/portfolio/madeiras/m23.jpg"
                                class="h-full lg:max-h-[500px] w-full object-cover">
                        </div>
                    </div>


                    <div class="w-full flex md:hidden gap-1">
                        <div class="w-1/2 flex flex-col gap-1 h-[1500px]">
                            <img src="/images/portfolio/madeiras/m12.jpg" class="h-2/28 w-full object-cover object-top">
                            <img src="/images/portfolio/madeiras/m15.jpg" class="h-3/28 w-full object-cover object-top">
                            <img src="/images/portfolio/madeiras/m18.jpg"
                                class="h-5/28 w-full object-cover object-bottom">
                            <img src="/images/portfolio/madeiras/m21.jpg"
                                class="h-6/28 w-full object-cover object-bottom">
                            <img src="/images/portfolio/madeiras/m14.jpg"
                                class="h-6/28 w-full object-cover object-left">
                            <img src="/images/portfolio/madeiras/m17.jpg" class="h-6/28 w-full object-cover">
                        </div>
                        <div class="w-1/2 flex flex-col gap-1 h-[1500px]">
                            <img src="/images/portfolio/madeiras/m13.jpg" class="h-3/28 w-full object-cover">
                            <img src="/images/portfolio/madeiras/m16.jpg" class="h-7/28 w-full object-cover">
                            <img src="/images/portfolio/madeiras/m19.jpg" class="h-6/28 w-full object-cover">
                            <img src="/images/portfolio/madeiras/m22.jpg" class="h-5/28 w-full object-cover">
                            <img src="/images/portfolio/madeiras/m20.jpg" class="h-5/28 w-full object-cover">
                            <img src="/images/portfolio/madeiras/m23.jpg" class="h-2/28 w-full object-cover">
                        </div>

                    </div>




                    <div class="w-full flex gap-1 max-h-[400px]">
                        <div class="w-1/2">
                            <img src="/images/portfolio/madeiras/m24.jpg"
                                class="h-full w-full object-cover object-bottom">

                        </div>
                        <div class="w-1/2">
                            <img src="/images/portfolio/madeiras/m25.jpg" class="h-full w-full object-cover">
                        </div>
                    </div>

                    <div class="w-full flex gap-1 max-h-[200px] md:min-h-[700px]">
                        <div class="w-4/9 flex flex-col gap-1">
                            <img src="/images/portfolio/madeiras/m26.jpg" class="h-full w-full object-cover">
                        </div>
                        <div class="w-3/9 flex flex-col gap-1">
                            <img src="/images/portfolio/madeiras/m27.jpg" class="h-full w-full object-cover">
                        </div>
                        <div class="w-2/9 flex flex-col gap-1">
                            <img src="/images/portfolio/madeiras/m28.jpg" class="h-full w-full object-cover">
                        </div>
                    </div>

                    <div class="w-full flex gap-1">
                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/madeiras/m29.jpg" class="lg:max-h-[300px] w-full object-cover">
                            <img src="/images/portfolio/madeiras/m32.png"
                                class="hidden lg:flex lg:min-h-[503px] w-full object-cover">
                        </div>
                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/madeiras/m30.jpg" class="lg:max-h-[300px] w-full object-cover">
                            <img src="/images/portfolio/madeiras/m33.png"
                                class="hidden lg:flex lg:max-h-[200px] w-full object-cover">
                            <img src="/images/portfolio/madeiras/m34.png"
                                class="hidden lg:flex min-h-[150px] lg:max-h-[300px] w-full object-cover">
                        </div>
                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/madeiras/m31.jpg" class="lg:h-8/14 w-full object-cover">
                            <img src="/images/portfolio/madeiras/m35.png"
                                class="hidden lg:flex lg:h-6/14 h-full w-full object-cover">
                        </div>
                    </div>

                    <!-- <div class="w-full flex lg:hidden h-[150px] md:min-h-[225px] gap-1">
                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/madeiras/m32.png" class="h-full w-full object-cover">
                        </div>
                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/madeiras/m33.png" class="h-full w-full object-cover">
                        </div>
                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/madeiras/m35.png" class="h-full w-full object-cover">
                        </div>
                    </div> -->

                    <div class="flex flex-col lg:hidden w-full gap-1">
                        <img src="/images/portfolio/madeiras/m34.png"
                            class="h-[320px] md:h-[600px] w-full object-cover">
                        <img src="/images/portfolio/madeiras/m35.png" class="h-full w-full object-cover">
                        <img src="/images/portfolio/madeiras/m33.png" class="h-full w-full object-cover">
                        <img src="/images/portfolio/madeiras/m32.png" class="h-full w-full object-cover">

                    </div>


                </div>


                <!--FIBRAS E TRAMAS-->
                <div class="trigger-titulo mt-20" data-titulo="FIBRAS E TRAMAS"></div>

                <div class="fibras-gallery flex flex-col gap-1">
                    <div class="w-full flex flex-col sm:flex-row gap-1 sm:max-h-[600px]">
                        <div class="w-full sm:w-5/7">
                            <img src="/images/portfolio/fibras/f1.jpg" class="h-full w-full object-cover object-bottom">

                        </div>
                        <div class="w-full sm:w-2/7">
                            <img src="/images/portfolio/fibras/f2.jpg" class="h-full w-full object-cover">
                        </div>
                    </div>

                    <div class="w-full flex flex-col sm:flex-row gap-1 sm:max-h-[600px]">
                        <div class="w-full sm:w-6/9">
                            <img src="/images/portfolio/fibras/f3.jpg" class="h-full w-full object-cover object-bottom">
                        </div>
                        <div class="w-full sm:w-3/9">
                            <img src="/images/portfolio/fibras/f4.jpg" class="h-full w-full object-cover">
                        </div>
                    </div>

                    <div class="w-full flex flex-col sm:flex-row gap-1 sm:max-h-[720px]">
                        <div class="w-full sm:w-5/9 min-h-full">
                            <img src="/images/portfolio/fibras/f5.jpg" class="h-full w-full object-cover object-top">
                        </div>
                        <div class="w-full sm:w-4/9 flex flex-col gap-1 min-h-full">
                            <img src="/images/portfolio/fibras/f6.jpg" class="h-full w-full object-cover">
                            <img src="/images/portfolio/fibras/f7.jpg" class="h-full w-full object-cover">

                        </div>
                    </div>

                    <div class="w-full flex flex-col sm:flex-row gap-1 sm:max-h-[600px]">
                        <div class="w-full sm:w-6/9">
                            <img src="/images/portfolio/fibras/f8.jpg" class="h-full w-full object-cover object-bottom">
                        </div>
                        <div class="w-full sm:w-3/9">
                            <img src="/images/portfolio/fibras/f9.jpg" class="h-[300px] sm:h-full w-full object-cover">
                        </div>
                    </div>

                    <div class="w-full flex gap-1">
                        <div class="w-1/2 md:w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/fibras/f10.jpg"
                                class="h-[300px] sm:h-[350px] w-full object-cover">
                            <img src="/images/portfolio/fibras/f13.jpg"
                                class="h-[200px] sm:h-[300px] w-full object-cover">
                            <img src="/images/portfolio/fibras/f16.jpg"
                                class="h-[200px] sm:h-[300px] w-full object-cover">
                            <img src="/images/portfolio/fibras/f19.jpg"
                                class="h-[200px] sm:h-[300px] w-full object-cover">
                        </div>
                        <div class="w-1/2 md:w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/fibras/f11.jpg"
                                class="h-[200px] sm:h-[300px] w-full object-cover">
                            <img src="/images/portfolio/fibras/f14.jpg"
                                class="h-[300px] sm:h-[300px] w-full object-cover">
                            <img src="/images/portfolio/fibras/f17.png"
                                class="h-[200px] sm:h-[350px] w-full object-cover">
                            <img src="/images/portfolio/fibras/f20.jpg"
                                class="h-[200px] sm:h-[300px] w-full object-cover">
                        </div>
                        <div class="hidden md:w-1/3 md:flex md:flex-col gap-1">
                            <img src="/images/portfolio/fibras/f12.jpg"
                                class="h-[350px] w-full object-cover object-top">
                            <img src="/images/portfolio/fibras/f15.jpg" class="h-[300px] w-full object-cover">
                            <img src="/images/portfolio/fibras/f18.jpg" class="h-[300px] w-full object-cover">
                            <img src="/images/portfolio/fibras/f21.jpg" class="h-[300px] w-full object-cover">
                        </div>
                    </div>

                    <div class="md:hidden w-full flex flex-col gap-1">
                        <div class="w-1/2 flex gap-1 max-h-[300px]">
                            <img src="/images/portfolio/fibras/f12.jpg"
                                class="max-h-full w-full object-cover object-top">
                            <img src="/images/portfolio/fibras/f15.jpg" class="min-h-full w-full object-cover">
                        </div>
                        <div class="w-1/2 flex gap-1 max-h-[200px]">
                            <img src="/images/portfolio/fibras/f18.jpg" class="max-h-full w-full object-cover">
                            <img src="/images/portfolio/fibras/f21.jpg" class="max-h-full w-full object-cover">
                        </div>
                    </div>

                </div>


                <!--GEMAS E METAIS-->
                <div class="trigger-titulo mt-20" data-titulo="GEMAS E METAIS"></div>

                <div class="gemas-gallery flex flex-col gap-1">
                    <div class="w-full flex gap-1">
                        <div class="w-1/2 md:w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/gemas/g1.jpg" class="h-[300px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g4.jpg"
                                class="h-[280px] md:h-[390px] w-full object-cover object-bottom">
                            <img src="/images/portfolio/gemas/g7.jpg"
                                class="h-[176px] md:h-[230px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g9.png"
                                class="h-[190px] md:h-[240px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g13.png"
                                class="hidden md:flex md:h-[235px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g14.png"
                                class="hidden md:flex md:h-[240px] w-full object-cover">
                        </div>
                        <div class="w-1/2 md:w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/gemas/g2.jpg"
                                class="h-[230px] md:h-[370px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g5.jpg"
                                class="h-[290px] md:h-[480px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g10.jpg"
                                class="h-[430px] md:h-[797px] w-full object-cover">
                        </div>

                        <div class="hidden md:w-1/3 md:flex md:flex-col gap-1">
                            <img src="/images/portfolio/gemas/g3.jpg" class="h-[350px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g6.jpg" class="h-[270px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g8.jpg" class="h-[220px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g11.png" class="h-[230px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g12.png" class="h-[240px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g15.jpg" class="h-[325px] w-full object-cover">
                        </div>
                    </div>

                    <div class="md:hidden w-full flex gap-1">
                        <div class="w-1/2 flex flex-col gap-1 ">
                            <img src="/images/portfolio/gemas/g3.jpg" class="h-[250px] w-full object-cover">

                            <img src="/images/portfolio/gemas/g8.jpg" class="h-[120px] w-full object-cover">
                        </div>
                        <div class="w-1/2 flex flex-col gap-1">
                            <img src="/images/portfolio/gemas/g11.png" class="h-[230px] w-full object-cover">

                            <img src="/images/portfolio/gemas/g15.jpg" class="h-[140px] w-full object-cover">
                        </div>
                    </div>

                    <div class="flex flex-col md:hidden w-full gap-1">
                        <img src="/images/portfolio/gemas/g13.png" class="h-[235px] w-full object-cover">
                        <img src="/images/portfolio/gemas/g14.png" class="h-[240px] w-full object-cover">
                        <img src="/images/portfolio/gemas/g6.jpg" class="h-[270px] w-full object-cover object-bottom">
                        <img src="/images/portfolio/gemas/g12.png" class="h-[290px] w-full object-cover">
                    </div>

                    <div class="w-full">
                        <img src="/images/portfolio/gemas/g16.jpg"
                            class="h-[300px] md:h-[500px] w-full object-cover object-bottom">
                    </div>

                    <div class="w-full flex gap-1">
                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/gemas/g17.jpg" class="h-[645px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g20.jpg" class="h-[315px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g23.jpg" class="h-[415px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g26.jpg" class="h-[555px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g30.jpg" class="h-[500px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g33.jpg" class="h-[500px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g38.jpg" class="h-[270px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g39.png" class="h-[335px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g42.jpg" class="h-[270px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g43.png" class="h-[490px] w-full object-cover">
                        </div>
                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/gemas/g18.jpg" class="h-[555px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g21.jpg" class="h-[310px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g24.jpg" class="h-[555px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g27.jpg" class="h-[435px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g31.jpg" class="h-[555px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g34.jpg" class="h-[345px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g37.jpg" class="h-[445px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g40.png"
                                class="h-[340px] w-full object-cover object-bottom">
                            <img src="/images/portfolio/gemas/g44.png" class="h-[759px] w-full object-cover object-top">
                        </div>
                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/gemas/g19.jpg" class="h-[315px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g22.jpg" class="h-[415px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g25.jpg" class="h-[425px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g28.jpg" class="h-[315px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g29.jpg" class="h-[290px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g32.jpg" class="h-[420px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g35.jpg" class="h-[500px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g36.png" class="h-[315px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g41.png" class="h-[465px] w-full object-cover">
                            <img src="/images/portfolio/gemas/g45.png" class="h-[835px] w-full object-cover">
                        </div>
                    </div>
                </div>


                <!-- METAIS NOBRES -->
                <div class="trigger-titulo mt-20" data-titulo="METAIS NOBRES"></div>

                <div class="metais-gallery flex flex-col gap-1">
                    <div class="w-full flex gap-1 max-h-[500px]">
                        <div class="w-2/3">
                            <img src="/images/portfolio/metais/me1.jpg"
                                class="h-full w-full object-cover object-bottom">

                        </div>
                        <div class="w-1/3">
                            <img src="/images/portfolio/metais/me2.jpg" class="h-full w-full object-cover">
                        </div>
                    </div>


                    <div class="w-full flex gap-1">

                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/metais/me3.jpg"
                                class="h-[260px] w-full object-cover object-top">
                            <img src="/images/portfolio/metais/me6.jpg" class="h-[300px] w-full object-cover">
                            <img src="/images/portfolio/metais/me7.jpg" class="h-[500px] w-full object-cover">
                            <img src="/images/portfolio/metais/me10.png" class="h-[425px] w-full object-cover">
                            <img src="/images/portfolio/metais/me13.png" class="h-[410px] w-full object-cover">
                        </div>

                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/metais/me4.jpg" class="h-[640px] w-full object-cover">
                            <img src="/images/portfolio/metais/me8.jpg" class="h-[255px] w-full object-cover">
                            <img src="/images/portfolio/metais/me11.png" class="h-[375px] w-full object-cover">
                            <img src="/images/portfolio/metais/me14.jpg" class="h-[280px] w-full object-cover">
                            <img src="/images/portfolio/metais/me15.jpg" class="h-[345px] w-full object-cover">
                        </div>

                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/metais/me5.jpg"
                                class="h-[500px] w-full object-cover object-top">
                            <img src="/images/portfolio/metais/me9.jpg" class="h-[500px] w-full object-cover">
                            <img src="/images/portfolio/metais/me12.png" class="h-[500px] w-full object-cover">
                            <img src="/images/portfolio/metais/me16.png" class="h-[398px] w-full object-cover">
                        </div>

                    </div>
                </div>


                <!-- CLÁSSICOS ESSENCIAIS -->
                <div class="trigger-titulo mt-20" data-titulo="CLÁSSICOS ESSENCIAIS"></div>

                <div class="classicos-gallery flex flex-col gap-1">
                    <div class="w-full">
                        <img src="/images/portfolio/classicos/c1.png" class="h-[500px] w-full object-cover">
                    </div>


                    <div class="w-full flex gap-1">

                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/classicos/c2.jpg"
                                class="h-[500px] w-full object-cover object-top">
                            <img src="/images/portfolio/classicos/c5.jpg" class="h-[600px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c9.jpg" class="h-[310px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c12.jpg"
                                class="h-[310px] w-full object-cover object-top">
                            <img src="/images/portfolio/classicos/c14.jpg" class="h-[500px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c17.jpg" class="h-[260px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c20.png" class="h-[260px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c23.png" class="h-[250px] w-full object-cover">
                        </div>

                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/classicos/c3.png"
                                class="h-[240px] w-full object-cover object-top">
                            <img src="/images/portfolio/classicos/c6.jpg" class="h-[475px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c8.jpg" class="h-[450px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c10.jpg" class="h-[555px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c15.jpg" class="h-[550px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c18.jpg" class="h-[360px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c21.png" class="h-[364px] w-full object-cover">
                        </div>

                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/classicos/c4.jpg"
                                class="h-[465px] w-full object-cover object-top">
                            <img src="/images/portfolio/classicos/c7.jpg" class="h-[540px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c11.jpg" class="h-[315px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c13.jpg" class="h-[425px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c16.png" class="h-[415px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c19.png" class="h-[415px] w-full object-cover">
                            <img src="/images/portfolio/classicos/c22.png" class="h-[419px] w-full object-cover">
                        </div>

                    </div>
                </div>



                <!-- NATUREZA BRUTA -->
                <div class="trigger-titulo mt-20" data-titulo="NATUREZA BRUTA"></div>

                <div class="natureza-gallery flex flex-col gap-1">
                    <div class="w-full flex gap-1">

                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/natureza/n1.jpg" class="h-[420px] w-full object-cover">
                            <img src="/images/portfolio/natureza/n4.jpg" class="h-[380px] w-full object-cover">
                        </div>

                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/natureza/n2.jpg" class="h-[300px] w-full object-cover">
                            <img src="/images/portfolio/natureza/n5.jpg" class="h-[500px] w-full object-cover">
                        </div>

                        <div class="w-1/3 flex flex-col gap-1">
                            <img src="/images/portfolio/natureza/n3.jpg" class="h-[500px] w-full object-cover">
                            <img src="/images/portfolio/natureza/n6.jpg" class="h-[300px] w-full object-cover">
                        </div>

                    </div>

                    <div class="w-full flex gap-1 max-h-[500px]">
                        <div class="w-2/3">
                            <img src="/images/portfolio/natureza/n7.jpg"
                                class="h-full w-full object-cover object-bottom">
                        </div>
                        <div class="w-1/3">
                            <img src="/images/portfolio/natureza/n8.jpg" class="h-full w-full object-cover">
                        </div>
                    </div>
                </div>




                <!-- PROJETOS ESPECIAIS -->
                <div class="trigger-titulo mt-20" data-titulo="PROJETOS ESPECIAIS"></div>

                <div class="projetos-gallery flex flex-col gap-1">

                    <div class="w-full flex flex-col gap-1">
                        <img src="/images/portfolio/projetos/p1.jpg" class="max-h-[700px] w-full object-cover">
                        <img src="/images/portfolio/projetos/p2.jpg" class="max-h-[600px] w-full object-cover">
                    </div>

                    <div class="w-full flex gap-1">
                        <div class="w-1/2 flex flex-col gap-1">
                            <img src="/images/portfolio/projetos/p3.jpg"
                                class="h-full w-full object-cover object-bottom">
                            <img src="/images/portfolio/projetos/p5.jpg"
                                class="h-full w-full object-cover object-bottom">
                            <img src="/images/portfolio/projetos/p7.png"
                                class="h-full w-full object-cover object-bottom">
                            <img src="/images/portfolio/projetos/p9.jpg"
                                class="h-full w-full object-cover object-bottom">
                            <img src="/images/portfolio/projetos/p10.png"
                                class="h-full w-full object-cover object-bottom">
                            <img src="/images/portfolio/projetos/p11.png"
                                class="h-full w-full object-cover object-bottom">
                            <img src="/images/portfolio/projetos/p17.jpg"
                                class="h-full w-full object-cover object-bottom">
                        </div>
                        <div class="w-1/2 flex flex-col gap-1">
                            <img src="/images/portfolio/projetos/p4.jpg"
                                class="h-[415px] w-full object-cover object-bottom">
                            <img src="/images/portfolio/projetos/p6.jpg"
                                class="h-[415px] w-full object-cover object-bottom">
                            <img src="/images/portfolio/projetos/p8.png"
                                class="h-[1250px] w-full object-cover object-bottom">
                            <video ref="video" autoplay muted loop playsinline preload="auto" @play="started = true"
                                class="hero-video h-[95vh] w-full object-cover">
                                <source src="/images/portfolio/projetos/projeto.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>

                    <div class="w-full flex flex-col gap-1">
                        <img src="/images/portfolio/projetos/p12.jpg" class="max-h-[700px] w-full object-cover">
                    </div>


                    <div class="w-full flex gap-1">
                        <div class="w-1/2 flex flex-col gap-1">
                            <img src="/images/portfolio/projetos/p13.jpg"
                                class="h-[300px] w-full object-cover object-bottom">
                            <img src="/images/portfolio/projetos/p15.jpg"
                                class="h-[300px] w-full object-cover object-bottom">
                        </div>
                        <div class="w-1/2 flex flex-col gap-1">
                            <img src="/images/portfolio/projetos/p14.jpg"
                                class="h-[300px] w-full object-cover object-bottom">
                            <img src="/images/portfolio/projetos/p16.jpg"
                                class="h-[300px] w-full object-cover object-bottom">
                        </div>
                    </div>
                </div>
            </div>
        </div>







    </div>

</template>


<script setup>

import Header from '../components/Header.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import Destaques from '../components/Destaques.vue'

const tituloAtual = ref('MADEIRAS BRASILEIRAS')

let observer = null

const atualizarTituloVisivel = () => {

    const triggers =
        document.querySelectorAll('.trigger-titulo')

    let triggerMaisProximo = null
    let menorDistancia = Infinity

    triggers.forEach(trigger => {

        const rect = trigger.getBoundingClientRect()
        const distancia = Math.abs(rect.top)

        if (
            rect.top <= window.innerHeight * 0.3 &&
            distancia < menorDistancia
        ) {
            menorDistancia = distancia
            triggerMaisProximo = trigger
        }

    })

    if (triggerMaisProximo) {

        tituloAtual.value =
            triggerMaisProximo.dataset.titulo

    }

}

onMounted(() => {

    const triggers =
        document.querySelectorAll('.trigger-titulo')

    observer = new IntersectionObserver(
        () => {
            atualizarTituloVisivel()
        },
        {
            root: null,
            threshold: 0
        }
    )

    triggers.forEach(trigger =>
        observer.observe(trigger)
    )

    window.addEventListener(
        'scroll',
        atualizarTituloVisivel
    )

    atualizarTituloVisivel()

})

onUnmounted(() => {

    if (observer) {
        observer.disconnect()
    }

    window.removeEventListener(
        'scroll',
        atualizarTituloVisivel
    )

})
</script>

<style scoped>
.titulo-flutuante {
    position: sticky;
    background-color: rgba(255, 255, 255, 0.568);
    backdrop-filter: blur(10px);
    padding-left: 10px;
    border-radius: 5px;
    top: 5px;
    font-weight: 300;
    z-index: 9999;
    color: black;
    text-transform: uppercase;
    letter-spacing: 4px;
}
</style>