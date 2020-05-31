<template>
    <div>
        <h1>Inicio</h1>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{todo.name}}
                <router-link :to="{name: 'Edit', params: {id: todo.id}}">
                    <button>Editar</button>
                </router-link>
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
            ...mapActions(['getTodos'])
        },
        computed: {
            ...mapState(['todos'])
        }
    }
</script>
