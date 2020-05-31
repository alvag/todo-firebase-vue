<template>
    <div>
        {{todo.name}}
        <h1>Editar</h1>

        <form @submit.prevent="editTodo(todo)">
            <div class="input-group w-50">
                <input type="text" class="form-control" v-model="todo.name">
                <button type="submit" class="btn btn-primary">Editar</button>
            </div>
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
