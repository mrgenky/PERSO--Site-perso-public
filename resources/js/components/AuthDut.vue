<template>
    <v-overlay
        absolute
        color="white"
        opacity="1"
        value="true"
    >
        <v-text-field
        v-model="login"
        label="Login"
        outlined light
        placeholder=" "
        persistent-placeholder
        />
        <v-text-field
        v-model="password"
        type="password"
        label="Mot de passe"
        outlined light
        placeholder=" "
        persistent-placeholder
        />
        <v-btn @click="openDUT" color="primary">Valider</v-btn>
        <v-snackbar top v-model="snackbar" color="error">
            <v-icon left>mdi-alert-circle</v-icon>
            Pas bon
        </v-snackbar>
    </v-overlay>
</template>

<script>
export default {
    name: "AuthDut",
    data(){
        return{
            login:'',
            password:'',
            snackbar:false,
        }
    },
    methods:{
        openDUT(){
            if(btoa(this.login) == 'dmlzaXRldXIx' && btoa(this.password) == 'dmlzaXRldXIx'){
                this.snackbar = false
                localStorage.setItem('accessDUTSection', 'true')
                this.$router.go()
            }else{
                this.snackbar = true
            }
        },
    },
}
</script>

<style scoped>

</style>
