import React, {useState} from "react";
import {Tabs, TabsProps} from "antd";
import styles from "./index.module.css"
import {useHistory} from "react-router-dom";
import routes from "../../../routes/index";

function Header(){
    const [actionKey,setActionKey] = useState("myClass");
    const history = useHistory()

    const items:TabsProps["items"] = [
        {
            key:"myClass",
            label:"我的课堂",
        },
        {
            key:"lessonPreparationArea",
            label: "备课区",
        }
    ]

    type PositionType = 'left' | 'right';

    //在Tabs额外添加的内容
    const extras: Record<PositionType, React.ReactNode> = {
        left:
            <div className={styles.logo}>
                <img src={require("../../../img/logo_blue.png")} alt={"logo"} className={styles.logo}/>
            </div>,
        right:
            <div className={styles.action}>
                <img src={require("../../../img/informationManagement.png")} alt={"信息管理"}/>
                <img src={require("../../../img/bell.png")} alt={"消息通知"}/>
                <img src={require("../../../img/headPortrait.png")} alt={"头像"}/>
            </div>,
    };

    const changeTabs = (key:string)=> {
        setActionKey(key)
        if(key==="myClass"){
            history.push(routes.MAIN);
        }else if(key==="lessonPreparationArea"){
            history.push(routes.LESSON_PREPARATION_AREA)
        }
    }

    return(
        <div style={{position:"absolute",width:"99%",zIndex:99}}>
            <Tabs
                defaultActiveKey={"1"}
                items={items}
                size={"large"}
                tabBarGutter={70}
                tabBarExtraContent={extras}
                tabBarStyle={{height:60}}
                onChange={changeTabs}
                centered
            />
        </div>
    )
}

export default Header;

