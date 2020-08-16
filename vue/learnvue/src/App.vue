<template>
  <div id="app">  
    <input v-bind:id="inputId" v-bind:class="className" type="text" v-model="message" v-bind:name="nameName">
    <input type="checkbox" v-model="agree" name="">
    {{ agree }}
    <button v-on:click="message = 'Chuc mung ban da dang ky'">Dang Ky</button>
    <br>
  
    <h2 v-show="showHeader">Vui long chon mo hoc</h2>
    <input type="checkbox" v-model="showHeader" name="">
    <span 
    @click="langs.push('html')" 
    :class=" { selected: langs.includes('html') } ">Html</span>

    <span 
    @click="langs.push('js')" 
    :class=" { selected: langs.includes('js') } ">Javascript</span>

    <span 
    @click="langs.push('css')" 
    :class=" { selected: langs.includes('css') } ">CSS</span>

    <span 
    @click="langs.push('vuejs')" 
    :class=" { selected: langs.includes('vuejs') } ">Vue</span>
    <br>

    <div id="todoApp">
      <input type="text" name="" v-model="newTodo">
      <button @click="todos.push({ content: newTodo, done: false})">Them</button>
      
      <div id="list">
        <div v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" v-model="todo.done" name="">
          <button @click="todos.splice(index, 1)">Xoa</button>
          <span :class=" { done: todo.done == true} ">{{ todo.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
  data(){
    return {
      nameName: '',
      inputId: 'abc',
      className: 'xyz',
      message: 'Xin chao',
      agree: true,
      langs: [''],
      showHeader: true,
      newTodo: '',
      todos: [
      { content: 'di hoc', done: true },
      { content: 'nau an', done: false },
      { content: 'hoc tap', done: true },
      ],
    }
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

span {
  display: inline-block;
  border: 1px solid #ebebeb;
  margin-right: 10px;
  padding: 5px 10px;
}

span.selected {
  background-color: red;
  color: white;
}

#list div span.done {
  text-decoration: line-through;
}

#todoApp {
  max-width: 400px;
  border: 1px solid black;
}
</style>
