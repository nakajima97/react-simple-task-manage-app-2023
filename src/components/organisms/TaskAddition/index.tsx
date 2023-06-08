import React, { FC } from 'react';
import TextInput from '../../atoms/TextInput';
import AddButton from '../../molecules/AddButton';

const TaskAddition: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onChange = () => {};

  return (
    <div>
      <TextInput value="aaa" onChange={onChange}></TextInput>
      <AddButton></AddButton>
    </div>
  );
};

export default TaskAddition;
