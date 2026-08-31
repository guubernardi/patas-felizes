<template>
  <nav :class="{ aberto, flutuante }">
    <div class="conteudo">
      <div class="navegacao">
        <div class="enfeites-menu" aria-hidden="true">
          <SvgIcone class="enfeite-menu pata" nome="pata" :tamanho="150" />
          <SvgIcone class="enfeite-menu osso" nome="osso" :tamanho="90" />
        </div>

        <div class="links esquerda">
          <NuxtLink v-for="link in LINKS_ESQUERDA" :key="link.destino" :to="link.destino" @click="fecharMenu">
            {{ link.rotulo }}
          </NuxtLink>
        </div>

        <div class="links direita">
          <NuxtLink v-for="link in LINKS_DIREITA" :key="link.destino" :to="link.destino" @click="fecharMenu">
            {{ link.rotulo }}
          </NuxtLink>
        </div>

        <a class="acao-menu" :href="INSTAGRAM_DIRECT" target="_blank" rel="noopener" @click="fecharMenu">
          <SvgIcone nome="instagram" :tamanho="18" />
          <span>Agendar pelo Direct</span>
        </a>
      </div>

      <NuxtLink class="logo" to="/#inicio" @click="fecharMenu">
        <img src="/logo.png" alt="Patas Felizes Pet Shop" width="240" height="240" draggable="false" />
      </NuxtLink>

      <a class="acao-nav" :href="INSTAGRAM_DIRECT" target="_blank" rel="noopener">
        <SvgIcone nome="instagram" :tamanho="16" />
        <span>Agendar</span>
      </a>

      <button class="menu" :aria-expanded="aberto" :aria-label="aberto ? 'Fechar menu' : 'Abrir menu'" @click="alternarMenu">
        <span class="traco"></span>
        <span class="traco"></span>
        <span class="traco"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { INSTAGRAM_DIRECT } from '~/utils/links'

const LINKS_ESQUERDA = [
  { rotulo: 'Inicio', destino: '/#inicio' },
  { rotulo: 'Serviços', destino: '/#servicos' }
]

const LINKS_DIREITA = [
  { rotulo: 'Agendamento', destino: '/#agendamento' },
  { rotulo: 'Contatos', destino: '/#contatos' }
]

const aberto = ref(false)
const flutuante = ref(false)

// Passa a flutuar so depois que o topo do hero saiu de cena. Antes disso a nav
// e transparente sobre a arte, que e como ela foi desenhada.
const LIMITE = 300

function aoRolar() {
  flutuante.value = window.scrollY > LIMITE
}

