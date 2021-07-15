<template>
  <div class="flip-card" :class="flip && 'flip'">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <box class="back" />
    </div>
    <div class="flip-card-back">
      <card :options="options" />
    </div>
  </div>
</div> 
</template>

<script lang="ts">
import Box from '@/components/Box.vue';
import Card from '@/components/Card.vue';

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Box,
    Card
  },
})
export default class FlipCard extends Vue {
  @Prop() private options!: Record<string, unknown>;
  @Prop() private flip!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back {
 border: 10px solid #fff;
 background-color: #ffc947;
 border-radius: 15px;
 width: 275px;
 height: 390px;
 padding-bottom: 15px;
}

.flip-card {
  background-color: transparent;
  width: 275px;
  height: 400px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card.flip .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #fff;
}

.flip-card-back {
  background-color: #fff;
  color: #515151;
  transform: rotateY(180deg);
  margin-left: 25px;
} 
</style>
