import React from 'react'
import {Link, Route, useHistory} from "react-router-dom";
import LessonPreparationArea from "../../lessonPreparationArea";
import Performance from "../performance";
import Member from "../member";

function ClassDetail(){
    const history = useHistory();
    const toMember = () => {
        history.push("/main/member");
    }
    const toPerformance = () => {
        history.push("/main/performance")
    }
    const toHomework = () => {
        history.push("/main/homework")
    }

    return(
        <div>课堂详情
            <br/>
            <button onClick={toMember}>成员管理</button>
            <button onClick={toPerformance}>成绩管理</button>
            <button onClick={toHomework}>作业详情</button>
        </div>
    )
}

export default ClassDetail;