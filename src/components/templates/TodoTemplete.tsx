import React, { FC } from 'react';
import TaskAddition from '../organisms/TaskAddition';
import TodoList from '../organisms/TodoList';

const TodoTemplate: FC = () => {
  return (
    <>
      <TaskAddition></TaskAddition>
      <TodoList></TodoList>
    </>
  );
};

export default TodoTemplate;
