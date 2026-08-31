// Diretiva v-revelar: revela o elemento quando ele entra na tela.
//
// Uso:  <div v-revelar>            revela sem atraso
//       <div v-revelar="0.15">     revela 0,15s depois de entrar
//
// A classe inicial e aplicada aqui, no cliente. O HTML do SSR sai sem ela, entao
// quem estiver sem JS ve o conteudo normalmente em vez de uma pagina em branco.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('revelar', {
    mounted(el, binding) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      el.classList.add('revelar')

      if (binding.value) el.style.transitionDelay = `${binding.value}s`

      const observador = new IntersectionObserver(
        (entradas) => {
          if (!entradas[0].isIntersecting) return
          el.classList.add('revelado')
          observador.disconnect()
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      )

      observador.observe(el)
      el._observadorRevelar = observador
    },

    unmounted(el) {
      el._observadorRevelar?.disconnect()
    }
  })
})
