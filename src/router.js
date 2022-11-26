import {createWebHistory} from "vue-router";
import {createRouter} from "vue-router";
import LevelsComponent from "@/components/LevelsComponent";
import PoemComponent from "@/components/PoemComponent";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'levels',
            component: LevelsComponent,
            path: '/levels'
        },
        {
            name: 'poem',
            component: PoemComponent,
            path: '/poem/:id',
        }
    ]
});