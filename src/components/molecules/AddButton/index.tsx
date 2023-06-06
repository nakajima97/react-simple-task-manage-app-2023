import React, { FC } from 'react';
import Button from '../../atoms/Button';

const AddButton: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  const onClick = () => {};

  return <Button text="完了" onClick={onClick}></Button>;
};

export default AddButton;
