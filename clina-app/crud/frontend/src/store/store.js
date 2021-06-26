import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);




export default new Vuex.Store({
  
  state: {
    token: '',
    schedule: {},
    room: {},
  },

  mutations: {
    setShedule(state, payload) {
      state.schedule = payload
    },
    setRoom(state, payload) {
      state.room = payload
    },
    setToken(state, payload) {
      let token = payload
      state.token = token
      localStorage['tokenv2'] = state.token
    }
  },
  actions: {
    getShedule({ commit }) {
      Vue.prototype.$http('schedule',)
        .then(resp => {
          let dataschedule = resp.data
          commit('setShedule', dataschedule)
        })
    },
    getRooms({ commit }) {
      Vue.prototype.$http('room')
        .then(resp => {
          let dataRoom = resp.data
          commit('setRoom', dataRoom)
        })
    },
    loginAuth({commit }, dadosLogin){
      Vue.prototype.$http.post('http://localhost:8000/auth/login', dadosLogin) 
        .then(resp =>{
          let token = resp.data.access_token
          commit('setToken', token)
        })
    }
  },
  getters: {
    passRooms: state => {

      return state.room
    },

    passShedule(state) {
      return state.schedule
    },
    passToken: state => {
      return state.token
    }
  },
    
  modules: {},
});


//TODO retirar consoles.