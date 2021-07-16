<template>
  <div class="readme">
    <box class="wrapper">
      <h2>Readme</h2>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod hendrerit justo, nec pretium quam condimentum vel. Pellentesque id auctor nunc, in scelerisque nunc. Maecenas vitae pharetra mauris. Curabitur dignissim, tellus vel bibendum dictum, nunc lectus consectetur leo, in pulvinar augue felis at velit. Cras.</p>
    
        <router-link class="start-button" :to="{ name: 'Home' }">Zurück</router-link>
      </div>
    </box>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Box from '@/components/Box.vue';

@Component({
  components: {
    Box
  },
})
export default class Rules extends Vue {}
</script>

<style lang="css" scoped>
h2 {
  background-color: #c44536;
  color: #fff;
  margin: 0;
  padding: 15px;
  text-align: center;
}

.readme {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 660px;
  height: auto;
  min-height: 400px;
}

.content {
  padding: 10px 25px;
}

.content p {
  line-height: 30px;
}

a {
  color: #3e7da3;  
}
</style>
