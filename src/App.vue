<template>
  <div id="app">
    <Camera/>
    <ItemTable/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ItemTable from './components/ItemTable'
import Camera from './components/Camera'

export default {
  name: 'App',
  components: {
    ItemTable,
    Camera
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>