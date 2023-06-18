import React from 'react'
import {useHistory} from "react-router-dom";
import styles from "./index.module.css"

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
        <div className={styles.classDetail}>课堂详情
            <br/>
            <button onClick={toMember}>成员管理</button>
            <button onClick={toPerformance}>成绩管理</button>
            <button onClick={toHomework}>作业详情</button>
        </div>
    )
}

export default ClassDetail;