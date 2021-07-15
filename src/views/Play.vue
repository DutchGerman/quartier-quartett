<template>
  <div class="game">
     <box class="game-field">
       <h2>Example Eva Icon</h2>
       <eva-icon name="github" animation="pulse" fill="limegreen"></eva-icon>
     </box>
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

.game-field {
  padding: 15px;
  text-align: center;
}
</style>