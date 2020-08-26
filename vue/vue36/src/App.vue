<template>
  <div id="app">
    <button @click="show1 = !show1">Show</button>

    <transition name="cool" :duration="1000">
      <div v-show="show1">
      Content
      </div>
    </transition>
    
    <br>
    <button @click="show = !show">Add to cart</button>
    <transition name="message" v-on:afterEnter="afterShowMessage">
      <div v-show="show" class="message">
      Ban vua them 1 san pham vao gio hang
      </div>
    </transition>    
    <div v-show="showGotoCartMessage">
      Di den gio hang
    </div>
    
  </div>
</template>

<script>

export default {
  data(){
    return {
      show1: false,
      show: false,
      showGotoCartMessage: false,
    }
  },
  components: {
    
  },
  methods: {
    afterShowMessage: function(){
      this.show = false;
    }
  }
}
</script>

<style>
.cool-enter {
  opacity: 0;
}

.cool-enter-to {
  opacity: 1;
}

.cool-enter-active {
  transition: opacity 2s;
}
.cool-leave {
  color: red;
}
.cool-leave-to {
  opacity: 0;
  color: green;
}

.cool-leave-active {
  transition: opacity 2s, color 2s;
}



.message {
  background-color: #b6ffb6;
  width: 400px;
  min-height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.5);
  padding: 10px;
  position: fixed;
  right: 10px;
  bottom: 10px;
}


.message-enter, .message-leave-to {
  bottom: -90px;
}


/* trang thai da xuat hien */
.message-enter-to, .message-leave {
  bottom: 10px;
}
.message-enter-active, .message-leave-active {
  transition: bottom 1s;
}


</style>
