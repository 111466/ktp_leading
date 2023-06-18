import React, {useState} from "react";
import styles from "./index.module.css";
import {Button, Input, Tabs, TabsProps} from "antd";

function SemesterCourse(){
    const [activeKey,setActiveKey] = useState("teach")

    const items: TabsProps['items'] = [
        {
            key:"teach",
            label:"我教的",
        },
        {
            key:"assist",
            label:"我协助的",
        },
        {
            key:"learn",
            label:"我学的",
        },
    ]

    const changeDisplayCourse = (key: string)=> {
        setActiveKey(key)
    }

    return(
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
    )
}

export default SemesterCourse;