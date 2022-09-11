<!-- eslint-disable vue/valid-template-root -->

<template>
  <div class="container">
    <div class="signup-container">
      <h2 class="title">Get Started.</h2>
      <form @submit.prevent="register">
        <p>Already have an account ? <a href="#"> Log In </a></p>

        <div class="form-control">
          <label>First Name</label>
          <input
            type="text"
            class="input"
            v-model="firstName"
            name="firstName"
          />
        </div>

        <div class="form-control">
          <label>Last Name</label>
          <input type="text" class="input" v-model="lastName" />
        </div>

        <div class="form-control">
          <label>User Type</label>
          <select v-model="userType">
            <option>Select Type</option>
            <option value="PATIENT">Patient</option>
            <option value="DOCTOR">Doctor</option> 
          </select>
        </div>

        <div class="form-control">
          <label>Email Address</label>
          <input type="email" class="input" v-model="email" />
        </div>

        <div class="form-control">
          <label>Password</label>
          <input type="password" class="input" v-model="password" />
        </div>
        <div v-if="passwordError" class="error">{{passwordError}}</div>

        <div class="create">
          <button type="submit" :disabled="$store.state.account.registering">{{ $store.state.account.registering ? "creating account.." : "Create Account" }}
          </button>
        </div>
      </form>
    </div>

    <div class="image-container">
      <h3>Iot Ban.</h3>

      <img :src="require('../assets/banner.png')" />
      <p>Get access to unlimited Doctors.</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "SignUp",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userType: "",
      sending: false,
      passwordError: "",
    };
  },
  methods: {
    async register(e) {
      e.preventDefault();
      // validation of password
    this.passwordError = this.password.length > 5 ? 
    '' : 'Password must be at least 6 characters long.'
      if (this.email === "" || this.password === "") {
        this.$toast.warning("Please enter your details correctly!");
      } else { 
        const newUser = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          userType: this.userType,
        };
       
        this.$store.dispatch('account/register', newUser);
      }
    },
  },
};
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
  overflow: visible;
}

.container {
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
}

h3 {
  color: #1424b3;
  left: 21px;
  height: 40px;
  font-weight: 700;
  font-size: 30px;
  margin-left: auto;
  margin-top: 10px;
}

.image-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
}

.image-container p {
  margin-left: 60%;
  font-weight: 500px;
  font-size: 35px;
  color: #1424b3;
  border: 5px solid white;
 
}

img {
  width: 390px;
  margin-left: 28%;
  margin-bottom: 25%;
}

.signup-container {
  background: #e8ecf5;
  height: 100%;
 
}

.signup-container h2 {
  width: 200px;
  height: 15px;
  padding: 20px;
  margin-left: 160px;
  margin-top: 50px;
  margin-bottom: 20px;
  color: black;
  font-size: 35px;
  font-weight: 700;
}

.signup-container p {
  font-size: 15px;
  color: #000000b5;
  margin-left: 180px;
  margin-bottom: 40px;
  width: 280px;
  line-height: 10px;
}

.signup-container a {
  color: #1424b3;
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

input[type="text"],
input[type="password"],
input[type="email"],
select {
  width: 40%;
  padding: 12px 20px;
  margin-left: 205px;
  margin-top: 20px;
  border: 1px solid #1424b3;
  border-radius: 10px;
  line-height: 10px;
}

button {
  width: 45%;
  height: 50px;
  margin-left: 205px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #1424b3;
  border-radius: 10px;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 200;
}

.error {
  color :crimson;
  margin-top: 20px;
  margin-left: 205px;
  font-size: 15px;
  font-weight:600;
}
</style>