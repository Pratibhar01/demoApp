<script>
import Logo from "../assets/logo.vue";
import { BIconSearch, BIconPerson, BIconBag,} from 'bootstrap-vue'
import Footer from "../components/footer.vue";

export default {
  data() {
    return {
      menu: ["Menu", "Blog", "Pages", "About", "Shop", "Contact"],
      icon: ["ic1", "ic2", "ic3"],
    };
  },
  components: {
    Logo,BIconSearch, BIconPerson, BIconBag,Footer
  },
};
</script>

<template>
  <div class="coff">
    <div class="supert">
      <img class="signimg pt-5" src="../assets/images/signup_img.png">
      <h1 class="up text-h2 text-light">Sign up page</h1>
    </div>
    <header class="navig">
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
    </header>
    <div class="footer">
      <Footer/>
    </div>
    </div>
</template>

<style>
.navig{
  transform: translateY(-530px);
}
.up{
  padding-left: 45%;
  transform: translateY(-200px);
}


</style>