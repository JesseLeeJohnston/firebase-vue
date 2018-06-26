<template>
    <div class="login">
        <h2>Login</h2>
        <label>Login</label>
        <input type="text" v-model="email" placeholder="Email">
        <label>Password</label>
        <input type="password" v-model="password" placeholder="Password">
        <button v-on:click="login">Submit</button>
        <p> <router-link to="signup">If you don't have an account you can create one now.</router-link></p>
    </div>    
</template>
<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.$router.replace('hello')
                },
                function(err) {
                    alert('Opps. ' + err.message)
                }
            )
        }
    }
}
</script>

<style>

</style>
