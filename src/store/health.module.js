// import router from "../router";

const BASE_URL = process.env.VUE_APP_BASE_URL_LOCAL;
const state = {
  accessToken: null,
  addRecord: false,
  registering: false,
  saving: false,
  completed: "NO",
  patients: []
};
const mutations = {
  // recordStatus: (state) => (state.addRecord = !state.addRecord),
  recordStatus: (state, value) => state.addRecord = !value,
  updateEmergency: (state, data) => state.patients = data,
  savingStatus: (state) => {
    const newState = state.saving;
    state.saving = !newState;
  }, 
};
const actions = { 
  async simulate({ dispatch, commit }, payload) { 
    commit("savingStatus");
    const response = await fetch(`${BASE_URL}/health/simulate`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    if (response.status === 201) {
      dispatch(
        "alert/success",
        { message: data.message, duration: 5000 },
        { root: true }
      );
      commit("recordStatus",  state.addRecord);
    } else {
      dispatch("alert/error", { message: data.message }, { root: true });
    }
    commit("savingStatus");
  },
     async fetchRecords({ commit }) {
      const res = await fetch(`${BASE_URL}/health/emergency`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      commit('updateEmergency',  data.data) 
    },
  toggleRecord({ commit }) {
    commit("recordStatus", state.addRecord);
  }

};

export const health = {
  namespaced: true,
  state,
  actions,
  mutations,
};
