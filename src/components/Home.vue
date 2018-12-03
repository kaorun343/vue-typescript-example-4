<script lang="ts">
import { HomeComponent } from './Home'
import Jumbotron from './Jumbotron.vue'

export default HomeComponent.extend({
  components: { Jumbotron },
})
</script>

<template>
  <div>
    <jumbotron>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="title">タイトル</label>
          <input type="text" class="form-control" id="title" v-model="title">
        </div>

        <div class="form-group">
          <label for="body">メッセージ</label>
          <input type="text" class="form-control" v-model="body" id="body">
        </div>

        <button class="btn btn-primary" type="submit">保存する</button>
      </form>
    </jumbotron>
    <div class="container page-container">
      <h2>これまでに寄せられたメッセージ</h2>
      <div class="card card-block" v-for="message in messages" :key="message.id">
        <div>{{ message.date | format }}</div>
        <h4>{{ message.title }}</h4>
        <p class="card-text">{{ message.body }}</p>
      </div>
    </div>
  </div>
</template>
