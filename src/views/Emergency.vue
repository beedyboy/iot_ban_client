<!-- eslint-disable vue/valid-template-root -->

<template>
  <div class="main-container">
    <!-- <h1>Patients' Alert</h1> -->
      <div v-if="!patients || patients.length < 1">
        <h1>No Emergency at the moment!</h1>
      </div>
    <div class="records">
        <Card v-for="pat in patients" :key="pat.id" :patient="pat.patient" :id="pat.id" @toggle-otp-form="toggleOtpForm" />
    
    </div>
  </div>


  <otp-form v-if="showOtpForm" :patient="patient" @otp-form="OtpForm" @close-otp-form="closeForm"></otp-form>
 
  <Pagination />
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useStore } from "vuex"; 
import Pagination from "../components/Pagination";
import Card from "../components/Card";

export default {
  name: "Emergency",
  setup() {
    const store = useStore();
    store.dispatch('health/fetchRecords');
    const fetchRecords = () => store.dispatch('health/fetchRecords');
    const requestAccess = (payload) => store.dispatch('health/requestAccess', payload);
    const toggleOtp = (payload) => store.dispatch('health/toggleOtp', payload);
    const patients = computed(() => store.state.health.patients);
    const patient = computed(() => store.state.health.patient);
    const showOtpForm = computed(() => store.state.health.showOtpForm);
    return {
      patient,
      patients,
      showOtpForm,
      fetchRecords,
      requestAccess,
      toggleOtp
    }
  }, 
  components: {
    Card,
    Pagination,
    OtpForm: defineAsyncComponent(() => 
        import("@/components/OtpForm.vue")
),
  },
  methods: {
    toggleOtpForm(id) {
      if (!this.showOtpForm) {
        const patient = this.patients.filter((x) => x.id === id);
        this.closeForm();
        this.requestAccess(patient);
        
      }
    },
    closeForm() {
        this.toggleOtp(true);
    }
  },
  async created() {
    // this.fetchRecords();
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

.records {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  padding: 20px 0;
}
</style>
