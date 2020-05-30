<template>
    <div class="page-inner">
        <div class="page-inner__header">
            Мои проекты
        </div>
        <div class="page-inner__content">
            <v-row class="project-cards">
                <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3" class="project-card" v-for="project in projects" :key="projects.id">
                    <div class="project-card__top project-card-top">
                        <div class="project-card-top__pages">12 страниц</div>
                        <div class="project-card-top__date">{{ project.created_at }}</div>
                    </div>
                    <div class="project-card__body project-card-body">
                        <div class="project-card-body__title">
                            {{project.title}}
                        </div>
                        <div class="project-card-body__url">
                            {{project.url}}
                        </div>
                        <div class="project-card-body__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium assumenda enim fugiat illo necessitatibus quas, recusandae. Harum laudantium non
                            nostrum quisquam vitae. A eos illo, iste quas qui ratione repellat.
                        </div>
                    </div>
                    <div class="project-card__footer project-card-footer">
                        <div class="project-card-footer__button">Просмотр</div>
                        <div class="project-card-footer__button">Редактирование</div>
                        <div class="project-card-footer__button">Скрипт</div>
                    </div>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3" class="project-card new-project" >+</v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import request from "../../helpers/request";
    import {mapActions, mapGetters} from "vuex"
    export default {
        beforeRouteEnter(to, from, next) {
            request.get('projects')
                .then(response => {
                    next(vm => {
                        vm.projects = response.data;
                    });
                }).catch(next);
        },

        data: () => ({
            projects: []
        }),

        computed: {
            ...mapGetters("user", ["user"]),

        },

        methods: {

        }
    }
</script>

<style scoped lang="scss">
    .page-inner{
        &__header{
            color: #474747;
            font-size: 26px;
            margin-bottom: 30px;
            font-family: "Raleway Medium", sans-serif;
        }
        &__content{

        }
    }

    .project-card{
        /*background: #f9f9f9;*/
        margin: 10px;
        box-shadow: 0 0 10px 5px rgba(59, 74, 87, 0.07);
        border: 1px solid #edeaf8;
        border-radius: 4px;
        transition: all ease-in-out 0.5s;
        padding: 20px;
        &:hover{
            //transform: translateY(-5px);
            box-shadow: none;
            transition: all ease-in-out 0.5s;
        }
        &__footer{
            font-size:14px;
            /*text-align: right;*/
        }
    }

    .project-card-top{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        &__pages{
            font-family: "Raleway Medium", sans-serif;
        }
        &__date{
            font-family: "Raleway Medium", sans-serif;
        }
    }

    .project-card-body{
        padding: 20px 0;
        &__title{
            font-size: 20px;
            font-family: "Raleway Medium", sans-serif;
            color: rgb(255, 170, 0);
        }
        &__url{
            font-size: 14px;
            font-family: "Raleway Medium", sans-serif;
        }
        &__description{
            margin-top: 20px;
            font-size: 14px;
        }
    }

    .project-card-footer{
        display: flex;
        &__button{
            padding: 3px 12px;
            margin-right: 5px;
            background: #f6f7fa;
            border-radius: 20px;
            font-size: 12px;
            transition: all ease-in-out 0.5s;
        }
        &__button:last-child{
            margin: 0;
        }
        &__button:hover{
            transition: all ease-in-out 0.5s;
            background: #e1e3e7;
            cursor: pointer;
        }
    }

    .project-card.new-project{
        background: #f6f7fa;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 100px;
        font-family: "Raleway Thin", sans-serif;
    }


</style>