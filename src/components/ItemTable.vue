<template>
   <table>
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td>{{item.quantity}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
        </tr>
      </tbody>
    </table>
</template>


<script>
export default {
  name: 'ItemTable',
  data () {
    return {
      items: [
        {
          id: 1, quantity: 1, 
          name: 'banana', price: .76
        },
        {
          id: 1, quantity: 3, 
          name: 'apple', price: 1.99
        },
        {
          id: 1, quantity: 5, 
          name: 'orange', price: 2.99
        }
      ]
    }
  }
}
</script>