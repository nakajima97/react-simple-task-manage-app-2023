import React, { FC } from 'react';
import TextInput from '../../atoms/TextInput';
import FinishButton from '../FinishButton';

const TodoItem: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onChange = () => {};

  return (
    <div>
      <TextInput onChange={onChange} value=""></TextInput>
      <FinishButton></FinishButton>
    </div>
  );
};

export default TodoItem;
