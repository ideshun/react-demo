<!--
 * @Author: Deshun
 * @Date: 2021-08-05 22:42:32
 * @LastEditors: Deshun
 * @LastEditTime: 2021-08-05 22:42:33
 * @FilePath: \React\react-demo\src\components\useContext\README.md
 * @Description: useContext
-->

### useContext React 上下文 Hooks

和 React 的 `Context` 用法一样：

- 接收一个 `context` 上下文对象（ `React.createContext` 的返回值）并返回该 `context` 的值。
- 当前 `context` 的值由上层组件中距离当前组件 `value` 最近的 `<MyContext.Provider>` 的 prop 决定。
- 当组件上层最近的 `<MyContext.Provider>` 更新时，该 `Hook` 会触发重渲染，并使用最新传递给 `MyContext provider` 的 `context value` 值。
- 即使祖先使用 `React.memo` 或 `shouldComponentUpdate`，`useContext` 也会重新渲染。

**注意：**不要忘记参数 `useContext` 必须是上下文对象本身：

- 正确写法： `useContext(MyContext)`
- 错误写法： `useContext(MyContext.Consumer)`
- 错误写法： `useContext(MyContext.Provider)`

**当 useContext 上下文值发生更改时，组件调用会始终重新渲染。如果重新渲染组件的开销太大，可以使用 memoization 对其进行优化。**

如果你此前已经对 `context` API 比较熟悉，那应该可以理解，`useContext(MyContext)` 相当于 `class` 组件中的：

```
static contextType = MyContext
// 或者
<MyContext.Consumer>
```

`useContext(MyContext)` 只是让你能够读取 `context` 的值以及订阅 `context` 的变化。你仍然需要在上层组件树中使用 `<MyContext.Provider>` 来为下层组件提供 `context`。
