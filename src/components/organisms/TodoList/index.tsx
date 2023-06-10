import React, { FC } from 'react';
import TodoItem from '../../molecules/TodoItem';

type Props = {
  todoItems: string[];
  completeTodo: (index: number) => void;
};

const TodoList: FC<Props> = ({ todoItems, completeTodo }) => {
  const isEmptyTodoItems = todoItems.length === 0;

  const showTodoItems = (isEmptyTodoItems: boolean) => {
    if (isEmptyTodoItems) return <div>タスクが0件です。</div>;

    return (
      <>
        {todoItems.map((todoItem, key) => {
          return (
            <div key={key} className="my-3">
              <TodoItem
                text={todoItem}
                completeTodo={() => {
                  completeTodo(key);
                }}
              ></TodoItem>
            </div>
          );
        })}
      </>
    );
  };

  return <div className="">{showTodoItems(isEmptyTodoItems)}</div>;
};

export default TodoList;
