<template>
  <div id="app">
    <Camera/>
    <ItemTable/>
  </div>
</template>

<script>
import ItemTable from './components/ItemTable'
import Camera from './components/Camera'
import FirebaseTest from './components/FirebaseTest'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


export default {
  name: 'App',
  components: {
    //ItemTable,
    //Camera,
    FirebaseTest
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
