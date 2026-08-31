<template>
  <section id="depoimentos" class="depoimentos">
    <div class="enfeites" aria-hidden="true">
      <SvgIcone class="enfeite pata-um" nome="pata" :tamanho="140" />
      <SvgIcone class="enfeite osso-um" nome="osso" :tamanho="85" />
    </div>

    <div class="conteudo">
      <span v-revelar class="etiqueta">
        <SvgIcone nome="pata" :tamanho="15" />
        Depoimentos
      </span>

      <h2 v-revelar="0.08">O que os tutores falam do <span>Patas Felizes</span></h2>

      <p v-revelar="0.14" class="chamada">Depoimentos de quem já trouxe o pet para a gente cuidar.</p>

      <div class="lista">
        <article v-for="(depoimento, indice) in DEPOIMENTOS" :key="depoimento.id" v-revelar="0.2 + indice * 0.06" class="depoimento">
          <div class="estrelas" :aria-label="`${depoimento.nota} de 5 estrelas`">
            <SvgIcone v-for="n in depoimento.nota" :key="n" nome="estrela" :tamanho="16" />
          </div>

          <p class="texto">{{ depoimento.texto }}</p>

          <footer class="autor">
            <div class="avatar">{{ depoimento.iniciais }}</div>
            <div class="identificacao">
              <strong>{{ depoimento.nome }}</strong>
              <span>{{ depoimento.detalhe }}</span>
            </div>
          </footer>
        </article>
      </div>
    </div>

    <ElementosOnda cor="var(--cor-laranja)" />
  </section>
</template>

<script setup>
const DEPOIMENTOS = [
  {
    id: 1,
    nota: 5,
    texto: '“Meu cachorro voltou limpinho, cheiroso e super tranquilo. Dá pra perceber o carinho que a equipe tem com os animais. Com certeza vou voltar!”',
    nome: 'Mariana Oliveira',
    detalhe: 'Tutora · Banho e Tosa',
    iniciais: 'MO'
  },
  {
    id: 2,
    nota: 5,
    texto: '“Adorei o atendimento! Foram muito cuidadosos com minha cachorrinha e o resultado da tosa ficou lindo. Virou nosso pet shop de confiança.”',
    nome: 'Camila Santos',
    detalhe: 'Tutora · Tosa',
    iniciais: 'CS'
  },
  {
    id: 3,
    nota: 5,
    texto: '“Levei meu cachorro para o banho e fiquei muito satisfeita. Além de ficar super cheiroso, ele voltou tranquilo e bem cuidado. Recomendo muito!”',
    nome: 'Fernanda Almeida',
    detalhe: 'Tutora · Banho',
    iniciais: 'FA'
  },
  {
    id: 4,
    nota: 5,
    texto: '“A equipe é muito atenciosa e cuidadosa. Meu pet é mais medroso e mesmo assim ficou super bem durante o atendimento. Dá muita segurança deixar ele aqui.”',
    nome: 'Juliana Martins',
    detalhe: 'Tutora · Banho e Tosa',
    iniciais: 'JM'
  },
  {
    id: 5,
    nota: 5,
    texto: '“O atendimento foi excelente do começo ao fim. Meu cachorro ficou lindo depois da tosa e o pessoal ainda teve todo aquele cuidado que faz diferença.”',
    nome: 'Rafael Souza',
    detalhe: 'Tutor · Tosa',
    iniciais: 'RS'
  },
  {
    id: 6,
    nota: 5,
    texto: '“Já levei meu pet algumas vezes e sempre saio satisfeita. O atendimento é carinhoso, o serviço é caprichado e eles realmente tratam os animais com muito cuidado.”',
    nome: 'Beatriz Ferreira',
    detalhe: 'Tutora · Banho e Tosa',
    iniciais: 'BF'
  }
]
</script>

<style lang="sass" scoped>
.depoimentos
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 120px var(--gutter) 180px
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
  opacity: 0.06

.pata-um
  top: 7%
  left: 3%
  transform: rotate(-20deg)

.osso-um
  right: 4%
  bottom: 7%
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
  background-color: rgba(240, 157, 53, 0.2)
  font-family: var(--bold)
  font-size: var(--f2)
  letter-spacing: 1.5px
  text-transform: uppercase
  color: var(--cor-laranja)

h2
  max-width: 620px
  margin-bottom: 16px
  font-family: var(--extrabold)
  font-size: var(--f9)
  line-height: 1.3
  color: var(--cor-branco)
  text-align: center

// impede "Felizes" de cair sozinha na segunda linha
h2 span
  white-space: nowrap

.chamada
  margin-bottom: 60px
  font-family: var(--light)
  font-size: var(--f3)
  color: rgba(255, 255, 255, 0.6)
  text-align: center

.lista
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 26px
  width: 100%

.depoimento
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 34px 32px
  border: 1px solid rgba(255, 255, 255, 0.12)
  border-radius: 20px
  background-color: rgba(255, 255, 255, 0.05)
  transition: all 0.4s

.depoimento:hover
  border-color: rgba(240, 157, 53, 0.45)
  background-color: rgba(255, 255, 255, 0.08)

.estrelas
  display: flex
  gap: 4px
  margin-bottom: 20px
  color: var(--cor-laranja)

.texto
  margin-bottom: 28px
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.6
  color: rgba(255, 255, 255, 0.82)

// empurra o autor para a base, alinhando entre cards de textos diferentes
.autor
  display: flex
  align-items: center
  gap: 14px
  margin-top: auto

.avatar
  display: flex
  flex-shrink: 0
  align-items: center
  justify-content: center
  width: 46px
  height: 46px
  border-radius: 50%
  background-color: var(--cor-laranja)
  font-family: var(--bold)
  font-size: var(--f2)
  text-transform: uppercase
  color: var(--cor-branco)

.identificacao
  display: flex
  flex-direction: column
  gap: 3px

.identificacao strong
  font-family: var(--bold)
  font-size: var(--f2)
  color: var(--cor-branco)

.identificacao span
  font-family: var(--light)
  font-size: var(--f2)
  color: rgba(255, 255, 255, 0.5)

@media screen and (max-width: 1000px)
  .depoimentos
    padding: 70px var(--gutter) 110px

  .pata-um
    top: 1%
    left: -8%

  .osso-um
    right: -6%
    bottom: 2%

  h2
    font-size: var(--f7)

  .chamada
    margin-bottom: 36px
    font-size: var(--f2)

  .lista
    grid-template-columns: 1fr
    gap: 16px

  .depoimento
    padding: 26px 22px
</style>
