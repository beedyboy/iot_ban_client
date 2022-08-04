<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&display=swap" rel="stylesheet">





  <div class="container">
    <router-view />
    <div class="image-container">
      <div class="logo">

      <h3>Iot Ban.</h3>

      <img :src=" ('./assets/cover.svg') " />

    </div>
    
  

      <p>
        With OpenSSL, your health records <br />
        are secured from end to end!
      </p>
    </div>


    <div class="login-container">
      
    <h2 class="title">Welcome Back !</h2>
      <form action="index.html">
        <p>All in one place!</p>

        <div class="email-control">
          <h5>Email</h5>
          <input type="text" class="input" />
        </div>

        <div class="pass-control">
          
          <h5>Password</h5><a href="#">Forgot Password?</a>
          
          <input type="password" class="input" />
         
        </div>

        <div class="signup">
          <button>Sign In</button>
        </div>
      </form>

      <footer class="footer"> <h6>Don't have an account  ? <a href="#"> Sign Up </a></h6>  </footer>

    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login'
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  overflow: hidden;
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
  position:relative;
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

.email-control h5 {
  margin-top: 20px;
   margin-left: 110px;
   font-size: 20px;
  font-weight: 200;
}
.pass-control h5{
   margin-top: 20px;
   margin-left: 110px;
   font-size: 20px;
  font-weight: 200;
  
}
a {
margin-left: 55%;  
/* margin-top: 2px; */
/* margin-bottom: 60px; */

}

input[type="text"]{
   width: 50%;
  padding: 12px 20px;
  margin-left: 110px;
   margin-top: 20px;
  border: 1px solid #1424B3;
  border-radius: 10px;
  line-height: 20px;
}


input[type="password"]
 {
  
  width: 50%;
  padding: 12px 20px;
  margin-left: 110px;
   margin-top: 8px;
   margin-bottom: 10px;
  border: 1px solid #1424B3;
  border-radius: 10px;
  line-height: 20px;
} 

.signup {
width: 50%;
height:20px;
  padding-bottom:20px;
  padding-right: 10px;
  padding-top: 20px;
    
  margin-left: 110px;
   margin-top: 30px;
   margin-bottom: 30px;
  
  background-color: #1424B3;
  border-radius: 10px;
  color: white;
}

.signup button  {
  text-align: center;
  font-size: 20px;
  font-weight: 200;
  color:white;
  margin-left: 40%;
  background: #1424b3;
}

.footer h6 {
  margin-top: 150px;
  margin-left: 63%;
 margin-bottom:9px;
 width: 250px;
 height:auto;
 line-height: 9px;
 text-align: left;
}

.footer a {
  color:#1424B3;
}

</style>
