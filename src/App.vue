<template>
  <div id="app">
    
    <div id="nav">
      <!-- TODO: sidebar nav ? -->
      <router-link :to="{ name: 'Home' }">Landing page</router-link> |
      <router-link :to="{ name: 'Play' }">Start Route</router-link>
    </div>

    <router-view/>
  </div>
</template>

<style>
html, body {
  background-color: #669bbc;
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
}

#nav {
  position: fixed;
}
</style>

