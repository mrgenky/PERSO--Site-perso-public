<template>
    <div v-if="accessDUTSection === 'true'">
        <v-btn class="mb-3" color="primary" href="/iut/CoursDUTinfo.zip">Archive cours DUT (~300Mo)</v-btn>
        <v-btn class="mb-3" color="primary" :to="{ name:'DUTinfoVideos' }">Cours à distance</v-btn>
        <v-btn class="mb-3" @click="randomVideo()"><v-icon left>mdi-youtube</v-icon>Vidéo au hasard</v-btn>
        <div style="max-width: 500px;" class="mt-8">
            <h1 class="mb-5">Livre d'or de l'élite</h1>
            <v-form>
                <v-text-field
                    v-model="comment.pseudo"
                    label="Pseudo"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="comment.message"
                    label="Message"
                    required
                ></v-text-field>
                <v-btn
                    color="primary"
                    @click="validate"
                >
                    Envoyer
                </v-btn>
            </v-form>
            <div v-if="info !== ''" class="mt-8">
                {{info}}
            </div>
        </div>
    </div>
    <AuthDut v-else/>

</template>

<script>
import AuthDut from "@/components/AuthDut";
export default {
    name: "DutView",
    components:{
        AuthDut
    },
    data(){
        return{
            accessDUTSection:localStorage.getItem('accessDUTSection'),
            videos:null,
            comment:{
                pseudo:'',
                message:'',
            },
            info:'',
        }
    },
    methods:{
        validate(){
            this.info = "J'ai pas fait le back mdr"
        },
        randomVideo(){
            const rand = Math.floor(Math.random() * this.videos.length)
            const anchor = document.createElement("a")
            anchor.href = this.videos[rand]
            anchor.target = "_blank"
            anchor.click()
        },
        populateVideos(){
            this.videos = [
                'https://www.youtube.com/watch/HX03oP3Sns4',
                'https://www.youtube.com/watch/ZnqPjb4GBaU',
                'https://www.youtube.com/watch/j-vw0UK2Ttc',
                'https://www.youtube.com/watch/ATgAHZ3tTH0',
                'https://www.youtube.com/watch/YSev-ZWODNU',
                'https://www.youtube.com/watch/SsBNrg5ebEU',
                'https://www.youtube.com/watch/nFMASlFlMok',
                'https://www.youtube.com/watch/K06IOuNWhWI',
                'https://www.youtube.com/watch/nEZvNGmcMbk',
                'https://www.youtube.com/watch/DPf-UVlN7Qc',
                'https://www.youtube.com/watch/hZ1xYGpPv-U',
                'https://www.youtube.com/watch/Dlbk0iZvPeo',
                'https://www.youtube.com/watch/E-NutIwiZgE',
                'https://www.youtube.com/watch/UvLHnP5Pso8',
                'https://www.youtube.com/watch/pIcvhHwhyLk',
                'https://www.youtube.com/watch/HQFA_J-vpxo',
                'https://www.youtube.com/watch/qPf1FD1mm8U',
                'https://www.youtube.com/watch/LBl1aqVE51s',
                'https://www.youtube.com/watch/bttJNHagAno',
                'https://www.youtube.com/watch/oekZlb51NUA',
                'https://www.youtube.com/watch/V2-P4tHMeio',
                'https://www.youtube.com/watch/Kg7YpfuX7io',
                'https://www.youtube.com/watch/7GoWdcc6klM',
                'https://www.youtube.com/watch/RsoAh0-KqRY',
                'https://www.youtube.com/watch/OtotZPL3yWY',
                'https://www.youtube.com/watch/vT3y-j5a1XQ',
                'https://www.youtube.com/watch/QzJViTMN118',
                'https://www.youtube.com/watch/eIWEBcwIN0s',
                'https://www.youtube.com/watch/r2XL8Ow3_jU',
                'https://www.youtube.com/watch/ILGTahZCJ4s',
                'https://www.youtube.com/watch/6VKU5OMLO8A',
                'https://www.youtube.com/watch/cLYxloBJXds',
                'https://www.youtube.com/watch/6WC_HO9-bWo',
                'https://www.youtube.com/watch/XPRpazSGSmY',
                'https://www.youtube.com/watch/eRuzpQRMcrk',
                'https://www.youtube.com/watch/4Vt-Gft4mVA',
            ]
        }
    },
    mounted() {
        if(this.accessDUTSection){
            this.populateVideos()
        }
    }
}
</script>

<style scoped>

</style>
