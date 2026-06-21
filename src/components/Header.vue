<template>
    <nav>
        <RouterLink to="/">Início</RouterLink>

        <RouterLink to="/o-ourives">
            Ourives
        </RouterLink>

        <div class="portfolio-menu">
            <RouterLink to="/portfolio">
                Portfólio
            </RouterLink>

            <div class="submenu">
                <RouterLink to="/portfolio/#madeiras">
                    Madeiras Brasileiras
                </RouterLink>

                <RouterLink to="/portfolio/#fibras">
                    Fibras e Tramas
                </RouterLink>

                <RouterLink to="/portfolio/#gemas">
                    Gemas e Metais
                </RouterLink>

                <RouterLink to="/portfolio/#metais">
                    Metais Nobres
                </RouterLink>

                <RouterLink to="/portfolio/#classicos">
                    Clássicos Essenciais
                </RouterLink>

                <RouterLink to="/portfolio/#natureza">
                    Natureza Bruta
                </RouterLink>

                <RouterLink to="/portfolio/#projetos">
                    Projetos Especiais
                </RouterLink>
            </div>
        </div>

        <a href="/#contato">
            Contato
        </a>
    </nav>
</template>

<style scoped>
.portfolio-menu {
    position: relative;
}

.submenu {
    position: absolute;
    top: 100%;
    left: 100%;
    transform: translateX(-50%);
    min-width: 250px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    background: #0000003b;
    backdrop-filter: blur(5px);
    border-radius: 0px 10px 10px 10px;
    opacity: 0;
    visibility: hidden;
    transition: .25s;
}

.portfolio-menu:hover .submenu {
    opacity: 1;
    visibility: visible;
}

.submenu a {
    padding: 9px 16px;
    font-size: 15px;
    text-decoration: none;
    text-align: start;
}
</style>