import React from 'react';
import { ITask } from './../utils/types/Task';
import { getLocalStorage } from '../utils/common';
import { NAME_LOCAL_STORAGE, STATUS_TASK } from '../utils/constants';

type DataProps = {
	updateNewTaskList: any;
	taskList: ITask[];
};

function TodoList({ updateNewTaskList, taskList }: DataProps) {
	const onDeleteTask = (id: string | undefined = undefined) => {
		if (!id) return;

		const newList = taskList.filter((task) => task.id !== id);

		updateNewTaskList(newList);
	};

	const changeStatus = (task: ITask) => {
		if (!task) return;

		onDeleteTask(task.id);

		const newTask = { ...task, status: !STATUS_TASK.ACTIVE };

		const preTaskList = getLocalStorage(NAME_LOCAL_STORAGE);

		updateNewTaskList([...preTaskList, newTask]);
	};

	return (
		<ul id="todoListView" className="todo-list">
			{taskList &&
				taskList.map((task, key) => (
					<li className="todoItem" key={key}>
						<input type="checkbox" className="itemList" defaultChecked={!!task.status} onChange={() => changeStatus(task)} />
						<label className="labelContent ">{task.description}</label>
						<button className="remove" onClick={() => onDeleteTask(task.id)} />
					</li>
				))}
		</ul>
	);
}

export default TodoList;
