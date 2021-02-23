<template>
  <b-container class="mt-5">
  	<b-row class="justify-content-center text-center">
    	<b-col class="justify-content-center">
    		<b-card
			    title="QRCode"
			    img-src="../assets/new.png"
			    img-alt="Image"
			    img-top
			    tag="article"
			    class="mb-3 shadow"
			>
		    	<b-card-text>
		      		List QRCode of the Panel
		    	</b-card-text>

				<router-link to="/qrcode" class="router-link-active"><b-button variant="primary">Click here</b-button></router-link>
			</b-card>
    	</b-col>
    	<b-col>
    		<b-card
			    title="List Panel"
			    img-src="../assets/list.png"
			    img-alt="Image"
			    img-top
			    tag="article"
			    class="mb-3 shadow"
			>
		    	<b-card-text>
		      		Information list of the Panel
		    	</b-card-text>

				<router-link to="/about" class="router-link-active"><b-button variant="primary">Click here</b-button></router-link>
			</b-card>
    	</b-col>
    	<b-col>
    		<b-card
			    title="Schedule"
			    img-src="../assets/scan.png"
			    img-alt="Image"
			    img-top
			    tag="article"
			    class="mb-3 shadow"
			>
		    	<b-card-text>
		      		Schedule of the Panel.
		    	</b-card-text>

				<router-link to="/about" class="router-link-active"><b-button variant="primary">Click here</b-button></router-link>
			</b-card>
    	</b-col>
    	<b-col>
    		<b-card
			    title="History"
			    img-src="../assets/history.png"
			    img-alt="Image"
			    img-top
			    tag="article"
			    class="mb-3 shadow"
			>
		    	<b-card-text>
		      		History of the Panel.
		    	</b-card-text>

				<router-link to="/about" class="router-link-active"><b-button variant="primary">Click here</b-button></router-link>
			</b-card>
    	</b-col>
  	</b-row>
</b-container>
</template>
<script>
export default {
  name: 'HomeComponent',
}
</script>