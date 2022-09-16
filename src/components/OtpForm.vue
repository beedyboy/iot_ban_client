<template>
  <div class="otp-modal">
    <div class="otp-container">

      <div class="otp-content">
        <h1>Enter token for {{ patient?.firstname }}</h1>
        <input type="text" name="token" v-model="otp" />
        <div class="otp-buttons">
          <button type="button" @click="closeOtp" style="background: #d35b09;">Cancel</button>
          <button  type="button" @click="submit" >{{ saving ? 'processing..' : 'Request Access ' }}</button>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "OtpForm",
  props: ['patient'],
  data() {
    return {
      otp: "",
    }
  },
  setup() {
    const store = useStore();
    const saving = computed(() => store.state.health.saving);
    const requestAccess = (payload) => store.dispatch('health/requestAccess', payload);

    return {
      saving,
      requestAccess
    }
  },
  methods: {
    closeOtp() {
      this.$emit('close-otp-form')
      console.log('you closed me');
    },
    async submit(e) {
      e.preventDefault()
      if (this.otp === "") {
        alert("Please enter otp correctly")
      }
      else {
        const payload = {
          otp: this.otp,
          patient_id: this.patient?.user_id,
        }
        this.requestAccess(payload);
      }
    }
  },
};
</script>

<style>
.otp-modal {
  top: 0;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  overflow: auto;

}

.otp-container {
  margin: 15% auto;
  background: #e8ecf5;
  width: 30%;
  height: 300px;
  box-shadow: 2px 2px 10px black;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  z-index: 1;
}

.otp-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.otp-buttons {
  display: flex;
  gap: 20px;
}

.otp-buttons button {
  border-radius: 10px;
  height: 35px;
  font-size: 15px;
  background-color: #1424B3;
  color: #ffffff;
}

input {
  width: 50%;
  height: 30px;
  border-radius: 10px;
  padding: 2px;
  border: 2px solid #1424b3;
}
</style>
