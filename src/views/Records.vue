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
      <table-lite :is-loading="table.isLoading" :columns="table.columns" :rows="records" :total="table.totalRecordCount"
        :sortable="table.sortable" :messages="table.messages" @is-finished="table.isLoading = false" />
    </div>
  </div>
  <Modal :show="open" title="Add a Record" @close-modal="toggleRecord">
    <PatientForm />
  </Modal>

  <Modal :show="openProfile" title="Update your Profile" @close-modal="openProfile=false">
    <ProfileForm />
  </Modal>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Modal from "@/components/Modal.vue";
import PatientForm from "@/components/PatientForm.vue";
import ProfileForm from "@/components/ProfileForm.vue";
import TableLite from "vue3-table-lite";

export default {
  name: "Records",
  setup() {
    const store = useStore();
    store.dispatch('health/fetchMyRecords');
    const open = computed(() => store.state.health.addRecord);
    const records = computed(() => store.state.health.myRecords);
    const toggleRecord = () => store.dispatch('health/toggleRecord');
    const table = {
      isLoading: false,
      columns: [
        {
          label: "Bp",
          field: "blood_pressure",
          width: "15%",
          columnClasses: ["wrap"],
          sortable: true,
          // isKey: true,
        },
        {
          label: "HR",
          field: "heart_rate",
          width: "15%",
          columnClasses: ["wrap"],
          sortable: true,
        },
        {
          label: "Temp",
          field: "temperature",
          columnClasses: ["wrap"],
          width: "15%",
          sortable: true,
        },
        {
          label: "Glucose",
          field: "glucose_level",
          columnClasses: ["wrap"],
          width: "15%",
          sortable: true,
        },
        {
          label: "saturation",
          field: "saturation",
          columnClasses: ["wrap"],
          width: "15%",
          sortable: true,
        },
        {
          label: "Pulse",
          field: "pulse_rate",
          columnClasses: ["wrap"],
          width: "15%",
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

button {
  border-radius: 10px;
  background-color: #1424b3;
  color: white;
  width: 10%;
  height: 35px;
  font-size: 17px;
  cursor: pointer;
}

/* .wrap {
  word-break: break-all !important;
  inline-size: 15% !important;
  flex-wrap: wrap;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  max-width: 15%;
} */
td.wrap, td.vtl-tbody-td {
            word-wrap: break-word !important;
  inline-size: 15% !important;
  max-width: 15% !important;
        }
</style>
