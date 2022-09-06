<!-- eslint-disable vue/valid-template-root -->

<template>
  <div class="main-container">
    <!-- <h1>Patients' Alert</h1> -->
    <div class="card-container">
      <div v-if="!patients || patients.length < 1">
       <h1>No Emergency at the moment!</h1>
      </div>
      <div v-for="pat in patients" :key="pat.id">
        <Card :name="pat.patient.firstname" :age="pat.patient.age" :id="pat.id" @toggle-otp-form="toggleOtpForm" />
      </div>
    </div>
  </div>

  <OtpForm v-show="showOtpForm" :id="id" :name="name" @otp-form="OtpForm"></OtpForm>


  <Pagination />
</template>

<script>
import Pagination from "../components/Pagination";
import Card from "../components/Card";
import OtpForm from "@/components/OtpForm.vue";

export default {
  data() {
    return {
      showOtpForm: false,
      patients: [],
      id: 0,
      name: ""
    };
  },
  name: "Doctor",
  components: {
    Card,
    Pagination,
    OtpForm,
  },
  methods: {
    toggleOtpForm(id) {
      this.showOtpForm = !this.showOtpForm;
      if (this.showOtpForm) {
        const patient = this.patients.filter((x) => x.id === id);
        // console.log({ patient })
        this.id = patient[0].id;
        this.name = patient[0].patient.firstname;
      }
    },
    async fetchRecords() {
      const res = await fetch("https://ban-iot.herokuapp.com/api/health/emergency", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      this.patients = data.data;
    },
  },
  async created() {
    this.fetchRecords();
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  /* margin-bottom: 90%; */
  /* height: 100%; */
}

.card-container {
  display: flex;
  width: 100%;
  gap: 20px; 
  padding: 20px 0;
}
</style>
