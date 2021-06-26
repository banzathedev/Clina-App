import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  
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

    }
  },
  actions: {
    getShedule({ commit }) {
      Vue.prototype.$http('schedule')
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
    }
  },
  getters: {
    passRooms: state => {
      console.log('acionado')
      return state.room
    },

    passShedule(state) {
      return state.schedule
    }
  },
  modules: {},
});


//TODO retirar consoles.