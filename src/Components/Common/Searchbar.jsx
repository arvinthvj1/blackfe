import React from 'react'
import Search from 'antd/es/input/Search'
import { Select, Space } from 'antd';
import { useSelector } from 'react-redux';




const Searchbar = () => {
  const leftNavdata = useSelector((state) => state.headerData.categories);
  let dataToset = leftNavdata.map((e, index) => {
    return (<Option value={e.id}>{e.name}</Option>);
  });
  const selectBefore = (
    <Select 
    defaultValue=""
    popupMatchSelectWidth={false}
    style={{
      width: 120,
    }}>
      <Option value="">All Categories</Option>
      {dataToset}
    </Select>
  );
  return (
    <Search
      addonBefore={selectBefore}
      placeholder="Enter Keyword Here"
      allowClear
      style={{
        width: 304,
      }}
    />
  )
}

export default Searchbar