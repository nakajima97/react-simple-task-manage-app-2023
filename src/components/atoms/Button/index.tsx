import React, { FC } from 'react';

type Props = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<Props> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;