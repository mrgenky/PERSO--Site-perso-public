<template>
    <v-card class="card-comment">
        <div class="author mb-1">
            <v-avatar size="25" class="mr-2">
                <img src="/img/avatar-placeholder.png" alt="">
            </v-avatar>
            {{comment.firstname}}
        </div>
        <div class="text mb-2">{{comment.text}}</div>
        <div class="date">
            {{comment.created_at}}
        </div>
    </v-card>
</template>

<script>
export default {
    name: "DutCommentCard",
    props:{
        comment:{
            type:Object,
            required:true,
        }
    }
}
</script>

<style lang="scss" scoped>
.card-comment{
    padding:15px;
    .author{
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    .text{
        white-space: pre-line;
    }
    .date{
        font-size: 0.8em;
        color: #b2b2b2;
    }
}
</style>
