<template>
  <section id="inicio" class="hero">
    <picture class="arte">
      <source media="(max-width: 1000px)" srcset="/patas-felizes-mobile.webp" type="image/webp" width="1100" height="519" />
      <source srcset="/patas-felizes.webp" type="image/webp" />
      <img src="/patas-felizes.png" alt="Cães e gatos felizes apoiados em uma faixa laranja" width="1535" height="1024" fetchpriority="high" draggable="false" />
    </picture>

    <div class="enfeites" aria-hidden="true">
      <SvgIcone class="enfeite pata-um" nome="pata" :tamanho="120" />
      <SvgIcone class="enfeite osso-um" nome="osso" :tamanho="80" />
      <SvgIcone class="enfeite coracao-um" nome="coracao" :tamanho="46" />
      <SvgIcone class="enfeite pata-dois" nome="pata" :tamanho="64" />
    </div>

    <div class="conteudo">
      <h1>Bem-vindo ao <span>Patas Felizes</span></h1>

      <p>No nosso PetShop, <span>a saúde e o bem-estar</span> dos seus companheiros de quatro patas são a nossa prioridade.</p>

      <a class="agendar" :href="INSTAGRAM_PERFIL" target="_blank" rel="noopener">
        <SvgIcone nome="instagram" :tamanho="20" />
        <span>Agendar</span>
      </a>

    </div>

    <div class="prova">
      <div class="avatares">
        <img v-for="pet in PETS" :key="pet" :src="`/pets/${pet}.webp`" alt="" width="112" height="112" draggable="false" />
      </div>
      <p>Mais de <strong>{{ TOTAL_CLIENTES }}</strong> confiaram no nosso trabalho</p>
    </div>
  </section>
</template>

<script setup>
import { INSTAGRAM_PERFIL } from '~/utils/links'

// recortados da propria arte do hero (public/patas-felizes.png)
const PETS = ['gato-um', 'cachorro-um', 'cachorro-dois', 'pug', 'golden', 'gato-dois']

const TOTAL_CLIENTES = '5 mil clientes'

useHead({
  link: [
    { rel: 'preload', as: 'image', href: '/patas-felizes.webp', type: 'image/webp', media: '(min-width: 1001px)', fetchpriority: 'high' },
    { rel: 'preload', as: 'image', href: '/patas-felizes-mobile.webp', type: 'image/webp', media: '(max-width: 1000px)', fetchpriority: 'high' }
  ]
})
</script>

<style lang="sass" scoped>
.hero
  position: relative
  display: flex
  width: 100%
  height: 100vh
  height: 100dvh
  overflow: hidden
  background-color: var(--cor-creme)

.arte
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%

// inline, a img se apoia na linha de base e sobra o vao do descendente embaixo
.arte img
  display: block
  width: 100%
  height: 100%
  object-fit: cover
  object-position: center

// Caixa da area creme da arte, entre a nav e a linha dos pets.
// Centralizar aqui mantem o bloco no mesmo ponto em qualquer largura.
.conteudo
  position: absolute
  top: 140px
  right: 0
  bottom: 52%
  left: 0
  z-index: 1
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  gap: 20px
  width: 100%
  max-width: var(--largura)
  margin: 0 auto
  padding: 0 var(--gutter)
  text-align: center

h1
  font-family: var(--light)
  font-size: var(--f10)
  line-height: 1.2
  color: var(--cor-marrom)

h1 span
  font-family: var(--extrabold)
  // sem isso "Felizes" cai sozinha na segunda linha no mobile
  white-space: nowrap

.enfeites
  display: none

p
  max-width: 480px
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.6
  color: var(--cor-marrom-claro)

p span
  font-family: var(--bold)
  color: var(--cor-marrom)

.agendar
  display: flex
  align-items: center
  justify-content: center
  gap: 12px
  margin-top: 10px
  padding: 16px 70px
  border-radius: 12px
  background-color: var(--cor-laranja)
  font-family: var(--bold)
  font-size: var(--f3)
  color: var(--cor-branco)
  transition: all 0.4s

