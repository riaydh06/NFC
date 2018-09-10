<template>
  <v-ons-page>
      <div class="payment-page">
        <div @click="pop" class="payment-details-page-close">
          <img :src="this.assets.icon.close_button">
        </div>
        <div class="payment-page-form">
          <div class="payment-page-sender">
            <input class="payment-page-sender-input" placeholder="Sender" v-model="sender" type="text">
          </div>
          <div class="payment-page-recevier">
            <input class="payment-page-recevier-input" placeholder="Receiver" v-model="receiver" type="text">
          </div>
          <div class="payment-page-money">
            <input class="payment-page-money-input" placeholder="Money" v-model="money" type="number" name="">
          </div>
          <div class="payment-page-button">
            <v-ons-button class="payment-page-button-input" @click="pay">Send Money</v-ons-button>
          </div>
        </div>
      </div>
      <v-ons-modal animation="fade" class="pin-modal" :visible="modalVisible">
                <div class="form">
                    <div class="form-group"><img :src="assets.icon.pincode"/></div>
                    <div class="form-group">Please Enter Pin Number for Security Purpose</div>
                    <div class="form-group">
                        <input type="password" maxlength="10"
                               class="pin"
                               placeholder="Enter PIN Number" v-model="validatePin"></input>
                    </div>
                    <div class="form-group reg-step-buttons">
                        <v-ons-button class="reg-next-btn" @click="confirm" >Submit
                        </v-ons-button>
                        <v-ons-button class="reg-cancel-btn" @click="cancelModal" >Cancel
                        </v-ons-button>
                    </div>
                </div>
                <!--<div class="purple-background-opacity"></div>-->
            </v-ons-modal>
  </v-ons-page>
</template>

<script>

  export default {
    data(){
      return{
        modalVisible:false,
        validatePin:'',
        sender:'',
        receiver:'',
        money:''
      }
    },
    methods: {
      pop() {
        this.pageStack.pop();
      },
      pay(){
         this.modalVisible = true;
      },
      cancelModal(){
        this.modalVisible = false;
        this.validatePin = '';
      },
      confirm(){
        this.modalVisible = false;
        this.$ons.notification.alert('Payment complete');
      }
    },
    props: ['pageStack'],
    components: {  }
  }
</script>
<style scoped>
.payment-page{
  width:100vw;
  height:100vh;
  text-align:center;
}
.payment-page-sender,.payment-page-recevier,.payment-page-money,.payment-page-button{
  padding:1vh 0 1vh 0;
}
.payment-page-sender-input,.payment-page-recevier-input,.payment-page-money-input,.payment-page-button-input,.pin{
  width:90vw;
  font-size:1.2em;
  border-radius: 25px;
  height: calc(1.78rem + 12px) !important;
  padding: 2px 10px 0 10px;
  box-sizing: border-box;
  text-transform: capitalize;
  border: 1px solid #979797;
}
.payment-page-button{
  width:100vw;
   bottom:0;
   position: absolute;
   background:#363058;
}
.payment-page-button-input{
  text-align:center;
  background:#FF0062;
}
.pin-modal {
  background-color: rgba(54, 48, 88, .9);
}
.pin{
    width: 80vw;
    margin:2vh 0 2vh 0;
}
.form-group img{
  width:50vw;
  margin-bottom:2vh;
}
.reg-next-btn,.reg-cancel-btn{
    width: 40vw;
    border-radius: 25px;
    background:#FF0062;
}
.reg-step-buttons{
  padding:2vh 0 2vh 0;
}
</style>
