<template>
  <div class="payment-details-component">
    <div class="payment-details">
        <ons-row >
            <onc-col class="payment-datail-img" width="100%"><img :src="assets.icon.kfc" alt=""></onc-col>
        </ons-row>
        <ons-row >
            <onc-col class="payment-datail-address" width="100%"><div class="payment-datail-address-details">30 Sonaraon Janapath Road,Sectore 9, Uttora,Dhaka-1230</div></onc-col>
        </ons-row>
        <ons-row>
            <ons-col width="100%"><div class="payment-details-input">Vat Reg:</div> <div class="payment-details-output">001041526</div></ons-col>
        </ons-row>
        <ons-row>
            <ons-col width="100%"><div class="payment-details-input">MUSAK:</div> <div class="payment-details-output">2.3</div></ons-col>
        </ons-row>
        <ons-row>
            <ons-col class="payment-details-center" width="100%">Guest Bill</ons-col>
        </ons-row>
        <ons-row>
            <ons-col width="72%"><div class="payment-details-input">Date:</div><div class="payment-details-output">5 March ,2018</div>  </ons-col>
            <ons-col class="" width="28%"><div class="payment-details-right">2.33PM</div></ons-col>
        </ons-row>
        <ons-row>
            <ons-col width="100%"><div class="payment-details-input">Order ID:</div><div class="payment-details-output">3585</div> </ons-col>
        </ons-row>
        <ons-row>
            <ons-col width="100%"><div class="payment-details-input">Cashir Name:</div><div class="payment-details-output">Khokon</div> </ons-col>
        </ons-row>
    </div>
    <div class="table_container">
        <ons-list modifier="inset" class="payment-item-list">
            <ons-list-header class="payment-item-list-header">
                <ons-row>
                    <ons-col class="payment-list-item-left" width="40%">Item</ons-col>
                    <ons-col width="20%">Qty</ons-col>
                    <ons-col width="20%">Rate</ons-col>
                    <ons-col class="payment-list-item-right" width="20%">Price(TK)</ons-col>
                </ons-row>
            </ons-list-header>
            <div class="brief-description family-wallet-history  account_list_item">
                <div class="search-results-list">
                    <ons-list-item  v-for="(item, index) in items">
                        <ons-row>
                            <ons-col class="payment-list-item-left" width="40%">{{item.name}}</ons-col>
                            <ons-col width="20%">{{item.qty}} </ons-col>
                            <ons-col width="20%">{{item.rate}}</ons-col>
                            <ons-col class="payment-list-item-right" width="20%">{{item.price}}</ons-col>
                        </ons-row>
                    </ons-list-item>
                </div>
            </div>
        </ons-list>
    </div>
    <div class="payment-count">
        <ons-row>
            <ons-col width="60%">Order Total:</ons-col>
            <ons-col width="40%">{{orderTotal}} TK</ons-col>
        </ons-row>
        <ons-row>
            <ons-col width="60%">Vat Total(15%):</ons-col>
            <ons-col width="40%">{{vatTotal}} TK</ons-col>
        </ons-row>
        <ons-row>
            <ons-col width="60%">Discount(15%):</ons-col>
            <ons-col width="40%">{{discount}} TK</ons-col>
        </ons-row>
        <ons-row class="payment-details-total">
            <ons-col width="60%">Total amount:</ons-col>
            <ons-col width="40%">{{total}} TK</ons-col>
        </ons-row>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        orderTotal:900,
        vatTotal:100,
        discount:100,
        total:900,
          "items": [
            {
              "name":"coke",
              "qty": 5,
              "rate":100,
              "price":100
            },
            {
              "name":"hamburger",
              "qty": 4,
              "rate":100,
              "price":400
            },
            {
              "name":"fries",
              "qty": 1,
              "rate":200,
              "price":200
            },
            {
              "name":"pizza",
              "qty": 2,
              "rate":100,
              "price":200
            }
          ]
      }
    },
    props:['pageStack'],
    mounted(){

    },
    methods:{

    }
  }
</script>
<style scoped>
.payment-details-component{
  width:100vw
}
.payment-details{
    font-size: 14px;
    margin: 0 0 20px 0;
    width:95vw;
}
.payment-details-right{
    text-align: right;
}
.payment-details-center{
    text-align: center;
    color: #363058;
    font-size: 16px;
}
.payment-details-input{
    color: #363058;
    float: left;
    padding-left: 3vw;
}
.payment-details-output{
    float: left;
    margin-left: 8px;
}
.payment-item-list{
    width: 95%;
    border: none;
}
.payment-datail-img{
    margin: 0 auto;
}
.payment-datail-img img{
    width: 150px;
    height: 75px;
}
.payment-datail-address{
    text-align: center;
}
.payment-datail-address-details{
    padding: 0 40px 14px 40px;
}
.payment-item-list-header{
    color: #363058;
    text-transform: capitalize;
}
.payment-list-item-left{
    text-align: left;
    text-transform: capitalize;
}
.payment-list-item-right{
     text-align: right;
 }
.payment-count{
    text-align: right;
    font-size: 14px;
    padding: 6px;
    color: #363058;
    width:95vw;
}
.payment-details-total{
    color:#FF0062;
    font-size: 16px;
}
</style>