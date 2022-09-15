<template>
<div class="otp-modal">
  <div class="otp-container">

    <div class="otp-content">
 <h1>Enter token for {{ patient?.firstname }}</h1>
 <input type="text" name="token" />
 <div class="otp-buttons">
  <button type="button"  @click="closeOtp" style="background: #d35b09;">Cancel</button>
  <button>Request Access</button>
 </div>

    </div>
  
  </div>
</div>
</template>

<script>
export default {
  name: "OtpForm", 
  props:{
    patient: Object
  },
  methods: {
    closeOtp() {
      this.$emit('close-otp-form')
      console.log('you closed me');
    },

  },
};
</script>

<style>
  .otp-modal {
  top:0;
  position: fixed;  
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  overflow:auto;
  
  }

.otp-container {
  margin: 15% auto;
  background: #e8ecf5;
  width: 30%;
  height: 300px;
  box-shadow: 2px 2px 10px black;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  z-index: 1;
}
.otp-content { 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.otp-buttons {
  display: flex;
  gap: 20px;
}
.otp-buttons button {
    border-radius: 10px;
   height: 35px;
   font-size:15px;
   background-color: #1424B3; 
   color: #ffffff;
}
input {
  width: 50%;
  height: 30px;
  border-radius: 10px;
  padding: 2px;
  border: 2px solid #1424b3;
}
</style>
