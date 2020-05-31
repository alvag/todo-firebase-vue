import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        todo: {
            name: '',
            id: ''
        }
    },
    mutations: {
        setTodos (state, payload) {
            state.todos = payload
        },
        setTodo (state, payload) {
            state.todo = payload
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
        },
        getTodo ({ commit }, idTodo) {
            db.collection('todos').doc(idTodo).get()
            .then(doc => {
                const todo = {
                    ...doc.data(),
                    id: doc.id
                }
                commit('setTodo', todo)
            })
        },
        editTodo ({ commit }, todo) {
            db.collection('todos').doc(todo.id)
            .update({ name: todo.name })
            .then(() => {
                console.log('Tarea editada')
                router.push('/')
            })
        },
        addTodo ({ commit }, name) {
            db.collection('todos').add({ name })
            .then(doc => {
                console.log(doc)
                router.push('/')
            })
        }
    },
    modules: {}
})
