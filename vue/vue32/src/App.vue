<template>
  <div id="app">
    
    <Menu></Menu>
    <stepNumber :num="num"></stepNumber>
    {{ num.value }}
    <br>
    <stepNumber :num="20"></stepNumber>
    <br>

    <Task v-for="(task, index) in tasks"
    :key="index" ></Task>
    <br>

    <div v-for="(product, index) in products"
    :key="index">
      {{product.name}} - {{product.price | formatTien(dong) }}
    </div>
    <div>
      Tong gia tri: {{ products.reduce( (total, p) => { return total + p.price}, 0) | formatTien(dong)}}
    </div>
    <button @click="products[0].price--">-</button>
    <br>

    <input type="text" v-model="name" name="">
    {{ name }}
  </div>



</template>

<script>

import Menu from './components/Menu.vue';
import stepNumber from './components/stepNumber.vue';
import Task from './components/Task.vue';

export default {
  data() {
    return {
      num: {
        value: 9
      },
      tasks: [
        {content: "Di cho", done: false},
        {content: "Nau an", done: false},
        {content: "Hoc js", done: false},
        {content: "Hoc html", done: false},

      ],
      products: [
      {name: 'iphone 10', price: 10000000},
      {name: 'iphone 7', price: 7000000},
      ]
   
    }
  },
  components: {
    Menu,
    stepNumber,
    Task
  },

  filters: {
    formatTien(x, donVi) {
      // body... 
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' ' + donVi;
    },
    chuHoa(text) {
      return text.toUpperCase();
    }
  }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  width: 600px;
  height: 400px;
  margin: 50px auto;
  padding: 10px;
  position: relative;
}


</style>