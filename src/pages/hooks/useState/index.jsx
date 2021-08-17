/*
 * @Author: Deshun
 * @Date: 2021-08-16 22:49:00
 * @LastEditors: Deshun
 * @LastEditTime: 2021-08-17 18:23:08
 * @FilePath: \react-demo\src\pages\hooks\useState\index.jsx
 * @Description: React State Hook
 */

import React, { Component, useState } from "react";

// 类式组件

// class UseState extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   add = () => {
//     console.log(this);
//     this.setState((state) => ({ count: state.count + 1 }));
//   };
//   render() {
//     return (
//       <div>
//         <h2>当前求和为 {this.state.count}</h2>
//         <button onClick={this.add}>+1</button>
//       </div>
//     );
//   }
// }

// 函数组件
const UseState = () => {
  const [count, setCount] = useState(0);
  function add() {
    setCount(value =>  value + 1);
  };
  return (
    <div>
      <h2>当前求和为 {count}</h2>
      <button onClick={add}>+1</button>
    </div>
  );
};
export default UseState;