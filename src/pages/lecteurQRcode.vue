<template>
  <q-page class="row items-center justify-evenly">
    <button @click="openCamera"> {{ isShowingCamera ? "Fermer le Scan" : "Scanner un QR code" }}</button>
    <qrcode-stream v-if="isShowingCamera" @init="onInit" @decode="onDecode"></qrcode-stream>
  </q-page>
</template>

<script>
import Vue from "vue";
import VueQrcodeReader from "vue-qrcode-reader";
import axios from "axios";


Vue.use(VueQrcodeReader);

export default {
  name: "lecteurQRcode",
  components: {

  },
  data() {
    return {
      promotions: {},
      promotion: {},
      isShowingCamera: false
    }
  },
  mounted() {
    this.getAllPromotions()
  },

  methods: {

    async onInit (promise) {
      // show loading indicator

      try {
        const { capabilities } = await promise

        // successfully initialized
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          // user denied camera access permission
        } else if (error.name === 'NotFoundError') {
          // no suitable camera device installed
        } else if (error.name === 'NotSupportedError') {
          // page is not served over HTTPS (or localhost)
        } else if (error.name === 'NotReadableError') {
          // maybe camera is already in use
        } else if (error.name === 'OverconstrainedError') {
          // did you requested the front camera although there is none?
        } else if (error.name === 'StreamApiNotSupportedError') {
          // browser seems to be lacking features
        }
      } finally {
        // hide loading indicator
      }
    },

    openCamera() {
      this.isShowingCamera = !this.isShowingCamera
    },

    onDecode (decodedString) {
      // Si le qrcode est bien décodé
      if (decodedString) {
        for (let promo in this.promotions){
          // Si le qrcode est égal à un qrcode présent dans 1 des promos la liste récupérée
          if (decodedString === promo.qr_code) {
            // Alors on requête sur la promotion en question
            this.getOnePromotion(decodedString)

            // Redirection vers une page pour visualiser la promo => puis l'ajouter à la liste des promotions
            localStorage.setItem('id', promo.id)
            localStorage.setItem('nom', promo.nom)
            localStorage.setItem('montant', promo.montant)
            localStorage.setItem('duree', promo.duree)
            localStorage.setItem('qr_code', promo.qr_code)
            this.$router.push('/qrcode/:id')

          } else {
            alert("Ce QR code n'existe pas dans la base")
          }
        }
      } else {
        alert("Impossible de lire le QR code")
      }
    },

    getAllPromotions() {
      axios.get("https://still-dusk-66823.herokuapp.com/api/promotions/", {})
        .then(response => {
          this.promotions = response.data['hydra:member']
          console.log(this.promotions)
        })
        .catch(error => {
          console.log(error)
        })
    },

    // Trouver un moyen de passer le qr_code dans le header pour identifier la promotion
    // ou alors modifier l'url de l'api vers http://domain.com/api/promotions/qrcode
    getOnePromotion(qr_code) {
      axios.get(`https://still-dusk-66823.herokuapp.com/api/promotions/${qr_code}`, {})
        .then(response => {
          this.promotion = response.data['hydra:member']
          console.log(this.promotion)
        })
        .catch(error => {
          console.log(error)
        })
    },
  }
}
</script>

<style scoped>

</style>
