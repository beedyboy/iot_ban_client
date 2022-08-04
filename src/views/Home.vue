<template>
    
    <div class="header">
        <div class="container"> 
      <h5> Author's Name </h5>
      <h1> Internet of Things,<br>in Body Area Network. </h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
      Risus purus tristique at elementum. <br>
      Nibh purus eu tellus placerat imperdiet.</p>

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

 
.header {
  height: 100%;
  /* background-image: url('assets/header.svg'); */
  background-position: right bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 800px;
}

.container {
  width: 500px;
  height: 500px;
  top: 200px;
  left: 100px;
  position: fixed;
 text-align: left;
 
 
}

h1 {
  font-size: 50px;
  font-weight: 600;
  line-height: 70px;
}

h5 {
  font-weight: 200;
  font-size: 15px;
  color:#1424B3;
}

p {
  font-size: 15px;
}

</style>