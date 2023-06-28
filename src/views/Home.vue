<template>
  <page-wrapper class="home-page">
    <v-col v-for="(infoBox, index) in infoBoxes" :key="index" class="home-box ma-7">
      <h2 class="title">{{ infoBox.title }}</h2>
      <div class="content">{{ infoBox.content }}</div>
    </v-col>
  </page-wrapper>
</template>

<script>
import Provinces from '@/mixins/Provinces.js';
import PageWrapper from '@/components/PageWrapper.vue';

export default {
  components: { PageWrapper },
    mixins: [Provinces],
    data() {
        return {
            infoBoxes: [
                {
                    title: 'Experientes',
                    content: 'Todos os nossos profissionais têm mais de 10 anos de experiência em canalização',
                },
                {
                    title: 'Fácil e gratuito',
                    content: 'O serviço FIXFIX é uma solução veloz, muito simples de usar e, em pouco tempo, coloca-lhe um canalizador em casa.',
                },
                {
                    title: 'Seguro',
                    content: 'O FIXFIX é 100% seguro. Não há transações financeiras na nossa plataforma porque o pagamento é feito directamente ao canalizador.',
                },
                {
                    title: 'Transparente',
                    content: 'O modelo de negócio do FIXFIX não envolve cobrar uma percentagem ao cliente. Os canalizadores pagam um valor para estarem presentes na plataforma.',
                },
            ]
        };
    },
}
</script>

<style lang="scss">
    .page-wrapper.home-page {
        .body {
            margin-top: 350px;

            .home-box {
                background-color: rgba(var(--v-theme-grey), 0.8);
                color: #000;
                border-radius: 20px;
                padding: 11px;

                min-width: 332px;
                max-width: 332px;
                min-height: 131px;

                .title {
                    font-size: 32px;
                    text-align: center;
                }

                .content {
                    font-size: 12px;
                    line-height: 14px;
                    text-align: center;
                }
            }
        }
    }
</style>
