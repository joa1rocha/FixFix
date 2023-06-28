<template>
  <page-wrapper class="especialistas-page">

    <v-overlay
      :model-value="loading"
      class="align-center justify-center"
    >
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      />
    </v-overlay>

    <div class="cards-new ml-5">
      <div class="card" v-for="(especialista, index) in especialistas" :key="index">
        <div class="image"></div>
        <div class="content">
          <h2>{{ especialista.name }}</h2>
          <div class="details">
            <span>Morada: {{ especialista.address }}</span>
            <span>Cidade: {{ especialista.city || 'TO DO!' }}</span>
            <span>Anos de experiência: {{ especialista.experienceYears || 1 }}</span>
          </div>
          <div class="buttons">
            <v-btn
              color="primary"
              @click="$router.push({ name:'Canalizador', params: { id: especialista.id } })"
            >
              Detalhes
            </v-btn>
            <v-btn color="primary">
              Ligar
              <v-overlay
                activator="parent"
                location-strategy="connected"
                scroll-strategy="reposition"
              >
                <v-card class="pa-4" variant="elevated" color="primary">
                  {{ especialista.phone }}
                </v-card>
              </v-overlay>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
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

  async mounted() {
    this.loading = true;

    const $api = new Manager();
    const { data } = await $api.especialistas.list();
    this.especialistas = data.data;

    this.loading = false;
  },
}
</script>

<style lang="scss" scoped>
.cards-new {
  display: flex;
  flex-direction: column;

    .card {
      margin-bottom: 10px;
      width: 354px;
      background: #fff;
      padding: 15px;
      display: flex;
      flex-direction: row;
      color: #000;
      border-radius: 5px;

    .image {
      max-width: 100px;
      min-width: 100px;
      overflow: hidden;
      // background: url('https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg');
      background: url('../assets/bg.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-inline: 15px;
      font-size: 12px;
      width: 100%;

      h2 {
        font-size: 25px;
        line-height: 25px;
        text-wrap: balance;
      }

      .details {
        margin-block: 15px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
      }

      .buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-direction: row;
        text-align: center;

        > * {
          font-size: 12px;
          font-weight: bold;
          color: #fff;
        }
      }
    }
  }
}

</style>
