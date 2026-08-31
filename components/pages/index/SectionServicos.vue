<template>
  <section id="servicos" class="servicos">
    <!-- mesmo vocabulario decorativo da arte do hero, para as duas secoes lerem como um sistema -->
    <div class="enfeites" aria-hidden="true">
      <SvgIcone class="enfeite pata-um" nome="pata" :tamanho="120" />
      <SvgIcone class="enfeite osso-um" nome="osso" :tamanho="95" />
      <SvgIcone class="enfeite coracao-um" nome="coracao" :tamanho="55" />
      <SvgIcone class="enfeite pata-dois" nome="pata" :tamanho="170" />
      <SvgIcone class="enfeite osso-dois" nome="osso" :tamanho="70" />
      <SvgIcone class="enfeite coracao-dois" nome="coracao" :tamanho="40" />
    </div>

    <div class="conteudo">
      <span v-revelar class="etiqueta">
        <SvgIcone nome="pata" :tamanho="15" />
        Nossos serviços
      </span>

      <h2 v-revelar="0.08">Tudo para a saúde e <span>bem-estar</span> do seu pet.</h2>

      <div class="lista">
        <div v-for="(servico, indice) in SERVICOS" :key="servico.nome" v-revelar="0.14 + indice * 0.05" class="servico">
          <div class="icone">
            <SvgIcone :nome="servico.icone" :tamanho="34" />
          </div>
          <h3>{{ servico.nome }}</h3>
        </div>
      </div>
    </div>

    <ElementosOnda cor="var(--cor-creme)" />
  </section>
</template>

<script setup>
const SERVICOS = [
  { nome: 'Banho', icone: 'chuveiro' },
  { nome: 'Tosa', icone: 'tesoura' },
  { nome: 'Tosa higiênica', icone: 'pata' },
  { nome: 'Tratamentos na pelagem', icone: 'gota' },
  { nome: 'Vacinação', icone: 'seringa' },
  { nome: 'Farmácia veterinária', icone: 'cruz-medica' },
  { nome: 'Adestramento', icone: 'apito' },
  { nome: 'Vendas de produtos', icone: 'sacola' }
]
</script>

<style lang="sass" scoped>
.servicos
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 100px var(--gutter) 170px
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
  top: 8%
  left: 4%
  transform: rotate(-18deg)

.osso-um
  top: 14%
  right: 6%
  transform: rotate(24deg)

.coracao-um
  top: 16%
  left: 13%
  transform: rotate(12deg)

.pata-dois
  right: 1%
  bottom: 6%
  transform: rotate(14deg)

.osso-dois
  bottom: 3%
  left: 6%
  transform: rotate(-32deg)

.coracao-dois
  top: 6%
  right: 26%
  transform: rotate(-10deg)

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
  max-width: 520px
  margin-bottom: 70px
  font-family: var(--extrabold)
  font-size: var(--f9)
  line-height: 1.3
  color: var(--cor-marrom)
  text-align: center

// o hifen de "bem-estar" e ponto de quebra natural e partia a palavra
h2 span
  white-space: nowrap

// 4 colunas fecham as 8 em 2 linhas cheias, sem linha orfa
.lista
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 30px
  width: 100%

.servico
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  gap: 22px
  min-height: 260px
  padding: 44px 24px
  border-radius: 24px
  background-color: var(--cor-creme)
  transition: all 0.4s

.icone
  display: flex
  flex-shrink: 0
  align-items: center
  justify-content: center
  width: 72px
  height: 72px
  border-radius: 50%
  background-color: var(--cor-laranja)
  box-shadow: 0 0 0 9px rgba(240, 157, 53, 0.14)
  color: var(--cor-branco)
  transition: all 0.4s

h3
  font-family: var(--bold)
  font-size: var(--f3)
  line-height: 1.35
  color: var(--cor-marrom)
  text-align: center

.servico:hover
  background-color: var(--cor-branco)

.servico:hover .icone
  background-color: var(--cor-marrom)
  box-shadow: 0 0 0 9px rgba(61, 42, 22, 0.12)

@media screen and (max-width: 1000px)
  .servicos
    padding: 60px var(--gutter) 100px

  // no estreito os enfeites brigam com os cards; sobram os dos cantos
  .coracao-um,
  .coracao-dois,
  .osso-dois
    display: none

  .pata-um
    top: 2%
    left: -4%

  .osso-um
    top: 4%
    right: -3%

  .pata-dois
    right: -8%
    bottom: 2%

  .etiqueta
    margin-bottom: 16px

  h2
    max-width: 340px
    margin-bottom: 40px
    font-size: var(--f7)

  .lista
    grid-template-columns: repeat(2, 1fr)
    gap: 16px

  .servico
    gap: 16px
    min-height: 180px
    padding: 30px 14px
    border-radius: 20px

  .icone
    width: 58px
    height: 58px
    box-shadow: 0 0 0 7px rgba(240, 157, 53, 0.14)
</style>
