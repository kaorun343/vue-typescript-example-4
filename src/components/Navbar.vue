<script>
export default {
  name: 'Navbar',

  data() {
    return {
      links: [
        { title: 'ホーム', name: 'home' },
        { title: 'リンク一覧', name: 'links' },
        { title: '設定', name: 'settings' },
      ],
    }
  },
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="navbar-brand" :to="{name: 'home'}">Vue.jsとTypeScriptのサンプル4</router-link>
    <ul class="navbar-nav mr-auto">
      <router-link
        tag="li"
        v-for="link in links"
        :key="link.name"
        active-class="active"
        class="nav-item"
        :to="{ name: link.name }"
        :exact="true"
      >
        <a class="nav-link">{{ link.title }}</a>
      </router-link>
    </ul>
  </nav>
</template>
