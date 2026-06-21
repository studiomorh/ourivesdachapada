<template>
    <nav class="items-center">
        <RouterLink to="/">Início</RouterLink>

        <RouterLink to="/o-ourives">
            Ourives
        </RouterLink>

        <div class="portfolio-menu">

            <a class="menu-title a" @click="openPortfolio = !openPortfolio">
                Portfólio
            </a>

            <div class="submenu">

                <RouterLink to="/portfolio">
                    Portfólio Completo
                </RouterLink>

                <RouterLink :to="{ path: '/portfolio', hash: '#madeiras' }">
                    Madeiras Brasileiras
                </RouterLink>

                <RouterLink :to="{ path: '/portfolio', hash: '#fibras' }">
                    Fibras e Tramas
                </RouterLink>

                <RouterLink :to="{ path: '/portfolio', hash: '#gemas' }">
                    Gemas e Metais
                </RouterLink>

                <RouterLink :to="{ path: '/portfolio', hash: '#metais' }">
                    Metais Nobres
                </RouterLink>

                <RouterLink :to="{ path: '/portfolio', hash: '#classicos' }">
                    Clássicos Essenciais
                </RouterLink>

                <RouterLink :to="{ path: '/portfolio', hash: '#natureza' }">
                    Natureza Bruta
                </RouterLink>

                <RouterLink :to="{ path: '/portfolio', hash: '#projetos' }">
                    Projetos Especiais
                </RouterLink>

            </div>

        </div>

        <a class="a items-center h-fit w-fit mb-0 p-0" href="/#contato">
            Contato
        </a>

    </nav>
</template>

<script setup>
import { ref } from 'vue'

const openPortfolio = ref(false)
</script>

<style scoped>
.portfolio-menu {
    position: relative;
}

.submenu {
    position: absolute;
    top: 100%;
    margin-top: 5px;
    left: 100%;
    transform: translateX(-50%);
    min-width: 250px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 0px 10px 10px 10px;
    opacity: 0;
    visibility: hidden;
    transition: .25s;
}

.portfolio-menu:hover .submenu {
    opacity: 1;
    visibility: visible;
    background-color: rgba(255, 255, 255, 0.952);
    backdrop-filter: blur(10px);
}

.submenu a {
    padding: 9px 16px;
    font-size: 15px;
    text-decoration: none;
    text-align: start;
}

.menu-title {
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
}
</style>