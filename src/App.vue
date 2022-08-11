<template>
  <nav v-show="showNavigation">
    <div class="logo">
      <p>IotBan. {{showNavigation}}</p>
    </div>
    <ul>
      <li><router-link to="/" class="home">Home</router-link></li>
      <li><router-link to="">Overview</router-link></li>
      <li><router-link to="">Report</router-link></li>
      <li><router-link to="">Contact</router-link></li>
      <li><router-link to="/login" class="login">Log in</router-link></li>
      <li><router-link to="/signup" class="signup">Sign Up</router-link></li>
    </ul>

  </nav>
    <Navbar v-if="!showNavigation" />

  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      showNavigation: this.$route.path === "/" ? true : false
    };
  },
  created(){
   return this.showNavigation = this.$route.path === "/" ? true : false
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  font-family: "Poppins", sans-serif;
  font-family: "Source Serif 4", serif;
  background-color: #e8ecf5;
  height: 100vh;
  max-height: 100%;
}

nav {
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  line-height: 75px;
  padding: 0px 100px;
  /*position:fixed;
  z-index:1; */
  background-color: #e8ecf5;
}

nav .logo {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #1424b3;
}

nav .logo p {
  float: left;
}

nav ul {
  /* float: right; */
  display: flex;
  justify-content: space-between;
}

nav ul li {
  /* display: inline-block; */
  list-style: none;
}

nav ul li a {
  color: black;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  padding: 0 32px;
}

nav ul li .home {
  font-size: 15px;
  font-weight: bold;
}

nav ul li .login {
  background: #dbe0ea;
  border-radius: 25px;
  padding: 10px 30px;
  color: #1424b3;
}

nav ul li .signup {
  background: #1424b3;
  border-radius: 25px;
  padding: 10px 30px;
  color: #fff;
}

.blue-btn a {
  color: #fff;
  text-decoration: none;
  text-align: center;
  display: grid;
  line-height: 44px;
}

.blue-btn {
  height: 90;
  width: 200px;
  background-color: #1424b3;
  margin-top: 150px;
  border-radius: 20px;
  padding: 10px 30px;
}

main {
  top: 100px;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
}
</style>
