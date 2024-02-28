<template>
  <div class="text-center">
    <v-menu transition="scale-transition">
      <template v-slot:activator="{ props: menu }">
        <v-tooltip location="top">
          <template v-slot:activator="{ props: tooltip }">
            <v-btn color="primary" v-bind="mergeProps(menu, tooltip)">
              发布
              <svg viewBox="64 64 896 896" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
            </v-btn>
          </template>
          <span>快去发布吧！</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { mergeProps, ref } from 'vue'

const items = ref([
  { title: '传资源' },
  { title: '写回答' },
  { title: '提问题' },
  { title: '建Wiki' },
])

</script>
