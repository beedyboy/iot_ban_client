<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="container">
    <div class="record-container">
      <h5>Patient's Treatment History</h5>
      <button type="button" @click="toggleRecord">Add Record </button>
    </div>
    <hr />

    <div class="tab">
      
      <table-lite :is-loading="table.isLoading" :columns="table.columns" :rows="records"
        :total="table.totalRecordCount" :sortable="table.sortable" :messages="table.messages"
        @is-finished="table.isLoading = false" />
    </div>
  </div>
  <Modal :show="open" title="Add a Record" @close-modal="toggleRecord">
    <PatientForm />
  </Modal>
 
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router'
import Modal from "@/components/Modal.vue";
import PatientForm from "@/components/PatientForm.vue";
import TableLite from "vue3-table-lite";

export default {
  name: "HealthRecord",
  setup() {
    const store = useStore();
    const route = useRoute()
    store.dispatch('health/fetchRecordsByPatient', { patient_id: route.params.id});
    const open = computed(() => store.state.health.addRecord);
    const records = computed(() => store.state.health.healthRecord);
    const toggleRecord = () => store.dispatch('health/toggleRecord');
    const table = {
      isLoading: false,
  
      columns: [
        {
          label: "Bp",
          field: "blood_pressure",
          width: "3%",
          sortable: true,
          // isKey: true,
        },
        {
          label: "HR",
          field: "heart_rate",
          width: "10%",
          sortable: true,
        },
        {
          label: "Temp",
          field: "temperature",
          width: "10%",
          sortable: true,
        },
        {
          label: "Glucose",
          field: "glucose_level",
          width: "10%",
          sortable: true,
        },
        {
          label: "saturation",
          field: "saturation",
          width: "10%",
          sortable: true,
        },
        {
          label: "Pulse",
          field: "pulse_rate",
          width: "10%",
          sortable: true,
        },
      ],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc",
      },
    };
    return {
      open,
      table,
      records,
      toggleRecord
    }
  },
  data() {
    return {
      patient_id: '',
    };
  },
  methods: {
   

  },
  created() {
    this.patient_id = this.$route.params.id;
  },
  components: {
    Modal,
    PatientForm,
    TableLite
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

/* table,
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
} */

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
