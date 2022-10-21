import React, { useState } from "react";
import GlobalStyle from './styles/GlobalStyle';
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  )
}

// const LikeButton = () => { //함수컴포넌트
//   const [liked, setLiked] = React.useState(flase); //구조분해할당
//   if (liked) {
//     return 'You liked this.'
//   }
//   return (
//       <button onClick={() => { setLiked(true); }}>Like</button>
//   )
// }

export default App;
