import React, { FC } from 'react';
import TodoItem from '../../molecules/TodoItem';

const TodoList: FC = () => {
  const todoItems = [{ text: 'foo' }, { text: 'bar' }, { text: 'baz' }];

  return (
    <div>
      {todoItems.map((todoItem, key) => {
        return <TodoItem key={key} text={todoItem.text}></TodoItem>;
      })}
    </div>
  );
};

export default TodoList;
