import React, { FC } from 'react';
import Button from '../../atoms/Button';

const FinishButton: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onClick = () => {};

  return (
    <div>
      <Button onClick={onClick} text="完了"></Button>
    </div>
  );
};

export default FinishButton;
