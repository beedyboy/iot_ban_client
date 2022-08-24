<template>
  <div class="form-container">
    <div class="header">
      <h1> {{message}} </h1>
    </div>

    <div class="form">
      <label> Enter your token </label>
      <input type="text" name="token" />
    </div>
  </div>
</template>

<script>
export default {
  name: "OtpForm",


  //  methods: {
  //   handleOtp(message) {
  //     this.$emit('toggle-otp-form', message)
  //   }
  // },
  props : {

    message: String,
  }



};


</script>

<style scoped>
.form-container {
  margin: auto;
  background: #e8ecf5;
  width: 30%;
  height: 300px;
  box-shadow: 2px 2px 10px black;
  border-radius: 15px;
}

.header {
  text-align: center;
  align-items: center;
  /* border:5px solid red; */
  height: 30px;
}

.form {
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
}

.form label {
  font-size: 30px;
}

.form input {
  width: 50%;
  height: 30px;
  border-radius: 10px;
  padding: 2px;
  border: 2px solid #1424b3;
}
</style>
