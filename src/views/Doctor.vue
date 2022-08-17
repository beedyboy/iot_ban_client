<!-- eslint-disable vue/valid-template-root -->

<template>
  <div class="main-container">
    <!-- <h1>Patients' Alert</h1> -->
    <div class="card-container" >
      <div v-for="pat in patients" :key="pat.id">

        <Card  :name = 'pat.name'  :age = 'pat.age' />
        <Card  :name = 'pat.name'  :age = 'pat.age' />
      </div>
    </div>
  </div>
  
      <Pagination/>
</template>

<script>

import Pagination from "../components/Pagination";
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
    Pagination,
  },
  methods : {
    async fetchRecords() {
    const res = await fetch("https://ban-iot.herokuapp.com/api/health", );

    this.patients = await res.json()

         
    },
  },
   async created () {
    this.fetchRecords()
  }
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
