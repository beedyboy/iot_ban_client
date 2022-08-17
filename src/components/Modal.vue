<template>
  <div class="modal" v-if="show">
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
  
  methods : {
    // handleClose () {
    //   this.$emit('close')

    // }
  }
};
</script>

<style scoped>
.modal {
  /* display: block; */
  position: fixed; 
  padding-top:10px;
  z-index: 1;
  inset: 0;
  
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  /* max-width: 100%; */
  overflow: auto;
  }

.modal-container {
  /* position: relative; */
  margin:auto;
  display:flex;
  flex-direction: column;
  margin-top: 20%;
  margin-left: 15%;
  width: 70%;
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
  /* min-height: 300px; */
  /* border: 5px solid red; */
  width: 100%;
  background-color: rgb(255, 255, 255);
  /* height: auto; */
}

.modal-header {
  display:flex;
  /* justify-content: space-between; */
  padding: 2px 16px;
  background-color: rgb(255, 255, 255);
  padding: 2px 16px;
}

h1 {
  display:flex;
  flex-direction: row;
  align-items: center;
}

.close {
  color: red;
  float: right;
  font-size: 60px;
  font-weight:bolder;
  margin-left: 80%;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
 
</style>