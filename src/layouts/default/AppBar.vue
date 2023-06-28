<template>
  <v-app-bar class="px-6 header-bar" color="transparent" flat>
    <v-app-bar-title color="white">
    <v-img min-width="186" width="186" src="@/assets/logo.svg" />
    </v-app-bar-title>
    <v-btn color="white" @click="$router.push({ name:'Home' })">
      Inicio
    </v-btn>
    <v-btn color="white" @click="$router.push({ name:'Canalizadores' })">
      Canalizadores
    </v-btn>
    <v-btn color="white" @click="$router.push({ name:'Eletricistas' })">
      Eletricistas
    </v-btn>
    <v-btn color="white" @click="$router.push({ name:'home' })">
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
