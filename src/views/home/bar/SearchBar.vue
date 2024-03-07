<template>
  <div v-on:keyup.enter="search">
    <v-menu offset-y>
      <template v-slot:activator="on">
        <v-text-field
          hide-details
          label="请输入关键词"
          v-model="text"
          class="input-search"
          autocomplete="off"
          v-on="on"
          ref="input"
          density="compact"
          variant="solo"
          append-inner-icon="mdi-magnify"
          single-line
          @click:append-inner="search"
        ></v-text-field>
      </template>
      <v-list v-if="items.length > 0" class="border-list" dense>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="itemClick(item)"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'

const text = ref('')
const items = ref<any>([])
const input = ref(null)

watch(text, () => {
  inputHandle(text.value)
})

const getData = () => {
  items.value = [
    { key: '1234', name: '1234' },
    { key: 'ccc', name: 'ccc' },
    { key: 'xxx', name: 'xxx' },
    { key: 'eee', name: 'eee' },
    { key: 'qqq', name: 'qqq' },
  ]
}

const itemClick = (item: any) => {
  text.value = item.name
  if (input.value) {
    let inputEl = input.value as HTMLElement
    inputEl.blur()
  }
  // this.$router.push()
}

const inputHandle = (text: any) => {
  if (text.trim() !== '') {
    setTimeout(() => {
      getData()
    }, 300)
  }
}

const search = () => {
  if (input.value) {
    let inputEl = input.value as HTMLElement
    inputEl.blur()
  }
  // this.$router.push()
}
</script>

<style scoped>
.input-search {
  width: 80%;
  margin: auto;
}

.width-20-percent {
  width: 20%;
}

.img-div {
  margin: 16vh 0 40px 0;
  text-align: center;
}

.v-menu__content {
  box-shadow: none !important;
}

.border-list {
  border: 1px solid #eee !important;
}
</style>
