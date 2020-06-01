<template>
    <div>
        <h1>Registrar usuario</h1>

        <form @submit.prevent="createUser({email, password})">
            <div class="form-group">
                <input v-model="email" type="email" class="form-control" placeholder="Correo" required>
            </div>
            <div class="form-group">
                <input v-model="password" type="password" class="form-control" placeholder="Contraseña" required>
            </div>
            <div class="form-group">
                <input v-model="password_confirm" type="password" class="form-control" placeholder="Repetir Contraseña" required>
            </div>

            <div class="text-danger mb-2">{{error}}</div>

            <button class="btn btn-primary" :disabled="disabled">Registrar</button>
        </form>
    </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex'

    export default {
        name: 'Register',
        data () {
            return {
                email: '',
                password: '',
                password_confirm: ''
            }
        },
        methods: {
            ...mapActions(['createUser'])
        },
        computed: {
            ...mapState(['error']),
            disabled () {
                return this.password !== this.password_confirm
            }
        }
    }
</script>

<style scoped>

</style>
