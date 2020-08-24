<template>
  <div id="app">
    <div>ABC</div>
    <div id="sidebar">
      <ul>
        <li><router-link :to="{ name: 'inbox' }" > Hop thu den</router-link></li>
        <li><router-link :to="{ name: 'important' }" >Quan trong</router-link></li>
      </ul>
    </div>

    <div id="content">
      
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      inboxMail: [],
      importantMails: []
    }
  },
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
