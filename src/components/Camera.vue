<template>
  <div>
     <input type="file" v-on:change="receiptCapture"
       accept="image/*" capture="camera" /><br/>
       
     <img :src="photo" 
       width="100px" height="100px"></img>
  </div>
</template>

<script>
    export default {
        name: 'camera',
        data() {
            return {
                photo: {}
            }
        },
        methods: {
          receiptCapture(event) {
            this.photo = URL
            .createObjectURL(event.target.files[0])
            
            console.log(this.photo)
          }
        }
    }
</script>