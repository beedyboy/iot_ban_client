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
      <!-- <table style="width: 50%">
        <tr>
          <th>Doctor</th>
          <th>Health Case</th>
          <th>Pulse (bpm)</th>
          <th>Date & Time</th>
        </tr> 
      </table> -->
      <table-lite
:is-loading="table.isLoading"
:columns="table.columns"
:rows="table.rows"
:total="table.totalRecordCount"
:sortable="table.sortable"
:messages="table.messages"
@do-search="doSearch"
@is-finished="table.isLoading = false"
/>
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
    const open = computed(() => store.state.health.addRecord);
    const toggleRecord = () => store.dispatch('health/toggleRecord'); 
    const table = {
  isLoading: false,
  columns: [
    {
      label: "ID",
      field: "id",
      width: "3%",
      sortable: true,
      isKey: true,
    },
    {
      label: "Name",
      field: "name",
      width: "10%",
      sortable: true,
    },
    {
      label: "Email",
      field: "email",
      width: "15%",
      sortable: true,
    },
  ],
  rows: [],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
};
    return {
      open,
      table,
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
    doSearch: (offset, limit, order, sort) => {
    this.table.isLoading = true;

  // Start use axios to get data from Server
  let url = 'https://www.example.com/api/some_endpoint?offset=' + offset + '&limit=' + limit + '&order=' + order + '&sort=' + sort;
  fetch(url)
  .then((response) => {
    // Point: your response is like it on this example.
    //   {
    //   rows: [{
    //     id: 1,
    //     name: 'jack',
    //     email: 'example@example.com'
    //   },{
    //     id: 2,
    //     name: 'rose',
    //     email: 'example@example.com'
    //   }],
    //   count: 2,
    //   ...something
    // }
    
    // refresh table rows
    this.table.rows = response.rows;
    this.table.totalRecordCount = response.count;
    this.table.sortable.order = order;
    this.table.sortable.sort = sort;
  });
  // End use axios to get data from Server
}

    
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
