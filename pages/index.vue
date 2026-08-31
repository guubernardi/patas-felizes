<template>
  <IndexSectionHero />
  <IndexSectionServicos />
  <IndexSectionEstrutura />
  <IndexSectionEspaco />
  <IndexSectionDepoimentos />
  <IndexSectionAgendamento />
  <IndexSectionContatos />
</template>

<script setup>
definePageMeta({
  layout: 'web'
})

const TITULO = 'Patas Felizes | Pet Shop'
const DESCRICAO = 'No Patas Felizes, a saúde e o bem-estar dos seus companheiros de quatro patas são a nossa prioridade. Banho, tosa, veterinário e muito carinho. Agende pelo WhatsApp.'

useHead({
  title: TITULO,
  meta: [
    { name: 'description', content: DESCRICAO },
    { property: 'og:title', content: TITULO },
    { property: 'og:description', content: DESCRICAO }
  ]
})
</script>
