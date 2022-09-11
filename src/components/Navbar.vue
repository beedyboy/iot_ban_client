<template>
  <nav>
        <div class="logo">
        <p>IotBan.</p>
        </div>
        <ul v-if="token">
        <li><router-link to="" class="medical-history"> Medical History </router-link></li>
        <li><router-link to=""> Search Doctor </router-link></li>
        <li><router-link to=""> Profile </router-link></li>
        <li> <span @click=logout>Logout</span></li>
      
        </ul>
        <ul v-if="!token">
      <li>
        <router-link to="/" class="home">Home</router-link>
      </li>
      <li>
        <router-link to="">Overview</router-link>
      </li>
      <li>
        <router-link to="">Report</router-link>
      </li>
      <li>
        <router-link to="">Contact</router-link>
      </li>
      <li>
        <router-link to="/login" class="login">Log in</router-link>
      </li>
      <li>
        <router-link to="/signup" class="signup">Sign Up</router-link>
      </li>
    </ul>
        <!-- <Records title="Records" /> -->
   </nav>
</template>




<script> 
  import { computed } from 'vue'
import { mapActions, useStore } from 'vuex';
export default {
    name: 'Navbar',
  setup () {
    const store = useStore()
    store.dispatch('account/fetchFromStorage', 'token'); //fetch 
    const token = computed(() => store.state.account.accessToken);
    const getToken = () => store.dispatch('account/fetchFromStorage', 'token')
    return {
      token,
      getToken
    }
  },
  methods: {
    ...mapActions({
      logout: 'account/logout'
    })
  },
  created() { 
    this.getToken();
  }
}
</script>




<style scoped>
* {
  margin: 0;
  padding: 0;
  overflow:visible;
}
 
.main-nav { 
  background-color:#1424B3;
}
nav {
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  line-height: 75px;
  padding: 0 50px;
  background-color: #e8ecf5;
}

nav .logo {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #1424b3;
}
 

nav ul {
  display: flex;
  justify-content: space-between;
}

nav ul li {
  /* display: inline-block; */
  list-style: none;
}

nav ul li a,
span {
  color: black;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  padding: 0 32px;
}
li span {
  cursor: pointer;
}
nav ul li .home {
  font-size: 15px;
  font-weight: bold;
}

nav ul li .login {
  background: #dbe0ea;
  border-radius: 25px;
  padding: 10px 30px;
  color: #1424b3;
}

nav ul li .signup {
  background: #1424b3;
  border-radius: 25px;
  padding: 10px 30px;
  color: #fff;
}

.blue-btn a {
  color: #fff;
  text-decoration: none;
  text-align: center;
  display: grid;
  line-height: 44px;
}

.blue-btn {
  height: 90;
  width: 200px;
  background-color: #1424b3;
  margin-top: 150px;
  border-radius: 20px;
  padding: 10px 30px;
}

main {
  top: 100px;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
}

.med-bar {
    margin-left: 40%;
    margin-top: 70px;
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 5px;
}
</style>