<template>
  <div class='container'>
   <table>
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" 
          :key="item.id" class="listItem">
          <td>{{item.quantity}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
        </tr>
        <tr>
         <td>
            <input id="quantity" type="text">
            </input>
         </td>
         <td>
            <input id="name" type="text">
            </input>
         </td>
         <td>
            <input id="price" type="text">
            </input>
         </td>
        </tr>
        <tr>
          <td colspan="3">
             <button v-on:click="addItem">
              +
             </button>
          </td>
        </tr>
        <tr>
          <td colspan="3">
             <button v-on:click="saveItems">
              Save Items
             </button>
          </td>
        </tr>
        <tr>
          <td> 
            <input id="receiptId" type="text">
            </input>
          </td>
          <td colspan="2">
             <button v-on:click="loadReceipt">
              Load Receipt
             </button>
          </td>
        </tr>
        <tr>
          <td colspan="3">
             <button v-on:click="loadLastReceipt">
              Load Last
             </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

export default {
  name: 'ItemTable',
  data () {
    return {
      lastId: 3,
      items: [
        {
          id: 1, quantity: 1, 
          name: 'banana', price: .76
        },
        {
          id: 2, quantity: 3, 
          name: 'apple', price: 1.77
        },
        {
          id: 3, quantity: 5, 
          name: 'orange', price: 2.39
        }
      ]
    }
  },
  methods: {
    addItem: function() {
      let quantity = document
            .getElementById('quantity')
      let name = document.getElementById('name')
      let price = document.getElementById('price')
      
      this.lastId += 1
      this.items.push({
        id: this.lastId,
        quantity: quantity.value,
        name: name.value,
        price: price.value
      })
      
    },
    saveItems: function() {
      axios.post("upload_receipt_data",
        JSON.stringify(this.items), {
          headers: {
            'Content-Type': 'application/json'
          }
        })
    },
    loadReceipt: function() {
      
      console.log("loading receipt...")
      let receiptId = document
            .getElementById('receiptId').value
            
      let self = this
      axios.get("receipt/" + receiptId)
        .then(function(resp) {
          console.log(JSON.stringify(resp.data))
          self.items = resp.data
          console.log(resp.data)
        })
    },
    loadLastReceipt: function() {
      let self = this
      axios.get("lastReceipt")
        .then(function(resp) {
          self.items = resp.data
          console.log(resp.data)
        })
    }
  }
}
</script>

<style>
button {
  width: 100%;
  height: 50px;
  font-size: 20px;
}

.listItem > td {
  border-bottom: solid grey 5px;
  background: #A0A0A0;
}

input {
  width:80%;
  height: 35px;
  font-size: 20px;
}

.container {
  width: 100%;
  margin: auto;
}

</style>