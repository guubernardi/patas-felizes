<template>
  <footer>
    <div class="enfeites" aria-hidden="true">
      <SvgIcone class="enfeite pata-um" nome="pata" :tamanho="150" />
      <SvgIcone class="enfeite osso-um" nome="osso" :tamanho="95" />
    </div>

    <div class="conteudo">
      <div class="topo">
        <div class="marca">
          <NuxtLink class="selo" to="/#inicio">
            <img src="/logo.png" alt="Patas Felizes Pet Shop" width="240" height="240" draggable="false" />
          </NuxtLink>

          <p>Banho, tosa e cuidado para o seu pet, no Shopping Morumbi.</p>

          <a class="acao" :href="INSTAGRAM_DIRECT" target="_blank" rel="noopener">
            <SvgIcone nome="instagram" :tamanho="18" />
            <span>Agendar pelo Direct</span>
          </a>
        </div>

        <nav class="coluna">
          <h2>Navegação</h2>
          <NuxtLink v-for="link in NAVEGACAO" :key="link.destino" :to="link.destino">{{ link.rotulo }}</NuxtLink>
        </nav>

        <div class="coluna">
          <h2>Onde estamos</h2>
          <p>Shopping Morumbi, Piso 2</p>
          <p>Av. Roque Petroni Júnior, 1089</p>
          <p>Jardim das Acácias, São Paulo, SP</p>
          <p class="horario">Segunda a sábado, das 10h às 20h</p>
        </div>
      </div>

      <div class="base">
        <p>© {{ ano }} Patas Felizes Pet Shop. Todos os direitos reservados.</p>

        <div class="legais">
          <NuxtLink to="/documentos/politicas">Política de privacidade</NuxtLink>
        </div>

        <a class="assinatura" :href="SITE_DESENVOLVEDOR" target="_blank" rel="noopener">
          Desenvolvido por
          <img src="/gustavo-bernardi.webp" alt="" width="120" height="130" draggable="false" />
          <span>Gustavo Bernardi</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { INSTAGRAM_DIRECT, SITE_DESENVOLVEDOR } from '~/utils/links'

const NAVEGACAO = [
  { rotulo: 'Inicio', destino: '/#inicio' },
  { rotulo: 'Serviços', destino: '/#servicos' },
  { rotulo: 'Agendamento', destino: '/#agendamento' },
  { rotulo: 'Contatos', destino: '/#contatos' }
]

const ano = new Date().getFullYear()
</script>

<style scoped lang="sass">
footer
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 90px var(--gutter) 40px
  overflow: hidden
  background-color: var(--cor-marrom)

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
  opacity: 0.05

.pata-um
  top: 14%
  left: 3%
  transform: rotate(-18deg)

.osso-um
  right: 4%
  bottom: 22%
  transform: rotate(24deg)

.conteudo
  position: relative
  z-index: 1
  display: flex
  flex-direction: column
  width: 100%
  max-width: var(--largura)

.topo
  display: grid
  grid-template-columns: 1.5fr 1fr 1.4fr
  gap: 60px
  padding-bottom: 50px

.marca
  display: flex
  flex-direction: column
  align-items: flex-start

// o logo tem fundo transparente e tracos escuros; sobre o marrom ele sumiria
.selo
  display: flex
  align-items: center
  justify-content: center
  width: 96px
  height: 96px
  margin-bottom: 22px
  border-radius: 50%
  background-color: var(--cor-creme)

.selo img
  display: block
  width: 74px
  height: auto

.marca > p
  max-width: 320px
  margin-bottom: 28px
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.6
  color: rgba(255, 255, 255, 0.7)

.acao
  display: flex
  align-items: center
  justify-content: center
  gap: 10px
  padding: 15px 30px
  border-radius: 12px
  background-color: var(--cor-laranja)
  font-family: var(--bold)
  font-size: var(--f2)
  color: var(--cor-branco)
  transition: all 0.4s

.acao:hover
  background-color: var(--cor-creme)
  color: var(--cor-marrom)

.coluna
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 12px

.coluna h2
  margin-bottom: 8px
  font-family: var(--bold)
  font-size: var(--f2)
  letter-spacing: 1.5px
  text-transform: uppercase
  color: var(--cor-laranja)

.coluna a,
.coluna p
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.5
  color: rgba(255, 255, 255, 0.75)

.coluna a
  transition: all 0.4s

.coluna a:hover
  color: var(--cor-laranja)

.horario
  margin-top: 8px

.base
  display: flex
  align-items: center
  justify-content: space-between
  gap: 20px
  padding-top: 30px
  border-top: 1px solid rgba(255, 255, 255, 0.12)

.base p
  font-family: var(--light)
  font-size: var(--f2)
  color: rgba(255, 255, 255, 0.5)

.legais
  display: flex
  align-items: center
  gap: 26px

.legais a
  font-family: var(--light)
  font-size: var(--f2)
  color: rgba(255, 255, 255, 0.5)
  transition: all 0.4s

.legais a:hover
  color: var(--cor-laranja)

// o monograma e branco sobre transparente, entao dispensa selo no fundo escuro
.assinatura
  display: flex
  align-items: center
  gap: 8px
  font-family: var(--light)
  font-size: var(--f2)
  color: rgba(255, 255, 255, 0.5)
  transition: all 0.4s

.assinatura img
  display: block
  width: auto
  height: 22px
  opacity: 0.6
  transition: all 0.4s

.assinatura span
  color: rgba(255, 255, 255, 0.7)

.assinatura:hover
  color: var(--cor-laranja)

.assinatura:hover img
  opacity: 1

.assinatura:hover span
  color: var(--cor-laranja)

@media screen and (max-width: 1000px)
  footer
    padding: 60px var(--gutter) 30px

  .pata-um
    top: 4%
    left: -8%

  .osso-um
    right: -6%
    bottom: 8%

  .topo
    grid-template-columns: 1fr
    gap: 40px
    padding-bottom: 34px

  .selo
    width: 80px
    height: 80px
    margin-bottom: 18px

  .selo img
    width: 62px

  .marca > p
    margin-bottom: 22px
    font-size: var(--f2)

  .acao
    width: 100%

  .coluna a,
  .coluna p
    font-size: var(--f2)

  .base
    flex-direction: column
    align-items: flex-start
    gap: 14px

  .assinatura img
    height: 20px

  .legais
    flex-wrap: wrap
    gap: 18px
</style>
