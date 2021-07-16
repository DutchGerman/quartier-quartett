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
            <span class="pc-score score-number">{{ score.pc }}</span>
          </div>
        </div>
      </div>
      
      <div v-if="roundState" class="round-state">
        <h1 v-if="roundState === 'won'" class="won">Gewonnen!</h1>
        <h1 v-if="roundState === 'lost'" class="lost">Verloren!</h1>
      </div>

      <div class="grid">
        <div class="player">
          <card 
            :district="options" 
            :district-data="sectionPlayerObject"
            :highlight="highlight" 
            :class="recard && 'recard'" 
            class="card-animation" 
            @answer="answer" 
          />
        </div>
        <div class="pc">
          <!-- TODO: create district for pc -->
          <flip-card 
            :district="optionsPc" 
            :district-label="districtLabelPc" 
            :district-id="districtIdPc" 
            :flip="flip" 
            :highlight="highlight" 
          />
        </div>
      </div>
      <!-- TODO: Set next round -->
      <!--  -->
      <div class="footer">
        <button v-if="flip" @click="nextRound">
          {{ buttonText }}
        </button>
      </div>
    </box>
  </div>
</template>

<script >
import json from '@/data/gamedata.json';
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
      recard: false,
      roundState: null,
      highlight: {
        label: null,
        state: null
      },
      sectionPlayer: null, 
      sectionPlayerObject: {},
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
    buttonText () {
      return (this.rounds.current === this.rounds.max) ? 'Spiel Beenden.' : 'Nächste Runde!' 
    },
    districtLabelPc () {
      return this.sectionPc?.name 
    },
    districtIdPc () {
      return this.sectionPc?.id 
    },
    sectionPc() {
      return this.sectionRoundsPc[this.rounds.current-1]
    },
    optionsPc() {
      return this.options.map( item => {
        return { 
          ...item,
          value: json.find(a => a.id === this.sectionPc.id).attributes.find(b => b.label === item.label).value
        } 
      });
    }
  },
  methods: {
    shuffleDeck() {
      this.options = this.allOptions.sort(() => Math.random() - 0.5).slice(0, 5)
    },
    answer(option) {
      if(!this.flip) { 
        this.flip = true;
        const attrs = json.filter(item => item.id === this.sectionPc.id)[0].attributes 
        const pcVal = attrs.filter(item => item.label === option.label)[0].value
        
        if ((option.winCondition === 'higher' && option.value > pcVal) || 
            (option.winCondition === 'lower' && option.value < pcVal)) {
          this.roundState = 'won'
          this.highlight = { label: option.label, state: 'won' };
          this.score.player++;
        } else {
          this.roundState = 'lost'
          this.highlight = { label: option.label, state: 'lost' };
          this.score.pc++;
        }
      }
    },
    nextRound() {
      if(this.rounds.max !== this.rounds.current) {
        this.recard = true;
        setTimeout(() => {
          this.recard = false;
          this.flip = false;
          this.roundState = null;
          this.highlight = {
            label: null,
            state: null
          };
          this.rounds.current++;
          this.shuffleDeck();
        }, 1000);
        
      } else {
        this.$router.push({ name: 'Home' });
      }
    }
  },
  mounted() {

   // Start game:
    this.sectionPlayer = this.$store.state.district ?? Math.floor(Math.random() * 23) + 1;

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

    this.sectionPlayerObject = { id: itemsForPlayer[0].id, name: itemsForPlayer[0].name }
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
  overflow: hidden;
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

.round-state {
  position: absolute;
  display: flex;
  width: 900px;
  justify-content: center;
  z-index: 4;
  margin-top: -95px;
}

.round-state h1 {
  text-align: center;
  width: 300px;
  background-color: #F3F3F3;
  padding: 15px;
}

.round-state h1.won {
  color: #0d9d19;
}

.round-state h1.lost {
  color: #c1121f;
}

.footer {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card-animation {
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)
}

.recard {
  margin-left: -800px;
}
</style>