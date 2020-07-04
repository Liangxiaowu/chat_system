import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		hr: JSON.parse(window.sessionStorage.getItem("userInfo")),
		routes:[],
	},
	mutations: {
		IS_LOGIN(state, hr) {
			state.hr = hr;
		},
		INIT_ROUTES(state,data){
			state.routes=data;
		}
	},
	actions: {},
	modules: {}
})
