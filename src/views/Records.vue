<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="container">
    <div class="record-container">
      <h5>Patient's Treatment History</h5>
      <button type="button" @click="toggleRecord">Add Record </button>
      <button @click="toggleProfile"> Profile</button>
    </div>
    <hr />

    <div class="tab">
      <table style="width: 50%">
        <tr>
          <th>Doctor</th>
          <th>Health Case</th>
          <th>Pulse (bpm)</th>
          <th>Date & Time</th>
        </tr>
        <tr>
          <td>Doctor Bello</td>
          <td>Hypertension</td>
          <td>25 (bpm)</td>
          <td>17-01-2022<br /><br />8:35am</td>
        </tr>
        <tr>
          <td>Doctor Richard</td>
          <td>High Blood Pressure</td>
          <td>140/90mmHg</td>
          <td>26-04-2022<br /><br />3:25pm</td>
        </tr>
        <tr>
          <td>Doctor Hassan</td>
          <td>High Body Temperature</td>
          <td>105</td>
          <td>11-11-2022<br /><br />11:00am</td>
        </tr>
        <tr>
          <td>Doctor Esther</td>
          <td>Diabetes</td>
          <td>200mg/dl</td>
          <td>07-07-2022<br /><br />10:45am</td>
        </tr>
      </table>
    </div>
  </div>
  <Modal :show="open" title="Add a Record" @close-modal="toggleRecord">
    <PatientForm />
    
  </Modal>
  
  <Modal :show="openProfile" title="Update your Profile" @close-modal="openProfile=false">
    <ProfileForm/>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
import PatientForm from "@/components/PatientForm.vue";
import ProfileForm from "@/components/ProfileForm.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Records",
  setup() {
    const store = useStore();
    const open = computed(() => store.state.health.addRecord);
    const toggleRecord = () => store.dispatch('health/toggleRecord');
    return {
      open,
      toggleRecord
    }
  },
  data() {
    return { 
      openProfile: false, 
    };
  },
  methods: { 

    toggleProfile(e) {
      e.preventDefault();
      this.openProfile = !this.openProfile;
    },

    
  },
  components: {
    Modal,
    PatientForm,
    ProfileForm,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  overflow: visible;
}

.container {
  display: flex;
  flex-direction: column;
  width: 96.5%;
  height: 100vh;
   /* overflow: auto; */
}

.record-container {
  display: flex;
  column-gap: 18px;
  margin-left: 20%;
  margin-top: 70px;
  margin-bottom: 20px;
  font-size: 30px;
  /* line-height: 5px; */
}
.record-container h5 {
  padding: 0;
  margin-left: 6%;
}

hr {
  width: 35%;
  margin-left: 25%;
}

table,
th,
td {
  border: 2px solid #1424b3;
  border-collapse: collapse;
}

th,
td {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
}

.tab table {
  margin-top: 50px;
  margin-left: 350px;
}

button {
  border-radius: 10px;
  background-color: #1424b3;
  color: white;
  width: 10%;
  height: 35px;
  font-size: 17px;
  cursor: pointer;
}
</style>
