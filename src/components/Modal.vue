<template>
  <div class="modal" v-if="show" >
      <div class="modal-container">  

        <div class="modal-header">
          <h1>{{ title }}</h1> 
        
      <span @click="$emit('close-modal')"  type="submit" class="close"> &times;</span>
   
    </div>
    <div class="modal-content">
      <slot />
    </div>
      </div>
  </div>
</template>

<script>




export default {
  name: "Modal",
  props: {
    show: Boolean,
    title: String,
  },
  


};
</script>

<style scoped>
.modal {
  top:0;
  position: fixed; 
  /* padding-top:10px; */
  /* z-index: 1; */
  /* inset: 0; */
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  overflow:auto;
  
  }

.modal-container {
  
  margin:100px auto;
  display:flex;
  flex-direction: column;
  width: 70%;

  /* width: calc(100% - 200px); */
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
}

@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

.modal-content { 
  width: 100%;
  background-color: rgb(255, 255, 255);
  
}

.modal-header {
  display:flex;
  justify-content: space-between;
  padding: 2px 16px;
  background-color: rgb(255, 255, 255);

}


.close {
  color: red;
  /* float: right; */
  font-size: 60px;
  font-weight:bolder;
  /* margin-left: 80%; */
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
 
</style>