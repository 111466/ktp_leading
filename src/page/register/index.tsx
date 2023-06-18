import {Button, Form, Input, Modal, Radio, RadioChangeEvent} from "antd";
import React, {MutableRefObject, ReactNode, Ref, RefObject, useRef, useState} from "react";
import {useHistory} from "react-router-dom";
import styles from './index.module.css'
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useForm} from "antd/es/form/Form";
import {registerData,InputRef} from "@/page/register/interface";

function Register(){
    const [registerIdentity,setRegisterIdentity] = useState<string>("student")
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [username,setUsername] = useState<string>()
    const [reCode,setReCode] = useState<boolean>(true)
    const [codeBtn,setCodeBtn] = useState<boolean>(true)
    const [reCodeNum,setReCodeNum] = useState<number>(60)
    const [registerData,setRegisterData] = useState<registerData>()
    const history = useHistory()
    const [from] = useForm()
    const inputCode = useRef<any>()
    let codeNum:number = 60

    //注册时选择身份
    const selectIdentity = ({ target: { value } }: RadioChangeEvent) => {
        setRegisterIdentity(value)
        from.setFieldValue("identity",value)
    }

    //确认注册
    const registerNotarize = (valeus:registerData) => {
        showModal()
        countDown()
        setRegisterData(valeus)
    }

    //重新发送验证码倒计时
    const countDown = () => {
        codeNum = 60
        setReCode(true)
        let interval:any = setInterval(()=>{
            codeNum--;
            setReCodeNum(codeNum)
            if(codeNum===0){
                setReCode(false)
                clearInterval(interval)
            }
        },1000)
    }

    const toLogin = ()=> {
        history.push("/")
    }

    //验证邮箱号
    const validateEmail = (rule: any, value: string) => {
        return new Promise<void>((resolve, reject) => {
            if (value && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(value)) {
                reject('请输入有效的邮箱地址');
            } else {
                setUsername(value)
                resolve();
            }
        });
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const changeReCode = (e:any) => {
        if(e.target.value){
            setCodeBtn(false)
        }else{
            setCodeBtn(true)
        }
    }

    const registerAndLogin = () => {
        console.log(inputCode.current.input.value)
    }

    return(
        <div className={styles.registerDiv}>
            <img src={require("../../img/logo_blue.png")} className={styles.logo_blue} alt={"logo"}/>
            <div className={styles.registerContent}>
                <img src={require("../../img/bg.png")}/>
                <div className={styles.form}>
                    <h2>注册账号</h2>
                    <Form
                        name="normal_register"
                        onFinish={registerNotarize}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: '请输入邮箱号!' },
                                { validator: validateEmail}
                            ]}
                            wrapperCol={{offset:2}}
                        >
                            <Input prefix={<UserOutlined/>} placeholder="请输入邮箱号" className={styles.input}/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                            wrapperCol={{offset:2}}
                        >
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码" className={styles.input}/>
                        </Form.Item>
                        <Form.Item
                            name="alignPassword"
                            rules={[
                                {required: true,message: '两次输入不一致!'},
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('两次输入不一致!'));
                                    },
                                }),
                            ]}
                            wrapperCol={{offset:2}}
                        >
                            <Input prefix={<LockOutlined/>} placeholder="请再次输入密码确认" className={styles.input}/>
                        </Form.Item>
                        <Form.Item
                            name="identity"
                        >
                            <h3>
                                选择身份
                            </h3>
                            <Radio.Group
                                value={registerIdentity}
                                buttonStyle="outline"
                                onChange={selectIdentity}
                                className={styles.group}
                            >
                                <Radio.Button className={styles.radioBtn} value={"teacher"}>
                                    <img src={require("../../img/teacher.png")}/>
                                    <label>教师</label>
                                </Radio.Button>
                                <Radio.Button className={styles.radioBtn} value={"student"}>
                                    <img src={require("../../img/student.png")}/>
                                    <label>学生</label>
                                </Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: '请输入姓名!' }]}
                            wrapperCol={{offset:2}}
                        >
                            <Input placeholder="请输入姓名" className={styles.input}/>
                        </Form.Item>
                        <Form.Item
                            name="school"
                            rules={[{ required: true, message: '请输入学校/机构!' }]}
                            wrapperCol={{offset:2}}
                        >
                            <Input placeholder="请输入学校/机构" className={styles.input}/>
                        </Form.Item>
                        <Form.Item className={styles.registerBtn}>
                            <Button type="primary" htmlType="submit" className={styles.notarize}>
                                注册
                            </Button>
                            <div className={styles.toLogin}>
                                已有账号？ <a onClick={toLogin}>去登录</a>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <Modal
                title="安全验证"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <p>{"动态验证码已经发至”"+username+"“"}</p>
                <Input className={styles.inputCode} placeholder={"输入验证码"} onChange={changeReCode} ref={inputCode}/>
                <Button type={"primary"} className={styles.reCode} disabled={reCode} onClick={countDown}>
                    {"重新发送验证码"+(reCodeNum===0?"":reCodeNum)}
                </Button>
                <Button className={styles.codeBtn} type={"primary"} disabled={codeBtn} onClick={registerAndLogin}>
                    注册并登录
                </Button>
            </Modal>
        </div>
    )
}

export default Register;