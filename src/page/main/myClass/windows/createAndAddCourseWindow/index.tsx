import {Form, Modal, Input, Space, Select, SelectProps} from "antd";
import React, {useEffect, useImperativeHandle, useRef, useState} from "react";
import styles from "./index.module.css"
import {useForm} from "antd/es/form/Form";
import {createCourseWindow} from "@/page/main/myClass/windows/createAndAddCourseWindow/interface";

function CreateCourseWindow(props:createCourseWindow){
    const [isModalOpen,setIsModalOpen] = useState<boolean>(false);
    const [years,setYears] = useState<SelectProps['options']>()
    const [semesters,setSemester] = useState<SelectProps['options']>()
    const [title,setTitle] = useState<string>("创建课程")
    const [form]  = useForm()

    useImperativeHandle(props.onRef, () => {
        return {
            createCourse: createCourse,
            addCourse: addCourse
        };
    });

    const createCourse = ()=> {
        setTitle("创建课程")
        setIsModalOpen(true)
    }

    const addCourse = ()=> {
        setTitle("加入课程")
        setIsModalOpen(true)
    }

    const changeYear = (value:string) => {

    }

    const changeSemester = (value:string) => {

    }

    const handleOk = () => {
        if(title==="创建课程"){

        }else if(title==="加入课程"){

        }
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return(
        <Modal
            title={title}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
            okText={"确认"}
            cancelText={"取消"}
            bodyStyle={{paddingTop:20}}
            forceRender={true}
        >
            {
                title==="创建课程"
                    ?
                    <Form
                        form={form}
                    >
                        <Form.Item
                            label={"课程名称"}
                        >
                            <Input className={styles.input} showCount maxLength={50}/>
                        </Form.Item>
                        <Form.Item
                            label={"教学班级"}
                        >
                            <Input className={styles.input} showCount maxLength={30}/>
                        </Form.Item>
                        <Form.Item
                            label={"选择学年-学期"}
                        >
                            <Space wrap size={50}>
                                <Select
                                    defaultValue="请选择学年"
                                    onChange={changeYear}
                                    options={years}
                                    className={styles.select}
                                >

                                </Select>
                                <Select
                                    defaultValue="请选择学期"
                                    onChange={changeSemester}
                                    options={semesters}
                                    className={styles.select}
                                >

                                </Select>
                            </Space>
                        </Form.Item>
                    </Form>
                        :
                    <Form
                        form={form}
                    >
                        <Form.Item
                            label={"加课码"}
                        >
                            <Input className={styles.input} placeholder={"请输入课程加课码"}/>
                        </Form.Item>
                    </Form>
            }
        </Modal>
    )
}

export default CreateCourseWindow;