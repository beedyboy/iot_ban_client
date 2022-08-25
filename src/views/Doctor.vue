<!-- eslint-disable vue/valid-template-root -->

<template>
  <div class="main-container">
    <!-- <h1>Patients' Alert</h1> -->
    <div class="card-container">
      <div v-for="pat in patients" :key="pat.id">
        <Card
          :name="pat.name"
          :age="pat.age"
          @toggle-otp-form="toggleOtpForm"
          
        />
      </div>
    </div>
  </div>
  <button @toggle-otp-form="$emit('toggle-otp-form')" />
  <div v-show="showOtpForm" v-for="pat in patients" :key="pat.id">
    <OtpForm @otp-form="OtpForm"  :title="pat.title" />
  </div>
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
      patients: [
        {
          id: 1,
          name: "Bola",
          age: 20,
          title: "Get access to Bola",
        },
        {
          id: 2,
          name: "Omj",
          age: 25,
          title: " Enter your token Omj",
        },
        {
          id: 3,
          name: "Tomi",
          age: 30,
          title: "Enter your token Tomi",
        },
      ],
    };
  },
  name: "Doctor",
  components: {
    Card,
    Pagination,
    OtpForm,
  },
  methods: {
    toggleOtpForm() {
    
      this.showOtpForm = !this.showOtpForm;
    },
    async fetchRecords() {
      const res = await fetch("https://ban-iot.herokuapp.com/api/health");

      this.patients = await res.json();
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 70%;
  height: 300px;
  /* gap: 20px; */
  justify-content: space-between;
}
</style>
