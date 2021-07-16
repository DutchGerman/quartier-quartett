<template>
  <box class="card">
    <div class="header">
      <img :src="'assets/' + district.id + '.jpg'" />
      <div class="district-name">{{ district.name }}</div>
    </div>
    <div class="content">
      <ul :class="pc ? 'pc' : 'player'">
        <li
          v-for="(attribute, index) in district"
          :key="index"
          :class="(attribute.label === highlight.label) && highlight.state"
          @click="$emit('answer', attribute)">
          <span class="label">{{ attribute.label }}
            <eva-icon
              :name="attribute.winCondition === 'higher' ? 'arrow-ios-upward-outline' : 'arrow-ios-downward-outline'"
              fill="#515151"
              width="12px"
              height="12px"/>
          </span>
          <span class="value">{{ attribute.value }} {{ attribute.unit }}</span>
        </li>
      </ul>
    </div>
  </box>
</template>

<script lang="ts">
import Box from "@/components/Box.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { District } from "@/data/district";

@Component({
  components: {
    Box,
  },
})
export default class Card extends Vue {
  @Prop() private district!: District;
  @Prop() private pc!: boolean;
  @Prop() private highlight!: Record<string, unknown>; // TODO write interface
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  border: 10px solid #ffc947;
  border-radius: 15px;
  width: 275px;
  height: 390px;
  padding-bottom: 15px;
}

.header {
  background-color: #ffc947;
  z-index: 3;
  position: relative;
}

.district-name {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 12px;
}


.player .won {
  background-color: #caf2ca;
}

.player .lost {
  background-color: #ffdada;
}

.pc .won {
  background-color: #ffdada;
}

.pc .lost {
  background-color: #caf2ca;
}

img {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.content {
  background-color: #fff;
  margin-top: -5px;
  padding-top: 15px;
}

ul {
  padding: 10px;
  margin: 0;
  list-style: none;
  text-align: left;
}

li {
  font-size: 13px;
  margin: 0;
  display: grid;
  grid-template-columns: 60% 40%;
  border-bottom: 1px solid #cecece;
  padding: 7px 15px 7px 15px;
}

li:hover {
  background-color: #f4f4f4;
  cursor: pointer;
}

.value {
  text-align: right;
}
</style>
