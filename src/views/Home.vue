<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <example-type-script msg="Welcome to Your Vue.js + TypeScript App"/>

    <example-java-script msg="This is just javscript" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ExampleTypeScript from '@/components/ExampleTypeScript.vue';
import ExampleJavaScript from '@/components/ExampleJavaScript.vue'; 

@Component({
  components: {
    ExampleTypeScript,
    ExampleJavaScript
  },
})
export default class Home extends Vue {}
</script>
