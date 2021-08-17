/*
 * @Author: Deshun
 * @Date: 2021-08-16 22:49:00
 * @LastEditors: Deshun
 * @LastEditTime: 2021-08-17 18:26:45
 * @FilePath: \react-demo\src\pages\hooks\useEffect\index.jsx
 * @Description: React Effect Hook
 */
import { Component, useEffect, useState } from "react";

// class useEffectDemo extends Component {
//   state = { count: 0 }
//   componentDidMount() {
//     //会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   componentDidUpdate() {
//     //会在更新后会被立即调用。首次渲染不会执行此方法。
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   add = () => {
//     this.setState({ count: this.state.count + 1 })
//   }
//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.add}>Click me</button>
//       </div>
//     );
//   }
// }

const useEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  function add() {
    setCount(count + 1);
  }
  function mcl() {
    setCount2(count2 * 2);
  }
  // console.log("我渲染了");
  useEffect(() => {
    console.log("useEffect渲染了");
    return () => {
    console.log("卸载了");
      // 在组件卸载前执行
      // 在此做一些收尾工作, 比如清除定时器/取消订阅等
    };
  }, [count]);
  return (
    <div>
      <h2>当前求和为 {count}</h2>
      <h2>当前mcl为 {count2}</h2>
      <button onClick={add}>+1</button>
      <button onClick={mcl}>x2</button>
    </div>
  );
};

export default useEffectDemo;
