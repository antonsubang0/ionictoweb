<template>
  <div class="login">
    <b-row class="cvch">
	    <b-col sm="12" md="8" lg="6" class="loginprimarycs">
	    	<b-card bg-variant="light" header="Register" class="text-center w50 shadow" v-if="halamanRegister">
	    		<b-card-text>
	    			<b-row class="my-1" v-if="notifregister">
					    <b-col>
					      <b-alert show variant="danger">{{ notifregister }}</b-alert>
					    </b-col>
					</b-row>
		        	<b-row class="my-1">
					    <b-col>
					      <b-form-input v-model="email" type="email" placeholder="Email"></b-form-input>
					    </b-col>
					</b-row>
					<b-row class="my-1">
					    <b-col>
					      <b-form-input  v-model="password" type="password" placeholder="Password"></b-form-input>
					    </b-col>
					</b-row>
					<b-row class="my-1">
					    <b-col>
					      <b-form-input  v-model="rpassword" type="password" placeholder="Confirm Password"></b-form-input>
					    </b-col>
					</b-row>
					<b-row class="mt-3">
					    <b-col>
					      <b-button variant="outline-primary" @click="onSignupClicked">Register</b-button>
					    </b-col>
					</b-row>
					<div class="mt-3 authdevider">
			              <p>If you have the account ?</p>
			              <p>Please back to <span @click="bukaLogin">Login</span></p>
		            </div>
			    </b-card-text>
			</b-card>
			<b-card bg-variant="light" header="Login" class="text-center w50 shadow" v-else>
		        <b-card-text>
		        	<b-row class="my-1" v-if="notiflogin">
					    <b-col>
					      <b-alert show variant="danger">{{ notiflogin }}</b-alert>
					    </b-col>
					</b-row>
		        	<b-row class="my-1">
					    <b-col>
					      <b-form-input v-model="email" type="email" placeholder="Email"></b-form-input>
					    </b-col>
					</b-row>
					<b-row class="my-1">
					    <b-col>
					      <b-form-input  v-model="password" type="password" placeholder="Password"></b-form-input>
					    </b-col>
					</b-row>
					<b-row class="mt-3">
					    <b-col>
					      <b-button variant="outline-primary" @click="signIn">Login</b-button>
					    </b-col>
					</b-row>
					<div class="mt-3 authdevider">
			              <p>Do you have the account ?</p>
			              <p>If not, please <span @click="bukaRegister">Register</span></p>
		            </div>
			    </b-card-text>
		    </b-card>
	    </b-col>
	    <b-col class="loginsecondcs"></b-col>
	</b-row>
  </div>
</template>
<style scope>
	.cvch {
		height: 100%;
		position: fixed;
		width: 100%;
	}
	.login {
		min-height: 100%;
	}
	.loginprimarycs {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #17a2b8;
		height: 100%;
		padding-right: 0px!important;
	}
	.w50 {
		width: 50%;
	}
	.loginsecondcs {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		background-image : url('https://picsum.photos/1024/400/?image=41');
		background-size: cover;
	}
	.authdevider {
		border-top: 1px solid rgba(0,0,0, .5);
		padding-top: 1rem;
	}
	.authdevider p {
		margin-bottom: 0px;
	}
	.authdevider p span {
		color: blue;
	}
	.authdevider p span:hover {
		cursor: pointer;
	}
	@media only screen and (max-width: 600px) {
		.w50 {
			width: 80%;
		}
	}
</style>
<script>
	import firebase from '../config/'
	export default {
		name : 'Login',
		data () {
			return {
				email : null,
				password : null,
				halamanRegister : false,
				rpassword : null,
				notifregister : null,
				notiflogin : null,

			}
		},
		mounted () {
			this.firstload();
		},
		methods : {
		    signIn : function () {
		      	firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((res) => {
		        	console.log('success');
		      	}).catch((err) => {
		      		this.notiflogin = err.message;
		      	});
		    },
		    bukaRegister : function () {
		      	this.halamanRegister = true;
		      	this.notifregister=null;
		      	this.notiflogin = null;
		    },
		    bukaLogin : function () {
		      	this.halamanRegister = false;
		      	this.notifregister=null;
		      	this.notiflogin = null;
		    },
		    firstload : async function () {
		      	await firebase.auth().onAuthStateChanged((user) => {
		        	if (user) {
		        		this.$store.dispatch('auth', user);
		          		this.$router.push({name : 'Home'});
		        	} else {
		        		console.log('Load');
		        	}
		      	})
		    },
		    onSignupClicked : function () {
		    	if ( password == rpassword ) {
		    		firebase.auth().createUserWithEmailAndPassword( this.email, this.password )
			      	.then( () => { 
			        	this.halamanRegister = false;
				    })
				      	.catch((err) => {
				        	this.halamanRegister = true;
				        	this.notifregister=err.message;
				    });
		    	} else { 
		    		this.notifregister= "Password not match."; 
		    	}
		    },
		}
	}
</script>