import React, {CSSProperties, useRef} from 'react'
import styles from './index.module.css'
import {Collapse, CollapseProps, theme} from "antd";
import CourseOverview from "../../../../components/courseOverview/index";
import CourseSortWindow from "../windows/courseSortWindow/index";


function CourseDisplayFrame(){
    const sortRef = useRef<any>()

    const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
        {
            key: '1',
            label: <div style={{fontWeight:500,fontSize:"17px",marginTop:"10px",marginBottom:"10px",marginLeft:"15px"}}>2022-2023 第一学期</div>,
            children: <>
                <CourseOverview/>
            </>,
            style: panelStyle,
            extra:<span onClick={()=>sortRef.current.openModal(true)}><img style={{width:"15px"}} src={require("../../../../img/sort.png")}/>课程排序</span>
        }
        ,{
            key: '2',
            label: <div style={{fontWeight:500,fontSize:"17px",marginTop:"10px",marginBottom:"10px",marginLeft:"15px"}}>2022-2023 第一学期</div>,
            children: <>
                <CourseOverview/>
            </>,
            style: panelStyle,
        },
    ];

    const { token } = theme.useToken();

    const panelStyle = {
        marginBottom: 30,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,

    };

    return(
        <>
            <Collapse
                defaultActiveKey={['1']}
                // onChange={onChange}
                expandIconPosition={"end"}
                style={{ background: token.colorBgContainer}}
                items={getItems(panelStyle)}
                collapsible="icon"
                expandIcon={({ isActive }) => <div><img style={{width:"10px"}} src={require("../../../../img/pullDownCourses.png")}/>{isActive?"展开":"收起"}</div>}
            />
            <CourseSortWindow onRef={sortRef}/>
        </>
    )
}

export default CourseDisplayFrame;
