<template>
  <div>
    <h2>Hop thu den</h2>
    <div v-for="(mail, index) in mails"
    :key="index">
      {{ mail }}
      <button @click="moveToImportant(mail)">Chuyen</button>
    </div>

  </div>
</template>

<script>

import { bus } from '../main'

export default {
  data() {
    return {
      mails: [
        'xin chao',
        'Chao ban, day la Bui Van Nguyen',
        'Kich hoat tai khoan'
      ]

    }
  },
  methods: {
    moveToImportant: function (mail) {
      // body... 
      bus.$emit('diChuyenMail', mail);
    }
  },
  components: {
    
  }
}
</script>

<style>


</style>
