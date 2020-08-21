<template>
  <div id="todoListApp">
    <div id="header">
      <ul>
        <li>
          <span @click="showWeekdays = !showWeekdays">Các danh sách công việc <i class="fa fa-angle-double-down"></i></span>

          <ul v-for="(day, dayIndex) in dayList"
          :key="dayIndex"
          id="weekDays"
          v-show="showWeekdays"
          > 
            <li @click="toDay = dayIndex;
            showWeekdays = !showWeekdays">{{ day.title }} </li>
          </ul>
          
        </li>
        <li>
          <span @click="newList('', dayList);
            toDay = dayList.length -1;
            createList = !createList">Tạo danh sách mới <i class="fa fa-plus"></i>
          </span>
        </li>
      </ul>
    </div>
    
    <div id="todos" 
    v-for="(day, dayIndex) in dayList" 
    :key="dayIndex"
    v-show="toDay == dayIndex">
    <div id="tienDo">
      <div>
        <p v-show="!createList">{{ day.title }}</p>

        <input type="text" placeholder="New list's name" v-model="day.title"  v-show="createList">

        

      </div>
      
      <p class="blue">Tất cả: {{ day.todos.length }}</p>
      <p class="green">Đã làm: {{ day.todos.filter( todo => todo.done == true).length }}</p>
      <p class="red">Chưa làm: {{ day.todos.filter( todo => todo.done == false).length }}</p>
    </div>
      
      <ul id="todo"
      v-for="(todo, doIndex) in day.todos"
      :key="doIndex">
        <li>
          <div :class="[{green: todo.done}, {through: todo.done}]">
          <span v-show="!todo.sua">{{doIndex + 1}}. {{ todo.text }}</span>
          <input type="text" v-model="todo.text" 
          v-show="todo.sua"></div>
          <div class="btns">
            <button 
            @click="todo.done = !todo.done">
          <div >{{'Done'.repeat(!todo.done)}}{{'Undo'.repeat(todo.done)}}</div>
        </button>
            <button class="sua"
            @click="todo.sua = !todo.sua"><i class="fa fa-pencil" aria-hidden="true" v-show="!todo.sua"></i>
            <span v-show="todo.sua">OK!</span></button>
            <button class="delete"
            @click="day.todos.splice(doIndex, 1)">X</button>
          </div>
        </li>
      </ul>
      <div id="doAdd"
      @click="day.todos.push({ text: '', done: false, sua: false})">+</div>
      <button v-show="createList" @click="createList= !createList">Save</button>
    </div>
    
  </div>
</template>

<script >
export default {
  data() {
    return {
      
      toDay: 0,
      showWeekdays: false,
      createList: false,
      dayList: [
      {
        title: 'Monday',
        todos: [
        { text: 'Ngủ dậy đánh răng rửa mặt và ăn sáng sau đó đi ngủ them 15-20 phút nữa rồi soanj sánh vở đi học', done: false, sua: false},
        { text: 'Đi học', done: false, sua: false},
        { text: 'Ăn trưa', done: false, sua: false},
        { text: 'Đi về', done: false, sua: false},
        { text: 'Nấu cơm', done: false, sua: false},
        ],
      },
      {
        title: 'Tuesday',
        todos: [
        { text: 'Quét nhà ', done: false, sua: false},
        { text: 'Gọi điện cho bố mẹ ', done: false, sua: false},
        { text: 'Đi siêu thị mua đồ ', done: false, sua: false},
        { text: 'Xem phim', done: false, sua: false},
        ],
      },
      ],
    }
  },
  methods: {
    newList: function (title, dayList) {
      var newList = {title: title, todos: []}
      dayList.push(newList);
    }
  }

}

</script>

<style scoped>
#todoListApp {
  width: 600px;
  border: 1px solid black;
  margin: 0px auto;
  padding: 5px;
}

#header {

}
#header > ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 10px 0;
  margin: 0 0;
}

#header {

}
#header span {
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 5px;
  color: black;


}
#header > ul > li > ul {
  display: flex;
  flex-direction: column;
  text-align: left;
}
#weekDays {
  margin-top: 5px;
  width: 100px;
  border-bottom: 1px gray solid;
  cursor: pointer;
}

#weekDays:hover {
  color: red;
}
#tienDo {
  text-align: left;
  padding: 0 5px;
  border-bottom: 1px solid gray;
}
#tienDo > div {
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  margin: 5px;
}

#todos {
  text-align: left;
}


ul {
  list-style-type: none;
}

ul#todo li {
  border: 1px solid gray;
  border-radius: 5px;
  line-height: 30px;
  padding: 0 5px;
  margin-right: 20px;

  display: flex;
  justify-content: space-between;
}
ul#todo li .btns {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  float: right;
}

.green {
  color: green;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
.through {
  text-decoration: line-through;
}

span:hover, button:hover {
  background-color: rgba(0,0,0,0.5);
}

span, button {
  cursor: pointer;
}

#doAdd {
  width: 200px;
  height: 30px;
  line-height: 30px;
  font-size: 40px;
  border: 1px gray solid;
  border-radius: 5px;
  margin: 0 auto;
  text-align: center;

}


</style>
