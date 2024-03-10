<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import SlideshowBox from '@/views/home/content/SlideshowBox.vue'

const cards = ref([
  {
    title: 'Homemade Dulce de Leche Ice Cream with Chocolate Chips',
    subtitle: 'Happy Foods',
    src: 'https://cdn.vuetifyjs.com/docs/images/graphics/dulce-ice-cream.png',
  },
  {
    title: 'Salted Caramel Swirl Ice Cream',
    subtitle: 'Stone Kitchen',
    src: 'https://cdn.vuetifyjs.com/docs/images/graphics/salted-caramel-ice-cream.png',
  },
  {
    title: 'Peanut Butter No-Churn Ice Cream',
    subtitle: 'The Sweeter Side',
    src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
  },
])
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>

<template>
  <div>
    <v-card max-width="1000" rounded="lg">
      <v-container>
        <v-row>
          <v-col
            v-for="{ src, title, subtitle } in cards"
            :key="title"
            cols="12"
            lg="4"
            md="6"
          >
            <v-skeleton-loader
              :loading="loading"
              height="300"
              type="image, list-item-two-line"
            >
              <v-responsive>
                <img
                  :src="src"
                  class="rounded-lg mb-2"
                  alt=""
                  style="height: 240px; width: 300px"
                />

                <div>{{ title }}</div>
                <br />
                <div>{{ subtitle }}</div>
              </v-responsive>
            </v-skeleton-loader>
          </v-col>
        </v-row>

        <br />

        <v-chip
          prepend-icon="mdi-check-circle"
          size="large"
          variant="text"
          border
        >
          <template v-slot:prepend>
            <v-icon color="disabled"></v-icon>
          </template>

          <span class="text-subtitle-1">
            Homemade Dulce de Leche Ice Cream with Chocolate Chips
          </span>
        </v-chip>
      </v-container>
    </v-card>
  </div>
</template>

<style scoped></style>
