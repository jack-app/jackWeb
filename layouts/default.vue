<template>
<div class="layout">
  <nav class="navbar has-shadow is-fixed-top">
    <div class="container">
      <div class="navbar-brand jack-icon">
        <a href="#home"><img src="~/static/jack-icon.png" alt="jackのアイコン"></a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <p class="navbar-item" style="font-size:1.5em;"><a href="#home">Home</a></p>
          <p class="navbar-item" style="font-size:1.5em;"><a href="#about">About us</a></p>
          <p class="navbar-item" style="font-size:1.5em;"><a href="#works">Works</a></p>
          <p class="navbar-item" style="font-size:1.5em;"><a href="#contact">Contact</a></p>
        </div>
      </div>
    </div>
  </nav>
  <nuxt />
  <footer class="footer">
    <div class="content has-text-centered">
      <p>2020@jackun</p>
    </div>
  </footer>
</div>
</template>

<style>
html {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.jack-icon{
  width: 100px;
  height: 100px;
}

@media screen and (max-width: 1023px)
  .jack-icon{
    width: 50px;
    height: 50px;
  }

.navbar .container{
  padding: 0 50px;
}

.footer{
  background-color: #FDBE46;
}
</style>
