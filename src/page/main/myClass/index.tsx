import React, {useState} from "react";
import styles from "./index.module.css"
import TopCourse from "./topCourse/index";
import {Button, Input, Tabs, TabsProps} from "antd";
import CourseDisplayFrame from "./courseDisplayFrame/index";

function MyClass(){

    const [activeKey,setActiveKey] = useState("teach")

    const items: TabsProps['items'] = [
        {
            key:"teach",
            label:"我教的",
            children: <CourseDisplayFrame/>
        },
        {
            key:"assist",
            label:"我协助的",
            children: <CourseDisplayFrame/>
        },
        {
            key:"learn",
            label:"我学的",
            children: <CourseDisplayFrame/>
        },
    ]

    const changeDisplayCourse = (key: string)=> {
        setActiveKey(key)
    }

    return(
        <div className={styles.myClass}>
            <TopCourse/>
            <div className={styles.semesterCourse}>
                <Tabs
                    defaultActiveKey={activeKey}
                    items={items}
                    onChange={changeDisplayCourse}
                    tabBarGutter={45}
                    tabBarExtraContent={
                        <div className={styles.courseAction}>
                            <Button className={styles.archiveManager}>归档管理</Button>
                            <Input placeholder={"搜索我的课程"} className={styles.searchCourse}/>
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export default MyClass;