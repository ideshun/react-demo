/*
 * @Author: Deshun
 * @Date: 2021-08-02 08:55:37
 * @LastEditors: Deshun
 * @LastEditTime: 2021-08-02 14:20:34
 * @FilePath: \react-demo\src\index.js
 * @Description: 入口文件
 */
// 引入 React 核心库
import React from 'react';
// 引入 ReactDom
import ReactDOM from 'react-dom';
// 引入 App 组件
import App from './App';

// 渲染 App 到页面
ReactDOM.render(<App />, document.getElementById('root'));