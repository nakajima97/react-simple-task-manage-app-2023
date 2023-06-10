import React, { FC, useState } from 'react';
import TextInput from '../../atoms/TextInput';
import AddButton from '../../molecules/AddButton';

type Props = {
  handleAddNewTask: (value: string) => void;
};

const TaskAddition: FC<Props> = ({ handleAddNewTask }) => {
  const [newTask, setNewTask] = useState(String);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const onClick = () => {
    setNewTask('');
    handleAddNewTask(newTask);
  };

  return (
    <div className="flex gap-2">
      <TextInput
        value={newTask}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></TextInput>
      <AddButton onClick={onClick}></AddButton>
    </div>
  );
};

export default TaskAddition;
