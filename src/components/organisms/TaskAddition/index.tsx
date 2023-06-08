import React, { FC, useState } from 'react';
import TextInput from '../../atoms/TextInput';
import AddButton from '../../molecules/AddButton';

const TaskAddition: FC = () => {
  const [newTask, setNewTask] = useState(String);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  return (
    <div>
      <TextInput value={newTask} onChange={onChange}></TextInput>
      <AddButton></AddButton>
    </div>
  );
};

export default TaskAddition;
