<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="container">
    <div class="med-bar">
      <h5>Patient's Treatment History</h5>
      <button @click="toggleForm">Add Record</button>
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
  <Modal :show="open" title="Add a Record">
    <PatientForm />
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
import PatientForm from "@/components/PatientForm.vue";

export default {
  name: "Records",
  data() {
    return { open: false };
  },
  methods: {
    toggleForm(e) {
      e.preventDefault();
      this.open = !this.open;
    
    },
    
  },
  components: {
    Modal,
    PatientForm,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  overflow: visible;
}

.container {
  width: 96.5%;
  height: 100vh;
}

.med-bar {
  display: flex;
  justify-content: space-around;
  margin-left: 20%;
  margin-top: 70px;
  margin-bottom: 20px;
  font-size: 30px;
  /* line-height: 5px; */
}
h5 {
  margin-left: 10%;
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
  margin-top: 15px;
  margin-right: 30%;
}
</style>
