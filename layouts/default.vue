<template>
  <div>
    <Navbar/>
      <nuxt/>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>2020@jackun</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  head: {
    bodyAttrs: {
      class: 'has-navbar-fixed-top'
    }
  }
}
</script>

<style>
html {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.2em;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@media screen and (max-width: 768px){
  html{
    font-size: 1em;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.footer{
  background-color: #FDBE46;
}
</style>
