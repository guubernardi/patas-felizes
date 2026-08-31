<template>
  <section id="agendamento" class="agendamento">
    <div class="enfeites" aria-hidden="true">
      <SvgIcone class="enfeite pata-um" nome="pata" :tamanho="130" />
      <SvgIcone class="enfeite osso-um" nome="osso" :tamanho="90" />
      <SvgIcone class="enfeite coracao-um" nome="coracao" :tamanho="55" />
    </div>

    <div class="conteudo">
      <span v-revelar class="etiqueta">
        <SvgIcone nome="pata" :tamanho="15" />
        Agendamento
      </span>

      <h2 v-revelar="0.08">Vamos marcar o banho do <span>seu pet?</span></h2>

      <p v-revelar="0.14" class="chamada">O agendamento é pelo Direct do Instagram. Resposta rápida, sem formulário e sem espera.</p>

      <ol ref="listaPassos" class="passos" :class="{ pronto, animar }">
        <li v-for="(passo, indice) in PASSOS" :key="passo.titulo" class="passo">
          <span class="numero">{{ indice + 1 }}</span>
          <h3>{{ passo.titulo }}</h3>
          <p>{{ passo.texto }}</p>
        </li>
      </ol>

      <a class="acao" :href="INSTAGRAM_DIRECT" target="_blank" rel="noopener">
        <SvgIcone nome="instagram" :tamanho="20" />
        <span>Chamar no Direct</span>
      </a>

      <span class="aviso">Abre a conversa direto com a gente no Instagram</span>
    </div>

    <ElementosOnda cor="var(--cor-creme)" />
  </section>
</template>

<script setup>
import { INSTAGRAM_DIRECT } from '~/utils/links'

const listaPassos = ref(null)
// 'pronto' so entra via JS: sem ele o CSS ja renderiza o timeline completo,
// entao quem estiver sem JS ve o conteudo final em vez de um bloco invisivel.
const pronto = ref(false)
const animar = ref(false)

onMounted(() => {
  if (!listaPassos.value) return

  const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (semMovimento) return

  pronto.value = true

  // em loop o observer nao desconecta: ele liga e desliga o ciclo conforme a
  // section entra e sai da tela, para nao animar fora de vista
  const observador = new IntersectionObserver(
    (entradas) => {
      animar.value = entradas[0].isIntersecting
    },
    { threshold: 0.2 }
  )

  observador.observe(listaPassos.value)
  onUnmounted(() => observador.disconnect())
})

const PASSOS = [
  {
    titulo: 'Chame no Direct',
    texto: 'Toque no botão e a conversa com a gente abre no Instagram.'
  },
  {
    titulo: 'Combine o horário',
    texto: 'A gente confirma a disponibilidade e alinha o serviço que o seu pet precisa.'
  },
  {
    titulo: 'Traga seu pet',
    texto: 'É só aparecer no dia e no horário combinados. O resto é com a gente.'
  }
]
</script>

<style lang="sass" scoped>
.agendamento
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 120px var(--gutter) 180px
  overflow: hidden
  background-color: var(--cor-laranja)

.enfeites
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  pointer-events: none

.enfeite
  position: absolute
  color: var(--cor-branco)
  opacity: 0.14

.pata-um
  top: 9%
  left: 4%
  transform: rotate(-16deg)

.osso-um
  right: 5%
  bottom: 10%
  transform: rotate(26deg)

.coracao-um
  top: 12%
  right: 12%
  transform: rotate(10deg)

.conteudo
  position: relative
  z-index: 1
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  max-width: var(--largura)

.etiqueta
  display: flex
  align-items: center
  gap: 9px
  margin-bottom: 20px
  padding: 9px 20px
  border-radius: 50px
  background-color: rgba(61, 42, 22, 0.13)
  font-family: var(--bold)
  font-size: var(--f2)
  letter-spacing: 1.5px
  text-transform: uppercase
  color: var(--cor-marrom)

h2
  max-width: 620px
  margin-bottom: 16px
  font-family: var(--extrabold)
  font-size: var(--f9)
  line-height: 1.3
  color: var(--cor-marrom)
  text-align: center

// impede que "pet?" caia sozinho na segunda linha
h2 span
  white-space: nowrap

.chamada
  max-width: 560px
  margin-bottom: 60px
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.6
  color: var(--cor-marrom)
  text-align: center

// sem cartao: a section de servicos ja usa cartao creme sobre laranja
.passos
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 44px
  width: 100%
  max-width: 1000px
  margin-bottom: 56px
  list-style: none

.passo
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  text-align: center

// Timeline: ::before e o trilho, ::after e o preenchimento que anima.
// Vao do centro deste circulo ate o centro do proximo, atravessando o gap.
.passo:not(:last-child)::before,
.passo:not(:last-child)::after
  content: ''
  position: absolute
  top: 26px
  left: calc(50% + 27px)
  height: 2px

