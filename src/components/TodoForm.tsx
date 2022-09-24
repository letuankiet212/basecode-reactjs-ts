import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from '../utils/types/Task';
import { STATUS_TASK } from '../utils/constants';

type DataProps = {
	updateNewTaskList: any;
	taskList: ITask[];
};

function TodoForm({ updateNewTaskList, taskList }: DataProps) {
	const [taskNew, setTaskNew] = useState('');

	const clearInput = () => {
		setTaskNew('');
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		const target = e.target as typeof e.target & { description: { value: string } };

		const formRequest = {
			id: uuidv4(),
			description: target.description.value,
			status: STATUS_TASK.ACTIVE,
		};

		updateNewTaskList([...(taskList || []), formRequest]);

		clearInput();
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<input id="newTodo" className="new-todo" name="description" value={taskNew} onChange={(e) => setTaskNew(e.target.value)} placeholder="What needs to be done?" />
		</form>
	);
}

export default TodoForm;
