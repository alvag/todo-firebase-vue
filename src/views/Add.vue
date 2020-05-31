<template>
    <div>
        <h1>Agregar Tarea</h1>

        <form @submit.prevent="addTodo(name)">
            <div class="input-group w-50">
                <input type="text" class="form-control" v-model="name">
                <button type="submit" class="btn btn-primary">Agregar</button>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'Agregar',
        data () {
            return {
                name: ''
            }
        },
        methods: {
            ...mapActions(['addTodo'])
        }
    }
</script>

<style scoped>

</style>
