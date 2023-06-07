import React, { FC } from 'react';
import Button from '../../atoms/Button';

const AddButton: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  const onClick = () => {};

  return (
    <Button
      text="追加"
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    ></Button>
  );
};

export default AddButton;
