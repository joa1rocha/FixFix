<template>
  <v-app-bar class="px-6 header-bar" color="transparent" flat>
    <v-app-bar-title color="white">
      <a href="/">
        <v-img min-width="186" width="186" src="../../assets/logo.svg" />
      </a>
    </v-app-bar-title>
    <v-btn color="white">
      Inicio
    </v-btn>
    <v-btn color="white">
      Canalizadores
    </v-btn>
    <v-btn color="white">
      Eletricistas
    </v-btn>
    <v-btn color="white">
      Contactos
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.header-bar {
  position: inherit !important;
  
  .v-toolbar__content {
      margin: 30px auto;
      max-width: 1300px;
  }
}
</style>