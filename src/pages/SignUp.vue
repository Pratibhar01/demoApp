<script>
import Logo from "../assets/logo.vue";
import { BIconSearch, BIconPerson, BIconBag, BFormSelectOptionGroup,} from 'bootstrap-vue'
import Footer from "../components/footer.vue";

import pinia from "../store/store";
import { useSignup } from "../store/signup";
const signup = useSignup(pinia());


export default {
  data() {
    return {
      menu: ["Menu", "Blog", "Pages", "About", "Shop", "Contact"],
      icon: ["ic1", "ic2", "ic3"],
      name:"",
      email:"",
      passsword:"",
      remember:false,
      errors:"",
    };
  },
  components: {
    Logo,BIconSearch, BIconPerson, BIconBag,Footer
  },
  computed:{
    register(){
      return BFormSelectOptionGroup.isRegister
    }
  },
  methods: {
    signingup() {
      console.log("signup is clicked");
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      signup.signedUp(formData);
      this.name =""
      this.email =""
      this.password =""
    },
    login() {
      console.log("login is clicked");
      const formData = {
        email: this.email,
        password: this.password,
      };
      signup.login(formData);
    },
    google(){
      signup.googleSignin()
    },
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
    <div>
    <div class="main-form">
      <form
      @submit.prevent="handleGoogleSignin"

      >
      <h1 class="sign large-text-bold">
        {{ "Sign Up" }}
      </h1>
      <!-- <input 
      v-if="register"
          id="name"
          type="text"
          name="name"
          v-model="name"
      /> -->
      <div class="users">
      <input
      class="username1"
        id="name"
          type="text"
          name="name"
          v-model="name"
          placeholder="name"
      />
      <input 
      class="username2"
          id="email"
          type="email"
          name="email"
          v-model="email"
          placeholder="email"
      />
      <input 
      class="username3"
          id="passwd"
          type="password"
          name="passwd"
          v-model="password"
          placeholder="password"
      />
      </div>
      <div class="remember">
        <input
            class="check-box"
            type="checkbox"
            id="remember"
            name="remember"
            v-model="remember"
          />
          <span>Remember me?</span>
      </div>
      <button class="signup-btn"
          @click="signingup"
        >
          Sign Up
      </button>
      <p class="frgt">Forget Password?</p>
        <h3 class="text-center p-1 or">OR</h3>
        <button @click="google" class="social-signup">
          <img src="../assets/images/google.png" />
          <span class="network">Sign up with Google</span>
        </button>
        <button class="social-signup">
          <img src="../assets/images/apple.png" />
          <span class="network">Sign up with Apple</span>
        </button>
     </form>
    </div>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<style>
.coff{
  width:100%;
}
.navig{
  transform: translateY(-530px);
}
.up{
  padding-left: 45%;
  transform: translateY(-200px);
}
/* .sign{
  padding-left: 45%;
}
.username1, .username2, .username3{
  display: flex;
  margin: 1%;
  margin-left: 45%;
}
.remember
{
  margin-left: 45%;
}
.signup-btn{
  margin-left: 45%;
}
.frgt{
  margin-left: 45%;
}
.social-signup{
  display: flex;
  margin: 1%;
  margin-left: 45%;
}
.main-form */
.users{
  display:flex;
  justify-content: center;
  flex-direction: column;
  gap:1rem;
}
form{
  max-width: 30%;
  padding:2rem;
  box-shadow: 0px 4px 80px rgba(255, 159, 13, 0.15);
}
.main-form{
  display:flex;
  justify-content: center;
 align-items: center;
 gap:2em;
}
</style>