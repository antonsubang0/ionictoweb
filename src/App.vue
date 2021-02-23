<template>
  <div id="app">
    <router-view/>
    <div class="footercs">Created by : Antonius R.</div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-link.router-link-exact-active.router-link-active {
  color: #fff!important;
  font-weight: bold;
}

.nav-link.router-link-active:hover {
  font-weight: bolder;
}
.navbar-brand {
  font-weight: bold;
}
.footercs {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding-top: 15px;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 10px 10px 16px black;
  border-top: 1px solid red;
}

</style>