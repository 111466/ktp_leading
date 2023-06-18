import React from "react";
import styles from "./index.module.css"
import MyClass from "./myClass/index";
import Header from "./header/index"
import {Route, Switch} from "react-router-dom";
import routes from "../../routes/index";
import LessonPreparationArea from "./lessonPreparationArea/index";
import ClassDetail from "../classDetail/index";

function Main(){
    return(
        <div className={styles.main}>
            <Header/>
            <Switch>
                <Route exact={true} path={routes.MAIN} component={MyClass}/>
                <Route path={routes.LESSON_PREPARATION_AREA} component={LessonPreparationArea}/>
                <Route path={routes.CLASS_DETAIL} component={ClassDetail}/>
            </Switch>
        </div>
    )
}

export default Main;

