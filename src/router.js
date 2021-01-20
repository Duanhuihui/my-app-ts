//router.js
import CourseGrid from 'components/1Course/courseGrid'
import ResourceGrid from 'components/2Resource/resourceGrid'
import PracticeGrid from 'components/3Practice/practiceGrid'
import ElearningGrid from 'components/4ELearning/elearningGrid'
import ExercisesGrid from 'components/5Exercises/exercisesGrid'
import CommunicationGrid from 'components/6Communication/communicationGrid'
import EvaluationGrid from 'components/7Evaluation/evaluationGrid'
import Information from 'components/1Course/pages/information'

    
const routes = [
    
    {
        path:"/",
        component:CourseGrid,
        exact:true,
        children:[
            {
                path:'/',
                component:Information,
                exact:true
            },
            {
                path:'/1/b',
                component:EvaluationGrid,
                exact:true

            }
        ]
    },
    {
        path:"/2",
        component:ResourceGrid
    },
    {
        path:"/3",
        component:ElearningGrid
    },
    {
        path:"/4",
        component:ExercisesGrid
    },
    {
        path:"/5",
        component:CommunicationGrid
    },
    {
        path:"/6",
        component:PracticeGrid
    },
    {
        path:"/7",
        component:EvaluationGrid
    },
    
]


export {routes}