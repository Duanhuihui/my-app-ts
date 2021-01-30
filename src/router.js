//router.js
import CourseGrid from 'components/1Course/courseGrid'
import ResourceGrid from 'components/2Resource/resourceGrid'
import PracticeGrid from 'components/3Practice/practiceGrid'
import ElearningGrid from 'components/4Elearn/elearningGrid'
import ExercisesGrid from 'components/5Exercises/exercisesGrid'
import CommunicationGrid from 'components/6Communication/communicationGrid'
import EvaluationGrid from 'components/7Evaluation/evaluationGrid'


    
const routes = [
    
    {
        path:"/1",
        component:CourseGrid
    },
    {
        path:"/2",
        component:ResourceGrid
    },
    {
        path:"/3",
        component:PracticeGrid
    },
    {
        path:"/4",
        component:ElearningGrid
    },
    {
        path:"/5",
        component:ExercisesGrid
    },
    {
        path:"/6",
        component:CommunicationGrid
    },
    {
        path:"/7",
        component:EvaluationGrid
    },
    
]


export {routes}