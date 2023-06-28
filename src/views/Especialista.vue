<template>
  <page-wrapper class="canalizador-page">

    <v-card width="680" class="pa-2">
      <template v-slot:text>
        <div class="head">
          <div class="image"></div>
          <div class="details">
            <h2 class="name">Adolfo Dias</h2>
            <div class="info">
              <div class="info-item address">
                <b>Modara</b>
                <span>Rua Joaquim Crespim Telho, Leiria</span>
              </div>
              <div class="info-item experience">
                <b>Anos de experiência</b>
                <span>15</span>
              </div>
              <div class="info-item phone">
                <b>Telefone</b>
                <span>21 333 333 2</span>
              </div>
              <div class="info-item website">
                <b>Website</b>
                <span>CanalizadoresemLX.pt</span>
              </div>
              <div class="info-item email">
                <b>E-mail</b>
                <span>adias@canalizadoresemlx.pt</span>
              </div>
              <div class="info-item class">
                <b>Classificação</b>
                <span>XXXXXX</span>
              </div>
            </div>
          </div>
        </div>
        <div class="map my-4">
          <img src="@/assets/map.jpg">
        </div>
        <div class="buttons mb-8">
          <v-btn width="192" color="primary" class="mr-4">Ligar Já</v-btn>
          <v-btn width="192" color="primary" class="mr-4">Pedir Orçamento</v-btn>
        </div>
      </template>
    </v-card>

  </page-wrapper>
</template>

<script>
import PageWrapper from '@/components/PageWrapper.vue';
import Manager from '@/api/Manager';

export default {
  components: { PageWrapper },
  data() {
      return {
        loading: false,
        especialistas: {},
      }
  },

}
</script>

<style lang="scss" scoped>
.canalizador-page {
  .v-card {
    .head {
      display: grid;
      grid-template-columns: 1fr 3fr;

      .image {
        min-width: 100px;
        overflow: hidden;
        // background: url('https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg');
        background: url('@/assets/bg.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .details {
        padding: 0 16px;

        .info {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          margin-top: 28px;

          .info-item {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-size: 12px;
            padding-right: 10px;

            span {
              color: #535353;

              &:first-child {
                color: #000;
              }
            }
          }
        }
      }
    }
  }
}
</style>
