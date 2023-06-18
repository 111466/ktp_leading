import React, {useRef, useState} from "react";
import styles from "./index.module.css";
import {Button, Card, Popover} from "antd";
import CourseOverview from "../../../../components/courseOverview/index";
import CreateCourseWindow from "../createCourseWindow/index";

const headStyle: React.CSSProperties = {
    fontSize:"20px",
    fontFamily:"PingFangSC,PingFangSC-Medium",
    fontWeight:500,
    height:"70px"
};

const bodyStyle: React.CSSProperties = {
    maxHeight:"330px",
    overflow:"auto",
    border:"none",
    padding:0
}

function TopCourse(){
    // // 创建课程modal的展示属性
    // const [isOpenWindow,setIsOpenWindow] = useState<boolean>(false)
    //创建加入按钮卡片的展示属性
    const [open,setOpen] = useState<boolean>(false)
    const courseWindow = useRef<any>()

    const createCourse = () => {
        // setIsOpenWindow(true)
        courseWindow.current.setIsModalOpen(true)
        console.log(courseWindow)
        hide()
    }

    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const content = (
        <div>
            <Button type={"text"} className={styles.courseBtn} onClick={createCourse}>创建课程</Button>
            <br/>
            <Button type={"text"} className={styles.courseBtn}>加入课程</Button>
        </div>
    );

    const extra:React.ReactNode = (
        <Popover
            content={content}
            trigger="click"
            placement="bottom"
            open={open}
            onOpenChange={handleOpenChange}
        >
            <Button type="primary" className={styles.addCourseBtn}>
                + 加入/创建课程
            </Button>
        </Popover>
    )

    return(
        <div className={styles.topCourseDiv}>
            <Card
                title="置顶课程"
                headStyle={headStyle}
                bodyStyle={bodyStyle}
                extra={extra}
            >
                <CourseOverview/>
                <CourseOverview/>
                <CourseOverview/>
                <CourseOverview/>
                <CourseOverview/>
            </Card>
            <CreateCourseWindow onRef={courseWindow}/>
        </div>
    )
}

export default TopCourse;