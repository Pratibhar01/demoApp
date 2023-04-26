<script>
import Logo from "../assets/logo.vue";
import { BIconSearch, BIconPerson, BIconBag, BIconCheckSquare, BIconCheckSquareFill,BIconArrowRight,BIconPlay,BIconChevronRight } from 'bootstrap-vue'
import {FEATURE} from "../models/coffee";
import {REVIEWS} from "../models/customer";
export default {
  data() {
    return {
      menu: ["Menu", "Blog", "Pages", "About", "Shop", "Contact"],
      icon: ["ic1", "ic2", "ic3"],
      feature:FEATURE,
      reviews:REVIEWS,
      setMenuIndex:"Americano",
      currentProfileIndex:"Profile_1",
      isModalOpen:false,
    };
  },
  components: {
    Logo,BIconSearch, BIconPerson, BIconBag, BIconCheckSquare, BIconCheckSquareFill,BIconArrowRight,BIconPlay,BIconChevronRight
  },
  methods:{
    getScreenResolution(){
      console.log(this.getCoffeeCategory)
    },
    openModal(){
    this.isModalOpen = true;
    console.log(this.pageYOffset);
    console.log(this.isModalOpen);
    document.body.style.overflowY = "hidden";
    },
    closeModal(){
    this.isModalOpen = false;
    document.body.style.overflowY = "scroll";
    },
    pageYOffset(){
    return `${window.scrollY}px`;
    },
    modalOffset(){
    return `${window.scrollY + 150}px`;
    },
    updateCurrentProfileIndex(profileIndex){
    this.currentProfileIndex = profileIndex
    }
  },
  computed:{
    getCoffeeCategory(){
      return Object.keys(this.feature)
    }
  },
};
</script>

