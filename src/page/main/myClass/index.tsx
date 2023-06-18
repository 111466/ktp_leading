import React, {useRef, useState} from "react";
import styles from "./index.module.css"
import TopCourse from "./topCourse/index";
import {Button, Input, Tabs, TabsProps} from "antd";
import CourseDisplayFrame from "./courseDisplayFrame/index";
import ArchiveManagerWindow from "./windows/archiveManagerWindow/index";

function MyClass(){
    const [activeKey,setActiveKey] = useState("teach")
    const archiveRef = useRef<any>()

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

    const openArchive = () => {
        archiveRef.current.archiveManager()
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
                            <Button className={styles.archiveManager} onClick={openArchive}>归档管理</Button>
                            <Input placeholder={"搜索我的课程"} className={styles.searchCourse}/>
                        </div>
                    }
                />
                <ArchiveManagerWindow onRef={archiveRef}/>
            </div>
        </div>
    )
}

export default MyClass;