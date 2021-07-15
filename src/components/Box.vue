<template>
  <div class="box">
      <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Box extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  background-color: #fff;
  box-shadow: 4px 4px 4px -6px rgba(0,0,0,0.65)
}
</style>
