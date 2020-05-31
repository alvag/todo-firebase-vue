<template>
    <div>
        <h1>Inicio</h1>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{todo.name}}
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
