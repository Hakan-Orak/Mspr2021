<template>
  <q-page class="row items-center justify-evenly">

  </q-page>
</template>

<script>


import Vue from "vue";


export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      salut : "salut hakan"
    }
  },

  created() {

    },

  mounted() {

  },

  methods: {

    returnLengthSalut(lavariableSalut){
      return lavariableSalut.length
    },

    enmenemoitamere(){
      localStorage.setItem("lameredequi","Antoine")
      this.$router.push('/listePromotion')
    },

    },


}
</script>
