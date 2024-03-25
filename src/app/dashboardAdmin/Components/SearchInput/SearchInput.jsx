'use client'
import { Space, Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import React from 'react';

const { Search } = Input;



const onSearch = (value, _e, info) => console.log(info?.source, value);

const App = () => (
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
        
      }}
    />
    
  </Space>
);

export default App;