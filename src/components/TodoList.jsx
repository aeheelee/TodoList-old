import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 32px 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="React 공부하기" done={true} />
      <TodoItem text="빨래하기" done={true} />
      <TodoItem text="운동하기" done={false} />
      <TodoItem text="봄이 산책시키기" done={true} />
    </TodoListBlock>
  )
}

export default TodoList;