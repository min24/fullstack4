<template>
  <div id="app">
    <div class="container">
      <div style="padding: 5px;">
        <span style="float: left;"> Danh sách sản phẩm đang bán:</span>
        <div style="float: right;">
          <span>Hiển thị: </span>
          <input type="radio" name="chamPhay" checked="true" @click="chamPhay = '.'">
          <span>Dấu chấm  </span>
          <input type="radio" name="chamPhay" @click="chamPhay = ','">
          <span>Dấu phẩy</span>
        </div>
        <br>
      </div>
      <div class="row row-cols-3" id="tsp">
        <div class="col-7">
          Tên sản phẩm 
        </div>
        <div class="col-3">
          Giá 
        </div>
        <div class="col-2">
        </div>
      </div>
      <Table v-for="(mobile, index) in mobiles" :key="index" :mobile="mobile" 
      :status="Mua" :chamPhay="chamPhay"
      :clicked="daMua"></Table>
    </div>
    <br>
    <br>
    <div class="container">
      <div class="row row-cols-3" id="tsp">
        <div class="col-7">
          Tên sản phẩm 
        </div>
        <div class="col-3">
          Giá 
        </div>
        <div class="col-2">
        </div>
      </div>
      <Table v-for="(mobile, index) in xoaMobile(daMua)" :key="index" :mobile="mobile" :status="Xoa" :chamPhay="chamPhay"
      ></Table>
      <div>
        <span style="float: left;">Tổng: {{ xoaMobile(daMua).reduce( (total, p) => { return total + p.price}, 0) | formatTien('VND', chamPhay)}}</span>
        <span>( {{ (1/20000)*xoaMobile(daMua).reduce( (total, p) => { return total + p.price}, 0) | formatTien('USD', chamPhay)}} )</span>
      </div>
    </div>

  </div>
</template>

<script>
import Table from './components/Table.vue'

export default {
  data() {
    return {
      chamPhay: '.',
      Mua: 'Mua',
      Xoa: 'Xoa',
      mobiles: [
        {name: 'Iphone 6', price: 6000000, xoa: false},
        {name: 'Iphone 7', price: 7000000, xoa: false},
        {name: 'Iphone 8', price: 8000000, xoa: false},
        {name: 'Iphone 9', price: 9000000, xoa: false},
        {name: 'Iphone X', price: 10000000, xoa: false},
        {name: 'Iphone 11', price: 11000000, xoa: false},
        {name: 'Iphone 12', price: 12000000, xoa: false},
        ],

      daMua: [],

    }
  },
  components: {
    Table,
  },
  methods: {
    xoaMobile: function(arr) {
      return arr.filter(ele => ele.xoa == false)
    }
  },
  filters: {
    formatTien(x, donVi, chamPhay) {
      // body... 
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, chamPhay) + ' ' + donVi;
    },
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  padding: 0;
  width: 800px;
  min-height: 300px;
  border: 1px solid black;
}
#tsp > div {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
}
.row {
  margin: 0 auto;
  border-right: 1px solid black;

}
.row > div:first-child {
  text-align: left;
}


</style>
