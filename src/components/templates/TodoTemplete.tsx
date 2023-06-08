import React, { FC } from 'react';
import TaskAddition from '../organisms/TaskAddition';
import TodoList from '../organisms/TodoList';

const TodoTemplate: FC = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="max-w-screen-md">
        <h1 className="font-bold">タスク管理アプリ</h1>
        <TaskAddition></TaskAddition>
        <TodoList></TodoList>
      </div>
    </div>
  );
};

export default TodoTemplate;
