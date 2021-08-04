import React, { Component } from "react";
import './index.css'

// 创建 Context 上下文对象
const MyContext = React.createContext()
// Provider 包裹, 可以传值给后代组件(只适用于类式组件)
// Provider 供应者,养家者
const { Provider, Consumer } = MyContext
// Consumer 从祖组件获取值(类式组件和函数式组件都适用)
// Consumer 消费者,花钱者
// 在应用开发中一般不用 context , 一般都用它封装 react 插件
export default class A extends Component {
  state = { username: 'Tom', age: 18 }
  render() {
    const { username, age } = this.state
    return (
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名是：{this.state.username}</h4>
        {/* 这里必须是 value, 可以传对象 */}
        {/* <MyContext.Provider> */}
        <Provider value={{ username, age }}>
          <B/>
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="child">
        <h3>我是B组件</h3>
        <h4>我从A组件接收到的用户名是：???</h4>
        <C/>
        <D/>
      </div>
    );
  }
}

class C extends Component {
  // 声明接收 Context （必须）
  static contextType = MyContext
  render() {
    // 读取 context 中的 value 值
    const { username, age } = this.context;
    return (
      <div className="grand">
        <h3>我是C组件</h3>
        <h4>
          我从A组件接收到的用户名是：{username}，年龄是：{age}
        </h4>
      </div>
    );
  }
}
function D() {
  return (
    <div className="grand2">
      <h3>我是D组件</h3>
      <h4>
        我从A组件接收到的用户名是：
        {/* 从 Consumer 接收值 */}
        {/* <MyContext.Consumer> */}
        <Consumer>
          {/* {
          value => {
            return `${value.username}, 年龄是${value.age}`
          }
        } */}
          {(value) => `${value.username}, 年龄是${value.age}`}
        </Consumer>
      </h4>
    </div>
  );
}