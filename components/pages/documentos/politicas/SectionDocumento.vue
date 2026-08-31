<template>
  <section class="documento">
    <div class="conteudo">
      <h1>Política de Privacidade</h1>
      <p class="atualizacao">Última atualização: {{ ATUALIZACAO }}</p>

      <p>
        Esta Política explica como o <strong>Patas Felizes Pet Shop</strong> trata dados pessoais em relação a este site, em conformidade com a Lei Geral de Proteção de Dados
        (Lei nº 13.709/2018).
      </p>

      <h2>1. Quem é o controlador</h2>
      <p>
        O controlador dos dados é o Patas Felizes Pet Shop, localizado no Shopping Morumbi, Piso 2, Av. Roque Petroni Júnior, 1089, Jardim das Acácias, São Paulo, SP.
      </p>
      <h2>2. Este site não coleta seus dados</h2>
      <p>
        Este site é institucional. Ele não possui formulários, cadastro, login, carrinho ou qualquer campo em que você digite informações. Não pedimos nome, e-mail, telefone,
        CPF nem dados do seu pet nesta página.
      </p>
      <p>
        Também não utilizamos ferramentas de análise de audiência, pixels de publicidade ou cookies próprios de rastreamento.
      </p>

      <h2>3. Agendamento pelo Instagram</h2>
      <p>
        Os botões de agendamento levam você para uma conversa no Direct do Instagram. A partir do momento em que você sai deste site, o tratamento dos seus dados passa a ser
        regido pelas políticas da Meta Platforms, responsável pelo Instagram.
      </p>
      <p>
        As informações que você nos envia nessa conversa (como nome, telefone, dados do seu pet e o serviço desejado) são usadas apenas para organizar o atendimento e ficam
        armazenadas na própria plataforma. Não exportamos essas conversas para outros sistemas.
      </p>

      <h2>4. Mapa do Google</h2>
      <p>
        A seção de localização exibe um mapa incorporado do Google Maps. Esse conteúdo é carregado diretamente dos servidores do Google, que pode registrar seu endereço IP e
        utilizar cookies próprios, conforme a política de privacidade do Google.
      </p>
      <p>
        Não temos acesso nem controle sobre esses dados. Se preferir evitá-los, é possível bloquear cookies de terceiros nas configurações do seu navegador; o restante da
        página continua funcionando normalmente.
      </p>

      <h2>5. Registros de acesso</h2>
      <p>
        Este site é hospedado na Vercel. Como acontece em qualquer servidor web, o acesso gera registros técnicos automáticos, como endereço IP, data e hora, navegador e
        páginas visitadas. Esses registros existem para segurança e funcionamento do serviço, e seu tratamento segue as políticas da Vercel Inc.
      </p>

      <h2>6. Links para outros sites</h2>
      <p>
        Esta página contém links para o Instagram, para o Google Maps e para o site de quem desenvolveu o projeto. Ao segui-los, você passa a estar sujeito às políticas de
        privacidade desses serviços, sobre as quais não temos responsabilidade.
      </p>

      <h2>7. Seus direitos</h2>
      <p>Nos termos do artigo 18 da LGPD, você pode a qualquer momento solicitar:</p>
      <ul>
        <li>confirmação da existência de tratamento dos seus dados;</li>
        <li>acesso aos dados que tivermos sobre você;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;</li>
        <li>eliminação dos dados tratados com base no seu consentimento;</li>
        <li>informação sobre com quem compartilhamos seus dados;</li>
        <li>revogação do consentimento.</li>
      </ul>
      <p>
        Para exercer qualquer um desses direitos, fale com a gente pelo Instagram
        <a :href="INSTAGRAM_PERFIL" target="_blank" rel="noopener">@patasfelizesofc</a> ou pessoalmente na loja, no Shopping Morumbi, Piso 2.
      </p>

      <h2>8. Menores de idade</h2>
      <p>Este site não se destina a menores de 18 anos e não coletamos dados de crianças ou adolescentes de forma consciente.</p>

      <h2>9. Alterações nesta Política</h2>
      <p>
        Se o site passar a ter formulário de contato, ferramenta de análise de audiência ou qualquer outro recurso que colete dados, esta Política será atualizada antes de
        essa mudança entrar no ar. Recomendamos consultar esta página periodicamente.
      </p>

      <h2>10. Dúvidas</h2>
      <p>
        Qualquer dúvida sobre esta Política pode ser enviada pelo Direct do Instagram
        <a :href="INSTAGRAM_PERFIL" target="_blank" rel="noopener">@patasfelizesofc</a>.
      </p>
    </div>
  </section>
</template>

<script setup>
import { INSTAGRAM_PERFIL } from '~/utils/links'

const ATUALIZACAO = '30 de agosto de 2026'
</script>

<style lang="sass" scoped>
section.documento
  position: relative
  display: flex
  align-items: flex-start
  justify-content: center
  width: 100%
  padding: 180px var(--gutter) 100px
  overflow: hidden
  background-color: var(--cor-creme)

.conteudo
  width: 100%
  max-width: 860px

h1
  margin-bottom: 8px
  font-family: var(--extrabold)
  font-size: var(--f8)
  line-height: 1.25
  color: var(--cor-marrom)

.atualizacao
  margin-bottom: 34px
  font-family: var(--bold)
  font-size: var(--f2)
  letter-spacing: 0.5px
  text-transform: uppercase
  color: var(--cor-laranja-escuro)

h2
  margin: 38px 0 14px
  font-family: var(--bold)
  font-size: var(--f4)
  line-height: 1.4
  color: var(--cor-marrom)

p
  margin-bottom: 14px
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.7
  color: var(--cor-marrom-claro)

p strong
  font-family: var(--bold)
  color: var(--cor-marrom)

ul
  margin: 16px 0 20px
  padding-left: 22px

li
  margin-bottom: 10px
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.7
  color: var(--cor-marrom-claro)

a
  font-family: var(--bold)
  color: var(--cor-laranja-escuro)
  text-decoration: underline
  transition: all 0.4s

a:hover
  color: var(--cor-marrom)

@media screen and (max-width: 1000px)
  section.documento
    padding: 120px var(--gutter) 70px

  h1
    font-size: var(--f6)

  h2
    margin: 30px 0 12px
    font-size: var(--f3)

  p,
  li
    font-size: var(--f2)
</style>
