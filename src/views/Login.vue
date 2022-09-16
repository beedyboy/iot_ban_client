
<template>

  <div class="container">
    <div class="image-container">
      <div class="logo">

        <h3>Iot Ban.</h3>

        <img :src="require('../assets/login.png')" />

      </div> 
      <p>
        With OpenSSL, your health records <br />
        are secured from end to end!
      </p>
    </div>


    <div class="login-container">

      <h2 class="title">Welcome Back !</h2>
      <form @submit="login">
        <p>All in one place!</p>

        <div class="form-control">
          <label>Email Address</label>
          <input type="email" class="input" v-model="email" />
        </div>

        <div class="form-control">
          <label>Password</label>
          <input type="password" class="input" v-model="password" />

        </div>
        <a href="#">Forgot Password?</a>

        <button type="submit" :disabled="$store.state.account.loggingIn">{{ $store.state.account.loggingIn ? 'processing...' : 'Sign In '}}</button>

      </form>

      <footer class="footer">
        <h6>Don't have an account ? 
        <router-link to="/signup" class="signup">Sign Up</router-link></h6>
      </footer>

    </div>
  </div>
</template>

<script> 
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      email: "",
      password: "",
      sending: false
    }
  },
  methods: {
    async login(e) {
      e.preventDefault();
      if (this.email === "" || this.password === "") {

        this.$toast.warning("Please enter your email and password correctly!");

      } else {
        const newUser = {
          email: this.email,
          password: this.password,
        }
        this.$store.dispatch('account/login', newUser);
      }

    }  
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

a {
  margin-left: 55%;
  /* margin-top: 2px; */
  /* margin-bottom: 60px; */

}

h3 {
  color: #1424b3;

  left: 21px;
  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: 30px;
  line-height: 55px;
}

.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  padding: 0 2rem;
}

.image-container {
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

}

.image-container p {
  width: 600px;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  font-weight: 300px;
  font-size: 22px;
  color: #1424b3;
  align-items: center;
  text-align: center;
  padding: 30px;
}

img {
  width: 600px;
  height: 550px;
}

.login-container {
  background: #e8ecf5;
  margin-bottom: 20px;
  position: relative;
  height: 100vh;
  width: 750px;

}

/* form {
  width: 800px; 
  display:flex;
  justify-content: space-between;
  
}  */

.login-container h2 {
  width: 200px;
  height: 15px;
  padding: 20px;
  margin-left: 80px;
  margin-top: 50px;

  color: black;
  font-size: 25px;
  font-weight: 700;

}

.login-container p {

  font-size: 15px;
  color: #1424b3;
  margin-left: 110px;
  margin-bottom: 30px;
  width: 200px;

  line-height: 20px;
}

.form-control {
  display: flex;
  flex-direction: column;
}

.form-control label {
  margin-top: 20px;
  margin-left: 205px;
  font-size: 20px;
  font-weight: 200;
}

input[type="email"],
input[type="password"] {
  width: 50%;
  padding: 12px 20px;
  margin-left: 110px;
  margin-top: 20px;
  border: 1px solid #1424B3;
  border-radius: 10px;
  line-height: 20px;
}


button {
  width: 50%;
  height: 50px;
  margin-left: 110px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #1424B3;
  border-radius: 10px;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 200;
}

.footer h6 {
  margin-top: 150px;
  margin-left: 63%;
  margin-bottom: 9px;
  width: 250px;
  height: auto;
  line-height: 9px;
  text-align: left;
}

.footer a {
  color: #1424B3;
}
</style>
