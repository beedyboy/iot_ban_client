
<template>

  <div class="card-container">
    <div class="image-item">
      <img src="../assets/avatar-1.svg" />

    </div>
    <div class="text">
      <h1>{{patient?.firstname + ' ' + patient?.lastname}} | {{patient?.age}}</h1>
      <p> Add Description Here...</p>
    </div>
    <button @click="handleOtp"> Attend To!</button>

  </div>

</template>
 

<script>



export default {
  name: 'Card',

  methods: {
    handleOtp() {
      this.$emit('toggle-otp-form', this.id)
      console.log('you clicked me', this.id);
    },

  },
  props: {
    patient: Object, 
    id: Number
  }


}

</script>

<style scoped>
/* *{
 margin: 0px;
 padding: 0px;
 box-sizing: border-box;
}  */
.card-container {
  /* margin: 18px 10px 40px;
    margin-left: 180px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  /* box-shadow: 2px 2px 10px black; */
  border-radius: 15px;
  background-color: #E8ECF5;
  transition: transform 0.3s ease-in;
  padding-bottom: 2px;
}

.image-item {
  display: flex;
  justify-content: center;
}

.image-item img { 
   align-items: center;
  /* margin-left: 10%; */
  margin-top: -20%;
  width: 90px;
  height: 100px;

}


.card-container:hover {
  transform: translateY(-15px);
  cursor: pointer;
}

.text {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.text h1 {
  display: flex;
  /* padding: 0px; */
  /* margin-top: 150px; */
  font-size: 30px;
  margin-right: 70px;
}

.text p {
  display: flex;
  /* flex-direction:row; */
  align-items: center;
  padding: 0px;
  /* margin-top: 100px; */
  margin-right: 70px;
}

.card-container button {
  /* display:flex; */
  align-items: center;
  /* margin-top: 220%; */
  background-color: #1424B3;
  border: 1px solid black;
  color: #ffffff;
  border-radius: 10px;
  font-size: 16px;
  width: 90px;
  height: 40px;
}

button:hover {
  background-color: #E8ECF5;
  color: black;
  transition: .5s;
  cursor: pointer;

}
</style>