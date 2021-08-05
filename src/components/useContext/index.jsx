import React, { useContext } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
/**
 * useContext React 上下文 Hooks
 */

// 创建 Context 上下文对象
const ThemeContext = React.createContext(themes.light);

// 父组件
export default function UseContext() {
  return (
    // Provider 包裹, 可以传值给后代组件
    // 这里必须是 value, 可以传对象
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 子组件
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

// 孙组件
function ThemedButton() {
  // 读取 context 中的 value 值
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
