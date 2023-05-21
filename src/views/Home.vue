<template>
    <v-container class="home-wrapper">
        <v-row class="justify-center home-hero">
            <v-col class="home-hero-wrapper">
                <h1>Canalizadores<br>perto de si? É fácil.</h1>
                <span>Os melhores canalizadores da sua cidade estão no FixFix</span>
                <v-autocomplete
                    :items="getCities()"
                    auto-select-first
                    class="city-search mt-9"
                    density="default"
                    item-props
                    menu-icon=""
                    placeholder="Pesquise aqui pelo nome da sua cidade"
                    prepend-inner-icon="mdi:mdi-magnify"
                    rounded
                    theme="light"
                    variant="solo"
                ></v-autocomplete>
            </v-col>
        </v-row>
        <v-row class="justify-center home-boxes">
            <v-col v-for="infoBox in infoBoxes" class="home-box ma-7">
                <h2 class="title">{{ infoBox.title }}</h2>
                <div class="content">{{ infoBox.content }}</div>
            </v-col>
        </v-row>
    </v-container>
  </template>

<script>
import Provinces from '@/mixins/Provinces.js';

export default {
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

    mounted() {
    }

}
</script>

<style lang="scss" scoped>
    .home-wrapper {
        .home-hero {
            margin-bottom: 251px;
            
            .home-hero-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                max-width: max-content;

                > span {
                    font-size: 24px;
                    margin-top: 10px;
                }

                .city-search {
                    width: 100%;
                }
            }
        }
        .home-boxes {
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
