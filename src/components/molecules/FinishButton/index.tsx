import React, { FC } from 'react';
import Button from '../../atoms/Button';

const FinishButton: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onClick = () => {};

  return (
    <div>
      <Button
        onClick={onClick}
        text="完了"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      ></Button>
    </div>
  );
};

export default FinishButton;
