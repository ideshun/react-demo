<!--
 * @Author: Deshun
 * @Date: 2021-08-17 14:08:49
 * @LastEditors: Deshun
 * @LastEditTime: 2021-08-17 18:28:19
 * @FilePath: \react-demo\src\pages\hooks\README.md
 * @Description: React Hooks
-->

## React Hooks

+ Hook 是 React 16.8 的新增特性，可以让你在函数组件中使用 state 以及其他的 React 特性。
+ 从概念上讲，React 组件一直更像是函数。而 Hook 则拥抱了函数，同时也没有牺牲 React 的精神原则。

### 优点

1. 代码可读性更强，原本的写法同一块功能的代码逻辑被拆分在了不同的生命周期函数中，不利于维护和迭代，通过 React Hooks 可以将功能代码聚合，方便阅读维护。
2. 不用再去考虑 this 的指向问题。在类式组件中，必须去理解 JavaScript 中 this 的工作方式。
3. 更容易复用代码。
   + 每调用useHook一次都会生成一份独立的状态，这个没有什么黑魔法，函数每次调用都会开辟一份独立的内存空间。
   + 虽然状态(from useState)和副作用(`useEffect`)的存在依赖于组件，但它们可以在组件外部进行定义。这点是`class component`做不到的，你无法在外部声明state和副作用（如`componentDidMount`）。
4. 代码量更少，不需要像 React.Component 那样写太多的模板代码。

### 缺点

1. 响应式的useEffect
2. hooks不擅长异步的代码（旧引用问题）
3. custom hooks有时严重依赖参数的不可变性



## useState

+ `useState` 让函数组件也可以有 `state` 状态，并进行状态数据的读写操作

### 类式组件写法：

```react
import { Component } from "react";

// 类式组件
class UseState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  add = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };
  render() {
    return (
      <div>
        <h2>当前求和为 {this.state.count}</h2>
        <button onClick={this.add}>+1</button>
      </div>
    );
  }
}

export default UseState;
```

### 函数式组件：

```
import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1)
  };
  return (
    <div>
      <h2>当前求和为 {count}</h2>
      <button onClick={add}>+1</button>
    </div>
  );
};

export default UseState;
```

### 语法：声明一个 `state` 变量

```
const [stateName, setStateName] = useState(initValue)
```

等号左边名字并不是 React API 的部分，你可以随意取名字。

这种 JavaScript 语法叫[数组解构](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring)。它意味着我们同时创建了 `fruit` 和 `setFruit` 两个变量，`fruit` 的值为 `useState` 的第一个返回值，`setFruit` 是返回的第二个值。

它等价于下面的代码：

```
  var fruitStateVariable = useState('banana'); // 返回一个有两个元素的数组
  var fruit = fruitStateVariable[0]; // 数组里的第一个值
  var setFruit = fruitStateVariable[1]; // 数组里的第二个值
```

### useState 接受一个参数，状态的初始值。

当我们使用 `useState` 定义 state 变量时候，它返回一个有两个值的数组。使用 `[0]` 和 `[1]` 来访问有点令人困惑，因为它们有特定的含义。这就是我们使用数组解构的原因。

### useState 返回一个数组，数组包含两个元素

1. 第一个值是当前的 state
2. 第二个值是更新 state 的函数

### 更新状态的函数有两种写法：

1. 参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值

```
setStateName(newValue)
```

2. 参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值

```
setStateName(value => newValue)

setStateName((value) => {
  value + 1
})
```

### 使用多个 state 变量

将 state 变量声明为一对 `[something, setSomething]` 也很方便，因为如果我们想使用多个 state 变量，它允许我们给不同的 state 变量取不同的名称：

```
function ExampleWithManyStates() {
  // 声明多个 state 变量
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: '学习 Hook' }]);
}
```

在以上组件中，我们有局部变量 `age`，`fruit` 和 `todos`，并且我们可以单独更新它们：

```
  function handleOrangeClick() {
    // 和 this.setState({ fruit: 'orange' }) 类似
    setFruit('orange');
  }
```

你**不必**使用多个 state 变量。State 变量可以很好地存储对象和数组，因此，你仍然可以将相关数据分为一组。然而，不像 class 中的 `this.setState`，更新 state 变量总是*替换*它而不是合并它。



## useEffect

+ Effect Hook 可以在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
+ React 中的副作用操作:
  + 发ajax请求数据获取
  + 设置订阅 / 启动定时器
  + 手动更改真实DOM

### 类式组件

```
import { Component } from "react";

class useEffectDemo extends Component {
  state = { count: 0 }
  componentDidMount() {
    //会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    //会在更新后会被立即调用。首次渲染不会执行此方法。
    document.title = `You clicked ${this.state.count} times`;
  }
  add = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.add}>Click me</button>
      </div>
    );
  }
}

export default useEffectDemo;
```

### 函数组件

```
import { useEffect, useState } from "react";

const useEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  function add() {
    setCount(count + 1);
    console.log("点击了add()");
  }
  function mcl() {
    setCount2(count2 * 2);
  }
  // console.log("我渲染了");
  useEffect(() => {
    console.log("useEffect渲染了");
  }, [count2]);
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
```

### 语法

```
useEffect(() => {
  // 在此可以执行任何带副作用操作
  // 如果返回一个函数，该函数会在组件卸载和更新时调用
  return () => { // 在组件卸载前执行
  	// 在此做一些收尾工作, 比如清除定时器/取消订阅等
  }
}, [stateValue]) // 如果指定的是[], 回调函数只会在第一次 render() 后执行
```

可以把 useEffect Hook 看做如下三个函数的组合

```
componentDidMount()
componentDidUpdate()
componentWillUnmount() 
```

### 组件卸载前调用

```
function unMount() {
  React.unmountComponentAtNode(document.getElementById("root"));
}
console.log("@");
useEffect(() => {
  // 在此可以执行任何带副作用操作
  let timer = setInterval(() => {
    setCount((count) => count + 1);
  }, 1000);
  return () => {
    // 组件卸载前调用，在此做一些收尾工作, 比如清除定时器/取消订阅等
    console.log("##");
    clearInterval(timer);
  };
}, []); // 不写 [] 全都监控，空数组 谁都不监控，[count] 监控 count 值。
// 在两个时刻输出：1.组件挂载，2.监控的值更新
return (
  <div>
    <h1>useEffect当前值为：{count}</h1>
    <button onClick={unMount}>卸载组件</button>
  </div>
);
```



## useLayoutEffect

其函数签名与 `useEffect` 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，`useLayoutEffect` 内部的更新计划将被同步刷新。

#### 对比

useEffect 在全部渲染完毕后才会执行

useLayoutEffect 会在 浏览器 layout 之后，painting 之前执行

其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后**同步**调用 effect

可以使用它来读取 DOM 布局并同步触发重渲染

在浏览器执行绘制之前 useLayoutEffect 内部的更新计划将被**同步**刷新

**尽可能使用标准的 useEffect 以避免阻塞视图更新**


