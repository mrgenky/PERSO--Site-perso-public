<template>
    <div v-if="accessDUTSection === 'true'">
        <router-link :to="{name:'DUTinfo'}">Retour</router-link>
        <h1>Cours à distance</h1>
        <h2>Semestre 4</h2>
        <v-card v-for="(video,index) in videos.semestre4" :key="video.id" width="290" class="mb-5 mr-5 d-inline-block">
            <v-card-title>{{video.fullDate}}</v-card-title>
            <iframe width="292" height="164" :src="video.yt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <v-card-subtitle>{{video.module}} ({{video.courseType}})</v-card-subtitle>
            <v-card-text>
                <v-chip
                    class="mr-1 mb-1"
                    label small
                >
                    {{video.shortDate}}
                </v-chip>
                <v-chip
                    class="mr-1 mb-1"
                    label small
                >
                    {{video.hours}}
                </v-chip>
                <v-chip
                    class="mr-1 mb-1"
                    label small
                >
                    {{video.title}}
                </v-chip>
                <v-chip
                    class="mr-1 mb-1"
                    label small
                >
                    {{video.duration}}
                </v-chip>
            </v-card-text>
        </v-card>


        <h2>Semestre 3</h2>
        <v-card v-for="(video,index) in videos.semestre3" :key="video.id" width="290" class="mb-5 mr-5 d-inline-block">
            <v-card-title>{{video.fullDate}}</v-card-title>
            <iframe width="292" height="164" :src="video.yt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <v-card-subtitle>{{video.module}} ({{video.courseType}})</v-card-subtitle>
            <v-card-text>
                <v-chip
                    class="mr-1 mb-1"
                    label small
                >
                    {{video.shortDate}}
                </v-chip>
                <v-chip
                    class="mr-1 mb-1"
                    label small
                >
                    {{video.hours}}
                </v-chip>
                <v-chip
                    class="mr-1 mb-1"
                    label small
                >
                    {{video.title}}
                </v-chip>
                <v-chip
                    class="mr-1 mb-1"
                    label small
                >
                    {{video.duration}}
                </v-chip>
            </v-card-text>
        </v-card>
    </div>
    <AuthDut v-else/>
</template>

