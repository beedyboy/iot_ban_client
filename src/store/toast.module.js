const state = {
  messages: [],
};
let uuid = 0;
class ToastMessage {
  constructor(commit, type, msg, duration) {
    this.commit = commit;
    this.type = type;
    this.msg = msg;
    this.duration = duration || 3000; //3 seconds default
    this.uuid = uuid++;

    this.timer = setTimeout(() => {
      this.remove();
    });
  }
  remove() {
    this.commit("remove", {msg: this.msg, uuid: this.uuid });
  }
}

const mutations = {
  push: (state, msg) => {
    const newState = state.messages;
    newState.push(msg);
    state.messages = newState;
    // state.messages.push(msg);
  },
  remove: (state, msg) => {
    // delete message
    const newState = state.messages;
    const index = newState.findIndex(
      (message) => message.uuid !== msg.uuid
    ); 
    newState.splice(index, 1);
    state.messages = newState;
  },
};
const actions = {
  success: ({ commit }, payload) =>
    commit(
      "push",
      new ToastMessage(commit, "success", payload.message, payload?.duration)
    ),
  error: ({ commit }, payload) =>
    commit(
      "push",
      new ToastMessage(commit, "error", payload.message, payload?.duration)
    ),
    remove: ({commit}, toast) => commit('remove', toast),
};

export const alert = {
  namespaced: true,
  state,
  mutations,
  actions,
};
