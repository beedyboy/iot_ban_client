
<template>
  
<div class="main-container">

   <div class="card-container">

      <div class="image">
        <img src="../assets/avatar-1.svg">
      </div>
      <div class="title">
        <h1> Pamela Rose | 45 </h1>
        <p> </p>
      </div>
        <div class="des">
      <p> Add Description Here...</p>
        <button>Attend To !</button>
      </div>

   </div>

</div>



</template>


<script>

export default {
  name: 'Card',
}

</script>

<style>

*{
 margin: 0px;
 padding: 0px;
 box-sizing: border-box;
}
.main-container{
  display : grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-auto-rows: auto;
  grid-gap: 1rem; */
 
}

.card-container{
     width: 65%;
     
     box-shadow: 2px 2px 20px black;
     border-radius: 15px; 
     margin: 55px;
     background-color:#E8ECF5;
 
  
 
    }

.image img{
  width: 80%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin-left:35px;
  display:block;
 
 }

.title{
 
  text-align: center;
  padding: 10px;
  /* border: 4px solid yellow; */
  
 }

h1{
  font-size: 20px;
 }

.des{
  padding: 3px;
  text-align: center;
 
  padding-top: 10px;
        border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
button{
  margin-top: 40px;
  margin-bottom: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding:10px;
  font-size: 15px;
}
button:hover{
  background-color: #1424B3;
  color: white;
  transition: .5s;
  cursor: pointer;
}

</style>