import React, { FC } from 'react';
import TodoItem from '../../molecules/TodoItem';

const TodoList: FC = () => {
  const todoItems = [{ text: 'foo' }, { text: 'bar' }, { text: 'baz' }];

  return (
    <div className="">
      {todoItems.map((todoItem, key) => {
        return (
          <div key={key} className="my-3">
            <TodoItem text={todoItem.text}></TodoItem>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
