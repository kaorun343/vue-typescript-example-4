<script lang="ts">
import { SettingsComponent } from './Settings'
export default SettingsComponent
</script>

<template>
  <div class="container page-container">
    <h1>設定</h1>
    <div>
      <button class="btn btn-primary" @click="reset">メッセージを削除する</button>
    </div>
  </div>
</template>
