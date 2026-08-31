<template>
  <section id="espaco" class="espaco">
    <div class="enfeites" aria-hidden="true">
      <SvgIcone class="enfeite pata-um" nome="pata" :tamanho="135" />
      <SvgIcone class="enfeite osso-um" nome="osso" :tamanho="88" />
    </div>

    <div class="conteudo">
      <span v-revelar class="etiqueta">
        <SvgIcone nome="pata" :tamanho="15" />
        Nosso espaço
      </span>

      <h2 v-revelar="0.08">Conheça a loja por dentro</h2>

      <p v-revelar="0.14" class="chamada">
        Banheira de inox, secador profissional, área de espera e prateleiras com produtos para levar na hora. Tudo à vista de quem passa pelo shopping.
      </p>

      <div class="galeria">
        <figure v-for="(foto, indice) in FOTOS" :key="foto.arquivo" v-revelar="0.2 + indice * 0.08" class="foto">
          <picture>
            <source :srcset="`/${foto.arquivo}.webp`" type="image/webp" />
            <img :src="`/${foto.arquivo}.jpeg`" :alt="foto.alt" width="1024" height="1024" loading="lazy" decoding="async" draggable="false" />
          </picture>
        </figure>
      </div>
    </div>

    <ElementosOnda cor="var(--cor-marrom)" />
  </section>
</template>

<script setup>
const FOTOS = [
  {
    arquivo: 'espaco-1',
    alt: 'Interior da loja Patas Felizes, com banheira de inox, secador profissional e prateleiras de produtos'
  },
  {
    arquivo: 'espaco-2',
    alt: 'Outro ângulo da loja Patas Felizes, mostrando a área de espera com canis e a vitrine para o shopping'
  }
]
</script>

<style lang="sass" scoped>
.espaco
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 120px var(--gutter) 190px
  overflow: hidden
  background-color: var(--cor-creme-escuro)

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
  opacity: 0.14

.pata-um
  top: 7%
  left: 2%
  transform: rotate(-16deg)

.osso-um
  right: 3%
  bottom: 22%
  transform: rotate(26deg)

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
  background-color: rgba(61, 42, 22, 0.1)
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

.chamada
  max-width: 640px
  margin-bottom: 60px
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.65
  color: var(--cor-marrom)
  text-align: center

// duas colunas: as fotos sao do mesmo comodo em angulos diferentes,
// entao lado a lado elas se completam em vez de repetir
.galeria
  display: grid
  grid-template-columns: repeat(2, 1fr)
  gap: 40px
  width: 100%
  max-width: 1100px

.foto
  position: relative
  border-radius: 28px

// bloco laranja deslocado atras, mesmo tratamento da estrutura e do mapa
.foto::before
  content: ''
  position: absolute
  right: -18px
  bottom: -18px
  z-index: -1
  width: 100%
  height: 100%
  border-radius: 28px
  background-color: var(--cor-laranja)

.foto picture
  position: relative
  display: block
  border-radius: 28px
  overflow: hidden

.foto img
  display: block
  width: 100%
  height: auto
  aspect-ratio: 1
  object-fit: cover

@media screen and (max-width: 1000px)
  .espaco
    padding: 70px var(--gutter) 120px

  .pata-um
    top: 1%
    left: -8%

  .osso-um
    right: -6%
    bottom: 16%

  h2
    font-size: var(--f7)

  .chamada
    margin-bottom: 36px
    font-size: var(--f2)

  .galeria
    grid-template-columns: 1fr
    gap: 30px

  .foto
    border-radius: 22px

  .foto::before
    right: -10px
    bottom: -10px
    border-radius: 22px

  .foto picture
    border-radius: 22px
</style>
