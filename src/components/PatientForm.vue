<template>

<!-- <div class="container"> -->

    <div class="form-container">
  <form class="form-page" @submit="submit">
    <div class="form-control">
        <label> Heart Rate </label>
        <input 
         v-model="heart_rate"
         type="text"
         name="text"
         />
    </div>
    <div class="form-control">
        <label> Blood Pressure </label>
        <input 
        v-model="blood_pressure"
        type="text"
        name="Last"
        />
    </div>
    <div class="form-control">
          <label>Temperature </label>
          <input 
        v-model="temperature"
         type="text"
         name="text"
         />
        </div>
    <div class="form-control">
        <label> Glucose </label>
        <input 
        v-model="glucose_level"
        type="text"
        name="glucose"
        />
    </div>
    <div class="form-control">
        <label> Saturation / Blood Level </label>
        <input 
        v-model="saturation"
        type="text"
        name="yourage"
        />
    </div>
    <div class="form-control">
        <label> Pulse Rate </label>
        <input 
        v-model="pulse_rate"
        type="text"
        name="yourage"
        />
    </div>
    <div class="form-control">
        <label> Respiratory Rate </label>
        <input 
        type="text"
        name="yourage"
        />
    </div>

   <div class="sub-btn">
     <button type="submit">{{ sending ? 'saving..' : 'Save Form ' }}</button>
   </div>
  </form>
  
    </div>
 <!-- </div> -->
</template>
 


<script>
export default {
    name: 'Form',

    data () {
      return { 
        blood_pressure : "",
        heart_rate : "",
        temperature : "",
        glucose_level : "",
        pulse_rate : "",
        sending : false
      }
    },
    methods: {
      async submit(e) {
        e.preventDefault()
        if (this.blood_pressure === "" || this.heart_rate ==="" || this.temperature === "" || this.glucose_level  === "" || this.pulse_rate === "") {
          alert("Please enter your details correctly")
        } 
        else {
          this.sending =true
          const payload = {
          blood_pressure : this.blood_pressure,
          heart_rate : this.heart_rate,
          temperature : this.temperature,
          glucose_level : this.glucose_level,
          pulse_rate : this.pulse_rate,
            }
            const response = await fetch('https://ban-iot.herokuapp.com/api/health/create', {
             method: 'POST',
             headers: {
               'Content-type': 'application/json',
             },
             body: JSON.stringify(payload)
           })
        const data = await response.json();
        if (response.status === 200) {
          console.log({ data })
          alert(data.message)
          }
        }
      }
    }
}
</script>



<style scoped>

* {
  margin: 0;
  padding: 0;
  overflow: visible;

}

.form-container {
    margin-top: 1px;
    /* margin-bottom: 10px; */
    padding: 10px;
     background: #e8ecf5;
    width: 98.5%;
    /* border: 5px solid red; */
}
.form-page {
    width: 70%;
    margin: 15px auto;
    /* overflow-y: scroll; */
}

.form-control {
    /* margin: 15px 0; */
      display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.form-control label {
    /* display: block;*/
    margin-right: 70px; 
    font-size: 20px;
}

.form-control input {
    
    width :100%;
    height: 30px;
    border-radius: 10px;
    
    padding: 5px;
    border: 2px solid #1424B3;
    

}

.sub-btn {
  display: flex;
  justify-content: flex-end; 
    width: 100%;
    margin: 25px 0 25px;
}
.sub-btn > button  {
    background-color: #1424B3; 
    color: white;
    width: auto;
    padding: 10px;
    border-radius: 10px;
   height: 40px;
   font-size:17px;

}
</style>