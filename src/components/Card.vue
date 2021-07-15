<template>
  <box class="card">
    <div class="header">
      <img src="http://placehold.it/275x200" />
    </div>
    <div class="content">
      <ul>
        <li v-for="(option, index) in options" :key="index" @click="$emit('answer', option)">
          <span class="label">{{ option.label }}</span>
          <span class="value">{{ option.value }} {{ option.unit }}</span>
        </li>
      </ul>
    </div>
  </box>
</template>

<script lang="ts">
import Box from '@/components/Box.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Box
  },
})
export default class Card extends Vue {
  @Prop() private options!: Record<string, unknown>;
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
  padding: 7px 15px 7px 15px
}

li:hover {
  background-color: #f4f4f4;
  cursor: pointer;
}

.value {
  text-align: right;
}
</style>
