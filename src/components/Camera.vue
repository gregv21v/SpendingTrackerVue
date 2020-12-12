<template>
  <div>
     <input type="file" v-on:change="receiptCapture"
       accept="image/*" capture="camera" /><br/>

     <img :src="photoObj"
       width="100px" height="100px"></img><br/>

     <button v-on:click="upload">
       Upload</button><br/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios)
  export default {
      name: 'Camera',
      data() {
          return {
              photoObj: {},
              img: '',
              imagePath: {}
          }
      },
      methods: {
        receiptCapture(event) {
          this.img = event.target.files[0]
          this.photoObj = URL
          .createObjectURL(this.img)
        },

        upload() {
          let fd = new FormData()

          fd.append("image", this.img)
          axios.post('upload_receipt_img', fd)
            .then(resp => {
               this.imagePath = resp.data.path

               console.log(this.imagePath)
            })

        }
      }
  }
</script>
