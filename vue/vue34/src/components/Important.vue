<template>
  <div>
    <h2>Thu quan trong</h2>
    <div v-for="(mail, index) in mails"
    :key="index">
      {{ mail }}
      <button>Chuyen</button>
    </div>

  </div>
</template>

<script>

import { bus } from '../main'

export default {
  mounted() {
    bus.$on('diChuyenMail', function (mail) {
      console.log(mail)
      // body... 
    } );
  },
  data() {
    return {
      mails: [
        'Gui anh Nguyen',
      ]

    }
  },
  components: {
    
  }
}
</script>

<style>


</style>
