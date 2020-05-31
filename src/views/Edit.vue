<template>
    <div>
        {{todo.name}}
        <h1>Editar</h1>

        <form @submit.prevent="editTodo(todo)">
            <input type="text" v-model="todo.name">
            <button type="submit">Editar</button>
        </form>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        name: 'Edit',
        data () {
            return {
                id: this.$route.params.id
            }
        },
        created () {
            this.getTodo(this.id)
        },
        methods: {
            ...mapActions(['getTodo', 'editTodo'])
        },
        computed: {
            ...mapState(['todo'])
        }
    }
</script>

<style scoped>

</style>
