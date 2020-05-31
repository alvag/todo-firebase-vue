<template>
    <div>
        <h1>Agregar Tarea</h1>

        <form @submit.prevent="addTodo(name)">
            <input type="text" v-model="name">
            <button type="submit">Agregar</button>
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
