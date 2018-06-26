<template>
    <div class="sign-up">
        <h2>Sign Up</h2>
        <label>Login</label>
        <input type="text" v-model="email" placeholder="Email">
        <label>Password</label>
        <input type="password" v-model="password" placeholder="Password">
        <button v-on:click="signUp">Submit</button>
        <p><router-link to="login">Or Login.</router-link></p>
    </div>    
</template>
<script>
import firebase from 'firebase'

export default {
    name: 'signUp',
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.$router.replace('hello')
                },
                function (err) {
                    alert('Opps. ' + err.message)
                }
            );
        }
    }
}
</script>

<style>

</style>
