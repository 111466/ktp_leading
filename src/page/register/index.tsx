import {Button, Form, Input, Radio, RadioChangeEvent} from "antd";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import styles from './index.module.css'
import {UserOutlined} from "@ant-design/icons";
import {useForm} from "antd/es/form/Form";
import {registerData} from "@/page/register/interface";

function Register(){
    const [registerIdentity,setRegisterIdentity] = useState("student")
    const history = useHistory()
    const from = useForm()

    //注册时选择身份
    const selectIdentity = ({ target: { value } }: RadioChangeEvent) => {
        setRegisterIdentity(value)
    }

    //确认注册
    const registerNotarize = (valeus:registerData) => {
        console.log(valeus)
    }

    return(
        <div className={styles.registerDiv}>
            <img src={require("../../img/logo_blue.png")} className={styles.logo_blue}/>
            <div className={styles.registerContent}>
                <img src={require("../../img/bg.png")}/>
                <div className={styles.form}>
                    <h2>注册账号</h2>
                    <Form
                        name="normal_register"
                        className="register-form"
                        onFinish={registerNotarize}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入账号!' }]}
                            wrapperCol={{offset:2}}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账号" className={styles.input}/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                            wrapperCol={{offset:2}}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入密码" className={styles.input}/>
                        </Form.Item>
                        <Form.Item
                            name="alignPassword"
                            rules={[{ required: true, message: '两次输入密码不一致!' }]}
                            wrapperCol={{offset:2}}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请再次输入密码确认" className={styles.input}/>
                        </Form.Item>
                        <Form.Item>
                            <h3 style={{fontSize:"20px",marginLeft:"40px",marginTop:"-5px",marginBottom:"5px"}}>
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
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入姓名" className={styles.input}/>
                        </Form.Item>
                        <Form.Item
                            name="school"
                            rules={[{ required: true, message: '请输入学校/机构!' }]}
                            wrapperCol={{offset:2}}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入学校/机构" className={styles.input}/>
                        </Form.Item>
                        <Form.Item style={{height:"150px",marginLeft:"2px"}}>
                            <Button type="primary" htmlType="submit" className={styles.registerBtn}>
                                注册
                            </Button>
                            <div style={{marginLeft:"64%",marginTop:"30px"}}>
                                已有账号？ <a onClick={()=>{history.push("/")}}>去登录</a>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
        // <div>
        //     <Link to={"/"}>登录</Link>
        //     register
        // </div>
    )
}

export default Register;