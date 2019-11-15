<template>
<div class="layout">
  <nav class="navbar has-shadow">
    <div class="container">
      <div class="navbar-start">
        <div class="navbar-brand jack-icon">
          <img src="~/static/jack-icon.png" alt="jackのアイコン">
        </div>
        </div>
      <div class="navbar-end">
        <p class="navbar-item"><a>Home</a></p>
        <p class="navbar-item"><a>Works</a></p>
        <p class="navbar-item"><a>Contacts</a></p>
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

.navbar-start{
  margin-left: 20px;
}

.footer{
  background-color: #FDBE46;
}
</style>
