/*
 * @Author: Deshun
 * @Date: 2021-08-02 08:55:37
 * @LastEditors: Deshun
 * @LastEditTime: 2021-08-17 16:24:26
 * @FilePath: \react-demo\src\App.js
 * @Description: App "外壳"组件
 */
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import HooksDemo from './pages/hooksDemo'
import Hello from './pages/hello'
import Context from './pages/context'
import UseState from './pages/hooks/useState'
import UseEffect from './pages/hooks/useEffect'
import UseLayoutEffect from './pages/hooks/useLayoutEffect'

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
  const Hooks = () => (
    <Fragment>
      <ul>
        <li>
          <Link to="/useState">useState</Link>
        </li>
        <li>
          <Link to="/useEffect">useEffect</Link>
        </li>
        <li>
          <Link to="/useLayoutEffect">useLayoutEffect</Link>
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
  const useState = () => (
    <Fragment>
      <UseState />
    </Fragment>
  );
  const useEffect = () => (
    <Fragment>
      <UseEffect />
    </Fragment>
  );
  const useLayoutEffect = () => (
    <Fragment>
      <UseLayoutEffect />
    </Fragment>
  );
  return (
    <Router>
      {/* Link 必须在 Router 标签内 */}
      <Link to="/">Home</Link> | <Link to="/hooks">Hooks</Link>
      <Route path="/" exact component={Home} />
      <Route path="/hooksDemo" component={hooksDemo} />
      <Route path="/hello" component={hello} />
      <Route path="/context" component={context} />
      <Route path="/hooks" component={Hooks} />
      <Route path="/useState" component={useState} />
      <Route path="/useEffect" component={useEffect} />
      <Route path="/useLayoutEffect" component={useLayoutEffect} />
    </Router>
  )
}