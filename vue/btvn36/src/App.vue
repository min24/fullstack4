<template>
  <div id="app">
    
    <transition name="transMask">
    <div class="mask" v-show="show" >
      <span id="x" @click="show = !show">x</span>
    </div>
    </transition>
    <transition name="transMenu">
    <div id="menuList" v-show="show">
      <h3><i class="fab fa-google-play"></i> Google Play </h3>
      <ul>
        <li><a href="#">My app & games</a></li>
        <li><a href="#">Notifications</a></li>
        <li><a href="#">Subscriptions</a></li>
        <li><a href="#">Wishlist</a></li>
      </ul>
      <ul>
        <li><a href="#">Account</a></li>
        <li><a href="#">Payment methods</a></li>
        <li><a href="#">Play Protect</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
      <ul>
        <li><a href="#">Open Movies app</a></li>
        <li><a href="#">Open Books app</a></li>
        <li><a href="#">Open Music app</a></li>
      </ul>
      <ul>
        <li><a href="#">Browse music</a></li>
      </ul>
      <ul>
        <li><a href="#">Redeem</a></li>
        <li><a href="#">Help & feedback</a></li>
        <li><a href="#">Parent Guide</a></li>
        <li><a href="#">About Google Play</a></li>
      </ul>
    </div>
  </transition>
  <span id="menu" @click="show = !show">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>


export default {
  data() {
    return {
      show: false,
    }
  },
  components: {
    
  }
}
</script>

<style>
#app {
  width: 370px;
  height: 700px;
  border-left: 5px solid black;
  border-right: 5px solid black;
  border-top: 30px solid black;
  border-bottom: 30px solid black;
  border-radius: 15px;
  background-image: url('https://www.takadada.com/wp-content/uploads/2019/11/hinh-nen-bau-troi-dem-61.jpg');
  background-size: cover;
  background-position: center center;

  position: relative;


}

#menu {
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #ebebeb;
  background-color: transparent;

  margin: 10px;
}

#menu:hover {
  color: rgb(150, 150, 150);
 }

#menu:active {
  color: rgb(100, 100, 100);
}

.mask {
  position: absolute;
  right: 0;
  top: 0;

  background-color: rgba(0,0,0,0.7);
  height: 100%;
  width: 100%;
}

.mask span {
  float: right;
  background-color: gray;
  color: black;

  height: 30px;
  line-height: 30px;
  width: 30px;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;

  margin: 2px;
  cursor: pointer;
}
li {
  list-style: none;
  text-decoration: none;
}

a {
  text-decoration: none;
}


#menuList {
  background-color: white;
  width: 270px;
  max-height: 700px;
  overflow: scroll;

  position: fixed;


  padding: 0 5px;
}
#menuList h3 {
  color: gray;
  height: 50px;
  line-height: 50px;
}
#menuList ul {
  border-top: 1px solid #ebebeb;
}
#menuList ul {
  padding: 20px;
  margin: 0;
}
#menuList ul li a {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #5b5b5b;

}

.transMenu-enter, .transMenu-leave-to  {
  left: -270px;
}

.transMenu-enter-to, .transMenu-leave  {
  left: 0px;
}

.transMenu-enter-active, .transMenu-leave-active  {
  transition: left 1s;
}

.transMask-enter, .transMask-leave-to  {
  opacity: 0;
}

.transMask-enter-to, .transMask-leave  {
  opacity: 1;
}

.transMask-enter-active, .transMask-leave-active  {
  transition: opacity 1s;
}


</style>
