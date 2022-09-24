import React, { useState, useEffect } from 'react';
import './App.css';
import { ITask } from './utils/types/Task';
import { setLocalStorage, getLocalStorage } from './utils/common';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoOptionShow from './components/TodoOptionShow';
import { NAME_LOCAL_STORAGE, STATUS_TASK } from './utils/constants';

function App() {
	const [taskList, setTaskList] = useState<ITask[]>([]);

	useEffect(() => {
		setTaskList(getLocalStorage(NAME_LOCAL_STORAGE));
	}, []);

	/**
	 * Update list Task in local storage and taskList
	 * @param newTaskList
	 */
	const updateNewTaskList = (newTaskList: ITask[]) => {
		setLocalStorage(NAME_LOCAL_STORAGE, newTaskList);
		setTaskList(getLocalStorage(NAME_LOCAL_STORAGE));
	};

	/**
	 * Clear Task Complete
	 */
	const removeTaskByStatus = (statusNeedRemove: boolean) => {
		const newTask: ITask[] = getLocalStorage(NAME_LOCAL_STORAGE).filter((task: ITask) => task.status !== statusNeedRemove);
		updateNewTaskList(newTask);
	};

	return (
		<section className="todoapp">
			<header className="header">
				<h1>todo list</h1>
			</header>
			<TodoForm updateNewTaskList={updateNewTaskList} taskList={taskList} />
			<section id="main">
				<input id="toggleInputAll" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<TodoList updateNewTaskList={updateNewTaskList} taskList={taskList} />
			</section>
			<footer className="footer">
				<span className="todo-count">
					<strong id="todoCount">{taskList?.length ?? 0}</strong> item left
				</span>
				<TodoOptionShow setTaskList={setTaskList} />
				<button className="clear-completed" id="btnClear" onClick={() => removeTaskByStatus(STATUS_TASK.COMPLETE)}>
					Clear completed
				</button>
			</footer>
		</section>
	);
}

export default App;
