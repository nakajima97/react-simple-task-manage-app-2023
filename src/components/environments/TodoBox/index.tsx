import { FC, useState } from 'react';
import TodoTemplate from '../../templates/TodoTemplete';

const TodoBox: FC = () => {
  const [todoItems, setTodoItems] = useState<string[]>([]);

  const addNewTodoToTodoItems = (newTask: string) => {
    setTodoItems([...todoItems, newTask]);
  };

  const completeTodo = (index: number) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoTemplate
      todoItems={todoItems}
      addNewTodoToTodoItems={addNewTodoToTodoItems}
      completeTodo={completeTodo}
    ></TodoTemplate>
  );
};

export default TodoBox;
