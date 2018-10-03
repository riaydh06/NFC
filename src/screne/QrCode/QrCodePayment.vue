<template>
    <v-ons-page>
      <div class="payment-details-page">
        <div class="payment-details">
          <div @click="pop" class="payment-details-page-close">
            <img :src="this.assets.icon.close_button">
          </div>
          <div class="payment-details-scandata-header">
              <h2>Please fill up the payment instructions</h2>
          </div>
          <div class="payment-details-scandata-data">
               <!--  <div v-if="this.qrcode">
                  {{this.qrcode.text}}
                </div> -->
            <div>
              <paymentScreen :sacndata="this.qrcode.text" :pageStack="pageStack"></paymentScreen>
            </div>
          </div>
        </div>
        <!-- <paymentinfo></paymentinfo> -->
        <!-- <div @click="payment" class="payment-details-page-button">
            <img :src="this.assets.icon.pay_button" alt="">
        </div> -->
      </div>
    </v-ons-page>
</template>
<script>
import paymentinfo from '../component/payment-info'
import paymentScreen from '../component/PaymentScreen'
import payment from '../Payment'
    export default{
      data(){
        return{

        }
      },
      props:['pageStack'],
      components:{paymentinfo,paymentScreen},
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