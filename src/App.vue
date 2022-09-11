<template> 
  <ToastUI/>
  <Navbar/>

  <main>
    <router-view></router-view>

  </main>
</template>

<script>
import Navbar from "./components/Navbar";
import ToastUI from "./components/ToastUI";
export default {
  name: "App",
  components: {
    Navbar,
    ToastUI,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  font-family: "Poppins", sans-serif;
  font-family: "Source Serif 4", serif;
  background-color: #e8ecf5;
  height: 100vh;
  max-height: 100%;
}
 
</style>
