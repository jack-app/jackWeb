<template>
<div class="layout">
  <nav class="navbar">
    <div class="navbar-start">
      <img src="#" alt="jackのアイコン">
    </div>
    <div class="navbar-end">
      <p class="navbar-item"><a>Home</a></p>
      <p class="navbar-item"><a>Works</a></p>
      <p class="navbar-item"><a>Contacts</a></p>
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

.layout{
  background-color: #F6F6F7;
}

.navbar{
  background-color: #FDBE46;
}

.footer{
  background-color: #FDBE46;
}
</style>
