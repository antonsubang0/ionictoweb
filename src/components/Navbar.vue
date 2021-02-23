<template>
  <div class="Navbar">
	  <b-navbar toggleable="lg" type="dark" variant="info">
	    <b-navbar-brand>List Panel</b-navbar-brand>

	    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

	    <b-collapse id="nav-collapse" is-nav>
	      <b-navbar-nav>
	        <li class="nav-item">
	          <router-link to="/" class="nav-link">Home</router-link>
	        </li>
	        <li class="nav-item">
	          <router-link to="/qrcode" class="nav-link router-link-active">QRCode</router-link>
	        </li>
	        <li class="nav-item">
	          <router-link to="/about" class="nav-link router-link-active">About</router-link>
	        </li>
	      </b-navbar-nav>

	      <!-- Right aligned nav items -->
	      <b-navbar-nav class="ml-auto">

	        <b-nav-item-dropdown right>
	          <!-- Using 'button-content' slot -->
	          <template #button-content>
	            <em>User</em>
	          </template>
	          <b-dropdown-item href="#">Profile</b-dropdown-item>
	          <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
	        </b-nav-item-dropdown>
	      </b-navbar-nav>
	    </b-collapse>
	  </b-navbar>
  </div>
</template>

<script>
import firebase from "../config"

export default {
  name: 'Navbar',
  methods : {
  	logout : async function () {
      await firebase.auth().signOut().then(() => {
      	this.$store.dispatch('auth', null);
        this.$router.push({name : 'Login'});
      }).catch((error) => {
        console.log(error);
      });
    },
  }
}
</script>
