import { createStore } from 'vuex'

export default createStore({
  state: {
    button: {
      name: "button-create",
      width: 50,
      height: 25,
      fontSize: 10,
      fontFamily: 'Arial',
      textAlign: 'center',
      background: '',
      color: '',
      borderRadius: 0
    }
  },
  getters: {
  },
  mutations: {
    UPDATE_BUTTON(state, payload){
      state.button = Object.assign(state.button, payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
