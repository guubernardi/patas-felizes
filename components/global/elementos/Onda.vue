<template>
  <svg class="onda" :class="{ invertida }" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <!-- assimetrica de proposito: simetrica lê como forma geometrica, nao organica -->
    <path d="M0,100 L0,46 C180,14 380,2 640,22 C900,42 1140,78 1440,44 L1440,100 Z" :fill="cor" />
  </svg>
</template>

<script setup>
const props = defineProps({
  // cor do lado PARA ONDE a onda transiciona (a section seguinte)
  cor: {
    type: String,
    default: 'var(--cor-creme)'
  },
  // no topo da section, em vez do rodape
  invertida: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="sass" scoped>
.onda
  position: absolute
  left: 0
  bottom: -1px
  z-index: 2
  display: block
  width: 100%
  height: clamp(50px, 6vw, 100px)
  pointer-events: none

.onda.invertida
  top: -1px
  bottom: auto
  transform: scaleY(-1)

@media screen and (max-width: 1000px)
  .onda
    height: 45px
</style>
