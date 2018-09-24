<template>
    <v-ons-page>
        <div class="payment-details-page">
          <div class="payment-details">
            <div @click="pop" class="payment-details-page-close">
              <img :src="this.assets.icon.close_button">
            </div>
            <div class="payment-details-scandata">
              <div class="payment-details-scandata-header">
                <h2>NFC SCAN DATA</h2>
              </div>
              <div class="payment-details-scandata-data"></div>
                <div v-if="this.nfc">
                  {{this.nfc}}
                </div>
                <div else>
                  <!-- <h3>Scan data</h3> -->
                </div>
              </div>
            <!-- <paymentinfo></paymentinfo> -->
            <div @click="payment" class="payment-details-page-button">
                <img  :src="this.assets.icon.pay_button" alt="">
            </div>
          </div>
      </div>
    </v-ons-page>
</template>
<script>
import paymentinfo from '../component/payment-info'
import payment from '../Payment'
  export default{
    data(){
      return{

      }
    },
    props:['pageStack'],
    components:{paymentinfo},
    mounted(){
      
    },
    methods:{
      pop(){
        this.pageStack.pop();
      },
      payment(){
        this.pageStack.push(payment)
      }
    }
  }
</script>
<style scoped>

</style>