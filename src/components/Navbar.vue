<template>
  <nav>
        <div class="logo">
        <p>IotBan.</p>
        </div>
        <ul>
        <li><a href="" class="medical-history"> Medical History </a></li>
        <li><a href=""> Search Doctor </a></li>
        <li><a href=""> Profile </a></li>
        <li><a href=""> Log Out </a></li>
      
        </ul>
        <!-- <Records title="Records" /> -->
   </nav>
</template>




<script>

export default {
    name: 'Navbar',
   
}
</script>




<style scoped>
* {
  margin: 0;
  padding: 0;
  overflow:visible;
}

.container {
  width: 96.5%;
  height: 100vh;
 
}

nav {
  width: 100%;
  height: 65px;
  line-height: 65px;
  padding: 0px 100px;
  z-index:1;
  background-color:#1424B3;
 
}

nav .logo{
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: white;
}

nav .logo p {
  float: left;
}

nav ul {
  float: right;
}

nav ul li {
  display: inline-block;
  list-style: none;
}

nav ul li a {
  color:white;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  padding: 0 32px;
}

nav ul li .medical-history {
  font-size: 22px;
  font-weight: 500;
}

.med-bar {
    margin-left: 40%;
    margin-top: 70px;
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 5px;
}
</style>