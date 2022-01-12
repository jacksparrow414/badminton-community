import React from "react";
import HelloWorld from "./pages/HelloWorld";
import Login from "./pages/Login";

export default function App() {
  // return 为什么要加()?
  // 这是因为 JavaScript 会自动给行末添加分号。如果 return 后面换行不加括号就会变成 return;
  // 解答地址：
  // https://blog.csdn.net/weixin_43459866/article/details/117279110
  // https://segmentfault.com/q/1010000009504727###
    return(
      // Fragment 用来一个组件返回多个元素 
      // https://zh-hans.reactjs.org/docs/fragments.html 
      // https://stackoverflow.com/questions/34893506/return-multiple-elements-inside-react-render
      <React.Fragment>
           <HelloWorld />
           <Login />
      </React.Fragment>
      
    );
}
