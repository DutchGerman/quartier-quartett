<template>
  <div>
    <h2>Hello I'm Javascript</h2>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "ExampleJavaScript",
  props: {
    msg: {
      type: String,
      requered: true
    }
  }
}
</script>

<style lang="css" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>