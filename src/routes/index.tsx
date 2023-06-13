import {RouteConfig} from "react-router-config";
import Login from "../page/login";
import Register from "../page/register";
import Main from "../page/main";
import LessonPreparationArea from "../page/lessonPreparationArea";
import ClassDetail from "../page/main/classDetail";
import Member from "../page/main/member";
import Performance from "../page/main/performance";
import Homework from "../page/main/homework";

const routes:RouteConfig = [
    {path:"/login", exact:true, component:Login},
    {path:"/register", exact: true, component:Register},
    {path:"/lessonPreparationArea", exact: true, component: LessonPreparationArea},
    {path:"/main", exact: true, component:Main},
    {path:"/main/classDetail", exact: true, component:ClassDetail},
    {path:"/main/member", exact: true, component:Member},
    {path:"/main/performance", exact: true, component:Performance},
    {path:"/main/homework", exact: true, component:Homework},
]

export default routes