import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
    },
    actions: {
        GET_USER_LIST(context) {
            fetch("http://localhost:3000/user").then((res) => {
                return res.json()
            }).then((data) => [
                context.commit("SET_USER_LIST", data)
            ])
        },
        ADD_USER(context, data) {
            fetch("http://localhost:3000/user", {
                body: JSON.stringify(data),
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then((res) => {
                    return res.json()
                }).then((data) => {
                console.log(data)
            })
        },
    },
    mutations: {
        SET_USER_LIST(state, data) {
            state.users = data
        },
        ADD_USER(state, data) {
            state.users.push(data);
        }
    }
})
