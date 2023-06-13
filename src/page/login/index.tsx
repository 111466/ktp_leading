import React from 'react'
import {useHistory} from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import  styles from './index.module.css'

function Login(){
    const history = useHistory();
    const register = () => {
        history.push("/register")
    }

    const loginNotarize = () => {
        history.push("/main")
    }

    return(
        <div className={styles.loginDiv}>
            <img src={require("../../img/logo_blue.png")} className={styles.logo_blue}/>
            <div className={styles.loginContent}>
                <img src={require("../../img/newbg.png")}/>
                <div className={styles.form}>
                    <h2>账号登录</h2>
                     <Form
                         name="normal_login"
                         className="login-form"
                         initialValues={{ remember: true }}
                          // onFinish={onFinish}
                     >
                         <Form.Item
                             name="username"
                             rules={[{ required: true, message: '请输入账号!' }]}
                             wrapperCol={{offset:2}}
                         >
                             <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" className={styles.input}/>
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

                             <a className="login-form-forgot" href="" style={{position:"relative",top:"-52px",left:"370px",color:"black"}}>
                                 忘记密码
                             </a>
                         </Form.Item>
                         <Form.Item style={{height:"150px"}}>
                             <Button type="primary" htmlType="submit" className={styles.loginBtn}>
                                 登录
                             </Button>
                             <div style={{marginLeft:"64%",marginTop:"30px"}}>
                                 还没有账号？ <a onClick={()=>history.push("/register")}>去注册</a>
                             </div>
                         </Form.Item>
                     </Form>
                </div>
            </div>
        </div>
        // <div className={".loginDiv"}>
        //     {/*<div>登录页面</div>*/}
        //     {/*<button onClick={register}>前往注册</button>*/}
        //     {/*<br/>*/}
        //     {/*<button onClick={loginNotarize}>确认登录</button>*/}
        // {/*</div>*/}
    )
}

export default Login;