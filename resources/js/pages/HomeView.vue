<template>
    <div class="home-view">
        <div class="box pa-sm-10 pa-6">
            <v-img src="/img/moi.jpg" width="150" class="mb-1">
                <template
                v-slot:placeholder
                >
                    <v-skeleton-loader
                        type="image"
                    ></v-skeleton-loader>
                </template>
            </v-img>
            <h1>Mattéo Dufour</h1>
            <div class="mb-1">DÉVELOPPEUR WEB</div>
            <div>
                <v-btn href="https://www.linkedin.com/in/matt%C3%A9o-dufour/" icon>
                    <v-icon size="30">mdi-linkedin</v-icon>
                </v-btn>
                <v-btn href="https://github.com/mrgenky" icon>
                    <v-icon size="30">mdi-github</v-icon>
                </v-btn>
            </div>
            <v-alert type="warning" width="100%" max-width="500" dense text outlined class="mb-0 mt-6">
                <template
                v-slot:prepend
                >
                    <v-icon color="warning" class="mr-3">mdi-wrench</v-icon>
                </template>
                 Site en reconstruction
            </v-alert>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeView"
}
</script>

<style scoped>
.home-view{
    height: 100vh;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(220,220,220) !important;
    background-repeat: repeat;
    background-repeat-x: repeat;
    background-repeat-y: repeat;
    background-size: auto;
    -webkit-background-size: auto;
    -moz-background-size: auto;
    -o-background-size: auto;
    background-image: url("/img/fabric-of-squares.png");
}
.box{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    max-width: 90vw;
    width: 900px;
    margin: 0 auto;
    background: white;
    border-radius: 4px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: solid lightgrey 1px;
}
::v-deep .v-skeleton-loader__image {
    height: 150px !important;
}
</style>
