import Vue from 'vue'
import Vuex from 'vuex'
import { db, auth } from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        todo: {
            name: '',
            id: ''
        },
        user: '',
        error: ''
    },
    mutations: {
        setTodos (state, payload) {
            state.todos = payload
        },
        setTodo (state, payload) {
            state.todo = payload
        },
        removeTodo (state, payload) {
            state.todos = state.todos.filter(x => x.id !== payload)
        },
        setUser (state, payload) {
            state.user = payload
        },
        setError (state, payload) {
            state.error = payload
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
                router.push('/')
            })
        },
        deleteTodo ({ commit, dispatch }, id) {
            db.collection('todos').doc(id).delete()
            .then(() => {
                // dispatch('getTodos')
                commit('removeTodo', id)
            })
        },
        createUser ({ commit }, user) {
            auth.createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                console.log(res)
                commit('setUser', {
                    email: res.user.email,
                    uid: res.user.uid
                })
                router.push('/')
            }).catch(error => {
                console.log(error)
                commit('setError', error.message)
            })
        },
        login ({ commit }, user) {
            auth.signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                console.log(res)
                commit('setUser', {
                    email: res.user.email,
                    uid: res.user.uid
                })
                router.push('/')
            }).catch(error => {
                console.log(error)
                commit('setError', error.message)
            })
        },
        checkAuth ({ commit }, payload) {
            commit('setUser', payload)
        },
        logOut ({ commit }) {
            auth.signOut()
            router.push('/login')
            commit('setUser', null)
        }
    },
    modules: {}
})
