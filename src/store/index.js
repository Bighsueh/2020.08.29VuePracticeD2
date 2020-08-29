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
                context.commit("ADD_USER",data)
            })
        },
        DEL_USER(context, data) {
            //http://localhost:3000/user/1
            fetch("http://localhost:3000/user/"+data, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then((res) => {
                    return res.json()
                    //也可以用return
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
