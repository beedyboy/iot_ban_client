<!-- eslint-disable vue/valid-template-root -->

<template>
  <div class="container">

    <div class="signup-container">

      <h2 class="title">Get Started.</h2>
      <form @submit="register">
        <p>Already have an account ? <a href="#"> Log In </a></p>


        <div class="firstname-control">
          <h5>First Name</h5>
          <input type="text" class="input" v-model="firstName" />
        </div>

        <div class="lastname-control">
          <h5>Last Name</h5>
          <input type="text" class="input" v-model="lastName" />
        </div>

        <div class="usertype-control">
          <h5>User Type</h5>
          <select v-model="userType">
            <option>Select Type</option>
            <option value="PATIENT">Patient</option>
            <option value="DOCTOR">Doctor</option>
          </select>
        </div>

        <div class="email-control">
          <h5>Email Address</h5>
          <input type="text" class="input" v-model="email" />
        </div>

        <div class="pass-control">
          <h5>Password</h5>
          <input type="password" class="input" v-model="password" />

        </div>

        <div class="create">
          <button type="submit"> Create Account </button>
        </div>
      </form>

    </div>

    <div class="image-container">

      <h3>Iot Ban.</h3>

      <img :src="require('../assets/banner.png')" />
      <p>
        Get access to unlimited Doctors.
      </p>
    </div>




  </div>
</template>



<script>
export default {
  name: 'SignUp',
  data() {
    return {
      firstName: String,
      lastName: String,
      email: String,
      password: String,
      userType: String,
    }
  },
  methods: {
    async register(e) {
      e.preventDefault()
      if (this.email === "" || this.password === "") {
        alert("Please enter your email and password correctly")
      }
      else {
        const newUser = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          userType: this.userType,
        }
        const result = await fetch('https://ban-iot.herokuapp.com/api', {
          method: 'POST',
          headers: {
              'Content-type': 'application/json',
          },
          body: JSON.stringify(newUser)
      })
      result.status === 201 ? alert(result.json().message) : alert('Error registering user')

    }
  }
  }
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
  /* height: 100vh; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  /* background-color: red; */

}

h3 {
  color: #1424b3;
  left: 21px;
  /* width: 200px; */
  height: 40px;
  font-weight: 700;
  font-size: 30px;
  /* line-height: 55px; */
  margin-left: auto;
  margin-top: 10px;
}

.image-container {
  /* width: 400px; */
  /* height: 800px; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* align-items: ; */

}

.image-container p {
  /* width: 600px; */
  /* height: 70px; */
  margin-left: 60%;
  font-weight: 500px;
  font-size: 35px;
  color: #1424b3;
  border: 5px solid white;
  /* text-align: center; */
  /* padding: 30px; */
}

img {
  width: 390px;
  /* height: 366px; */
  margin-left: 28%;
  margin-bottom: 25%;


}

.signup-container {
  background: #e8ecf5;
  height: 100%;
  /* width: 750px; */

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
  color: #000000B5;
  margin-left: 180px;
  margin-bottom: 40px;
  width: 280px;
  line-height: 10px;
}

.signup-container a {
  color: #1424B3;

}

.firstname-control h5 {

  margin-top: 20px;
  margin-left: 205px;
  font-size: 20px;
  font-weight: 200;
}


.lastname-control h5 {

  margin-top: 20px;
  margin-left: 205px;
  font-size: 20px;
  font-weight: 200;
}


.usertype-control h5 {

  margin-top: 20px;
  margin-left: 205px;
  font-size: 20px;
  font-weight: 200;
}

.usertype-control select {

  margin-top: 20px;
  margin-left: 5px;
  font-size: 20px;
  font-weight: 200;
}


.email-control h5 {

  margin-top: 20px;
  margin-left: 205px;
  font-size: 20px;
  font-weight: 200;
}

.pass-control h5 {

  margin-top: 20px;
  margin-left: 205px;
  font-size: 20px;
  font-weight: 200;
}


input[type="text"] {
  width: 40%;
  padding: 12px 20px;
  margin-left: 205px;
  margin-top: 20px;
  border: 1px solid #1424B3;
  border-radius: 10px;
  line-height: 10px;
}

input[type="password"] {

  width: 40%;
  padding: 12px 20px;
  margin-left: 205px;
  margin-top: 8px;
  margin-bottom: 10px;
  border: 1px solid #1424B3;
  border-radius: 10px;
  line-height: 10px;
}

.create {
  width: 45%;
  height: 50px;

  margin-left: 205px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #1424B3;
  border-radius: 10px;
  /* color: white; */
}

.create h4 {
  text-align: center;
  padding-top: 15px;
  font-size: 20px;
  font-weight: 200;
  color: white;
}
</style>