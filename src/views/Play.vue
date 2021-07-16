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
        <div class="seperator">:</div>
        <div class="pc">
          <div class="icon-wrapper">
            <eva-icon
              name="monitor-outline"
              fill="#515151"
              width="64px"
              height="64px"
            />
            <span class="pc-score score-number">{{ score.player }}</span>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="player">
          <card :district="options" @answer="answer" />
        </div>
        <div class="pc">
          <!-- TODO: create district for pc -->
          <flip-card :district="options" :flip="flip" />
        </div>
      </div>
      <!-- TODO: Set next round -->
      <button v-if="flip" @click="flip = false">Nachste Runde!</button>
    </box>
  </div>
</template>

<script>
import json from '@/data/mock.json';
import Box from '@/components/Box.vue';
import Card from '@/components/Card.vue';
import FlipCard from '@/components/FlipCard.vue';

// Todo Typescript this
export default {
  name: "Play",
  components: {
    Box,
    Card,
    FlipCard,
  },
  data() {
    return {
      flip: false,
      sectionPlayer: null, 
      sectionRoundsPc: [],
      allOptions: [],
      rounds: {
        current: 1,
        max: 7,
      },
      score: {
        player: 0,
        pc: 0,
      },
      options: []
    }
  },
  computed: {
    sectionPc() {
      return this.sectionRoundsPc[this.rounds.current]
    }
  },
  methods: {
    suffleDeck() {
      this.options = this.allOptions.sort(() => Math.random() - 0.5).slice(0, 5)
    },
    answer(option) {
      this.flip = true;
      const attrs = json.filter(item => item.id === this.sectionPc.id)[0].attributes 
      const pcVal = attrs.filter(item => item.label === option.label)[0].value
      if (option.value > pcVal) {
        console.log('CORRECT')
      } else {
        console.log('INCORRECT')
      }
    }
  },
  mounted() {

   // Start game:
    this.sectionPlayer = 16 // Todo: Change to selector prop from Home
    const sectors = json
    const shuffled = sectors.sort(() => Math.random() - 0.5)
    const itemsForPc = shuffled.filter(item => item.id != this.sectionPlayer)
    const itemsForPlayer = shuffled.filter(item => item.id === this.sectionPlayer )

    // Get random cityparts per round
    const randomParts = []
    for (let index = 0; index < this.rounds.max; index++) {
      randomParts[index] = itemsForPc[Math.floor(Math.random()*itemsForPc.length)];
    }
    this.sectionRoundsPc = randomParts

    // Suffle deck
    this.allOptions = itemsForPlayer.map(item => item.attributes)[0]
    this.options = this.allOptions.sort(() => Math.random() - 0.5).slice(0, 5)

  }
}

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