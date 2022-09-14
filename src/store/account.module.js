
import router from "../router";
const BASE_URL = process.env.VUE_APP_BASE_URL_LOCAL;
const state = {
  accessToken: null,
  loggingIn: false,
  registering: false,
  updating: false,
  completed: "NO",
};
const mutations = {
  loginStart: (state) => (state.loggingIn = true),
  loginSuccess: (state) => (state.loggingIn = false),
  registerStatus: (state) => (state.registering = !state.registering),
  updateStatus: (state) => (state.updating = !state.updating),
  updateStateStorage: (state, data) => {
   if(data) {
    const { key, value } = data;
    state[key] = value;
   }
  },
  logout: (state) => {
    state.accessToken = null;
  },
};
const actions = {
  async login({ dispatch, commit }, newUser) {
    commit("loginStart");
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    if (response.status === 200) {
      const user = data.user;
      localStorage.setItem("token", data.token);
      localStorage.setItem("completed", user.completed);
      dispatch('alert/success', { message: data.message }, { root: true }); 
      commit("updateStateStorage", { key: "accessToken", value: data.token });
      commit("updateStateStorage", { key: "completed", value: user.completed });
      router.push(user.userType === "PATIENT" ? "/records" : "/emergency");
    } else { 
      dispatch('alert/error', { message: data.message }, { root: true });
    }
      commit("loginSuccess");
 
  },
  async register({ dispatch, commit }, newUser) {
    commit("registerStatus");
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    if (response.status === 201) {
      const user = data.user;
      localStorage.setItem("token", data.token);
      localStorage.setItem("completed", user.completed);
      dispatch('alert/success', { message: data.message }, { root: true }); 
      commit("updateStateStorage", { key: "accessToken", value: data.token });
      commit("updateStateStorage", { key: "completed", value: user.completed });
      router.push(user.userType === "PATIENT" ? "/records" : "/emergency");
    } else { 
      dispatch('alert/error', { message: data.message }, { root: true });
    }
      commit("registerStatus");
 
  },
  async updateProfile({ dispatch, commit }, newProfile) {
    commit("updateStatus");
    const response = await fetch(`${BASE_URL}/profile`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newProfile),
    });
    const data = await response.json();
    if (response.status === 200) { 
      // localStorage.setItem("completed", user.completed);
      dispatch('alert/success', { message: data.message, duration: 5000 }, { root: true }); 
    } else { 
      dispatch('alert/error', { message: data.message }, { root: true });
    }
      commit("updateStatus");
 
  },
  fetchFromStorage({ commit }, key) {
    commit("updateStateStorage", localStorage.getItem(key));
  },
  logout({ commit }) {
    localStorage.removeItem("token");
    commit("logout");
    router.push("/login");
  },
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};