<template>
  <div class="game">
     <box class="game-field">
        <!-- TODO: move to sepearte component when the store is finished  -->
        <h2>Runde {{ rounds.current }} von {{ rounds.max }}</h2>
      
        <!-- TODO: move to scoring component -->
        <div class="score">
          <div class="player">
            <div class="icon-wrapper">
              <eva-icon name="person" fill="#515151" width="64px" height="64px" />
              <span class="player-score score-number">{{ score.player }}</span>
            </div>
          </div>
          <div class="seperator"> : </div>
          <div class="pc">
            <div class="icon-wrapper">
              <eva-icon name="monitor-outline" fill="#515151" width="64px" height="64px" />
              <span class="pc-score score-number">{{ score.player }}</span>
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="player">
            <card :options="options" />
          </div>
          <div class="pc">
            <!-- TODO: create options for pc -->
            <flip-card :options="options" :flip="flip" />
          </div>
        </div>

        <button @click="flip = !flip">Flip</button>
     </box>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Box from '@/components/Box.vue';
import Card from '@/components/Card.vue';
import FlipCard from '@/components/FlipCard.vue';

declare interface Rounds {
  current: number,
  max: number
}

declare interface Score {
  player: number,
  pc:  number
}

declare interface Options {
  label: string,
  value:  number,
  unit: string
}

declare interface PlayData {
  flip: boolean,
  rounds: Rounds,
  score: Score,
  options: Options[]
}

@Component({
  components: {
    Box,
    Card,
    FlipCard
  },
  data(): PlayData {
    return {
      flip: false,
      rounds: {
        current: 1,
        max: 7
      },
      score: {
        player: 0,
        pc: 0
      },
      options: [
        { 
          label: 'Wasser',
          value: 500,
          unit: 'L'
        },
        { 
          label: 'Wasser',
          value: 500,
          unit: 'L'
        },
        { 
          label: 'Wasser',
          value: 500,
          unit: 'L'
        },
        { 
          label: 'Wasser',
          value: 500,
          unit: 'L'
        },
        { 
          label: 'Wasser',
          value: 500,
          unit: 'L'
        }
      ]
    }
  },
  mounted() {
    /* Inform the store to create cards for the rounds */
  }
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
  text-align: center;
  width: 900px;
  min-height: 600px;
  padding-bottom: 25px;
}

.game-field h2 {
  background-color: #c44536;
  color: #fff;  
  margin: 0;
  padding: 15px;
}

.score {
  padding-top: 15px;
  display: grid;
  grid-template-columns: auto 15px auto; 
  background-color: #f3f3f3;
}

.score .player,
.score .pc {
  display: flex;
  justify-content: center;
  margin-left: -20px;
}

.seperator {
  font-size: 50px;
}

.icon-wrapper {
  width: 120px;
}

.score-number {
  font-size: 36px;
  font-weight: bold;
  display: block; 
  float: right;
  line-height: 64px;
}

.grid {
  margin-top: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 15px;
}

.grid .player,
.grid .pc {
  display: flex;
  justify-content: center;
}
</style>