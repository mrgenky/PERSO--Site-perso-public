<template>
    <v-app>
        <v-main>
            <v-container class="pa-5">
                <router-view :key="$route.path"></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: "App",
    components:{

    },
    data(){
        return{
            todo:[
                'Fix error404 on refresh',
            ]
        }
    }
}
</script>

<style lang="scss">

</style>
