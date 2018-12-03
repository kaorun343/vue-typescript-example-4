<script>
export default {
  name: 'Links',

  data() {
    return {
      links: [
        { title: 'vue.js', href: 'https://jp.vuejs.org' },
        {
          title: 'TypeScript - JavaScript that scales.',
          href: 'http://www.typescriptlang.org',
        },
        {
          title:
            'Bootstrap · The most popular HTML, CSS, and JS library in the world.',
          href: 'http://getbootstrap.com',
        },
        {
          title: 'Vue.js Advent Calendar 2018 - Qiita',
          href: 'http://qiita.com/advent-calendar/2018/vue',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="container page-container">
    <h1>リンク一覧</h1>
    <ul>
      <li v-for="link in links" :key="link.href">
        <a :href="link.href">{{ link.title }}</a>
      </li>
    </ul>
  </div>
</template>
