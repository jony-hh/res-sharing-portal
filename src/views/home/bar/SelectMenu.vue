<template>
  <div class="text-center">
    <v-menu transition="scale-transition">
      <template v-slot:activator="{ props: menu }">
        <v-btn variant="outlined" color="white" v-bind="mergeProps(menu)">
          发布
          <svg
            viewBox="64 64 896 896"
            data-icon="down"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            class=""
          >
            <path
              d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
            ></path>
          </svg>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <send-resource-dialog :operateItem="items[0]"></send-resource-dialog>
        </v-list-item>
        <v-list-item v-for="(item, index) in items.slice(1, 3)" :key="index">
          <dialog-card :operateItem="item"></dialog-card>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import DialogCard from '@/views/home/content/DialogCard.vue'
import SendResourceDialog from '@/views/home/content/SendResourceDialog.vue'
import { mergeProps } from 'vue'
import { items } from '@/constant/selectMenu'
</script>
