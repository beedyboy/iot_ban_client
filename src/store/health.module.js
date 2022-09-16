import router from "../router";

const BASE_URL = process.env.VUE_APP_BASE_URL_LOCAL;
const state = {
  accessToken: null,
  addRecord: false,
  registering: false,
  showOtpForm: false,
  saving: false,
  fetching: false,
  completed: "NO",
  patients: [],
  patient: {},
  healthRecord: [],
};
const mutations = {
  recordStatus: (state, value) => (state.addRecord = !value),
  loadingStatus: (state, value) => (state.fetching = !value),
  toggleOtp: (state, value) => (state.showOtpForm = !value),
  updateEmergency: (state, data) => (state.patients = data),
  updatehealthRecord: (state, data) => (state.healthRecord = data),
  updatePatient: (state, data) => (state.patient = data),
  savingStatus: (state) => {
    const newState = state.saving;
    state.saving = !newState;
  },
};
const actions = {
  async simulate({ dispatch, commit }, payload) {
    commit("savingStatus");
    const response = await fetch(`${BASE_URL}/health/simulate`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (response.status === 201) {
      dispatch(
        "alert/success",
        { message: data.message, duration: 5000 },
        { root: true }
      );
      commit("recordStatus", state.addRecord);
    } else {
      dispatch("alert/error", { message: data.message }, { root: true });
    }
    commit("savingStatus");
  },

  async fetchRecords({ commit }) {
    const res = await fetch(`${BASE_URL}/health/emergency`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    commit("updateEmergency", data.data);
  },

  async fetchRecordsByPatient({ commit }, payload) {
    commit("loadingStatus", state.fetching);
    const res = await fetch(`${BASE_URL}/health/emergency/patient`,  {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (res.status === 200) {
      commit("updatehealthRecord", data.records);
      commit("loadingStatus", state.fetching);
    }
  },

  toggleRecord({ commit }) {
    commit("recordStatus", state.addRecord);
  },
  attendTo({ commit }, patient) {
    commit("updatePatient", patient);
    commit("toggleOtp", state.showOtpForm);
  },
  toggleOtp({ commit }, value) {
    commit("toggleOtp", value);
  },
  async requestAccess({ dispatch, commit }, payload) {
    commit("savingStatus");
    const response = await fetch(`${BASE_URL}/health/attend`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (response.status === 200) {
      dispatch(
        "alert/success",
        { message: data.message, duration: 5000 },
        { root: true }
      ); 
      commit("toggleOtp", true);

      router.push(`/emergency/${payload.patient_id}`);
    } else {
      dispatch("alert/error", { message: data.message }, { root: true });
    }
    commit("savingStatus");
  },
};

export const health = {
  namespaced: true,
  state,
  actions,
  mutations,
};
