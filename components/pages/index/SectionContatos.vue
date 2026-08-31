<template>
  <section id="contatos" class="contatos">
    <div class="enfeites" aria-hidden="true">
      <SvgIcone class="enfeite pata-um" nome="pata" :tamanho="130" />
      <SvgIcone class="enfeite osso-um" nome="osso" :tamanho="85" />
    </div>

    <div class="conteudo">
      <div v-revelar class="texto">
        <span class="etiqueta">
          <SvgIcone nome="pata" :tamanho="15" />
          Onde estamos
        </span>

        <h2>Estamos no <span>Shopping Morumbi</span></h2>

        <p class="chamada">Traga seu pet para conhecer a loja. Estacionamento do shopping e acesso coberto.</p>

        <ul class="dados">
          <li v-for="dado in DADOS" :key="dado.titulo" class="dado">
            <div class="icone">
              <SvgIcone :nome="dado.icone" :tamanho="20" />
            </div>

            <div class="descricao">
              <h3>{{ dado.titulo }}</h3>
              <a v-if="dado.link" :href="dado.link" target="_blank" rel="noopener">{{ dado.valor }}</a>
              <span v-else>{{ dado.valor }}</span>
            </div>
          </li>
        </ul>

        <a class="acao" :href="MAPA_ROTA" target="_blank" rel="noopener">
          <SvgIcone nome="localizacao" :tamanho="20" />
          <span>Como chegar</span>
        </a>
      </div>

      <div v-revelar="0.12" class="mapa">
        <iframe :src="MAPA_EMBED" title="Mapa da localizacao do Patas Felizes no Shopping Morumbi" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>
    </div>

    <ElementosOnda cor="var(--cor-marrom)" />
  </section>
</template>

<script setup>
import { MAPA_EMBED, MAPA_ROTA, INSTAGRAM_PERFIL } from '~/utils/links'

const DADOS = [
  {
    icone: 'localizacao',
    titulo: 'Endereço',
    valor: 'Av. Roque Petroni Júnior, 1089, Jardim das Acácias, São Paulo, SP',
    link: null
  },
  {
    icone: 'loja',
    titulo: 'Dentro do shopping',
    valor: 'Piso 2',
    link: null
  },
  {
    icone: 'relogio',
    titulo: 'Horário',
    valor: 'Segunda a sábado, das 10h às 20h',
    link: null
  },
  {
    icone: 'instagram',
    titulo: 'Instagram',
    valor: '@patasfelizesofc',
    link: INSTAGRAM_PERFIL
  }
]
</script>

<style lang="sass" scoped>
.contatos
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 120px var(--gutter) 190px
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
  top: 8%
  left: 2%
  transform: rotate(-16deg)

.osso-um
  right: 3%
  bottom: 9%
  transform: rotate(26deg)

.conteudo
  position: relative
  z-index: 1
  display: grid
  grid-template-columns: 1fr 1fr
  align-items: center
  gap: 80px
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
  margin-bottom: 18px
  font-family: var(--extrabold)
  font-size: var(--f9)
  line-height: 1.25
  color: var(--cor-marrom)

h2 span
  color: var(--cor-laranja)
  white-space: nowrap

.chamada
  max-width: 520px
  margin-bottom: 40px
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.65
  color: var(--cor-marrom-claro)

.dados
  display: flex
  flex-direction: column
  gap: 22px
  margin-bottom: 44px
  list-style: none

.dado
  display: flex
  align-items: flex-start
  gap: 16px

.icone
  display: flex
  flex-shrink: 0
  align-items: center
  justify-content: center
  width: 46px
  height: 46px
  border-radius: 50%
  background-color: var(--cor-laranja)
  box-shadow: 0 0 0 7px rgba(240, 157, 53, 0.14)
  color: var(--cor-branco)

.descricao h3
  margin-bottom: 3px
  font-family: var(--bold)
  font-size: var(--f2)
  letter-spacing: 0.5px
  text-transform: uppercase
  color: var(--cor-laranja-escuro)

.descricao span,
.descricao a
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.5
  color: var(--cor-marrom)

.descricao a
  transition: all 0.4s

.descricao a:hover
  color: var(--cor-laranja-escuro)

.acao
  display: flex
  align-items: center
  justify-content: center
  gap: 12px
  padding: 16px 44px
  border-radius: 12px
  background-color: var(--cor-laranja)
  font-family: var(--bold)
  font-size: var(--f3)
  color: var(--cor-branco)
  transition: all 0.4s

.acao:hover
  background-color: var(--cor-marrom)

.mapa
  position: relative
  width: 100%
  max-width: 620px
  margin-left: auto
  aspect-ratio: 1 / 1
  border-radius: 32px

// bloco laranja deslocado atras, mesmo tratamento da foto da estrutura
.mapa::before
  content: ''
  position: absolute
  right: -22px
  bottom: -22px
  z-index: -1
  width: 100%
  height: 100%
  border-radius: 32px
  background-color: var(--cor-laranja)

.mapa iframe
  display: block
  width: 100%
  height: 100%
  border: 0
  border-radius: 32px

@media screen and (max-width: 1000px)
  .contatos
    padding: 70px var(--gutter) 120px

  .pata-um
    top: 1%
    left: -7%

  .osso-um
    right: -5%
    bottom: 2%

  .conteudo
    grid-template-columns: 1fr
    gap: 44px

  h2
    font-size: var(--f7)

  .chamada
    margin-bottom: 30px
    font-size: var(--f2)

  .dados
    gap: 18px
    margin-bottom: 32px

  .icone
    width: 40px
    height: 40px

  .acao
    width: 100%
    padding: 15px 30px

  .mapa
    max-width: 100%
    margin-left: 0
    aspect-ratio: 4 / 3
    border-radius: 24px

  .mapa::before
    right: -12px
    bottom: -12px
    border-radius: 24px

  .mapa iframe
    border-radius: 24px
</style>
