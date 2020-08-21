<template>
  <div id="app">
  <h2>BTVN1: TodoLists</h2>  
  <todoList></todoList>
  <h2>BTVN2: Select multiple</h2>
  <selectMultiple></selectMultiple>
  </div>
</template>

<script>

import todoList from './components/todoList.vue'
import selectMultiple from './components/selectMultiple.vue'

export default {

  components: {
    todoList,
    selectMultiple
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


</style>
