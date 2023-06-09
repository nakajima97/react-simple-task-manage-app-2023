import { FC, useState } from 'react';
import TodoTemplate from '../../templates/TodoTemplete';

const TodoBox: FC = () => {
  const [todoItems, setTodoItems] = useState<string[]>([]);

  const addNewTodoToTodoItems = (newTask: string) => {
    console.log({ newTask });
    setTodoItems([...todoItems, newTask]);
  };

  return (
    <TodoTemplate
      todoItems={todoItems}
      addNewTodoToTodoItems={addNewTodoToTodoItems}
    ></TodoTemplate>
  );
};

export default TodoBox;
