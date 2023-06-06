import React, { FC } from 'react';
import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';

const TodoItem: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onChange = () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onClick = () => {};

  return (
    <div>
      <TextInput onChange={onChange} value=""></TextInput>
      <Button onClick={onClick} text="完了"></Button>
    </div>
  );
};

export default TodoItem;