.passo:not(:last-child)::before
  right: calc(-50% - 17px)
  background-color: rgba(61, 42, 22, 0.16)

.passo:not(:last-child)::after
  width: calc(100% - 10px)
  background-color: var(--cor-marrom)

// Ciclo de 6s: preenche, segura a maior parte do tempo, recolhe e repete.
// O tempo parado e de proposito, para a section nao ficar piscando.
@keyframes preencheLinha
  0%
    width: 0
  10%
    width: calc(100% - 10px)
  86%
    width: calc(100% - 10px)
  96%, 100%
    width: 0

@keyframes surgeNumero
  0%
    opacity: 0
    transform: scale(0.55)
  8%, 86%
    opacity: 1
    transform: scale(1)
  96%, 100%
    opacity: 0
    transform: scale(0.55)

.passos.pronto .passo:not(:last-child)::after
  width: 0

.passos.pronto.animar .passo:not(:last-child)::after
  animation: preencheLinha 6s ease-in-out infinite

.passos.pronto.animar .passo:nth-child(1)::after
  animation-delay: 0.35s

.passos.pronto.animar .passo:nth-child(2)::after
  animation-delay: 1.2s

.numero
  display: flex
  align-items: center
  justify-content: center
  width: 54px
  height: 54px
  margin-bottom: 18px
  position: relative
  z-index: 1
  border-radius: 50%
  background-color: var(--cor-creme)
  box-shadow: 0 0 0 9px rgba(249, 233, 218, 0.22)
  font-family: var(--extrabold)
  font-size: var(--f4)
  color: var(--cor-marrom)

.passos.pronto .numero
  transform: scale(0.55)
  opacity: 0

.passos.pronto.animar .numero
  animation: surgeNumero 6s ease-in-out infinite

.passos.pronto.animar .passo:nth-child(2) .numero
  animation-delay: 0.85s

.passos.pronto.animar .passo:nth-child(3) .numero
  animation-delay: 1.7s

.passo h3
  margin-bottom: 8px
  font-family: var(--bold)
  font-size: var(--f4)
  color: var(--cor-marrom)

.passo p
  max-width: 280px
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.55
  color: var(--cor-marrom)

// marrom e a cor de acao do site (destino do hover nas outras sections);
// branco era a unica cor fria numa paleta toda quente
.acao
  display: flex
  align-items: center
  justify-content: center
  gap: 12px
  padding: 18px 52px
  border-radius: 12px
  background-color: var(--cor-marrom)
  font-family: var(--bold)
  font-size: var(--f3)
  color: var(--cor-branco)
  transition: all 0.4s

.acao:hover
  background-color: var(--cor-creme)
  color: var(--cor-marrom)

.aviso
  margin-top: 14px
  font-family: var(--light)
  font-size: var(--f2)
  color: var(--cor-marrom)

@media screen and (max-width: 1000px)
  .agendamento
    padding: 70px var(--gutter) 110px

  .coracao-um
    display: none

  .pata-um
    top: 2%
    left: -7%

  .osso-um
    right: -5%
    bottom: 3%

  h2
    font-size: var(--f7)

  .chamada
    margin-bottom: 40px
    font-size: var(--f2)

  .passos
    grid-template-columns: 1fr
    gap: 30px
    margin-bottom: 36px

  // Circulo a esquerda, texto a direita. Centralizado, a linha vertical
  // atravessaria as palavras; na lateral ela corre livre.
  .passo
    display: grid
    grid-template-columns: 46px 1fr
    align-items: start
    column-gap: 16px
    text-align: left

  .numero
    grid-column: 1
    grid-row: 1 / span 2
    margin-bottom: 0

  .passo h3
    grid-column: 2
    align-self: center

  .passo p
    grid-column: 2
    max-width: none

  .passo:not(:last-child)::before,
  .passo:not(:last-child)::after
    top: 46px
    right: auto
    bottom: -30px
    left: 22px
    width: 2px
    height: auto
    transform: none

  @keyframes preencheLinhaVertical
    0%
      height: 0
    10%
      height: calc(100% - 16px)
    86%
      height: calc(100% - 16px)
    96%, 100%
      height: 0

  .passo:not(:last-child)::after
    bottom: auto
    height: 0

  .passos.pronto .passo:not(:last-child)::after
    width: 2px
    height: 0

  .passos.pronto.animar .passo:not(:last-child)::after
    width: 2px
    animation: preencheLinhaVertical 6s ease-in-out infinite

  .numero
    width: 46px
    height: 46px
    margin-bottom: 12px

  .acao
    width: 100%
    padding: 16px 30px
</style>
