<template>
  <div class="about">
  	<Navbar />
    <h1>This is an about page</h1>
  </div>
</template>
<script>
	import Navbar from '@/components/Navbar.vue'
	export default {
		name : 'about',
		components: {
		    Navbar
		},
		mounted () {
		  	if(this.$store.getters.user==null) {
		  		this.$router.push({name : 'Login'});
		  	}
		},
	}
</script>
