/*
 * @Author: Deshun
 * @Date: 2021-08-16 22:49:00
 * @LastEditors: Deshun
 * @LastEditTime: 2021-08-17 18:23:44
 * @FilePath: \react-demo\src\pages\hooks\useLayoutEffect\index.jsx
 * @Description: React LayoutEffect Hook
 */
import { useState, useEffect, useLayoutEffect } from "react";
import './index.css'
const useLayoutEffectDemo = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (count === 0) {
      console.log("useEffect");
      setCount(10 + Math.random()*200);
    }
  }, [count]);

  useLayoutEffect(() => {
    if (count === 0) {
      console.log("useLayoutEffect");
      setCount(10 + Math.random() * 200);
    }
  }, [count]);

  return (
    <div>
      <h1 onClick={() => setCount(0)}>{count}</h1>
    </div>
  );
};
export default useLayoutEffectDemo;