import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 96px auto 32px;
  width: 512px;
  height: 768px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`

function TodoTemplate ({ children }){
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate;