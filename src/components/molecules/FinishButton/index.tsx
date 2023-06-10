import React, { FC } from 'react';
import Button from '../../atoms/Button';

type Props = {
  onClick: () => void;
};

const FinishButton: FC<Props> = ({ onClick }) => {
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
