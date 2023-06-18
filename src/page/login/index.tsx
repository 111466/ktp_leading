import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import  styles from './index.module.css'
import {loginData} from "@/page/login/interface";

function Login(){
    const history = useHistory();

    useEffect(()=>{

    },[])

    const toRegiste = () => {
        history.push("/register")
    }

    const loginNotarize = (values:loginData) => {
        history.push("/main")
        // dispatch(updateUsername(values.username))
    }

    return(
        <div className={styles.loginDiv}>
            <img src={require("../../img/logo_blue.png")} className={styles.logo_blue} alt={"logo"}/>
            <div className={styles.loginContent}>
                <img src={require("../../img/newbg.png")}/>
                <div className={styles.form}>
                    <h2>账号登录</h2>
                     <Form
                         name="normal_login"
                         className="login-form"
                         initialValues={{ remember: true }}
                          onFinish={loginNotarize}
                     >
                         <Form.Item
                             name="username"
                             rules={[{ required: true, message: '请输入账号!' }]}
                             wrapperCol={{offset:2}}
                         >
                             <Input prefix={<UserOutlined/>} placeholder="邮箱号/账号" className={styles.input}/>
                         </Form.Item>
                         <Form.Item
                             name="password"
                             rules={[{ required: true, message: '请输入密码!' }]}
                             wrapperCol={{offset:2}}
                         >
                             <Input
                                 prefix={<LockOutlined className="site-form-item-icon" />}
                                 type="password"
                                 placeholder="密码"
                                 className={styles.input}
                             />
                         </Form.Item>
                         <Form.Item>
                             <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset:2}}>
                                 <Checkbox>下次自动登录</Checkbox>
                             </Form.Item>
                             <a className="" href="" style={{position:"relative",top:"-52px",left:"370px",color:"black"}}>
                                 忘记密码
                             </a>
                         </Form.Item>
                         <Form.Item style={{height:"150px"}}>
                             <Button type="primary" htmlType="submit" className={styles.loginBtn}>
                                 登录
                             </Button>
                             <div style={{marginLeft:"64%",marginTop:"30px"}}>
                                 还没有账号？ <a onClick={toRegiste}>去注册</a>
                             </div>
                         </Form.Item>
                     </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;