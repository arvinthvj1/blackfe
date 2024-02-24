import React from 'react'
import { Col } from 'antd';

export const HomeAds = (props) => {
    return (
        <Col xs={24} sm={12} md={12} key={props.ad.id}>
            <img src={`https://black.nikithawebdesign.com/home-page-images/${props.ad.desktop_banner}`} className="img-fluid rounded" alt={props.ad.button_text} />
        </Col>
    );
}