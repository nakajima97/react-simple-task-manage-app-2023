import React, { FC } from 'react';
import TaskAddition from '../organisms/TaskAddition';
import TodoList from '../organisms/TodoList';

type Props = {
  todoItems: string[];
  addNewTodoToTodoItems: (value: string) => void;
};

const TodoTemplate: FC<Props> = ({ todoItems, addNewTodoToTodoItems }) => {
  return (
    <div className="flex justify-center h-screen">
      <div className="max-w-screen-md">
        <h1 className="font-bold">タスク管理アプリ</h1>
        <TaskAddition handleAddNewTask={addNewTodoToTodoItems}></TaskAddition>
        <TodoList todoItems={todoItems}></TodoList>
      </div>
    </div>
  );
};

export default TodoTemplate;
