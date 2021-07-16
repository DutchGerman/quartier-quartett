<template>
  <div>
    <select @change="setDistrict()" v-model="value">
      <option :value="null" :selected="!value">
        Zufällig
      </option>
      <option 
        v-for="district in districts" 
        :key="district.id" 
        :value="district.id"
        :selected="district.id === $store.state.district"
        >
        {{ district.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name:'DistrictSelector',
  data () {
    return {
      value: null,
      districts: [
        { id: 0, name: 'Innenstadt'  },
        { id: 1, name: 'Weststadt' },
        { id: 2, name: 'Westerberg' },
        { id: 3, name: 'Eversburg' },
        { id: 4, name: 'Hafen' },
        { id: 5, name: 'Sonnenhügel' },
        { id: 6, name: 'Haste' },
        { id: 7, name: 'Dodesheide' },
        { id: 8, name: 'Gartlage' },
        { id: 9, name: 'Schinkel' },
        { id: 10, name: 'Widukindland' },
        { id: 11, name: 'Schinkel-Ost' },
        { id: 12, name: 'Fledder' },
        { id: 13, name: 'Schölerberg' },
        { id: 14, name: 'Kalkhügel' },
        { id: 15, name: 'Wüste' },
        { id: 16, name: 'Sutthausen' },
        { id: 17, name: 'Hellern' },
        { id: 18, name: 'Atter' },
        { id: 19, name: 'Pye' },
        { id: 20, name: 'Darum/Gretesch/Lüstringen' },
        { id: 21, name: 'Voxtrup' },
        { id: 22, name: 'Nahne' }
      ]
    }
  },
  methods: {
    setDistrict(val) {
      this.$store.commit('changeDistrict', this.value)
    }
  }
}
</script>

<style lang="css" scoped>
select {
  height: 32px;
  font-size: 14px;
  width: 100%;
}
</style>