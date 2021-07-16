<template>
  <div class="home">
    <box class="start">
      <h2>OS-City-Quartett</h2>
      <div class="introtext">
        <p><b>Wie gut kennen Sie Osnabrück?</b> <br> Testen Sie Ihr Wissen und entdecken Sie spannende Fakten im Quartett.</p>
        </div>
      <p>Das Spielprinzip ist einfach: Die Stadtteile treten gegeneinander an und der bessere gewinnt! Wählen Sie die Zahl, mit der Sie den Stadtteil auf der verdeckten Karte am besten übertrumpfen könnten. Das Ergebnis zeigt, ob Sie recht hatten. Viel Spaß!</p>
      <div class="district-grid">
        <span>Mit welchem Stadtteil wollen Sie spielen?</span>
        <district-selector class="district" />
      </div>
      <div class="button-wrapper">
        <router-link class="start-button" :to="{ name: 'Play' }">LOS!</router-link>
      </div>
      <div class="menu">
        <router-link :to="{ name: 'Readme' }"> Readme </router-link>
        <router-link :to="{ name: 'Rules' }"> Spielanweisung </router-link>
      </div>
    </box>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Box from '@/components/Box.vue';
import DistrictSelector from '@/components/DistrictSelector.vue';

@Component({
  components: {
    Box,
    DistrictSelector
  },
})
export default class Home extends Vue {}
</script>

<style lang="css" scoped>
h2 {
  background-color: #c44536;
  color: #fff;
  margin: 0;
  padding: 15px;
  text-align: center;
}

.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.start {
  width: 660px;
  height: auto;
  min-height: 400px;
}

.start p {
  padding: 0 25px;
  text-align: justify;
  line-height: 30px;
}

.district-grid {
  padding: 0 25px;
}

.district-grid span {
  font-weight: bold;
  display: inline-block;
  margin-bottom: 7px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

.start-button {
  background-color: #ffb41f;
  padding: 5px 30px;
  color: #fff;
  font-size: 27px;
  font-family: 'Rubik', sans-serif;
  text-decoration: none;
  font-weight: 900;
}

.start-button:hover {
  background-color: rgb(209, 151, 36);
}

.menu {
  position: absolute;
  margin-top: 50px;
  text-align: center;
}

.menu a {
  display: inline-block;
  margin-right: 15px;
  background-color: #255f85;
  color: #fff;
  padding: 15px 0;
  text-decoration: none;
  text-align: center;
  width: 150px;
}

.menu a:hover { 
  background-color: #457a9e;
}

.introtext p {
  text-align: center;
}
</style>
