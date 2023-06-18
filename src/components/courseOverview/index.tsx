import {Card, Popover} from "antd";
import React from "react";
import styles from "./index.module.css";
import {useHistory} from "react-router-dom";
import routes from "../../routes/index";

const gridStyle: React.CSSProperties = {
    width: '270px',
    height: "230px",
    textAlign: "center",
    lineHeight: 10,
    // marginTop: "10px",
    marginLeft: "25px",
    marginBottom:"20px",
    padding:0,
    display:"inline-block",
    cursor:"pointer",
    borderRadius:"10px",
    border:"1px solid rgba(128, 128, 128, 0.37)",
};

function CourseOverview() {
    const history = useHistory()

    const toClassDetail = ()=> {
        history.push(routes.CLASS_DETAIL)
    }

    return(
        <Card.Grid hoverable={false} style={gridStyle} onClick={toClassDetail}>
            <div className={styles.courseDisplay}>
                <div className={styles.courseDisplayTop}>
                    {/*<p className={styles.time}>2022-2023 第二学期</p>*/}
                    {/*<h3 className={styles.title}>熟悉 互动课堂</h3>*/}
                    {/*<span className={styles.clazz}>1、2班</span>*/}
                    {/*<span className={styles.addCourseCode}>*/}
                    {/*    <img src={require("../../img/addCourseCode.png")} className={styles.code}/>*/}
                    {/*    <Popover content={<div>11</div>} title={null}  trigger={"click"} placement="bottom">*/}
                    {/*        加课码:XCUXK9*/}
                    {/*        <img src={require("../../img/pullDown.png")} className={styles.pullDown}/>*/}
                    {/*    </Popover>*/}
                    {/*</span>*/}
                </div>
                <div className={styles.courseDisplayBottom}>

                </div>
            </div>
        </Card.Grid>
    )
}

export default CourseOverview;