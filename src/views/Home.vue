<template>
    
    <div class="header">
        <div class="container"> 
      <h5> Author's Name </h5>
      <h1> Internet of Things,<br>in Body Area Network. </h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
      Risus purus tristique at elementum. <br>
      Nibh purus eu tellus placerat imperdiet.</p>


      <img :src="require( '../assets/header.svg')" />

<div class="blue-btn">
  <a class="first-link" href=""> Get Started </a>
 </div>
  </div>
    </div>
    
   
</template>


<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
}

 
.header {
  height: 100vh;
  width: 100%;
  background: #e8ecf5;
  /* margin-bottom: 50%; */
  /* margin-bottom:50%; */
   /* border: 5px solid yellow ; */
  
}

img {
  width: 150%;
  height: 110%;
  margin-left: 150%;
  /* /* margin-bottom: 50%; */
   align-content: center; 
   /* border: 5px solid red ; */
  padding-bottom:20px;
  
  


}

.container {
  width: 30%;
  height: 50%;
  /* top: 200px; */
  /* left: 100px; */
  margin-left: 5%;
  margin-top: 7%;
 /* text-align: left; */
   /* border: 5px solid green ; */
 
}

h1 {
  font-size: 50px;
  font-weight: 600;
  
}

h5 {
  font-weight: 200;
  font-size: 20px;
  color:#1424B3;
}

p {
  font-size: 17px;
}

</style>