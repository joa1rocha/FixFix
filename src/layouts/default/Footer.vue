<template>
  <v-footer
    class="text-center d-flex flex-column justify-end pa-7"
    color="transparent"
    flat
  >
    <div class="footer-buttons">
      <div class="icons mr-3">
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          :icon="icon.icon"
          :href="icon.url"
          target="_blank"
          variant="text"
          size="small"
        ></v-btn>
      </div>
      <a class="ml-3" href="/">
        <v-img min-width="98" width="98" src="../../assets/logo.svg" />
      </a>
    </div>

    <div class="legal-aid mt-0">
      <v-btn variant="text" size="small" href="#" text="Documentos"/> | <v-btn variant="text" size="small" href="#" text="Avisos Legais"/>
    </div>

    <div class="copyright mt-6">
      &copy {{ new Date().getFullYear() }} FIXFIX Todos os direitos reservados
    </div>
  </v-footer>
</template>

<script>
  export default {
    data() {
        return {
          icons: [
            {
              icon: 'fa-brands fa-twitter',
              url: 'https://www.google.com'
            },
            {
              icon: 'fa-brands fa-discord',
              url: 'https://www.google.com'
            },
            {
              icon: 'fa-brands fa-twitter',
              url: 'https://www.google.com'
            },
            {
              icon: 'fa-brands fa-discord',
              url: 'https://www.google.com'
            },
          ]
        }
    }
  }
</script>

<style lang="scss" scoped>
  .footer-buttons {
    display: flex;
  }

  .legal-aid {
    * {
      text-transform: none;
      font-size: 12px;
    }
  }

  .copyright {
    font-size: 10px;
  }
</style>