.agendar:hover
  background-color: var(--cor-marrom)

// no canto ela pode cair sobre pelo do cachorro ou sobre a faixa laranja,
// dependendo do recorte da arte. A pilula garante leitura nos dois casos
.prova
  position: absolute
  bottom: 34px
  left: var(--gutter)
  z-index: 2
  display: flex
  align-items: center
  gap: 14px
  padding: 10px 20px 10px 12px
  border-radius: 50px
  background-color: rgba(249, 233, 218, 0.82)
  backdrop-filter: blur(8px)

.avatares
  display: flex
  align-items: center

.avatares img
  width: 44px
  height: 44px
  border: 3px solid var(--cor-creme)
  border-radius: 50%
  object-fit: cover

.avatares img + img
  margin-left: -14px

.prova p
  font-family: var(--light)
  font-size: var(--f2)
  color: var(--cor-marrom-claro)

.prova strong
  font-family: var(--bold)
  color: var(--cor-marrom)

// A caixa do conteudo e uma fatia da altura da viewport. Em telas baixas ela
// encolhe, mas o texto nao, e o bloco vazava no logo em cima e nos pets embaixo.
// Nao da pra crescer a caixa (invade a linha dos pets), entao encolhe o conteudo.
@media screen and (max-height: 820px) and (min-width: 1001px)
  .conteudo
    top: 120px
    gap: 12px

  h1
    font-size: var(--f8)

  p
    max-width: 430px
    font-size: var(--f2)

  .agendar
    padding: 13px 56px

@media screen and (max-height: 720px) and (min-width: 1001px)
  .conteudo
    top: 96px
    gap: 9px

  h1
    font-size: var(--f7)

  p
    font-size: var(--f2)
    line-height: 1.5

  .agendar
    padding: 11px 48px
    font-size: var(--f2)

  .prova
    gap: 10px

  .avatares img
    width: 32px
    height: 34px
    border-width: 2px

  .avatares img + img
    margin-left: -11px

@media screen and (max-width: 1000px)
  // o recorte mobile corta a faixa decorativa da arte; estes repoem o vazio
  .enfeites
    position: absolute
    top: 0
    left: 0
    display: block
    width: 100%
    height: 100%
    pointer-events: none

  .enfeite
    position: absolute
    color: var(--cor-laranja)
    opacity: 0.13

  .pata-um
    top: 15%
    left: -7%
    transform: rotate(-18deg)

  .osso-um
    top: 22%
    right: -5%
    transform: rotate(24deg)

  // estes dois ficam na faixa entre o botao e a arte, que sem eles fica nua
  .coracao-um
    top: 59%
    left: 10%
    transform: rotate(12deg)

  .pata-dois
    top: 63%
    right: 11%
    transform: rotate(20deg)

  // 100% da largura deixa os 6 pets completos porem minusculos; 150% amplia
  // e apara so os gatos das pontas, mantendo 4 bichos inteiros e legiveis.
  .arte
    top: auto
    bottom: 0
    left: 50%
    width: 150%
    height: auto
    transform: translateX(-50%)

  .arte img
    height: auto
    object-fit: fill

  .conteudo
    top: 100px
    bottom: 275px
    justify-content: center
    gap: 18px

  h1
    font-size: var(--f8)

  .agendar
    padding: 14px 50px

  // sem largura definida a pilula encolhia e o texto empilhava em 5 linhas
  .prova
    right: var(--gutter)
    bottom: 20px
    left: var(--gutter)
    justify-content: center
    gap: 10px
    padding: 10px 16px
    transform: none

  .prova p
    font-size: var(--f2)
    line-height: 1.35

  // 6 carinhas nao cabem junto com a legenda em 390px
  .avatares img:nth-child(n + 5)
    display: none

  .avatares img
    width: 30px
    height: 30px
    border-width: 2px

  .avatares img + img
    margin-left: -10px
</style>
