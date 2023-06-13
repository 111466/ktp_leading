import React from 'react'
import {Link, Route, useHistory} from "react-router-dom";
import ClassDetail from "./classDetail";
import LessonPreparationArea from "../lessonPreparationArea";
import Member from "./member";
import Performance from "./performance";
import Homework from "./homework";

function Main(){
    const history = useHistory();
    const toClassDetail = () => {
        history.push("/main/classDetail")
    }

    const toLessonPreparationArea = () => {
        history.push("/main/lessonPreparationArea")
    }

    return(
        <div>
            <div>我的课堂</div>
            <button onClick={toClassDetail}>课堂详情</button>
            <button onClick={toLessonPreparationArea}>备课区</button>
            <Route path={"/main/classDetail"} component={ClassDetail}/>
            <Route path={"/main/lessonPreparationArea"} component={LessonPreparationArea}/>
            <Route path={"/main/member"} component={Member}/>
            <Route path={"/main/performance"} component={Performance}/>
            <Route path={"/main/homework"} component={Homework}/>
        </div>
    )
}

export default Main;