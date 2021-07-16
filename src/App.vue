<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Rubik:wght@400;500;600;700&display=swap');


html, body {
  background-color: #669bbc;
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'PT Sans', sans-serif;
  color: #515151;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Rubik', sans-serif;
}

#app {
  width: 100%;
  height: 100%;
}

#confetti-canvas {
  z-index: 200;
}
</style>

