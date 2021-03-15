<template>
  <div class="">
    <q-parallax>
      <template  style="height: 100%; width: 100%" v-slot:media>
        <img src="../../public/bg/background-accueil.png">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            // opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >

<!--          <div class="text-h3 text-white text-center">Scanner vos QR CODE</div>-->
          <img @click="$router.push('/qrCodeReader')" src="../../public/bg/scan-qrCode.png" style="width: 150px; height: 150px">

          <img @click="$router.push('/listePromotion')" src="../../public/bg/valise-stock.png" style="width: 150px; height: 150px">

        </div>
      </template>
    </q-parallax>
  </div>

</template>

<script>


import Vue from "vue";


export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      email:'',
      password : '',
    salut : "salut hakan",
      allQrCode : [],
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
