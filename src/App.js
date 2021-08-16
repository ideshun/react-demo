/*
 * @Author: Deshun
 * @Date: 2021-08-02 08:55:37
 * @LastEditors: Deshun
 * @LastEditTime: 2021-08-16 23:13:09
 * @FilePath: \PanSoft\React\react-demo\src\App.js
 * @Description: App "外壳"组件
 */
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import HooksDemo from './pages/hooksDemo'
import Hello from './pages/hello'
import Context from './pages/context'

// 创建并暴露 App 组件
export default function App() {
  const Home = () => (
    /**
     * Fragments
     * React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
     * URL: https://zh-hans.reactjs.org/docs/fragments.html
     */
    <Fragment>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
        <li>
          <Link to="/hooksDemo">hooksDemo</Link>
        </li>
        <li>
          <Link to="/context">Context</Link>
        </li>
      </ul>
    </Fragment>
  );
  const hello = () => (
    <Fragment>
      <Hello />
    </Fragment>
  );
  const hooksDemo = () => (
    <Fragment>
      <HooksDemo />
    </Fragment>
  );
  const context = () => (
    <Fragment>
      <Context />
    </Fragment>
  );
  return (
    <Router>
      <Link to="/">Home</Link>
      <Route path="/" exact component={Home} />
      <Route path="/hooksDemo" component={hooksDemo} />
      <Route path="/hello" component={hello} />
      <Route path="/context" component={context} />
    </Router>
  )
}