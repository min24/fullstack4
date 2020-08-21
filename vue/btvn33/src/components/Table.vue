<template>
  <div class="mobile" >
    <div class="row row-cols-3">
        <div class="col-7">
          {{ mobile.name }}
        </div>
        <div class="col-3">
          {{ mobile.price | formatTien('VND', chamPhay)}}
        </div>
        <div class="col-2" v-if="status == 'Mua'" @click="clicked.push(mobile); mobile.xoa = false"  >
          <span >Mua</span>
        </div>
        <div class="col-2" v-if="status == 'Xoa'" @click="mobile.xoa = true" >
          <span >Xoa</span>
        </div>
      </div>
  </div>

</template>

<script>
  
export default {
  data() {
    return {
      
    }
  },
  props: {
    
    clicked: {
      type: Array,
      default: function() {
        return []
      }
    },
    chamPhay: {
      type: String,
      default: function() {
        return '.'
      }
    },
    status: {
      type: String,
      default: function() {
        return 'Mua hay Xoa?'
      },
      require: false,
    },
    mobile: {
      type: Object,
      default: function(){
        return {name: "Tên điện thoại", price: 0, xoa: false}
      },
      require: false,
    },

  },
  filters: {
    formatTien(x, donVi, chamPhay) {
      // body... 
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, chamPhay) + ' ' + donVi;
    },
  }
}

</script>

<style scoped>
.row {
  margin: 0 auto;

}
.row > div:first-child {
  text-align: left;
}
.row > div {
  border-bottom: 1px solid black;
  border-left: 1px solid black;
}

.col-2:hover {
  background-color: green;
}
.col-2:active {
  background-color: gray;
}
.col-2 {
  cursor: pointer;
}
</style>