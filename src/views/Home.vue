<template>
    <div>
        <h1>Inicio</h1>
        <router-link to="/add">
            <button class="btn btn-success btn-block">Agregar</button>
        </router-link>
        <ul class="list-group mt-3">
            <li class="list-group-item d-flex justify-content-between" v-for="(todo, index) in todos" :key="index">
                {{todo.name}}
                <div>
                    <router-link :to="{name: 'Edit', params: {id: todo.id}}">
                        <button class="btn btn-primary btn-sm">Editar</button>
                    </router-link>
                    <button class="btn btn-danger btn-sm ml-2" @click="deleteTodo(todo.id)">Eliminar</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex'

    export default {
        name: 'Home',

        created () {
            this.getTodos()
        },
        methods: {
            ...mapActions(['getTodos', 'deleteTodo'])
        },
        computed: {
            ...mapState(['todos'])
        }
    }
</script>
