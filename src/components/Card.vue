
<template>

   <div class="card">
        <img src="../assets/avatar-1.svg">
      
      
        <h1>  {{name}} | {{age}} </h1>
        
      <p> Add Description Here...</p>
        <button>Attend To !</button>
   
   </div>
      
</template>


<script>

export default {
  name: 'Card',
  props : ['name', 'age'],
}

</script>

<style scoped>
/* 
*{
 margin: 0px;
 padding: 0px;
 box-sizing: border-box;
} */ 
.card{
   display : flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;  
    box-shadow: 2px 2px 10px black;
    border-radius: 15px;  
    background-color:#E8ECF5;
    height: 250px;
    }

 img{
  width: 70px;
  height: 50px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin-top : 10px;
 }


h1 {
  font-size: 20px;
  text-align: center;
  padding: 10px;
 }

p {
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