<template>
  <div class="cofee">
    <header>
      <nav class="text">
        <div class="logo">
          <Logo />
        </div>
        <div class="navigation">
          <div class="text0 text-primary">Home</div>
          <li v-for="item in menu" class="nav-item">
            {{ item }}
          </li>
        </div>
        <div class="icons">
          <b-icon icon="search" style="color:white;"></b-icon>
             <b-icon icon="person" style="color:white;"></b-icon>
             <b-icon icon="bag" style="color:white;"></b-icon>
        </div>
      </nav>
      <div class="head text-light">
        <div class="head-text"> 
          <div class="text-2-container border-primary">
            <span class="text-2 normal-text-regular">Welcome to coffee hut<b-icon icon="search" style="color:white;"></b-icon></span>
          </div>
          <h1 class="hero-text text-primary text-h1">Heal the world with coffee</h1>
          <p class="text-sub normal-text-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue
          </p>
          <div class="btn-group">
            <b-button squared class="bg-primary">Order now</b-button>&nbsp;&nbsp;&nbsp;  
            <b-button squared style="outline-color:#bc9a6c; background-color: transparent; color:#bc9a6c;">See menu</b-button>
          </div>
        </div>
        <div class="head-image">
          <div class="hero-image border-primary">
            <img class="heroImg" src="../assets/images/hero-image.png" alt="Hero Image">
          </div>
        </div>
      </div>
    </header>
  </div>
  <div class="box">
    <div class="super-image">
        <img  class="superImg" src="../assets/images/super-image.png" alt="Super Image">
    </div>
    <div class="has-text-centered">
      <div class="text-box text-grey-1">
        <img  class="aboutImg" src="../assets/images/Ellipse 17.svg">
        <span class="super medium-text-regular">About Us</span>
      </div>
      <h1 class="super-text text-grey-1 text-h2">We are the best quality Coffee maker</h1>
      <p class="super-sub normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque diam pelle ntesque bibendum non dui volutpat fringilla bibendum. 
        Urna, elit augue urn a, vitae feugiat pretium donec id elementum. 
        Ultrices mattis sed vitae mus risus. 
        Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>
      <div class="super-box">
        <p> <b-icon icon="check-square"></b-icon> Experienced Chefs</p>
        <p> <b-icon icon="check-square-fill"></b-icon> Fresh & Organic Foods</p>
        <p> <b-icon icon="check-square"></b-icon> Different Coffee & Drinks</p>
      </div>
      <div class="button">
        <b-button varient style="background-color: #bc9a6c; color:white;">Learn More</b-button>
      </div>
    </div>
  </div>
  <div class="category">
    <div class="category-start">
      <div class="start-1-text">
        <div>  
          <img  class="g1Img" src="../assets/images/g1.png">
        </div>
        <h3 class="start-1-sub text-h4">Cappuccino</h3>
        <p class="category-1-sub normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</p>
      </div>
      <div class="start-2-text">
        <div>  
          <img  class="g2Img" src="../assets/images/g2.png">
        </div>
        <h3  class="start-2-sub text-h4">Cafe latte</h3>
        <p class="category-2-sub normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</p>
      </div>
      <div class="start-3-text">
        <div>  
          <img  class="g3Img" src="../assets/images/g3.png">
        </div>
        <h3  class="start-3-sub text-h4">Dark coffee</h3>
        <p class="category-3-sub normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</p>
      </div>
    </div>
    <div class="category-box">
      <h1 class="category-text text-h2">Coffee Category</h1>
      <p class="category-sub normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Varius sed pharetra dictum neque massa congue</p>
        <div class="category-image">
          <img  class="categoryImg" src="../assets/images/cafe.png" alt="Category Image">
        </div>
    </div>
    <div class="category-end">
      <div class="end-1-text">
        <h3 class="end-1-sub text-h4">Turkish coffee</h3>
        <p class="category-4-sub normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</p>
        <div>  
          <img  class="g4Img" src="../assets/images/g4.png">
        </div>
      </div>
      <div class="end-2-text">
        <h3 class="end-2-sub text-h4">Pancakes</h3>
        <p class="category-5-sub normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</p>
        <div>  
          <img  class="g5Img" src="../assets/images/g5.png">
        </div>
      </div>
      <div class="end-3-text">
        <h3 class="end-3-sub text-h4">Coffee Bag</h3>
        <p class="category-6-sub normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</p>
        <div>  
          <img  class="g6Img" src="../assets/images/g6.png">
        </div>
      </div>
    </div>
  </div>
  <div class="quality">
    <div class="best-image">
      <img  class="Img1" src="../assets/images/Img1.png">
    </div>
    <div class="best-quality">
      <div class="quality-box">
        <img  class="aboutImg" src="../assets/images/Ellipse 17.svg">
        <span class="best medium-text-regular">Why Choose us</span>
      </div>
      <h1 class="super-text text-h2">Best quality food and coffee maker</h1>
      <p class="super-sub medium-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. 
        Urna, elit augue urna, vitae feugiat donec id elementum.
        Ultrices mattis sed vitae mus risus. Lacus nisi,
      </p>
      <div class="Icon-grp">
        <div class="Ig1-box">
          <img class="Icon1Img" src="../assets/images/icon1.png">
          <h1 class="Icon1-text text-h5">High quality coffee</h1>
          <p class="Icon1-sub normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh .</p>
        </div>
        <div class="Ig2-box">
            <img class="Icon2Img" src="../assets/images/icon2.png">
            <h1 class="Icon2-text text-h5">Best chef & Team</h1>
            <p class="Icon2-sub normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh .</p>
        </div>
        <div class="Ig3-box">
          <img class="Icon3Img" src="../assets/images/icon3.png">
          <h1 class="Icon3-text text-h5">Promo and deal</h1>
          <p class="Icon3-sub normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh .</p>
        </div>
      </div>
    </div>
  </div>
  <div class="our-fav-menu">
    <div class="favorite">
      <div class="buttons bg-secondary">
        <b-button squared style="background-color:white; color:black; border-color:white;font-weight: 600;" @click="()=>setMenuIndex='Americano'" class="button-1 text-h6">  <img  class="ig1" src="../assets/images/ig1.png">Americano</b-button> &nbsp;&nbsp;&nbsp;  
       <b-button squared style="background-color:white; color:black; border-color: white;font-weight: 600;" @click="()=>setMenuIndex='Esperesso'" class="button-2 text-h6" >  <img  class="ig2" src="../assets/images/ig2.png"> Esperesso </b-button> &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 
        <b-button squared style="background-color:white; color:black; border-color:white;font-weight: 600;" @click="()=>setMenuIndex='Arabica'" class="button-3 text-h6" >  <img  class="ig3" src="../assets/images/ig3.png"> Arabica </b-button> &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;
        <b-button squared style="background-color:white; color:black; border-color: white;font-weight: 600;" @click="()=>setMenuIndex='CoffeeStimy'" class="button-4 text-h6" >  <img  class="ig4" src="../assets/images/ig4.png"> Coffee stimy  </b-button> &nbsp;&nbsp;&nbsp;  
        <b-button squared style="background-color:white;border-color: white; color:black;font-weight: 600;" @click="()=>setMenuIndex='OrganicPack'" class="button-5 text-h6">  <img  class="ig5" src="../assets/images/ig5.png"> Organic Pack </b-button> &nbsp;&nbsp;&nbsp;   
      </div>
    </div>
    <div class="cards">
      <h1 class="fav-text text-h2 ">Our Favorites Menu</h1>
      <p class="fav-sub normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque </p>
            <div class="unsplash" v-for="item in feature[setMenuIndex]">
              <img class="unsplash-1" :src="item.imgUrl" :alt="item.imgTitle">
              <span class="unsplash-1-text text-h6">{{ item.imgTitle }}</span>
                <span class="price normal-text-regular">43.78$</span>
      
              <div class="vector-img">
              <img  class="v-1" src="../assets/images/Vector.png">
              <img  class="v-2" src="../assets/images/Vector.png">
              <img  class="v-3" src="../assets/images/Vector.png">
              <img  class="v-4" src="../assets/images/Vector.png">
              <img  class="v-5" src="../assets/images/Vector.png">
              </div>
        </div>
    </div>
  </div>
  <div class="meet-our-chef">
    <h1 class="meet-text text-h2">Meet our chef</h1>
    <p class="meet-sub normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque </p>
  <div class="meet-chef">
    <div class="our-chef-1">
      <img  class="chef-1" src="../assets/images/unsplash-1.png">
      <span class="chef-meet-1 medium-text-bold">Bulbul Hassan</span>
      <p class="meet-1 normal-text-regular">Chef</p>
    </div>
    <div class="our-chef-2">
      <img  class="chef-2" src="../assets/images/unsplash-2.png">
      <span class="chef-meet-2 medium-text-bold">Jorina Begum</span>
      <p class="meet-2 normal-text-regular">Founder</p>
        <div class="grp box-primary">
          <img class="rect-1" src="../assets/images/Rectangle 8074.png"><span> <img class="f" src="../assets/images/f.png"></span>
        <img class="rect-2" src="../assets/images/Rectangle 8074.png"><span> <img class="t" src="../assets/images/t.png"></span>
        <img class="rect-3" src="../assets/images/Rectangle 8074.png"><span> <img class="v" src="../assets/images/v.png"></span>
        <img class="rect-4" src="../assets/images/Rectangle 8074.png"><span> <img class="p" src="../assets/images/p.png"></span>
      </div>
    </div>
    <div class="our-chef-3">
      <img  class="chef-3" src="../assets/images/unsplash-3.png">
      <span class="chef-meet-3 medium-text-bold">M.Mohammad Nur</span>
      <p class="meet-3 normal-text-regular">Seacialist</p>
    </div>
    <div class="our-chef-4">
      <img  class="chef-4" src="../assets/images/unsplash-4.png">
      <span class="chef-meet-4 medium-text-bold">Munna Kathy</span>
      <p class="meet-4 normal-text-regular">Owner</p>
    </div>
    </div>
  </div>
  <div class="our-customer-says">
    <div style="position:relative">
      <img  class="image" src="../assets/images/image.png">
      <b-button @click="openModal" class="position-absolute run-rounded" style=" height: 70px;width: 70px;right:330px;top:300px;border-radius: 70px;" variant="light">
           <BIconPlay style="color:#bc9a6c;height:35px;width:35px;"/>
        </b-button> 
        <Teleport to="#modal">
          <div v-if="isModalOpen">
            <div class="d-flex justify-content-center align-items-center ">
              <div
              class="backdrop"
              @click="closeModal"
              :style="{ top:pageYOffset()}"
              ></div>
              <div
              :style="{ top:modalOffset()}"
              class="videomodal "
              >
              <iframe width="560" 
              height="315" 
              src="https://www.youtube.com/embed/G1BgiYqpIoI" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen></iframe>
            </div>
            </div>
          </div>
        </Teleport>
        <div>
          <img  class="background" src="../assets/images/background.png">
          <div class="test">
            <img  class="ellipse" src="../assets/images/Ellipse 17.svg"> 
            <p class="test-text text-light medium-text">Testimonials</p>
            <h1 class="test-sub text-light text-h2">Our Customer Say</h1>
            <img  class="quotes" src="../assets/images/Quotes.png">
          </div>
          <div class="review text-light">
        <div class="carousel__profile-group" v-for="item in reviews[currentProfileIndex]">
          <div>
            <p class="medium-text-regular">{{ item.text }}</p>
          </div>
          <div>
            <img class="profile" :src="item.profileUrl" :alt="item.profileTitle">
            <p class="large-text-bold">{{ item.profileTitle }}</p>
            <p class=" normal-text-regular">{{ item.designation }}</p>
          </div>
        </div>
        <div class="carousel__button-group text-primary">
          <div class="border-primary text-primary" :class="['carousel__profile-button', { 'active': index === currentProfileIndex}] " @click="()=>currentProfileIndex='Profile_1'"></div>
          <div class="border-primary text-primary" :class="['carousel__profile-button', { 'active': index === currentProfileIndex}] " @click="()=>currentProfileIndex='Profile_2'"></div>
          <div class="border-primary text-primary" :class="['carousel__profile-button', { 'active': index === currentProfileIndex}] " @click="()=>currentProfileIndex='Profile_3'"></div>
        </div>
        </div> 
        </div>
    </div>
  </div>
  <div class="latest-news-blog">
    <h1 class="text-h2">Latest News & Blog</h1>
    <p class="normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Varius sed pharetra dictum neque massa </p>
    <div class="news-blog">
    <div class="latest">
      <img src="../assets/images/coffee.png">
      <img class="cal" src="../assets/images/Callender.png">
      <h1 class="news large-text-bold">Simple coffee Recipes for Next 
        Spring !</h1>
      <p class="blog normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Laoreet cursus nec duis nec facilisis quis imperdiet venenatis. 
        Platea at nunc consequat est dolor 
      </p>
      <img class="bttn" src="../assets/images/Medium.png">
    </div>
    <div class="latest">
      <img src="../assets/images/coffee.png">
      <img class="cal" src="../assets/images/Callender.png">
      <h1 class="news large-text-bold">Italian famous pasta with meat and cheese </h1>
      <p class="blog normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Laoreet cursus nec duis nec facilisis quis imperdiet venenatis. 
        Platea at nunc consequat est dolor 
      </p>
      <img class="bttn" src="../assets/images/Medium.png">
    </div>
    <div class="latest">
      <img src="../assets/images/coffee.png">
      <img class="cal" src="../assets/images/Callender.png">
      <h1 class="news large-text-bold">Chocolate truffle cake with honey flavor
        truffle cake </h1>
        <p class="blog normal-text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Laoreet cursus nec duis nec facilisis quis imperdiet venenatis. 
        Platea at nunc consequat est dolor 
      </p>
      <img class="bttn" src="../assets/images/Medium.png">
    </div>
   </div>
  </div>
  <div class="work-with-best-people">
    <span class="work text-primary">Partners & Clients</span>
    <h1 class="work-with text-h2">We work with the best pepole</h1>
    <div class="best-people">
      <img class="best-1" src="../assets/images/image 2.png">
      <img class="best-2" src="../assets/images/image 60.png">
      <img class="best-3" src="../assets/images/image 56.png">
      <img class="best-4" src="../assets/images/image 58.png">
      <img class="best-5" src="../assets/images/image 57.png">
      <img class="best-6" src="../assets/images/image 59.png">
    </div>
  </div>
  <div class="footer">
    <div class="subscribe-box bg-light">
      <div>
      <h1 class="letter text-h4">Subscribe
          To Our Newsletter</h1>
          </div>
        <div class="subs border-primary">
            <p class="mail text-primary normal-text-regular">Enter your mail</p>
            <p class="now bg-primary text-light normal-text-regular">Subscrib now</p>
        </div>
        <div class="apps">
          <img class="facebook" src="../assets/images/facebook.png">&nbsp;
          <img class="twitter" src="../assets/images/twitter.png">&nbsp;
          <img class="insta" src="../assets/images/insta.png">&nbsp; 
          <img class="youtube" src="../assets/images/youtube.png">&nbsp;
        </div>
    </div>
    <img class="bg-img" src="../assets/images/bg-img.png">
    <Logo class="logo-text"/>
    <p class="logo-subtext text-light medium-text-regular">Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
       making it over 2000 years old.</p>
    <img class="explore" src="../assets/images/Explore.png">
    <img class="contact" src="../assets/images/contact.png">
    <p class="copyright text-light normal-text-regular">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
  </div>
