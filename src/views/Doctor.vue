<!-- eslint-disable vue/valid-template-root -->

<template>
  <div class="main-container">
    <h1>Patients' Alert</h1>
    <div class="card-container" >
      <div v-for="pat in patients" :key="pat.id">

        <Card  :name = 'pat.name'  :age = 'pat.age' />

      </div>
    </div>
    <div>
      <h3>Pagination</h3>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  data () {
    return {
        patients : [
          {
            id : 1, 
            name : 'Bola',
            age : 20,
          },
          {
            id : 2, 
            name : 'Omj',
            age : 25,
          },
          {
            id : 3, 
            name : 'Tomi',
            age : 30,
          },

        ]
    }
  },
  name: "Doctor",
  components: {
    Card,
  },
  methods : {
    async fetchRecords() {
    const res = await fetch("https://ban-iot.herokuapp.com/api/health", );

    const data = await res.json()
    return data      // {"GET"}
    },
    async patient () {
      this.Patients = await this.fetchPatients()
    },
  }
};
</script>

<style scoped>
.main-container {
  /* margin-top: 85px; */
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  height: 100%;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 20px;
}
</style>
