<template>
  <q-page class="row items-center justify-evenly">

    <qrcode-stream @decode="onDecode"></qrcode-stream>

  </q-page>
</template>

<script>


import axios from 'axios';
import Vue from "vue";
import VueQrcodeReader from "vue-qrcode-reader";

Vue.use(VueQrcodeReader);

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


    },

  mounted() {

    axios.get("https://still-dusk-66823.herokuapp.com/api/promotions/", {})
    .then(response => {
      this.allQrCode = response.data['hydra:member']
      console.log(this.allQrCode)
    })



  },

  methods: {

    returnLengthSalut(lavariableSalut){
      return lavariableSalut.length
    },

    enmenemoitamere(){
      localStorage.setItem("lameredequi","Antoine")
      this.$router.push('/listePromotion')
    },
    onDecode (decodedString) {
      alert(decodedString)
    }

    },


}
</script>
