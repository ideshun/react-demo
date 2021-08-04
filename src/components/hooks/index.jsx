import React, { useState, useEffect, useRef } from 'react'

function StateHook () {
  const [count, setCount] = useState(0)
  function add() {
    // 1.完整写法
    // setCount((count) => {
    //   return count + 1
    // })

    // 2.精简写法
    // setCount(count => count + 1)

    // 3.简单写法
    setCount(count + 1)
  }
  return (
    <div>
      <h1>useState当前值为：{count}</h1>
      <button onClick={add}>点我 + 1</button>
    </div>
  );
}

// useEffect副作用
function EffectHook () {
  const [count, setCount] = useState(0);
  function unMount() {
    React.unmountComponentAtNode(document.getElementById('root'))
  }
  console.log("@")
  useEffect(() => {
    // 在此可以执行任何带副作用操作
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    console.log("@@");
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
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点我 + 1
      </button>
      <button onClick={unMount}>卸载组件</button>
    </div>
  );
}

// useRef 副作用
function RefHook() {
  // 构建 ref 容器
  const myRef = useRef();
  // 弹窗提示输入的值
  function showValue() {
    alert(myRef.current.value);
  }
  return (
    <div>
      <div>
        <h2>useRef</h2>
        <input type="text" ref={myRef} />
      </div>
      <button onClick={showValue}>点我提示输入内容</button>
    </div>
  );
}

export { StateHook, EffectHook, RefHook };