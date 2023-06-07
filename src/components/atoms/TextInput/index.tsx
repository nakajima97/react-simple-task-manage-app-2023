import { FC } from 'react';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const TextInput: FC<Props> = ({ value, onChange, className }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default TextInput;
