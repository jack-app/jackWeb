<template>
  <div class="container nav">
    <div class="navbar-brand">
      <div class="jack-icon">
        <a href="#home"><img src="~/static/jack-icon.png" alt="jackのアイコン"></a>
      </div>
      <div class="navbar-burger burger" data-target="navMenu" @click="$store.commit('toggleMenu')" :class="{'is-active': $store.state.isMenuActive}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" id="navMenu" :class="{'is-active':$store.state.isMenuActive}">
      <div class="navbar-end">
        <p class="navbar-item"><a href="#home">Home</a></p>
        <p class="navbar-item"><a href="#about">About us</a></p>
        <p class="navbar-item"><a href="#works">Works</a></p>
        <p class="navbar-item"><a href="#contact">Contact</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  fetch({store}) {
    store.commit('resetMenu')
  }
}
</script>

<style scoped>
.nav{
  padding: 0 50px;
}
</style>
