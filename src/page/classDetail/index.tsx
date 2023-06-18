import {Button, Menu, Popover, Table, Tabs, TabsProps} from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom";
import styles from "./index.module.css"
import {DataType} from "@/page/classDetail/interface";

function ClassDetail(){
    const [dataSource,setDataSource] = useState<DataType[]>([])
    const history = useHistory();

    useEffect(()=>{
        setDataSource(
        [{
                key:"1",
                name:"1",
                alreadyViewed:1,
                noViewed:1,
                unhandedWork:1
            }]
        )
    },[])

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `课堂互动`,
        },
        {
            key: '2',
            label: `作业`,
        },
        {
            key: '3',
            label: `话题`,
        },
        {
            key: '4',
            label: `资料`,
        },
        {
            key: '5',
            label: `测试`,
        },
        {
            key: '6',
            label: `公告`,
        },
    ];

    const columns: ColumnsType<DataType> = [
        {
            title: "图标",
            dataIndex: "",
            key: "logo",
            render:() =>
                <div style={{textAlign:"center"}}>
                    <img src={require("../../img/workLogo.png")}/><br/>
                    <span>作业</span>
                </div>
        },
        {
            title: "作业名字",
            dataIndex: "name",
            key: "name",
            render:() =>
                <div>
                    <span className={styles.workName}>作业1</span><br/>
                    <div>
                        <span className={styles.overCourse}>已结束</span>
                        <div className={styles.vertical}></div>
                        <span className={styles.overCourse}>提交截止日期；2023/06/09 14:45</span>
                        <div className={styles.vertical}></div>
                        <span className={styles.overCourse}>个人作业</span>
                </div>
                    {/*<span>|提交截止时间：1111|个人作业</span>*/}
                </div>
        },
        {
            title: "已批",
            dataIndex: "alreadyViewed",
            key: "alreadyViewed",
            render: () =>
                <div className={styles.tdDiv}>
                    <span className={styles.fontColor}>16</span><br/>
                    <span className={styles.ptText}>已批完</span>
                </div>
        },
        {
            title: "未批",
            dataIndex: "noViewed",
            key: "noViewed",
            render: ()=>
                <div className={styles.tdDiv}>
                    <span className={styles.fontColor}>16</span><br/>
                    <span className={styles.ptText}>未批完</span>
                </div>
        },
        {
            title: "未交",
            dataIndex: "unhandedWork",
            key: "unhandedWork",
            render: () =>
                <div className={styles.tdDiv}>
                    <span className={styles.fontColor}>16</span><br/>
                    <span className={styles.ptText}>未交</span>
                </div>
        },
        {
            title:"更多",
            dataIndex:"",
            key: "more",
            render: () =>
                <div className={styles.tdDiv}>
                    <img className={styles.ellipsis} src={require("../../img/ellipsis.png")}/><br/>
                    <span className={styles.ptText}>更多</span>
                </div>
        }
    ]

    //排序操作
    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    const toMember = () => {
        history.push("/main/member");
    }

    const toPerformance = () => {
        history.push("/main/performance")
    }
    const toHomework = () => {
        history.push("/main/homework")
    }

    const onChange = (key: string) => {
        console.log(key);
    };

    return(
        <div className={styles.classDetail}>
            <div className={styles.header}>
                <div className={styles.headerTop}>
                    
                </div>
                <div className={styles.headerBottom}>
                    <Tabs
                        defaultActiveKey="2"
                        items={items}
                        onChange={onChange}
                        tabBarGutter={50}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <span>{"共"+1+"个活动"}</span>
                <Popover
                    content={
                        <div className={styles.sortType}>
                            {/*<button>按添加时间升序</button>*/}
                            {/*<br/>*/}
                            {/*<button>按添加时间降序</button>*/}
                            {/*<br/>*/}
                            {/*<button>按名称升序</button>*/}
                            {/*<br/>*/}
                            {/*<button>按名称降序</button>*/}
                        </div>
                    }
                >
                    <span className={styles.sort}>
                    <img className={styles.sortImg} src={require("../../img/workSort.png")}/>
                        排序
                    </span>
                </Popover>

                <span className={styles.action}>
                    批量操作
                </span>
                <button className={styles.addWork}>
                    + 添加作业
                </button>
            </div>
            <div className={styles.tables}>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    showHeader={false}
                    bordered={true}
                    pagination={false}
                />
            </div>
        </div>
    )
}

export default ClassDetail;