import React from "react";
import { Badge, Button, Card, Col, Flex, Rate, Row, Tooltip } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
const { Meta } = Card;



const ProductCard = ({ data }) => {
    const {
        id,
        p_name,
        type,
        price,
        color,
        p_variant,
        rating,
        reviews,
        category,
        image_name
    } = data;
    if (data) {
        return (
            <Badge.Ribbon text="25% Off" color="pink" placement="start">
            <Card
                key={id}
                hoverable
                style={{
                    width: "100%",
                }}
                cover={
                    <img
                        className="m-0"
                        alt={p_name}
                        style={{ width: "100%",height: "300px",   objectFit: "cover" }}
                        src={`https://black.nikithawebdesign.com/product_image/small/` + image_name}
                    />
                }
            >
                <Meta title={p_name} description={category} />
                <div>{p_variant}</div>
                <Rate disabled defaultValue={4.35} size={"small"} allowHalf
                    style={{
                        fontSize: 16,
                    }} />
                <Button className="mt-2" block>View Details</Button>
                <div className="common_product_buttons">
                    <Flex vertical="vertical" gap="middle">
                    <Tooltip title="Add to Cart">
                        <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} />
                    </Tooltip>
                    <Tooltip title="Add to Wishlist">
                        <Button type="primary" shape="circle" icon={<HeartOutlined />} />
                    </Tooltip>
    
                    </Flex>
                </div>
            </Card></Badge.Ribbon>
        )
    } else {
        return (
            <h2>No data</h2>
        )
    }
};
export default ProductCard;