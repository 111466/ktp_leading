import React, {useImperativeHandle, useState} from "react";
import styles from "./index.module.css"
import {Button, Modal} from "antd";
import {archiveType} from "@/page/main/myClass/windows/archiveManagerWindow/interface";
import CourseOverview from "../../../../../components/courseOverview/index";

function ArchiveManagerWindow(props:archiveType){
    const [isModalOpen,setIsModalOpen] = useState<boolean>(false);

    useImperativeHandle(props.onRef, () => {
        return {
            archiveManager:archiveManager
        };
    });

    const archiveManager = ()=> {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return(
        <Modal
            title="归档课程"
            open={isModalOpen}
            width={1000}
            onCancel={handleCancel}
            footer={[
                <Button key="submit" type="primary" onClick={handleOk}>
                    确定
                </Button>
            ]}
        >
            <div className={styles.archiveDiv}>
                <div className={styles.subCourse}>

                </div>
            </div>
        </Modal>
    )
}

export default ArchiveManagerWindow;