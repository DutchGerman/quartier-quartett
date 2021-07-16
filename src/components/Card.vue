<template>
  <box class="card">
    <div class="header">
      <img :src="'images/' + districtData.id + '.jpg'" />
      <div class="district-name">{{ districtData.name }}</div>
    </div>
    <div class="content">
      <ul :class="pc ? 'pc' : 'player'">
        <li
          v-for="(attribute, index) in district"
          :key="index"
          :class="(attribute.label === highlight.label) && highlight.state"
          @click="$emit('answer', attribute)">
            <eva-icon
              :name="attribute.winCondition === 'higher' ? 'arrow-ios-upward-outline' : 'arrow-ios-downward-outline'"
              fill="#515151"
              width="12px"
              height="12px"/>
          <span class="label">{{ attribute.label }}</span>
          <span class="value">{{ +parseFloat(attribute.value).toFixed(2) }} {{ attribute.unit }}</span>
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
  @Prop() private districtData!: Record<string, unknown>; // Todo: merge all in disctrict
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
  /* height: 390px; */
  height: auto;
  padding-bottom: 15px;
}

.header {
  background-color: #fff;
  z-index: 3;
  position: relative;
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(255,201,71,1) 52%, rgba(255,210,102,1) 100%, rgba(255,255,255,1) 100%);
}

.header img {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 275px;
  height: 200px;
  object-fit: cover;
}

.district-name {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 12px;
  color: #000;
  text-shadow: 1px ;
  background-color: white;
}

.district-name:before {
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 46px 46px 0px 0px;
  border-color: transparent #fff transparent transparent;
  position: absolute;
  bottom: 0px;
  margin-left: -58px;
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
  grid-template-columns: 24px auto 30%;
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
