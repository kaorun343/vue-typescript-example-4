<script>
export default {
  name: 'Jumbotron',

  data() {
    function zero(n) {
      return ('0' + n).slice(-2)
    }

    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const date = today.getDate()

    return {
      today: `${year}年${zero(month)}月${zero(date)}日`,
      isBirthday: month === 12 && date === 4,
    }
  },
}
</script>

<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3">Happy Birthday!!</h1>
      <p class="lead">12月4日は花園たえの誕生日です。</p>
      <hr class="my-2">
      <p>
        <span v-if="!isBirthday">今日は{{ today }}ですが</span>
        <span v-else>今日は{{ today }}、誕生日当日です！！</span>
        <span>メッセージを書いてみましょう！</span>
      </p>
      <slot></slot>
    </div>
  </div>
</template>
