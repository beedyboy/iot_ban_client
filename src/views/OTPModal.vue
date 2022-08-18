<template>
    <div class="form-container">
      <div class="header"> 
        <h1> Please enter your Token </h1>
      </div>
      <div class=""> 
        <div class="form-control">
          <label>Token</label>
          <input type="token" class="input" v-model="token" />
        </div>
      </div>
    </div>
</template>

<script>


export default {
    name : 'OTPModal',
}
</script>

<style scoped>

.form-container { 
  display:flex;
  margin-top: 1px;
  /* margin-left: 50px; */
  margin:auto;
    /* padding: 10px; */
     background: #e8ecf5;
    width: 30%;
    height: 300px;
    box-shadow: 2px 2px 10px black;
    border-radius: 15px; 
}

.header {
  display:flex;
  flex-direction:row;
  margin-left: 15%; 
  /* align-items: center; */
}

.form-control {
  /* height:100px; */
  /* border: 5px solid red; */
  /* margin-top:25%; */
  /* margin-right: 50%; */
}

/* .form-control label {
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
  font-size: 25px;
  font-weight: 200;
} */

 
</style>