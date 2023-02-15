<script>
import { BIconSearch, BIconPerson, BIconBag} from 'bootstrap-vue'
import image from '../assets/images/image.jpg.png'
export default{
    name:'Header',
    components:{BIconSearch, BIconPerson, BIconBag},
    data: function(){
        return{
        image:image
        }
    }
}
</script>
<template>
    <div class=" header">
        <div class="navbar">
            <div class="logo">
              <h2>Foodtuck</h2>
            </div>
            <div class="navigation">
            <a href="#" style="color:#a86432;">Home</a>
            <a href="#">Menu</a>
            <a href="#">Blog</a>
            <a href="#">Pages</a>
            <a href="#">About</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
            </div>
            <div class="icon">
             <b-icon icon="search" style="color:white;"></b-icon>
             <b-icon icon="person" style="color:white;"></b-icon>
             <b-icon icon="bag" style="color:white;"></b-icon>
            </div>
        </div>
        <div class="heading">
            <div class="headtext">
            <p style="border: 2px solid #a86432;text-align: left;"> Welcome to coffee hut <b-icon icon="search" style="color:white;"></b-icon></p>
            <h1 style="color:#a86432; padding:7%;">Heal the world with coffee</h1>
            <p style="text:text2; font:font2; text:base; w:9/12;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue</p>

             <div class="flex">
              <b-button squared style="background-color:#a86432; color:white; ">Order now</b-button>&nbsp;&nbsp;&nbsp;  
              <b-button squared style="outline-color:#a86432; background-color:black; color:#a86432;">See menu</b-button>
            </div>
        </div>
           <div class="heading">
            <img v-bind:src="image" />
           </div>
        </div>
    </div>
</template>

<style scoped>
.header{
    background-color:black;
}

.navbar, .navigation{
    display:flex;
}
.logo{
    display:flext;
    flex: 45%;
    max-width: 45%;
    padding: 17px;
    text-align: center;
    align-items:center;
    color: white;
}

.navigation a{
   display:flex;
   display: flext;
   flex: 45%;
   max-width: 45%;
   justify-content: center;
   gap:2em;
   padding: 17px;
   align-items: center;
   color:white;
}


.icon{
    display:flex;
    display: flext;
    justify-content: center;
    padding: 2%;
    gap:1em;
    align-items: center;
   
}

.heading{
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    color:white;
    padding:8%;
    background-color:black;
}

.headtext{
    padding:9%;
    background-color:black;
}

.heading > div {
    display:flex;
    flex: 45%;
    justify-content: center;
    align-items: center;
    flex-direction:column;
     background-color:black;
      width: 486px;
      height: 546px;
}

button{
    padding: 15px 40px;
    margin: 20px auto;
    flex:70%;
    align-items: center;
}

</style>
