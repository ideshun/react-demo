/*
 * @Author: Deshun
 * @Date: 2021-08-16 22:49:26
 * @LastEditors: Deshun
 * @LastEditTime: 2021-08-16 23:10:55
 * @FilePath: \PanSoft\React\react-demo\src\pages\hooksDemo\index.jsx
 * @Description: Hooks Demo
 */
import { StateHook, EffectHook, RefHook } from "../../components/hooks";
import UseContext from "../../components/useContext";

export default function HooksDemo() {
  return (
    <div>
      <StateHook />
      <EffectHook />
      <RefHook />
      <UseContext />
    </div>
  );
}