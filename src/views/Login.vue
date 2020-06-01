<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login({email, password})">
            <div class="form-group">
                <input v-model="email" type="email" class="form-control" placeholder="Correo" required>
            </div>
            <div class="form-group">
                <input v-model="password" type="password" class="form-control" placeholder="Contraseña" required>
            </div>

            <div class="text-danger mb-2">{{error}}</div>

            <button class="btn btn-primary">Iniciar sesión</button>
        </form>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'Login',
        data () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            ...mapActions(['login'])
        },
        computed: {
            ...mapState(['error'])
        }
    }
</script>

<style scoped>

</style>
