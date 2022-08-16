<template>
  <div class="modal" v-if="show">
    
    <div class="modal-head">
      <h1> {{title}} </h1>
      <button> X </button>

    </div>
      <div class="modal-content">
  <slot />
  </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
      show : Boolean,
      title: String
    }
}
</script>

<style scoped>

.modal {
  display:block;
  position:fixed;
    height: 100%;
    top:0;
    background-color: rgb(0, 0, 0,0.5);
    width: 100%;
    max-width: 100%;
    z-index: 10;
    overflow: scroll;
    overflow-x: hidden;
}

.modal-content {
    min-height: 300px;
   
    background-color: rgb(255, 255, 255);
    height: auto;
    width: 70%;
    /* border: 5px solid red; */
 
}

.modal-head {
  display:flex;
  width: 71.2%;
  border: 0;
  border-top-right-radius: 10px;
  justify-content: space-between;
   margin-top: 25% ;
    background-color: rgb(255, 255, 255);
  padding: 5px;
}

.modal-head button {
  /* display: flex;
  flex-direction: row;
   align-content: center;
  /* justify-content: space-between; */
  text-align: center;
  color:  red;
  background: white;
  /* float : right; */
  margin-left: 100px;
  width: 5%;
  height: 50px;

}

.modal-content,.modal-head {
  margin-left: 15%;
  /* margin-right: auto; */
}
</style>