</template>

<style>
.demo{
  height: 400px;
  width:400px;
  background-color: red;
}
header {
  background-image: url(../assets/images/bg-cofee.png);
  font-family: Arial, Helvetica, sans-serif;
}
nav {
  display: flex;
  gap: 13vw;
  margin: 0 15%;
  padding: 3em 0;
}
.text{
  display:flex;
}
.text0{
  display:flex;
  display: flext;
  list-style: none;
  gap: 2em;
}
.navigation,
.icons {
  display:flex;
  display: flext;
  list-style: none;
  gap: 2em;
  color: white;
}
.navigation{
  margin-left: 5vw;
}
.head{
  display: flex;
  margin: 0 15% ;
 gap: 5vw;
}
.head > div{
  display: flex;
  flex: 45%;
  max-width: 45%;
  height: 87vh;
  justify-content: center;
  flex-wrap: wrap;
}
.head-text{
  flex-direction: column;
  padding-right: 10vw;
}
.btn-group{
  display: flex;
  gap: 1em;
  margin:1em 0;
}
.btn1,.btn2{
  padding:  18px 54px;
}
.head-image{
  align-items: center;
}
.heroImg, .hero-image{
  height: 596px;
  width: 536px;
}
.heroImg{
  position: relative;
  left: 2em;
  top: 2em;
}
.text-2, .text-sub{
font-family: 'Inter', sans-serif;
font-weight: 400;
}
.text-2-container{
  display: flex;
  width: 226px;
  justify-content: center;
  padding: 5px 0;
}
.hero-text{
font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
}
 .box > div{
  display: flex;
  flex: 45%;
  padding-top:10%;
  max-width: 70%;
  height: 20vh;
  justify-content: center;
  flex-wrap: wrap;
}
.box{
  display: flex;
  margin: 0 15% ;
  gap: 5vw;
} 
.text-box{
  display:flex;
padding-right: 60%;
padding-top: 18%;
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
}
.aboutImg{
  transform: translateX(20px);
}
.super-text{
  padding-left: 16%;
  font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
}
.super-sub{
  padding-left: 16%;
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
}
.super-box{
  padding-right:29%;
font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 26px;
}
.button{
  display:flex;
  padding-right:46%;
}
.super-image{
  align-items: center;
}
.superImg{
  width: 680px;
height: 660.73px;
left: 400px;
top: 1032px;
}
.category{
  display: flex;
  margin: 0 13% ;
  gap: 3vw;
}
.category-box > div{
  display: flex;
  flex: 80%;
  padding-top:50%;
  max-width: 40%;
  height: 20vh;
  justify-content: center;
  flex-wrap: wrap;
}
.category-text{
  text-align: start;
  padding-top:165%;
  transform: translateX(59px);
  font-family: 'Helvetica';
font-weight: 700;
}
.category-sub{
  padding-right: 16%;
font-family: 'Inter';
font-style: normal;
font-weight: 400;

text-align: center;
}
.category-start{
  padding-top:70%;
}
.category-end{
  padding-top:73%;
}
.start-1-text, .start-2-text, .start-3-text{
  padding-left:10%;
}
.start-1-sub, .start-2-sub, .start-3-sub{
  text-align: center;
  font-family: 'Helvetica';
  transform: translateX(-40px);
font-style: normal;
font-weight: 500;
}
.category-1-sub , .category-2-sub, .category-3-sub{
  text-align: end;
  font-family: 'Inter';
font-style: normal;
font-weight: 500;
}
.end-1-sub, .end-2-sub, .end-3-sub{
  text-align: center;
  font-family: 'Helvetica';
  transform: translateX(40px);
font-style: normal;
font-weight: 500;
}
.category-4-sub , .category-5-sub, .category-6-sub{
  text-align: center;
  padding-right: 10%;
  font-family: 'Inter';
font-style: normal;
font-weight: 500;
}
.g1Img{
  padding-right: 20%;
  transform: translateY(70px);
}
.g2Img{
  padding-right: 20%;
  transform: translateY(70px);
}
.g3Img{
  padding-right: 20%;
  transform: translateY(70px);
}
.g4Img{
  padding-left: 86%;
  transform: translateY(-90px);
}
.g5Img{
  padding-left: 86%;
  transform: translateY(-80px);
}
.g6Img{
  padding-left: 88%;
  transform: translateY(-80px);
}
.category-image{
  padding-left: 110%;
  align-items: start;
}
.categoryImg{
  position: absolute;
width: 400.26px;
height: 525px;
left: 800.37px;
top: 2220px;
}
.quality > div{
  display: flex;
  flex: 45%;
  padding-top:20%;
  max-width: 70%;
  height: 15vh;
  justify-content: center;
  flex-wrap: wrap;
}
.quality{
  display: flex;
  margin: 0 15% ;
  gap: 5vw;
} 
.quality-box{
  padding-right: 55%;
}
.Icon-grp{
  padding-left: 10%;
}
.Icon1-text{
  font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
text-align: end;
transform: translateY(-100px);
padding-right: 35%;
}
.Icon1-sub{
  font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
transform: translateY(-100px);
padding-left: 23%;
padding-right: 15%;
}
.Icon2-text{
  font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
text-align: end;
transform: translateY(-100px);
padding-right: 38%;
}
.Icon2-sub{
  font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
transform: translateY(-100px);
padding-left: 23%;
padding-right: 15%;
}
.Icon3-text{
  font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
text-align: end;
transform: translateY(-100px);
padding-right: 41%;
}
.Icon3-sub{
  font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
transform: translateY(-100px);
padding-left: 23%;
padding-right: 15%;
}
.Ig2-box{
  transform: translateY(-60px);
}
.Ig3-box{
  transform: translateY(-120px);
}
.our-fav-menu{
  display: flex;
  margin: 0 15% ;
  gap: 5vw;
  padding-top: 45%;
}
.favorite{
  display: flex;
 flex:20%;
 max-width: 20%;
 padding-top: 13%;
 padding-bottom: 2%;
 padding-left: 6%;
}
.cards{
  padding-left:4%;
  display: flex;
  flex: 80%;
  max-width: 80%;
  flex-wrap: wrap;
}
.fav-text{
  padding-bottom: 7%;
  padding-left: 9%;
}
.fav-sub{
width: 418px;
height: 48px;
left: 764px;
top: 3507px;
padding-top:7%;
transform: translateX(-380px);
justify-content: center;
font-family: 'Inter';
font-style: normal;
font-weight: 400;

text-align: center;
}
.unsplash-1{
  display: flex;
  height: 217px;
width: 308px;
padding: 5%;
padding-top: 7%;
transform: translateY(30px);
}
.unsplash-1-text{
  display:flex;
  font-family: 'Helvetica';
font-style: normal;
font-weight: 600;
padding-left:4%;
text-align: justify;
padding-top:8% ;
}
.price{
  padding-left: 4%;
  padding-top:10% ;
}
.vector-img{
left: 8.37%;
right: 10.37%;
top: 9.35%;
bottom: 12.49%;
padding-left: 65%;
transform: translateY(-48px);
}
.v-1, .v-2, .v-3,.v-4, .v-5{
 padding-right: 3px;
}
.buttons{
  padding:30px;
}
.button-1, .button-2, .button-3, .button-4, .button-5{
  height: 80px;
width: 258px;
border-radius: 0px;
}
/* .button-1:focus, .button-2:focus, .button-3:focus, .button-4:focus, .button-5:focus{
  background: #BC9A6C;
} */
.ig1{
  height: 44.99993133544922px;
width: 41.498348236083984px;
left: 1.750732421875px;
top: 0px;
border-radius: 0px;
transform: translateX(-35px);
}
.ig2{
  height: 35px;
width: 35px;
left: 10px;
top: 12px;
border-radius: 0px;
transform: translateX(-35px);
}
.ig3{
  height: 35px;
width: 35px;
left: 10px;
top: 12px;
border-radius: 0px;
transform: translateX(-45px);
}
.ig4{
  height: 40px;
width: 40px;
left: 10px;
top: 12px;
border-radius: 0px;
transform: translateX(-30px);
}
.ig5{
  height: 40px;
width: 35px;
left: 10px;
top: 10px;
border-radius: 0px;
transform: translateX(-30px);
}
.meet-our-chef{
  display: flex;
  flex:30%;
  padding-top:10%;
  padding-left:39%;
  text-align: center;
  max-width: 62%;
  height: 20vh;
  flex-wrap: wrap;
  justify-content: center;
}
.meet-chef{
  display:flex;
  padding-top:10%;
  padding-right:20% ;
}
.our-chef-1, .our-chef-2, .our-chef-3, .our-chef-4{
  padding: 1%;
}
.chef-meet-1, .chef-meet-3, .chef-meet-4{
  height: 26px;
width: 120px;
left: 30px;
top: 322px;
border-radius: nullpx;
font-weight: 600;
transform: translateY(360px);
font-family: 'Inter';
font-style: normal;
font-weight: 700;
}
.meet-1, .meet-3, .meet-4{
  transform: translateX(130px);
  height: 24px;
width: 37px;
left: 137px;
top: 352px;
border-radius: nullpx;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
}
.chef-meet-2{
font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
}
.meet-2{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
}
.grp {
 transform: translateY(-370px);  
padding-left: 83%;
padding-top:10px;
position:relative;
 text-decoration: none;
}
.rect-1, .rect-2, .rect-3, .rect-4{
  position: relative;
}
.f, .t, .v, .p{
  display: flex;
 padding-left: 20px;
  transform: translateY(-20px);
  position: relative;
}
.rect-1:hover::after{
  content: '';
  position: absolute;
  transition: 0.5s;
}
.rect-1:hover,.rect-2:hover, .rect-3:hover, .rect-4:hover{
height: 50%;
width:50%;
} 
.our-customer-says{
  display:flex;
  margin:0 18%;
  gap:8vw;
  padding-top: 40%;
}
.backdrop{
  position:absolute;
  left:0;
  height:100vh;
  width:100%;
  background-color: rgba(255, 255, 255, 0.982);
  display:fixed;
  justify-content: center;
  align-items: center;
}
.videomodal{
  width:560;
 height:315;
  position:absolute;
  /* left:17vw; */
  background-color: #000;
}
.background{
  width: 657px;
height: 622px;
left: 300px;
top: 5109px;
transform: translateY(-622px);
}
.test{
  transform: translateY(-1200px);
  padding-left: 15%;
}
.ellipse{
 padding-left: 70px;
 transform: translateY(30px);
}
.test-text{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
transform: translateX(80px);
}
.test-sub{
font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
transform: translateX(-80px);
}
.quotes{
 transform: translateX(100px);
}
.review{
width: 513px;
height: 104px;
left: 372px;
top: 5359px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
text-align: center;
transform: translateY(-1180px);
margin-left: 5%;
padding-top: 1%;
}
.profile{
 border-radius: 70px;
 height: 70px;
 width:70px;
 margin-top:1%;
 object-fit: cover;
}
.carousel__profile-button{
  width:10px;
  height:10px;
  border-radius:30px;
 margin-top: 3%;
}
.carousel__button-group{
  display:flex;
  justify-content: center;
  align-items: center;
  gap:12px;
}
.carousel__button-group :active{
  border:1px solid #BC9A6C;
  background-color: #BC9A6C;
}
.latest-news-blog{
  transform: translateY(-650px);
  padding-left:42%;
  text-align: center;
  max-width: 63%;
  height: 20vh;
  flex-wrap: wrap;
  justify-content: center;
}
.news-blog{
  display: flex;
  padding-top: 7%;
transform: translateX(-500px);
}
.latest{
  padding:3%;
}
.cal{
  padding-top: 2%;
  padding-right: 48%;
}
.news{
  font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
padding-right: 25%;
text-align: start;
padding-top: 2%;
}
.blog{
  font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
text-align: start;
padding-top:2%;
}
.bttn{
  padding-right: 60%;
  padding-top: 1%;
}
.work-with-best-people{
  padding-left: 20%;
  padding-top: 7%;
  text-align: center;
  max-width: 100%;
  height: 20vh;
  flex-wrap: wrap;
  justify-content: center;
}
.work{
font-family: 'Miniver';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
padding-right: 20%;
}
.work-with{
  font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
padding-right: 18%;
}
.best-people{
  display:flex;
  flex:100%;
  padding-top: 4%;
  padding-right: 28%;
  
}
.best-2,.best-3,.best-4,.best-5,.best-6{
  padding-left: 5%;
}
.footer{
  padding-top:18%;
}
.bg-img{
  width: 2026px;
height: 564px;
left: 0px;
top: 7258px;
}
.copyright{
transform: translateY(-605px);
font-family: 'Inter';
font-style: normal;
font-weight: 400;
padding-left:40%;
}
.logo-text{
  transform: translateY(-390px);
  font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 40px;
padding-left:15%
}
.logo-subtext{
  transform: translateY(-390px);
  font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
padding-left: 15%;
max-width: 34%;
}
.explore{
  padding-left: 45%;
  transform: translateY(-515px);
}
.contact{
  padding-left: 68%;
  transform: translateY(-700px);
}
.subscribe-box{
box-shadow: 0px 0px 80px rgba(205, 205, 205, 0.25);
height: 240px;
width: 1320px;
left: 400px;
top: 0px;
border-radius: 0px;
margin-left:16%;
transform: translateY(115px);
}
.letter{
  max-width: 22%;
  padding-top:80px;
  padding-left: 40px;
  left: 6.06%;
right: 73.18%;
top: 33.33%;
bottom: 33.33%;

font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
}
.subs{
  box-sizing: border-box;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
margin-left: 28%;
height: 56px;
width: 559px;
left: 0px;
top: 0px;
border-radius: 0px;
transform: translateY(-80px);
}
.mail{
  height: 24px;
width: 113px;
left: 30px;
top: 30px;
border-radius: nullpx;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
display: flex;
align-items: center;
margin-top: 13px;
margin-left: 5px;
}
.now{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 48px;
gap: 10px;

height: 54.068965911865234px;
width: 193px;
left: 366px;
top: 0.965576171875px;
border-radius: 0px;
padding: 16px 48px 16px 48px;

margin-left: 66%;
transform: translateY(-53px);
}
.apps{
  margin-left:78%;
  transform: translateY(-120px);
}
</style>
