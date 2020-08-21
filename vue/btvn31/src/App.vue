<template>
  <div id="app">
    <h2>BTVN 31: Trac Nghiem</h2>

    <div id="form">
      <div
        id="ques"
        v-for="(ques, index) in questions"
        :key="index"
        v-show="index == indexDisplayed"
      >
        <span>{{ ques.quiz.text }}</span>

        <div id="dapAn" v-for="(an, index) in ques.ans" :key="index">
          <input
            :type="ques.inpt"
            :checked="an.selected"
            :name="ques.quiz.text"
            v-model="an.selected"
          >
          <span
            :class="[{red: an.selected == true & an.correct == false},
          {green: an.correct == true},
          {review: review == 1},
          ]"
          >{{ an.text }}</span>
        </div>
      </div>

      <div id="footer">
        <span
          @click="indexDisplayed = (indexDisplayed + questions.length - 1) % (questions.length)"
        >Previous</span>
        <span @click="finish = 1">Finish</span>
        <span @click="indexDisplayed = (indexDisplayed + 1) % (questions.length)">Next</span>
      </div>
      <div :class="{hided: finish == 0}">
        So cau tra loi dung la:
        {{
        questions.map( function(ques) {
        return ques.ans.map( function(ele) {
        return ele.selected == ele.correct
        }).reduce( (a,b) => a*b) == 1
        }).reduce((a, b) => a + b, 0)
        }}/{{questions.length}}
        <br>
        <button @click="review = 1">Review</button>
        <button
          @click="indexDisplayed = 0;
        finish = 0;
        review = 0;
         questions.forEach( ques => (ques.ans.forEach ( an => an.selected = false )))"
        >Reset</button>
      </div>
      <div :class="{hided: review == 0}">
        {{
        questions.map( function(ques) {
        return ques.ans.map( function(ele) {
        return ele.selected == ele.correct
        }).reduce( (a,b) => a*b) == 1
        })
        }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexDisplayed: 0,
      finish: 0,
      review: 0,

      questions: [
        {
          inpt: "checkbox",
          quiz: { text: "Quiz 1" },
          ans: [
            { text: "Dap an dung", selected: false, correct: true },
            { text: "Dap an sai", selected: false, correct: false },
            { text: "Dap an sai", selected: false, correct: false },
            { text: "Dap an sai", selected: false, correct: false }
          ]
        },
        {
          inpt: "checkbox",
          quiz: { text: "Quiz 2" },
          ans: [
            { text: "Dap an dung", selected: false, correct: true },
            { text: "Dap an dung", selected: false, correct: true },
            { text: "Dap an sai", selected: false, correct: false },
            { text: "Dap an sai", selected: false, correct: false }
          ]
        },
        {
          inpt: "checkbox",
          quiz: { text: "Quiz 3" },
          ans: [
            { text: "Dap an sai", selected: false, correct: false },
            { text: "Dap an sai", selected: false, correct: false },
            { text: "Dap an sai", selected: false, correct: false },
            { text: "Dap an dung", selected: false, correct: true }
          ]
        },
        {
          inpt: "checkbox",
          quiz: { text: "Quiz 4" },
          ans: [
            { text: "Dap an sai", selected: false, correct: false },
            { text: "Dap an sai", selected: false, correct: false },
            { text: "Dap an sai", selected: false, correct: false },
            { text: "Dap an dung", selected: false, correct: true }
          ]
        },
        {
          inpt: "checkbox",
          quiz: { text: "Quiz 5" },
          ans: [
            { text: "Dap an dung", selected: false, correct: true },
            { text: "Dap an sai", selected: false, correct: false },
            { text: "Dap an dung", selected: false, correct: true },
            { text: "Dap an sai", selected: false, correct: false }
          ]
        }
      ]
    };
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

#form {
  text-align: left;
  border: 1px solid gray;
  padding: 10px;
}

div {
  line-height: 30px;
}

#footer {
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: absolute;
  left: 0;
  bottom: 10px;
}

#footer span {
  width: 80px;
  height: 30px;
  line-height: 30px;
  background-color: gray;
  color: black;
  cursor: pointer;
  text-align: center;
}

#footer span:hover {
  background-color: #ebebeb;
}

.hided {
  display: none;
}
#ans div {
  border: 1px solid gray;
  line-height: 30px;
  max-width: 400px;
  margin-bottom: 5px;
  padding-left: 5px;
}

span.red.review {
  text-decoration: line-through;
  color: red;
}

span.green.review {
  color: green;
}
</style>
