<template>
  <div class="flip-card" :class="flip && 'flip'">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <box class="back">
          <os-rad class="rad" />
          <h2 class="district-name">{{ districtLabel }}</h2>
        </box>
      </div>
      <div class="flip-card-back">
        <card :district="district" :highlight="highlight" :pc="true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Box from "@/components/Box.vue";
import Card from "@/components/Card.vue";
import OsRad from "@/components/OsRad.vue";
import { District } from "@/data/district";

import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    Box,
    Card,
    OsRad
  },
})
export default class FlipCard extends Vue {
  @Prop() private district!: District;
  @Prop() private districtLabel!: string;
  @Prop() private highlight!: Record<string, unknown>; // TODO write interface  
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
  text-align: left;
}

.rad {
  width: 200px;
  height: 200px; 
  margin-top: 50px;
  margin-left: 30px;
}

.district-name {
  position: absolute;
  bottom: 5%;
  right: 0;
  padding: 12px;
  color: #fff;
  font-size: 28px;
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

.flip-card-front,
.flip-card-back {
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
