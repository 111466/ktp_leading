import React, {MouseEventHandler, useRef, useState} from "react";
import styles from "./index.module.css";
import {Button, Card, MenuProps, Popover} from "antd";
import CourseOverview from "../../../../components/courseOverview/index";
import CreateCourseWindow from "../windows/createAndAddCourseWindow/index";
import {buttonClickType} from "@/page/main/myClass/topCourse/interface";

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
    //创建加入按钮卡片的展示属性
    const [open,setOpen] = useState<boolean>(false)
    const courseWindow = useRef<any>()

    const openModal = (flag:string) => {
        if(flag==="createBtn"){
            courseWindow.current.createCourse()
        }else if(flag==="addBtn"){
            console.log(1)
            courseWindow.current.addCourse()
        }
        setOpen(false);
    }

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const content = (
        <div>
            <Button id="createCourse" type={"text"} className={styles.courseBtn} onClick={()=>openModal("createBtn")}>创建课程</Button>
            <br/>
            <Button id="openCourse" type={"text"} className={styles.courseBtn} onClick={()=>openModal("addBtn")}>加入课程</Button>
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