<template>
  <div>
    <div id="footer" class="o-container o-container--fluid o-section u-bg-secondary-dark">

      <div class="o-container">
        <div class="o-grid u-margin-top-4">
          <div class="o-grid__col u-4@sm">
            <p class="u-text-overline u-color-white">Un proyecto de</p>
            <a href="http://politicalwatch.es" target="_blank"><img src="/img/logo-politicalwatch.png" class="big" alt="Logo de Political Watch"></a>
          </div>
          <div class="o-grid__col u-3@sm u-offset-2@sm">
            <p class="u-text-overline u-color-white">Colabora</p>
            <tipi-icon icon="chevron-right" class="c-icon--white" />&nbsp;&nbsp;<a class="u-color-white u-text-tbody2" href="https://api.tipiciudadano.es" title="github.com/politicalwatch" target="_blank">API para desarrolladorxs</a>
            <br>
            <tipi-icon icon="github" class="c-icon--white" />&nbsp;&nbsp;<a class="u-color-white u-text-tbody2" href="https://github.com/politicalwatch/" title="github.com/politicalwatch" target="_blank">Código en Github</a>
          </div>
          <div class="o-grid__col u-3@sm">
            <p class="u-text-overline u-color-white">Contacta</p>
            <tipi-icon icon="twitter" class="c-icon--white" />&nbsp;&nbsp;<a class="u-color-white u-text-tbody2" href="https://twitter.com/tipi_ciudadano" title="@TIPI_Ciudadano" target="_blank">@TIPI_Ciudadano</a>
            <br>
            <tipi-icon icon="mail" class="c-icon--white" />&nbsp;&nbsp;<a class="u-color-white u-text-tbody2" href="mailto:tipi@politicalwatch.es" title="tipi@politicalwatch.es" target="_blank">tipi@politicalwatch.es</a>
          </div>
        </div>
        <div class="o-grid">
          <div class="o-grid__col u-12@sm u-margin-top-4">
            <p class="u-color-white u-text-tbody2">{{ (new Date()).getFullYear()  }} Political Watch - Algunos derechos reservados</p>
          </div>
        </div>
      </div>

    </div>

    <div class="c-decorator" style="background-image: url('/img/yellow.png')"></div

    <cookie-law theme="base" buttonText="Entendido" buttonClass="btn btn-custom" message="Este sitio usa cookies para asegurarte la mejor experiencia web."></cookie-law>

  </div>
</template>

<script>
  import CookieLaw from 'vue-cookie-law';
  import { TipiIcon } from 'tipi-uikit';

  export default {
    name: "footer-block",
    components: {
      CookieLaw,
      TipiIcon
    }
  }
</script>

<style scoped lang="scss">
img.big {
  width: 100%;
}
</style>
