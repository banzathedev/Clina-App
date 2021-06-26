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
      console.log('data tranferida para setagem', payload);

      state.schedule = payload

      console.log('data setada', state.schedule);

    },
    setRoom(state, payload) {
      console.log('data room tranferida para setagem', payload);

      state.room = payload
      console.log('room setado', state.room)

    },
    setToken(state, payload) {
      console.log('token chegou dessa maneira para setagem', payload)
      
      let token = payload
      state.token = token
          console.log(localStorage)
      localStorage['tokenv2'] = state.token
      console.log('token setado no cache local ')
    }
  },
  actions: {
    getShedule({ commit }) {
      Vue.prototype.$http('schedule',)
        .then(resp => {
          let dataschedule = resp.data
          console.log('data chegou na action', dataschedule);
          commit('setShedule', dataschedule)
        })
    },
    getRooms({ commit }) {
      Vue.prototype.$http('room')
        .then(resp => {
          let dataRoom = resp.data
          console.log('data room chegou na action', dataRoom)
          commit('setRoom', dataRoom)
        })
    },
    loginAuth({commit }, dadosLogin){
      Vue.prototype.$http.post('http://localhost:8000/auth/login', dadosLogin) 
        .then(resp =>{
          let token = resp.data.access_token
          console.log('token chegou dessa maneira', token)
          commit('setToken', token)
        })
    }
  },
  getters: {
    passRooms: state => {
      console.log('acionado')
      return state.room
    },

    passShedule(state) {
      return state.schedule
    },
    passToken: state => {
      console.log('pass token acionado')
      return state.token
    }
  },
    
  modules: {},
});


//TODO retirar consoles.