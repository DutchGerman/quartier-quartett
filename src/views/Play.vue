<template>
  <div class="game">
     <box>Game view ?</box>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Box from '@/components/Box.vue';

@Component({
  components: {
    Box
  },
})
export default class Play extends Vue {}
</script>

<style lang='css' scoped>
.game {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>