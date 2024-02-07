<template>
  <div>
    <v-menu v-if="more.length">
      <template v-slot:activator="{ props }">
        <v-btn
          variant="plain"
          rounded="0"
          class="align-self-center me-4"
          height="100%"
          v-bind="props"
          color="#004FC4"
        >
          发布
          <v-icon end>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list class="bg-grey-lighten-3">
        <v-list-item v-for="item in more" :key="item" @click="addItem(item)">
          {{ item }}
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const currentItem = ref('tab-Web')
const items = ref(['Web', 'Shopping', 'Videos', 'Images'])
const more = ref(['News', 'Maps', 'Books', 'Flights', 'Apps'])
const text = ref('Lorem ipsum dolor sit amet')

const addItem = (item) => {
  // const removed = this.items.splice(0, 1)
  // this.items.push(
  //   ...this.more.splice(this.more.indexOf(item), 1),
  // )
  // this.more.push(...removed)
  // this.$nextTick(() => { this.currentItem = 'tab-' + item })
}
</script>