<script>
import AuthDut from "@/components/AuthDut";
export default {
    name: "DutVideosView",
    components:{
        AuthDut
    },
    data(){
        return{
            accessDUTSection:localStorage.getItem('accessDUTSection'),
            videos:{
                semestre4:[
                    {
                        id:1,
                        fullDate:'Vendredi 05 février',
                        shortDate:'05/02/2021',
                        module:'Programmation répartie',
                        courseType:'TD',
                        hours:'13H-15H',
                        title:'CM2',
                        duration:'31:42',
                        yt:'https://www.youtube.com/embed/HX03oP3Sns4',
                    },
                    {
                        id:2,
                        fullDate:'Vendredi 05 février',
                        shortDate:'05/02/2021',
                        module:'Programmation Web',
                        courseType:'TD',
                        hours:'8H-10H',
                        title:'Derniers cours',
                        duration:'1:57:44',
                        yt:'https://www.youtube.com/embed/ZnqPjb4GBaU',
                    },
                    {
                        id:3,
                        fullDate:'Mardi 02 février',
                        shortDate:'02/02/2021',
                        module:'Réseaux',
                        courseType:'TD',
                        hours:'10H-12H',
                        title:'Suite TD',
                        duration:'59:00',
                        yt:'https://www.youtube.com/embed/j-vw0UK2Ttc',
                    },
                    {
                        id:4,
                        fullDate:'Jeudi 28 janvier',
                        shortDate:'28/01/2021',
                        module:'Réseaux',
                        courseType:'TP',
                        hours:'13H-15H',
                        title:'TP SSH',
                        duration:'1:15:16',
                        yt:'https://www.youtube.com/embed/ATgAHZ3tTH0',
                    },
                    {
                        id:5,
                        fullDate:'Mardi 26 janvier',
                        shortDate:'26/01/2021',
                        module:'Programmation répartie',
                        courseType:'TD',
                        hours:'13H-15H',
                        title:'TD1',
                        duration:'1:11:18',
                        yt:'https://www.youtube.com/embed/YSev-ZWODNU',
                    },
                    {
                        id:6,
                        fullDate:'Mardi 26 janvier',
                        shortDate:'26/01/2021',
                        module:'Programmation répartie',
                        courseType:'TD',
                        hours:'10H-12H',
                        title:'CM1',
                        duration:'1:43:06',
                        yt:'https://www.youtube.com/embed/SsBNrg5ebEU',
                    },
                    {
                        id:7,
                        fullDate:'Mardi 26 janvier',
                        shortDate:'26/01/2021',
                        module:'Réseaux',
                        courseType:'TD',
                        hours:'8H-10H',
                        title:'Cours et TD',
                        duration:'1:38:46',
                        yt:'https://www.youtube.com/embed/nFMASlFlMok',
                    },
                    {
                        id:8,
                        fullDate:'Lundi 25 janvier',
                        shortDate:'25/01/2021',
                        module:'Programmation Web',
                        courseType:'TD',
                        hours:'10H-12H',
                        title:'Chapitre 3 & 4',
                        duration:'1:55:00',
                        yt:'https://www.youtube.com/embed/K06IOuNWhWI',
                    },
                    {
                        id:9,
                        fullDate:'Lundi 25 janvier',
                        shortDate:'25/01/2021',
                        module:'Réseaux',
                        courseType:'TD',
                        hours:'8H-10H',
                        title:'Cours et TD',
                        duration:'1:43:07',
                        yt:'https://www.youtube.com/embed/nEZvNGmcMbk',
                    },
                    {
                        id:10,
                        fullDate:'Vendredi 22 janvier',
                        shortDate:'22/01/2021',
                        module:'Anglais',
                        courseType:'TD',
                        hours:'15H-17H',
                        title:'Cours sur les graphes',
                        duration:'1:11:44',
                        yt:'https://www.youtube.com/embed/DPf-UVlN7Qc',
                    },
                    {
                        id:11,
                        fullDate:'Vendredi 22 janvier',
                        shortDate:'22/01/2021',
                        module:'Maths Recherche opérationnelle',
                        courseType:'TD',
                        hours:'13H-15H',
                        title:'Cours et TD',
                        duration:'1:47:05',
                        yt:'https://www.youtube.com/embed/hZ1xYGpPv-U',
                    },
                    {
                        id:12,
                        fullDate:'Vendredi 22 janvier',
                        shortDate:'22/01/2021',
                        module:'Réseaux',
                        courseType:'TD',
                        hours:'8H-10H',
                        title:'Suite TD',
                        duration:'1:50:52',
                        yt:'https://www.youtube.com/embed/Dlbk0iZvPeo',
                    },
                    {
                        id:13,
                        fullDate:'Mercredi 20 janvier',
                        shortDate:'20/01/2021',
                        module:'Réseaux',
                        courseType:'TD',
                        hours:'15H-17H',
                        title:'Cours et TD',
                        duration:'1:50:05',
                        yt:'https://www.youtube.com/embed/E-NutIwiZgE',
                    },
                    {
                        id:14,
                        fullDate:'Mercredi 20 janvier',
                        shortDate:'20/01/2021',
                        module:'Communication',
                        courseType:'TD',
                        hours:'13H-15H',
                        title:'Début du module',
                        duration:'1:17:34',
                        yt:'https://www.youtube.com/embed/UvLHnP5Pso8',
                    },
                    {
                        id:15,
                        fullDate:'Mercredi 20 janvier',
                        shortDate:'20/01/2021',
                        module:'Création d\'entreprise',
                        courseType:'TD',
                        hours:'8H-12H',
                        title:'Début du module',
                        duration:'1:01:28',
                        yt:'https://www.youtube.com/embed/pIcvhHwhyLk',
                    },
                    {
                        id:16,
                        fullDate:'Mardi 19 janvier',
                        shortDate:'19/01/2021',
                        module:'Programmation Web',
                        courseType:'TD',
                        hours:'13H-15H',
                        title:'Début du module',
                        duration:'2:06:13',
                        yt:'https://www.youtube.com/embed/HQFA_J-vpxo',
                    },
                    {
                        id:17,
                        fullDate:'Mardi 19 janvier',
                        shortDate:'19/01/2021',
                        module:'Réseaux',
                        courseType:'TD',
                        hours:'8H-10H',
                        title:'Début du module',
                        duration:'1:46:30',
                        yt:'https://www.youtube.com/embed/qPf1FD1mm8U',
                    },
                    {
                        id:18,
                        fullDate:'Lundi 18 janvier',
                        shortDate:'18/01/2021',
                        module:'Maths Recherche opérationnelle',
                        courseType:'TD',
                        hours:'8H-12H',
                        title:'Début du module',
                        duration:'3:03:37',
                        yt:'https://www.youtube.com/embed/LBl1aqVE51s',
                    },
                ],
                semestre3:[
                    {
                        id:19,
                        fullDate:'Mardi 05 janvier',
                        shortDate:'05/01/2021',
                        module:'Services réseaux',
                        courseType:'TP',
                        hours:'15H30-17H30',
                        title:'TP3',
                        duration:'32:56',
                        yt:'https://www.youtube.com/embed/bttJNHagAno',
                    },
                    {
                        id:20,
                        fullDate:'Lundi 04 janvier',
                        shortDate:'04/01/2021',
                        module:'Services réseaux',
                        courseType:'CM/TD',
                        hours:'8H-10H',
                        title:'Suite cours',
                        duration:'1:40:26',
                        yt:'https://www.youtube.com/embed/oekZlb51NUA',
                    },
                    {
                        id:21,
                        fullDate:'Jeudi 17 décembre',
                        shortDate:'17/12/2020',
                        module:'Services réseaux',
                        courseType:'TP',
                        hours:'10H-12H',
                        title:'TP2',
                        duration:'39:55',
                        yt:'https://www.youtube.com/embed/V2-P4tHMeio',
                    },
                    {
                        id:22,
                        fullDate:'Lundi 14 décembre',
                        shortDate:'14/12/2020',
                        module:'Services réseaux',
                        courseType:'TD',
                        hours:'15H30-17H30',
                        title:'TD3 et 4',
                        duration:'1:51:30',
                        yt:'https://www.youtube.com/embed/Kg7YpfuX7io',
                    },
                    {
                        id:23,
                        fullDate:'Vendredi 11 décembre',
                        shortDate:'11/12/2020',
                        module:'Algorithme avancée',
                        courseType:'CM',
                        hours:'15H30-17H30',
                        title:'CM3',
                        duration:'1:51:57',
                        yt:'https://www.youtube.com/embed/7GoWdcc6klM',
                    },
                    {
                        id:24,
                        fullDate:'Vendredi 11 décembre',
                        shortDate:'11/12/2020',
                        module:'Services réseaux',
                        courseType:'CM',
                        hours:'13H30-15H30',
                        title:'CM et TD VLAN',
                        duration:'1:43:34',
                        yt:'https://www.youtube.com/embed/RsoAh0-KqRY',
                    },
                    {
                        id:25,
                        fullDate:'Mardi 08 décembre',
                        shortDate:'08/12/2020',
                        module:'Algorithme avancée',
                        courseType:'CM',
                        hours:'13H30-15H30',
                        title:'CM2',
                        duration:'1:26:33',
                        yt:'https://www.youtube.com/embed/OtotZPL3yWY',
                    },
                    {
                        id:26,
                        fullDate:'Lundi 07 décembre',
                        shortDate:'07/12/2020',
                        module:'Services réseaux',
                        courseType:'TD',
                        hours:'13H30-15H30',
                        title:'Cours et TD',
                        duration:'1:47:54',
                        yt:'https://www.youtube.com/embed/vT3y-j5a1XQ',
                    },
                    {
                        id:27,
                        fullDate:'Lundi 07 décembre',
                        shortDate:'07/12/2020',
                        module:'GSI',
                        courseType:'CM',
                        hours:'8H-10H',
                        title:'Correction du QCM',
                        duration:'11:51',
                        yt:'https://www.youtube.com/embed/QzJViTMN118',
                    },
                    {
                        id:28,
                        fullDate:'Jeudi 03 décembre',
                        shortDate:'03/12/2020',
                        module:'Services réseaux',
                        courseType:'TD/CM',
                        hours:'13H30-15H30',
                        title:'TD et CM',
                        duration:'1:42:02',
                        yt:'https://www.youtube.com/embed/eIWEBcwIN0s',
                    },
                    {
                        id:29,
                        fullDate:'Mercredi 02 décembre',
                        shortDate:'02/12/2020',
                        module:'Services réseaux',
                        courseType:'TP',
                        hours:'8H-10H',
                        title:'TP1',
                        duration:'59:41',
                        yt:'https://www.youtube.com/embed/r2XL8Ow3_jU',
                    },
                    {
                        id:30,
                        fullDate:'Mardi 1er décembre',
                        shortDate:'01/12/2020',
                        module:'Droit des TIC',
                        courseType:'CM',
                        hours:'13h30-17H',
                        title:'Exposés',
                        duration:'3:14:58',
                        yt:'https://www.youtube.com/embed/ILGTahZCJ4s',
                    },
                    {
                        id:31,
                        fullDate:'Mardi 1er décembre',
                        shortDate:'01/12/2020',
                        module:'Services réseaux',
                        courseType:'CM',
                        hours:'10H-12H',
                        title:'Premier CM',
                        duration:'1:37:48',
                        yt:'https://www.youtube.com/embed/6VKU5OMLO8A',
                    },
                    {
                        id:32,
                        fullDate:'Lundi 30 Novembre',
                        shortDate:'30/11/2020',
                        module:'Algorithme avancée',
                        courseType:'CM',
                        hours:'10-12H',
                        title:'Premier CM',
                        duration:'1:59:58',
                        yt:'https://www.youtube.com/embed/cLYxloBJXds',
                    },
                    {
                        id:33,
                        fullDate:'Mardi 10 Novembre',
                        shortDate:'10/11/2020',
                        module:'GSI',
                        courseType:'CM',
                        hours:'13H30-15H30',
                        title:'Suite cours',
                        duration:'1:12:51',
                        yt:'https://www.youtube.com/embed/6WC_HO9-bWo',
                    },
                    {
                        id:34,
                        fullDate:'Lundi 09 Novembre',
                        shortDate:'09/11/2020',
                        module:'PHP',
                        courseType:'CM',
                        hours:'10H-12H',
                        title:'Le modèle MVC',
                        duration:'1:48:15',
                        yt:'https://www.youtube.com/embed/XPRpazSGSmY',
                    },
                    {
                        id:35,
                        fullDate:'Vendredi 06 Novembre',
                        shortDate:'06/11/2020',
                        module:'Ap Projet',
                        courseType:'TP',
                        hours:'10H-12H',
                        title:'Début du cours',
                        duration:'30min 40s',
                        yt:'https://www.youtube.com/embed/eRuzpQRMcrk',
                    },
                    {
                        id:36,
                        fullDate:'Vendredi 06 Novembre',
                        shortDate:'06/11/2020',
                        module:'Ap Projet',
                        courseType:'TP',
                        hours:'10H-12H',
                        title:'Debriefing',
                        duration:'13min 52s',
                        yt:'https://www.youtube.com/embed/4Vt-Gft4mVA',
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>

</style>
