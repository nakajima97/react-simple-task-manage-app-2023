import React, { FC } from 'react';
import TodoItem from '../../molecules/TodoItem';

type Props = {
  todoItems: string[];
};

const TodoList: FC<Props> = ({ todoItems }) => {
  const isEmptyTodoItems = todoItems.length === 0;

  const showTodoItems = (isEmptyTodoItems: boolean) => {
    if (isEmptyTodoItems) return <div>タスクが0件です。</div>;

    return (
      <>
        {todoItems.map((todoItem, key) => {
          return (
            <div key={key} className="my-3">
              <TodoItem text={todoItem}></TodoItem>
            </div>
          );
        })}
      </>
    );
  };

  return <div className="">{showTodoItems(isEmptyTodoItems)}</div>;
};

export default TodoList;
