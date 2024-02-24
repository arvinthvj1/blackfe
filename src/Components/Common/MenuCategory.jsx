import { MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import React from 'react'
import useLeftNavDataHandler from "../../customHooks/Common/leftNavDataHandling";
const MenuCategory = () => {
  const { data } = useLeftNavDataHandler();
  return (
    <div className="commonCategories">
      <Dropdown menu={{ items: data }} placement="bottom" arrow>
        <Button type="primary" block icon={<MenuUnfoldOutlined />}> Categories </Button>
      </Dropdown>
    </div>
  )
}

export default MenuCategory