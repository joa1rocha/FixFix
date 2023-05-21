<template>
  <v-app>
    <div class="bg-main">
      <v-img src="../../assets/bg.jpg"/>
    </div>
    <default-header />

    <default-view />

    <default-footer />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultHeader from './AppBar.vue'
  import DefaultView from './View.vue'
  import DefaultFooter from './Footer.vue'
</script>

<style lang="scss">
  /* .v-application__wrap {
    background-image: url('../../assets/bg.jpg');
    background-size: cover;
    background-position-x: center;
  } */

  main,
  footer {
    z-index: 1;
  }

  .bg-main {
    position: fixed;
    display: flex;
    inset: 0;
    z-index: 0;
    
    .v-responsive {
        justify-content: center;

        .v-img__img {
          width: auto;
        }
    }
  }
</style>
