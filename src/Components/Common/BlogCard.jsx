import React from "react";
import { Badge, Button, Card, Col, Flex, Rate, Row, Tooltip } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
const { Meta } = Card;



const BlogCard = ({ data }) => {
    const {
        id,
        title,
        slug,
        image_name,
        content
    } = data;
    return (
        <Col xs={24} sm={12} md={8} lg={6} xl={6} key={id}>
            <Card
                style={{
                    width: "100%",height: "100%",
                }}
                cover={
                    <img
                        className="m-0"
                        alt={title}
                        style={{ width: "100%",height: "200px",   objectFit: "cover" }}
                        src={`https://black.nikithawebdesign.com/blog-images/small/` + image_name}
                    />
                }
            >
                <Meta title={title} description={content} />
            </Card>
        </Col>
    )
};
export default BlogCard;