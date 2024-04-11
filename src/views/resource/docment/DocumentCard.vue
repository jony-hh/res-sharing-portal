<script setup lang="ts">
const props = defineProps(['documentInfo'])
</script>

<template>
  <v-card height="120" class="ma-2" style="cursor: pointer; user-select: none">
    <!-- 用户头像 -->
    <div class="d-flex align-center ml-1">
      <img
        style="height: 25px; width: 25px"
        :src="documentInfo.typeUrl"
        alt="头像"
      />
      <v-card-title>
        {{ documentInfo.document_name }}
      </v-card-title>
    </div>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <!-- 问题标签部分 -->
          <v-chip-group>
            <v-chip
              v-for="(tag, index) in documentInfo.tags"
              :key="index"
              class="ma-2"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </template>

        <template v-slot:append>
          <!-- 用户信息部分 -->
          <div class="d-flex align-center">
            <img
              class="rounded-xl"
              style="height: 25px; width: 25px"
              src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLkSA49EGsBTREicEiaw9YSLAvDeVk0jwc9z4ibMRLVBvzdnkHDRNnr8FMMk2C3o5zQ40fggVADU094A/132"
              alt="头像"
            />
            <!-- 用户昵称和发问时间 -->
            <div>{{ documentInfo.author }}</div>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
