<template>
  <section id="estrutura" class="estrutura">
    <div class="enfeites" aria-hidden="true">
      <SvgIcone class="enfeite pata-um" nome="pata" :tamanho="130" />
      <SvgIcone class="enfeite osso-um" nome="osso" :tamanho="80" />
      <SvgIcone class="enfeite coracao-um" nome="coracao" :tamanho="50" />
    </div>

    <div class="conteudo">
      <div v-revelar class="texto">
        <span class="etiqueta">
          <SvgIcone nome="pata" :tamanho="15" />
          Nossa estrutura
        </span>

        <h2>Seu pet em <span>boas mãos</span>, do banho ao carinho.</h2>

        <p>Banho e tosa acontecem em estrutura própria, com equipamento profissional e uma equipe que trata cada pet como se fosse de casa.</p>

        <div class="destaques">
          <div v-for="destaque in DESTAQUES" :key="destaque.titulo" class="destaque">
            <div class="icone">
              <SvgIcone :nome="destaque.icone" :tamanho="22" />
            </div>
            <div class="descricao">
              <h3>{{ destaque.titulo }}</h3>
              <p>{{ destaque.texto }}</p>
            </div>
          </div>
        </div>

        <a class="acao" :href="INSTAGRAM_PERFIL" target="_blank" rel="noopener">
          <SvgIcone nome="instagram" :tamanho="20" />
          <span>Ver mais no Instagram</span>
        </a>
      </div>

      <div v-revelar="0.12" class="imagem">
        <picture>
          <source srcset="/equipe-banho.webp" type="image/webp" />
          <img src="/equipe-banho.jpeg" alt="Equipe do Patas Felizes dando banho em um golden retriever na área de banho da loja" width="1024" height="1024" loading="lazy" decoding="async" draggable="false" />
        </picture>
      </div>
    </div>

    <ElementosOnda cor="var(--cor-creme-escuro)" />
  </section>
</template>

<script setup>
import { INSTAGRAM_PERFIL } from '~/utils/links'

const DESTAQUES = [
  {
    icone: 'equipe',
    titulo: 'Equipe treinada',
    texto: 'Profissionais uniformizados e atentos a cada detalhe do atendimento.'
  },
  {
    icone: 'casa',
    titulo: 'Estrutura completa',
    texto: 'Área de banho e tosa própria, com secador profissional e espaço de descanso.'
  }
]
</script>

<style lang="sass" scoped>
.estrutura
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 120px var(--gutter) 180px
  overflow: hidden
  background-color: var(--cor-creme)

.enfeites
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  pointer-events: none

.enfeite
  position: absolute
  color: var(--cor-laranja)
  opacity: 0.12

.pata-um
  top: 6%
  left: 2%
  transform: rotate(-16deg)

.osso-um
  right: 3%
  bottom: 8%
  transform: rotate(28deg)

.coracao-um
  top: 10%
  right: 40%
  transform: rotate(10deg)

.conteudo
  position: relative
  z-index: 1
  display: grid
  grid-template-columns: 1fr 1fr
  align-items: center
  gap: 90px
  width: 100%
  max-width: var(--largura)

.texto
  display: flex
  flex-direction: column
  align-items: flex-start

.etiqueta
  display: flex
  align-items: center
  gap: 9px
  margin-bottom: 20px
  padding: 9px 20px
  border-radius: 50px
  background-color: rgba(240, 157, 53, 0.16)
  font-family: var(--bold)
  font-size: var(--f2)
  letter-spacing: 1.5px
  text-transform: uppercase
  color: var(--cor-laranja-escuro)

h2
  margin-bottom: 24px
  font-family: var(--extrabold)
  font-size: var(--f9)
  line-height: 1.25
  color: var(--cor-marrom)

h2 span
  color: var(--cor-laranja)

.texto > p
  max-width: 560px
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.65
  color: var(--cor-marrom-claro)

.destaques
  display: flex
  flex-direction: column
  gap: 26px
  margin-top: 44px

.destaque
  display: flex
  align-items: flex-start
  gap: 18px

.icone
  display: flex
  flex-shrink: 0
  align-items: center
  justify-content: center
  width: 52px
  height: 52px
  border-radius: 50%
  background-color: var(--cor-laranja)
  box-shadow: 0 0 0 8px rgba(240, 157, 53, 0.14)
  color: var(--cor-branco)

.descricao h3
  margin-bottom: 6px
  font-family: var(--bold)
  font-size: var(--f3)
  color: var(--cor-marrom)

.descricao p
  max-width: 420px
  font-family: var(--light)
  font-size: var(--f2)
  line-height: 1.6
  color: var(--cor-marrom-claro)

.acao
  display: flex
  align-items: center
  justify-content: center
  gap: 12px
  margin-top: 44px
  padding: 16px 44px
  border-radius: 12px
  background-color: var(--cor-laranja)
  font-family: var(--bold)
  font-size: var(--f3)
  color: var(--cor-branco)
  transition: all 0.4s

.acao:hover
  background-color: var(--cor-marrom)

.imagem
  position: relative
  width: 100%
  max-width: 620px
  margin-left: auto

// bloco laranja deslocado atras da foto, dando profundidade sem sombra
.imagem::before
  content: ''
  position: absolute
  right: -22px
  bottom: -22px
  width: 100%
  height: 100%
  border-radius: 32px
  background-color: var(--cor-laranja)

.imagem picture
  position: relative
  display: block
  border-radius: 32px
  overflow: hidden

.imagem img
  display: block
  width: 100%
  height: auto
  aspect-ratio: 1
  object-fit: cover

@media screen and (max-width: 1000px)
  .estrutura
    padding: 70px var(--gutter) 110px

  .coracao-um
    display: none

  .pata-um
    top: 1%
    left: -6%

  .osso-um
    right: -5%
    bottom: 2%

  .conteudo
    grid-template-columns: 1fr
    gap: 50px

  h2
    font-size: var(--f7)

  .destaques
    margin-top: 34px
    gap: 22px

  .acao
    width: 100%
    margin-top: 34px
    padding: 15px 30px

  .icone
    width: 46px
    height: 46px

  .imagem
    max-width: 100%
    margin-left: 0

  .imagem::before
    right: -12px
    bottom: -12px
    border-radius: 24px

  .imagem picture
    border-radius: 24px
</style>
