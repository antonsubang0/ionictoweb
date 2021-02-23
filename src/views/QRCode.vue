<template>
  <div class="home">
	  	<Navbar />
	  	<b-container class="mt-md-5 mt-2 border stylecard shadow">
		  	<b-row>
		    	<b-col lg="3" class="bg-info stylecard">
		    		<div class="mt-5">
		    			<div class="text-white bold mb-2">Hatchery :</div>
					    <b-form-select
					      v-model="hatchery"
					      :options="listhatchery"
					      class="mb-3"
					      value-field="nama"
					      text-field="nama"
					      disabled-field="notEnabled"
					    ></b-form-select>
					</div>
		    	</b-col>
		    	<b-col lg="9" class="stylecard1">
		    		<b-row>
		    			<b-col v-for="listitem in partpanel" :key="listitem.key">
		    				<vue-qr :bgSrc='src' :logoSrc="src2" :text="listitem.qrcode" :size="size"></vue-qr>
		    				<p>{{ listitem.namapanel }}</p>
		    			</b-col>
		    		</b-row>
		    	</b-col>
		  	</b-row>
		</b-container>
  </div>
</template>
<style scoped>
	.stylecard {
		height: 65vh;
	}
	@media only screen and (max-width: 1000px) {
		.stylecard {
			height: 30vh;
		}	
	}
</style>

<script>
import firebase from '../config/'
import VueQr from 'vue-qr'
import Navbar from '@/components/Navbar.vue'
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    HomeComponent,
    VueQr,
  },
  data () {
  	return {
  		listhatchery : null,
  		size :160,
  		hatchery : null,
  		awalpage : 0,
      	akhirpage : 10,
      	listpanel : null,
      	partpanel : null,
        lengthlist : null,
        src : 'https://1.bp.blogspot.com/-6ylUe8gOyTg/XeKCXvys2lI/AAAAAAAAALo/hkc4z8Hsp4MhrqApI3TNpQZ4EE65WjrPQCLcBGAsYHQ/s320/pt_charoen_pokphand%2Bsinga%2Bcopy.jpg',
        src2 : 'https://1.bp.blogspot.com/-6ylUe8gOyTg/XeKCXvys2lI/AAAAAAAAALo/hkc4z8Hsp4MhrqApI3TNpQZ4EE65WjrPQCLcBGAsYHQ/s320/pt_charoen_pokphand%2Bsinga%2Bcopy.jpg',
  	}
  },
  mounted () {
  	if(this.$store.getters.user==null) {
  		this.$router.push({name : 'Login'});
  	} else {
  		this.allhatchery();
  	}
  },
  methods : {
  	allhatchery : async function () {
      await firebase.database().ref('/hatchery').once('value', (snapshot) => {
        const listhatcheryx = [];
        snapshot.forEach((childSnapshot) => {
          const sement = {
            id : childSnapshot.key,
            nama : childSnapshot.val().nama,
          };
          listhatcheryx.push(sement);
        })
        this.listhatchery = listhatcheryx;
        this.hatchery = 'Subang';
        this.autoList(this.hatchery);
      });
    },
    autoList : async function (hatchery) {
      this.awalpage = 0;
      this.akhirpage = 10;
      await firebase.database().ref('/datapanel/').orderByChild('hatchery').equalTo(hatchery).once('value', (snapshot) => {
        const listx = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          const temp = {
            key : childKey,
            hatchery : childData.hatchery,
            nopanel : childData.nopanel,
            qrcode : childData.qrcode,
            namapanel : childData.namapanel,
            elcb : childData.elcb,
            arrester : childData.arrester,
            grounding : childData.grounding,
            time : childData.time,
            date : childData.date,
            schedule : childData.schedule,
            description : childData.description,
            urlImage : childData.urlImage,
            rating : childData.rating,
          };
          listx.push(temp);
        })
        this.listpanel = listx;
        this.partpanel = this.listpanel.slice(this.awalpage, this.akhirpage);
        this.lengthlist = listx.length;
        console.log(this.partpanel);
      })
    },
  }
}
</script>
