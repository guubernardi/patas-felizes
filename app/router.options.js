// O scrollBehavior do router roda depois de qualquer scroll feito na aplicacao,
// entao e aqui que a ancora precisa ser resolvida. Ao vir de outra pagina a home
// ainda nao montou quando ele executa, por isso esperamos o elemento aparecer.
export default {
  scrollBehavior(para, de, posicaoSalva) {
    if (posicaoSalva) return posicaoSalva

    if (!para.hash) return { left: 0, top: 0 }

    return new Promise((resolve) => {
      let restantes = 60

      const tentar = () => {
        let alvo = null
        try {
          alvo = document.querySelector(para.hash)
        } catch {
          return resolve({ left: 0, top: 0 })
        }

        // 96px de folga para a nav flutuante nao cobrir o topo da section
        if (alvo) return resolve({ el: para.hash, top: 96, behavior: 'smooth' })
        if (restantes-- > 0) return requestAnimationFrame(tentar)

        resolve({ left: 0, top: 0 })
      }

      tentar()
    })
  }
}
