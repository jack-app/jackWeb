<template>
  <div class="container">
    <div class="navbar-brand">
      <div class="jack-icon">
        <a href="#home"><img src="~/static/jack-icon.png" alt="jackのアイコン"></a>
      </div>
      <div class="navbar-burger burger" data-target="navMenu" @click="toggleMenu" :class="{'is-active': isMenuActive}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" id="navMenu" :class="{'is-active':isMenuActive}">
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
  data: () => {
    return{isMenuActive: false}
  },
  methods: {
    toggleMenu(){
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>

<style scoped>
.container{
  padding: 0 50px;
}
</style>
