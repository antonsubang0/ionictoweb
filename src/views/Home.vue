<template>
  <div class="home">
	  <Navbar />
	  <HomeComponent />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    HomeComponent
  },
  mounted () {
  	if(this.$store.getters.user==null) {
  		this.$router.push({name : 'Login'});
  	}
  },
}
</script>
