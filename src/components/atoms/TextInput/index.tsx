import { FC } from 'react';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: FC<Props> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default TextInput;
