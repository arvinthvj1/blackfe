import { Avatar, Badge, Card, Col, Drawer, Dropdown, Flex, Row, Space } from 'antd'

import mainLogo from '../../assets/logo.svg'

import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import React, { useState } from 'react'
import Searchbar from './Searchbar';
import MenuCategory from './MenuCategory';
import Mainmenu from './Mainmenu';
import useHeaderDataFetch from '../../customHooks/Common/headerDataFetching';

const items = [
    {
        key: '1',
        label: (
            <a href="/">
                Dashboard
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a href="/">
                My Orders
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a href="/">
                My Profile
            </a>
        ),
    }, {
        key: '4',
        danger: true,
        label: (
            <a href="/">
                Logout
            </a>
        ),
    },
];
const onClick = ({ key }) => {
    alert(`Click on item ${key}`);
};
const languages = [
    {
        key: '1',
        label: (
            <a href="/">
                English
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a href="/ge">
                Deutsch
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a href="/fr">
                Französisch
            </a>
        ),
    }, {
        key: '4',
        label: (
            <a href="/ta">
                தமிழ்
            </a>
        ),
    },
];
const currencies = [
    {
        key: '1',
        label: (
            <a href="/">
                ₹ INR
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a href="/">
                $ USD
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a href="/">
                POUND
            </a>
        ),
    }, {
        key: '4',
        label: (
            <a href="/">
                AED
            </a>
        ),
    },
];


const Header = () => {
    // debugger
    useHeaderDataFetch();
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Card title="" bordered={false} className='header'>
                <div className="commonContainerFluid">
                    <Row>
                        <Col xs={8}>
                            <a href="/">
                                <img src={mainLogo} className="logo" alt="logo" height={32} />
                            </a>
                        </Col>
                        <Col lg={8} className='hide-lg'>
                            <Searchbar />
                        </Col>
                        <Col xs={16} lg={8}>
                        <Flex justify='space-between' align='center' gap='large'>
                            <Flex justify='flex-start' align='center' gap='large'>
                                <Dropdown
                                    menu={{
                                        items: languages,
                                        onClick,
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            English
                                        </Space>
                                    </a>
                                </Dropdown>
                                <Dropdown
                                    menu={{
                                        items: currencies,
                                        onClick,
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            ₹ INR
                                        </Space>
                                    </a>
                                </Dropdown>
                                </Flex>
                                <Flex justify='flex-end' align='center' gap='large'>
                                    <Dropdown menu={{ items: items }} placement="bottomRight" arrow>
                                        <Avatar
                                            style={{
                                                backgroundColor: '#fde3cf',
                                                color: '#f56a00',
                                            }}
                                            icon={<UserOutlined />}
                                        >
                                            U
                                        </Avatar>
                                    </Dropdown>
                                    <a href="#" onClick={showDrawer}>
                                        <Badge count={5}>
                                            <ShoppingCartOutlined style={{ fontSize: '26px', color: '#08c' }} />
                                        </Badge>
                                    </a>
                                    <a href="#">
                                        <Badge count={5}>
                                            <HeartOutlined style={{ fontSize: '26px', color: '#08c' }} />
                                        </Badge>
                                    </a>
                                </Flex>
                            </Flex>
                        </Col>
                    </Row>
                </div>
            </Card>
            <div className="commonContainerFluid">
                <Row className='pt-3'>
                    <Col lg={4} className='hide-lg' ><MenuCategory /></Col>
                    <Col xs={24} lg={20}><Mainmenu /></Col>
                </Row>
            </div>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}

export default Header