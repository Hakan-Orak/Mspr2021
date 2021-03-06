<template>
  <q-page class="row items-center justify-evenly">


  </q-page>
</template>

<script>

import Vue from 'vue'
import axios from 'axios';


export default {
  // name: 'PageName',
  components: {

  },
  data() {
    return {
      salut : "salut hakan",
      allQrCode : [],


    }
  },

  created() {

    this.salut = "non pas ma mere"

  },

  mounted() {

    this.lameredequialors = localStorage.getItem("lameredequi")

    axios.get("https://still-dusk-66823.herokuapp.com/api/promotions/", {})
      .then(response => {
        this.allQrCode = response.data['hydra:member']
        console.log(this.allQrCode)
      })

    this.salut = "ta mere"

  },

  methods: {
    lengthSalut(){
      return this.salut.length
    },

    returnLengthSalut(lavariableSalut){
      return lavariableSalut.length
    },



  },


}
</script>
