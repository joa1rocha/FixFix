<template>
    <v-container class="page-wrapper">
        <v-row class="justify-center page-hero">
            <v-col class="page-hero-wrapper">
                <h1 v-html="pageTitle"/>
                <span>Os melhores canalizadores da sua cidade estão no FixFix</span>
                <v-autocomplete
                    :items="getCities()"
                    auto-select-first
                    class="city-search mt-9"
                    density="default"
                    item-props
                    menu-icon=""
                    placeholder="Pesquise aqui pela sua cidade"
                    prepend-inner-icon="mdi:mdi-magnify"
                    rounded
                    theme="light"
                    variant="solo"
                ></v-autocomplete>
            </v-col>
        </v-row>
        <v-row class="justify-center body">
            <slot></slot>
        </v-row>
    </v-container>
</template>

<script>
import Provinces from '@/mixins/Provinces.js';

export default {
  props: {
    pageTitle: {
      type: String,
      default: "Canalizadores<br>perto de si? É fácil.",
    },
  },
  mixins: [Provinces],
  data() {
      return {
      }
  }
}
</script>

<style lang="scss" scoped>
    .page-wrapper {
        .page-hero {

            .page-hero-wrapper {
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
    }
</style>
