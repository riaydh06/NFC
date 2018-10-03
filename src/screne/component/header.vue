<template>
	<div>
		<div @click="pop" class="payment-details-page-close">
            <img :src="this.assets.icon.close_button">
        </div>
        <div class="payment-details-scandata-header">
            <h2>Please fill up the payment instructions</h2>
        </div>
	</div>
</template>
<script>
	export default{
        data(){

        },
        methods:{
	        pop(){
	          this.pageStack.pop();
	        },
        },
        props:['pageStack']
	}
</script>