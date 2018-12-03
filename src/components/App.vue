<script>
import Navbar from './Navbar.vue'

export default {
  name: 'App',

  components: {
    Navbar,
  },
}
</script>

<template>
  <div class="App">
    <navbar/>
    <router-view/>
  </div>
</template>
