<template>
  <v-ons-page>
      <div class="connect-landing-page">
          <div @click="connect" class="circle-logo">
              <img :src="this.assets.icon.circle" alt="">
          </div>
          <div @click="connect" class="connect-button">
              <img :src="this.assets.icon.connect_button" alt="">
          </div>
      </div>
      <v-ons-modal animation="fade" class="connect-select-modal" :visible="modalVisible">
          <div class="connect-select-modal-option">
              <div class="connect-select-modal-qrcode">
                  <v-ons-button @click="qrcode" modifier="large">QRCODE</v-ons-button>
              </div>
              <div class="connect-select-modal-nfc">
                  <v-ons-button @click="nfc" modifier="large">NFC</v-ons-button>
              </div>
          </div>
      </v-ons-modal>
  </v-ons-page>
</template>

<script>
  import QrCodePayment from './QrCode/QrCodePayment'
  import Nfc from './Nfc/NfcPayment'
  export default {
     data(){
        return {
          modalVisible:false
        }
     },
     methods: {
        pop(){
           this.pageStack.pop();
        },
        push() {
           this.pageStack.push(PayDetails);
        },
        connect(){
           this.modalVisible = true;
        },
        qrcode(){
           var that = this;
           that.modalVisible = false;
           //that.pageStack.push(QrCodePayment)
           cordova.plugins.barcodeScanner.scan(
              function (result) {
              // alert("A barcode has been scanned \n" +
              // "Result: " + result.text + "\n" +
              // "Format: " + result.format + "\n" +
              // "Cancelled: " + result.cancelled);
              that.modalVisible = false;
              if(!result.cancelled){
                that.pageStack.push({
                extends:QrCodePayment,
                  data(){
                    return {
                      qrcode:result
                    }
                  }
                })
              }
           },
              function (error) {
                 alert("Scanning failed: " + error);
              },
              {
                 prompt : "" // Android
              }
           );
        },
        nfc(){
          var that = this;
          that.modalVisible = false;
          //that.pageStack.push(Nfc)
          nfc.addNdefListener (
            function (nfcEvent) {
                var tag = nfcEvent.tag,
                    ndefMessage = tag.ndefMessage;

                // dump the raw json of the message
                // note: real code will need to decode
                // the payload from each record
                // alert(JSON.stringify(ndefMessage));

                // assuming the first record in the message has
                // a payload that can be converted to a string.
                // alert(nfc.bytesToString(ndefMessage[0].payload).substring(3));
                that.pageStack.push({
                  extends:Nfc,
                  data(){
                    return {
                      nfc:nfc.bytesToString(ndefMessage[0].payload).substring(3)
                    }
                  }
                })
            },
            function () { // success callback
                alert("Waiting for NDEF tag");
            },
            function (error) { // error callback
                alert("Error adding NDEF listener " + JSON.stringify(error));
            }
          );
        }
     },
     props: ['pageStack'],
     components: {  }
  }
</script>
<style>
.connect-landing-page{
    width:100vw;
    height:100vh;
    background:#363058;
}
.circle-logo {
     width: 100vw;
     text-align: center;
     padding-top:20vw
}
.circle-logo img{
   width: 50vw;
}
.connect-button{
    width: 100%;
    text-align: center;
    padding-top: 30vh;
}
.connect-select-modal{
}
.connect-select-modal-option{
    width: 100vw;

}
.connect-select-modal-qrcode{
    width: 80vw;
    padding: 1vw 10vw;
}
.connect-select-modal-qrcode .button,.connect-select-modal-nfc .button{
    background: #FF0062;
    border-radius: 25px;
}
.connect-select-modal-nfc{
    width: 80vw;
    padding:1vw 10vw;
}
.connect-select-modal{
  background-color: rgba(54, 48, 88, .9);
}
</style>
