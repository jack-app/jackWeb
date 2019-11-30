<template>
  <div class="container nav">
    <div class="navbar-brand">
      <div class="jack-icon">
        <a href="#home"><img src="~/static/jack-icon.png" alt="jackのアイコン"></a>
      </div>
      <div class="navbar-burger" data-target="navMenu" @click="$store.commit('toggleMenu')" :class="{'is-active': $store.state.isMenuActive}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" id="navMenu" :class="{'is-active':$store.state.isMenuActive}">
      <div class="navbar-end">
        <a href="#home" class="navbar-item">Home</a>
        <a href="#about" class="navbar-item">About us</a>
        <a href="#works" class="navbar-item">Works</a>
        <a href="#contact" class="navbar-item">Contact</a>
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
