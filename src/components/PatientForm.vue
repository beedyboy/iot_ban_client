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
        name="saturation"
        />
    </div>
    <div class="form-control">
        <label> Pulse Rate </label>
        <input 
        v-model="pulse_rate"
        type="text"
        name="pulse"
        />
    </div>
    <div class="form-control">
        <label> Respiratory Rate </label>
        <input 
        v-model="respiratory"
        type="text"
        name="respiratory"
        />
    </div>

   <div class="sub-btn">
     <button type="submit">{{ saving ? 'saving..' : 'Save Form ' }}</button>
   </div>
  </form>
  
    </div>
 <!-- </div> -->
</template>
 


<script>
  import { computed } from "vue";
import { useStore } from "vuex";
export default {
    name: 'PatientForm',
setup() {

  const store = useStore();
  const saving = computed(() => store.state.health.saving);
  const saveRecord = (payload) => store.dispatch('health/simulate', payload);

  return {
    saving,
    saveRecord
  }
},
    data () {
      return { 
        blood_pressure : null,
        heart_rate : null,
        temperature : null,
        glucose_level : null,
        pulse_rate : null,
        saturation: null,
        respiratory: null
      }
    },
    methods: {
      async submit(e) {
        e.preventDefault()
        if (this.blood_pressure === "" || this.heart_rate ==="" || this.temperature === "" || this.glucose_level  === "" || this.pulse_rate === "" || this.saturation === "" || this.respiratory === "") {
          alert("Please enter your details correctly")
        } 
        else { 
          const payload = {
          blood_pressure : this.blood_pressure,
          heart_rate : this.heart_rate,
          temperature : this.temperature,
          glucose_level : this.glucose_level,
          pulse_rate : this.pulse_rate,
          saturation : this.saturation,
          respiratory : this.respiratory, 
        }
        console.log(payload)
        this.saveRecord(payload); 
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
  
    padding: 10px;
     background: #e8ecf5;
    width: 98.5%;
 
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