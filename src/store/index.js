import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        setTodos (state, payload) {
            state.todos = payload
        }
    },
    actions: {
        getTodos ({ commit }) {
            const todos = []
            db.collection('todos').get()
            .then(collection => {
                collection.forEach(doc => {
                    const todo = {
                        ...doc.data(),
                        id: doc.id
                    }
                    todos.push(todo)
                })
                commit('setTodos', todos)
            })
        }
    },
    modules: {}
})
