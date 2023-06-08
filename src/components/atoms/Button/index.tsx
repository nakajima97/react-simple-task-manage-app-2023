import React, { FC } from 'react';

type Props = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button: FC<Props> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
