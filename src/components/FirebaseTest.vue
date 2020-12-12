<template>
  <div>
    <input v-model="message" placeholder="url"></input>
    <button v-on:click="parseImage">Parse</button>
    <p>textOutput</p>
  </div>
</template>


<script>
  import Vue from 'vue'

  export default {
    name: 'FirebaseTest',
    data() {
      return {
          textOutput: "Test"
      }
    },
    methods: {
      parseImage: function() {

      }
    }
  }

</script>
