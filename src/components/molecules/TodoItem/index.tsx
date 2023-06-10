import React, { FC } from 'react';
import FinishButton from '../FinishButton';

type Props = {
  text: string;
  completeTodo: () => void;
};

const TodoItem: FC<Props> = ({ text, completeTodo }) => {
  return (
    <div className="flex gap-2">
      <p>{text}</p>
      <FinishButton onClick={completeTodo}></FinishButton>
    </div>
  );
};

export default TodoItem;
