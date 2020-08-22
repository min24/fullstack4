<template>
  <div id="app">
    <div id="sidebar">
      <ul>
        <li><a href="inbox">Hop thu den</a></li>
        <li><a href="important">Quan trong</a></li>
      </ul>
    </div>

    <div id="content">
      Noi dung
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

export default {
  components: {
    
  }
}
</script>

<style>
#app {
  display: flex;
  width: 100%;
}

#sidebar {
  width: 100px;
  border: 1px solid black;
}

#content {
  border: 1px solid red;
}

</style>
