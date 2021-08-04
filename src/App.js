/*
 * @Author: Deshun
 * @Date: 2021-08-02 08:55:37
 * @LastEditors: Deshun
 * @LastEditTime: 2021-08-04 22:08:03
 * @FilePath: \React\react-demo\src\App.js
 * @Description: App "外壳"组件
 */
import React, { Component } from 'react'
import Hello from './components/hello'
import { StateHook, EffectHook, RefHook } from './components/hooks'

// 创建并暴露 App 组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <StateHook />
        <EffectHook />
        <RefHook />
      </div>
    )
  }
}