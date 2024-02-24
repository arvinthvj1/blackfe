import React from "react";
import {Col} from "antd";
import Title from "antd/es/typography/Title";

const FooterMenuItems = (props) => {
    return (
        <Col xs={12} sm={12} lg={8} xl={4} key={props.data.id}>
        <Title level={4} className='text-white mb-3'>{props.data.title}</Title>
        <ul className="footerList">
        {props.data.links.map((e, i) => {
              return <li key={i}>
                <a href={e.slug}>{e.name} </a>
                </li>;
            })}
        </ul>
      </Col>
    )
};
export default FooterMenuItems;