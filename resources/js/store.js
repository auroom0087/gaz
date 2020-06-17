import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  
  state: {
    logToken: '',
    
    user: {
    	last_name: '',
    	name: '',
    	second_name: '',
    	birth_date: '',
    	position: '',
    	rank: '',
    	department: ''
    }
  },

  mutations: {
    
  },
  actions: {

  }
})

export default store