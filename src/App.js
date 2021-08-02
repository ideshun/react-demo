/*
 * @Author: Deshun
 * @Date: 2021-08-02 08:55:37
 * @LastEditors: Deshun
 * @LastEditTime: 2021-08-02 14:51:28
 * @FilePath: \react-demo\src\App.js
 * @Description: App "外壳"组件
 */
import React, { Component } from 'react'
import Hello from './components/hello'

// 创建并暴露 App 组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}