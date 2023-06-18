import React, {useImperativeHandle, useState} from "react";
import styles from "./index.module.css"
import {Modal} from "antd";
import {courseSortProps} from "@/page/main/myClass/windows/courseSortWindow/interface";

function CourseSortWindow(props:courseSortProps){
    const [isModalOpen,setIsModalOpen] = useState<boolean>(false);

    useImperativeHandle(props.onRef, () => {
        return {
            openModal:setIsModalOpen
        };
    });

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return(
        <Modal
            title="课程排序"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
            okText={"确认"}
            cancelText={"取消"}
            bodyStyle={{paddingTop:20}}
        >

        </Modal>
    )
}

export default CourseSortWindow;