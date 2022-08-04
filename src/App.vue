<template>

  <nav>
    <div class="logo">
      <p>IotBan.</p>
    </div>
    <ul>
      <li><router-link to="" class="home">Home</router-link></li>
      <li><router-link to="">Overview</router-link></li>
      <li><router-link to="">Report</router-link></li>
      <li><router-link to="">Contact</router-link></li>
      <li><router-link to="/login" class="login">Log in</router-link></li>
      <li><router-link to="/signup" class="signup">Sign Up</router-link></li>  
      
    </ul>
     

  </nav> 
  <main>
    <router-view></router-view>

  </main>



</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-family: 'Source Serif 4', serif;
  background-color: #E8ECF5;
  
}



nav {
  width: 100%;
  height: 75px;
  display:flex;
  justify-content: space-between;
  line-height: 75px;
  padding: 0px 100px;
   /*position:fixed;
  z-index:1; */
  background-color: #E8ECF5;

}

nav .logo{
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #1424B3;
}

nav .logo p {
  float: left;
}

nav ul {
  /* float: right; */
  display:flex;
  justify-content: space-between;
}

nav ul li {
  /* display: inline-block; */
  list-style: none;
}

nav ul li a {
  color:black;
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
  
  background: #DBE0EA;
  border-radius: 25px;
  padding: 10px 30px;
  color:#1424B3;
}

nav ul li .signup {
  background: #1424B3;
  border-radius: 25px;
  padding: 10px 30px;
  color:#fff;
}



.blue-btn a {
  color:#fff;
  text-decoration: none;
  text-align: center;
  display:grid;
  line-height: 44px;
  
}

.blue-btn {
  height:90;
  width: 200px;
  background-color: #1424B3;
  margin-top: 150px;
  border-radius: 20px;
  padding: 10px 30px;

}

main{
  top:100px;
  height:calc(100vh - 100px)
}
</style>