onMounted(() => {
  aoRolar()
  window.addEventListener('scroll', aoRolar, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', aoRolar)
})

function alternarMenu() {
  aberto.value = !aberto.value
}

function fecharMenu() {
  aberto.value = false
}

watch(aberto, (valor) => {
  document.body.classList.toggle('bloquear', valor)
})

onUnmounted(() => {
  document.body.classList.remove('bloquear')
})
</script>

<style scoped lang="sass">
nav
  position: absolute
  top: 0
  left: 0
  z-index: 10
  display: flex
  align-items: flex-start
  justify-content: center
  width: 100%
  padding: 14px var(--gutter) 0
  transition: padding 0.35s ease, background-color 0.35s ease, box-shadow 0.35s ease

// A nav so posiciona; quem vira a barra flutuante e o .conteudo, para
// que ela fique destacada das bordas em vez de colada no topo.
nav.flutuante
  position: fixed
  align-items: center
  padding: 14px var(--gutter)

// position muda de uma vez, entao a entrada precisa de keyframe e nao transition.
// 'backwards' faz o elemento segurar o estado inicial durante o delay, sem
// precisar de um estado escondido separado no CSS.
@keyframes montarBarra
  from
    opacity: 0
    transform: translateY(-16px) scale(0.97)
  to
    opacity: 1
    transform: translateY(0) scale(1)

@keyframes surgir
  from
    opacity: 0
    transform: translateY(-8px)
  to
    opacity: 1
    transform: translateY(0)

// lista vertical le melhor entrando pela lateral que por cima
@keyframes entrarItem
  from
    opacity: 0
    transform: translateX(-18px)
  to
    opacity: 1
    transform: translateX(0)

// quem pediu menos movimento no sistema recebe tudo ja montado
@media (prefers-reduced-motion: reduce)
  nav.flutuante .conteudo,
  nav.flutuante .logo,
  nav.flutuante .links a,
.links a:visited,
  nav.flutuante .acao-nav,
  nav.aberto .links a,
.links a:visited,
  nav.aberto .acao-menu
    animation: none

// Logo a esquerda, links no centro sem container, CTA a direita.
// A barra entra deslizando de cima, entao a troca de layout ocorre fora da tela.
nav.flutuante .conteudo
  justify-content: space-between
  padding: 10px 12px 10px 20px
  border-radius: 16px
  background-color: var(--cor-creme)
  box-shadow: 0 12px 36px rgba(61, 42, 22, 0.13)
  animation: montarBarra 0.45s ease backwards

// a barra chega primeiro, o conteudo entra em cascata dentro dela
nav.flutuante .logo
  animation: surgir 0.3s ease 0.16s backwards

nav.flutuante .links a,
.links a:visited
  animation: surgir 0.3s ease backwards

nav.flutuante .links.esquerda a:nth-child(1)
  animation-delay: 0.22s

nav.flutuante .links.esquerda a:nth-child(2)
  animation-delay: 0.28s

nav.flutuante .links.direita a:nth-child(1)
  animation-delay: 0.34s

nav.flutuante .links.direita a:nth-child(2)
  animation-delay: 0.4s

nav.flutuante .acao-nav
  animation: surgir 0.3s ease 0.48s backwards

nav.flutuante .logo
  order: 1

nav.flutuante .logo img
  width: 50px

// flex: 1 empurra logo e CTA para as pontas e centraliza os links no vao
nav.flutuante .navegacao
  order: 2
  flex: 1
  display: flex
  align-items: center
  justify-content: center
  gap: 38px

nav.flutuante .links
  flex: initial
  gap: 38px

nav.flutuante .links a,
.links a:visited
  font-size: var(--f2)

nav.flutuante .acao-nav
  order: 3
  display: flex

.acao-nav
  display: none
  align-items: center
  justify-content: center
  gap: 9px
  padding: 12px 24px
  border-radius: 12px
  background-color: var(--cor-laranja)
  font-family: var(--bold)
  font-size: var(--f2)
  color: var(--cor-branco)
  transition: all 0.4s

.acao-nav:hover
  background-color: var(--cor-marrom)

.conteudo
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  max-width: var(--largura)

// No desktop o wrapper some do layout e os dois grupos viram
// irmãos diretos do logo, permitindo o logo ficar no centro.
.navegacao
  display: contents

.links
  display: flex
  flex: 1
  align-items: center
  justify-content: center
  gap: 50px

.links.esquerda
  order: 1

.links.direita
  order: 3

.links a,
.links a:visited
  font-family: var(--light)
  font-size: var(--f3)
  color: var(--cor-marrom)
  transition: color 0.3s

.links a,
.links a:visited:hover
  color: var(--cor-laranja-escuro)

.logo
  display: flex
  flex-shrink: 0
  order: 2

.logo img
  width: clamp(70px, 7vw, 110px)
  height: auto

.enfeites-menu,
.acao-menu
  display: none

.menu
  position: relative
  display: none
  order: 4
  width: 44px
  height: 44px
  background-color: transparent
  color: var(--cor-marrom)

// Tres tracos que viram X. Nao da para animar a troca entre dois SVGs;
// com transforms o movimento e continuo e roda no compositor.
.traco
  position: absolute
  left: 8px
  width: 28px
  height: 2px
  border-radius: 2px
  background-color: currentColor
  // fechando: desgira primeiro, so entao os tracos se separam
  transition: top 0.25s ease 0.25s, transform 0.25s ease, opacity 0.2s ease

.traco:nth-child(1)
  top: 12px

.traco:nth-child(2)
  top: 21px

.traco:nth-child(3)
  top: 30px

// abrindo: os tracos se juntam primeiro, so entao giram
nav.aberto .traco
  transition: top 0.25s ease, transform 0.25s ease 0.25s, opacity 0.2s ease

nav.aberto .traco:nth-child(1)
  top: 21px
  transform: rotate(45deg)

nav.aberto .traco:nth-child(2)
  opacity: 0
  transform: scaleX(0)

nav.aberto .traco:nth-child(3)
  top: 21px
  transform: rotate(-45deg)

@media screen and (max-height: 820px) and (min-width: 1001px)
  nav
    padding: 8px var(--gutter) 0

  .logo img
    width: 78px

@media screen and (max-width: 1000px)
  nav
    padding: 10px var(--gutter) 0

  .conteudo
    position: relative
    justify-content: space-between

  // Painel de tela cheia. O dropdown curto deixava a pagina aparecendo logo
  // abaixo dos links, competindo com o menu.
  .navegacao
    position: fixed
    top: 0
    left: 0
    z-index: -1
    display: flex
    flex-direction: column
    justify-content: center
    width: 100%
    height: 100dvh
    padding: 100px var(--gutter) 44px
    overflow: hidden
    background-color: var(--cor-creme)
    opacity: 0
    // sem isso os links do menu fechado continuam tabaveis
    visibility: hidden
    transform: translateY(-10px)
    transition: opacity 0.35s, visibility 0.35s, transform 0.35s

  nav.aberto .navegacao
    opacity: 1
    visibility: visible
    transform: translateY(0)

  // itens entram em cascata depois do painel, nao junto com ele
  nav.aberto .links a,
.links a:visited,
  nav.aberto .acao-menu
    animation: entrarItem 0.4s ease backwards

  nav.aberto .links.esquerda a:nth-child(1)
    animation-delay: 0.14s

  nav.aberto .links.esquerda a:nth-child(2)
    animation-delay: 0.2s

  nav.aberto .links.direita a:nth-child(1)
    animation-delay: 0.26s

  nav.aberto .links.direita a:nth-child(2)
    animation-delay: 0.32s

  nav.aberto .acao-menu
    animation-delay: 0.4s

  // com o painel cobrindo a tela, a barra flutuante atras dele vira ruido
  nav.flutuante.aberto .conteudo
    background-color: transparent
    box-shadow: none

  .enfeites-menu
    position: absolute
    top: 0
    left: 0
    display: block
    width: 100%
    height: 100%
    pointer-events: none

  .enfeite-menu
    position: absolute
    color: var(--cor-laranja)
    opacity: 0.1

  .enfeite-menu.pata
    top: 14%
    right: -9%
    transform: rotate(18deg)

  .enfeite-menu.osso
    bottom: 16%
    left: -7%
    transform: rotate(-24deg)

  .links
    position: relative
    flex: initial
    flex-direction: column
    align-items: stretch
    gap: 0
    width: 100%

  .links a,
.links a:visited
    display: flex
    align-items: center
    padding: 22px 2px
    border-bottom: 1px solid rgba(61, 42, 22, 0.1)
    font-family: var(--bold)
    font-size: var(--f5)
    color: var(--cor-marrom)

  .links.direita a:last-child
    border-bottom: 0

  // os order do desktop (.links 1 e 3) valem aqui dentro tambem;
  // sem este, o botao com order 0 subia para antes dos links
  .acao-menu
    order: 5
    position: relative
    display: flex
    align-items: center
    justify-content: center
    gap: 10px
    margin-top: 36px
    padding: 17px 30px
    border-radius: 12px
    background-color: var(--cor-laranja)
    font-family: var(--bold)
    font-size: var(--f3)
    color: var(--cor-branco)
    transition: all 0.4s

  .acao-menu:hover
    background-color: var(--cor-marrom)

  .logo img
    width: 70px

  .acao-nav,
  nav.flutuante .acao-nav
    display: none

  nav.flutuante .conteudo
    padding: 6px 4px 6px 8px
    border-radius: 14px

  .menu
    display: flex
</style>
