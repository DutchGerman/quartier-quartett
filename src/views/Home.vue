<template>
  <div class="home">
    <box class="start">
      <h2>OS-City-Quartett</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod hendrerit justo, nec pretium quam condimentum vel. Pellentesque id auctor nunc, in scelerisque nunc. Maecenas vitae pharetra mauris. Curabitur dignissim, tellus vel bibendum dictum, nunc lectus consectetur leo, in pulvinar augue felis at velit. Cras.</p>
      <div class="district-grid">
        <span>Stadtteil</span>
        <district-selector class="district" />
      </div>
      <div class="button-wrapper">
        <router-link class="start-button" :to="{ name: 'Play' }">LOS!</router-link>
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
  margin-top: 25px;
}

.start-button {
  background-color: #ffb41f;
  padding: 5px 30px;
  color: #fff;
  font-size: 48px;
  font-family: 'Rubik', sans-serif;
  text-decoration: none;
}

.start-button:hover {
  background-color: rgb(209, 151, 36);
}
</style>
