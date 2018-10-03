<template>
  <div>
      <div class="payment-page">
        <div class="payment-page-form">
          <div class="payment-page-input-level">
            <h4>Marchant name</h4>
          </div>
          <div class="payment-page-sender">
            <input class="payment-page-sender-input" placeholder="Sender" disabled="disabled" v-model="sender" type="text">
          </div>
          <div class="payment-page-input-level">
            <h4>Please select a account number</h4>
          </div>
          <div class="payment-page-recevier">
            <select :class="['payment-page-recevier-input', {placeholder: !receiver}]" v-model="receiver">
              <option disabled value="">Bank Account number</option>
              <option value="0006 03157832 77">0006 03157832 77</option>
              <option value="0006 03157834 63">0006 03157834 63</option>
              <option value="0006 03154576 27">0006 03154576 27</option>
            </select>
          </div>
          <div class="payment-page-input-level">
            <h4>Please enter the amount</h4>
          </div>
          <div class="payment-page-money">
            <input class="payment-page-money-input" placeholder="Amount" v-model="money" type="number" name="">
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
                        <input type="tel" pattern="" maxlength="10"
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
      </v-ons-modal>
  </div>
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
    mounted(){
      this.sender = this.sacndata
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
        this.pageStack.splice(1);
      }
    },
    props: ['pageStack','sacndata'],
    components: {  }
  }
</script>
<style scoped>
.payment-page{
  // width:100vw;
  // height:100vh;
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
.payment-page-input-level{
    text-align: left;
    width: 100vw;
    padding: 0 0 0 4vw;
}
.payment-page-sender-input,.payment-page-recevier-input,.payment-page-money-input,.payment-page-button-input{
  background-color:transparent;
}
select.payment-page-recevier-input{
  color:#000;
}
select.placeholder {
    color: #a7a8a9;
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
