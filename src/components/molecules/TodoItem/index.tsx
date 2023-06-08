import React, { FC } from 'react';
import FinishButton from '../FinishButton';

type Props = {
  text: string;
};

const TodoItem: FC<Props> = ({ text }) => {
  return (
    <div className="flex gap-2">
      <p>{text}</p>
      <FinishButton></FinishButton>
    </div>
  );
};

export default TodoItem;
